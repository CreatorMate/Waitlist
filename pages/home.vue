<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {ChatMessage} from "~/src/chat/ChatMessage";
    import {Sender} from "~/src/chat/Sender";
    import {SupabaseTables} from "~/src/SupabaseTypes";
    import {useAccountStore} from "~/src/account/AccountStore";
    import ExampleQuestions from "~/components/chat/ExampleQuestions.vue";
    import {useToastStore} from "~/src/toast/ToastStore";
    import {ToastType} from "~/src/toast/ToastType";

    const chatContainer = ref<HTMLElement | null>(null);
    const isAtBottom = ref(true);
    const supabase = useSupabaseClient();
    const account = useAccountStore();
    const toastStore = useToastStore();

    let interval = 60 * 1000;
    let messagesPerMin = 10;
    let intervalId: any = null;
    let remaining = ref(messagesPerMin);

    let chats: Ref<ChatMessage[]> = ref([]);

    const disabled = ref(false)

    useHead({
        title: 'discover - creatormate'
    })

    onMounted(async () => {
        chats.value.push({
            message: "welcome, what would you like to know about creator mate?",
            sender: Sender.CREATORMATE,
            type: 'start'
        });
        intervalId = setInterval(() => {
            remaining.value = messagesPerMin;
        }, interval)
    });

    onUnmounted(() => {
        clearInterval(intervalId)
    })

    async function keydown(event: KeyboardEvent, message: string) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            await handleMessage(message);
        }
    }

    async function ask(question: string) {
        await handleMessage(question);
    }

    async function handleMessage(message: string) {
        if (message.length == 0) return;
        if(remaining.value < 1) {
            toastStore.addToast("Looks like you are sending alot of questions, please wait a bit", ToastType.ERROR);
            return;
        }
        remaining.value--;
        chats.value.push({
            sender: Sender.USER,
            message: message,
            type: ''
        })
        disabled.value = true;
        let copy = message;
        message = "";
        await getReply(copy);
        //@ts-ignore
        await supabase.from(SupabaseTables.ChatHistory).insert({
            user_id: account.userId,
            question: copy
        });
    }

    async function getReply(message: string) {
        chats.value.push({
            sender: Sender.CREATORMATE,
            message: message,
            type: ''
        })
    }

    function onScroll() {
        if (chatContainer.value) {
            const threshold = 100; // px from the bottom to consider "at bottom"
            const position = chatContainer.value.scrollTop + chatContainer.value.clientHeight;
            const height = chatContainer.value.scrollHeight;
            isAtBottom.value = position >= height - threshold;
        }
    }

    function scrollToBottom() {
        if (chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    }

    function resize() {
        if (isAtBottom.value) {
            scrollToBottom();
        }
    }

    watch(disabled, async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        //@ts-ignore
        document.getElementById('onboarding_chat_input').focus();
    })
</script>

<template>
    <section class="flex flex-col min-h-full items-center relative">
        <div ref="chatContainer" @scroll="onScroll"
             class="overflow-y-auto overflow-x-hidden w-full min-h-full flex items-center flex-col">
            <TopBar/>
            <div class="px-6 md:px-0 w-full md:w-[500px] flex flex-col pt-12 flex-grow">
                <div v-if="chats.length != 0" class="h-full flex flex-col gap-6">
                    <div :key="chatMessage.message" v-for="chatMessage of chats" class="flex flex-col">
                        <p class="text-gray-400 text-lg">{{ chatMessage.sender }}</p>
                        <GptAnswer @resize="resize()" @done="disabled = false" :question="chatMessage"
                                   v-if="chatMessage.sender == Sender.CREATORMATE"></GptAnswer>
                        <p v-else>{{ chatMessage.message }}</p>
                        <div v-if="chats.length < 2" class="w-full xl:w-2/3 flex md:hidden">
                            <ExampleQuestions @ask="ask"></ExampleQuestions>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="chats.length < 2" class="w-full xl:w-2/3 hidden md:flex">
                <ExampleQuestions @ask="ask"></ExampleQuestions>
            </div>
            <ChatInput :disabled="disabled" @on-keydown="keydown" @send="handleMessage"></ChatInput>
        </div>
    </section>
</template>