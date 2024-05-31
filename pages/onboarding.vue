<script setup lang='ts'>
    import {definePageMeta} from "#imports";
    import type {Ref} from "vue";
    import {Sender} from "~/src/chat/Sender";
    import {OnboardingHandler} from "~/src/onboarding/OnboardingHandler";
    import type {OnboardingMessage} from "~/src/onboarding/OnboardingMessage";
    import {OnboardingMessageType} from "~/src/onboarding/OnboardingMessageType";
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    definePageMeta({
        layout: 'empty'
    })

    let chats: Ref<OnboardingMessage[]> = ref([]);
    let onboardingHandler = new OnboardingHandler();
    let loading = ref(false);
    let id = 0;
    const chatContainer = ref<HTMLElement | null>(null);
    const isAtBottom = ref(true);
    const accountStore = useAccountStore();
    const user = useSupabaseUser();
    const disabled = ref(true);
    const router = useRouter();

    onMounted(async () => {
        if(!user.value) return;
        await accountStore.get(user.value.id);
        if(accountStore.completedOnboarding || (accountStore.contentType && accountStore.creatorType && accountStore.avatar_url)) {
            await router.replace('/home');
        }
        let firstQuestion = onboardingHandler.getQuestionByStep();
        chats.value.push({
            message: firstQuestion,
            sender: Sender.CREATORMATE,
            type: OnboardingMessageType.AI,
            id: nextID()
        });
        onboardingHandler.chatHistory.push({
            question: firstQuestion,
            answer: ""
        });
    });

    useHead({
        title: 'getting to know you - creatormate'
    })

    function onScroll () {
        if (chatContainer.value) {
            const threshold = 100; // px from the bottom to consider "at bottom"
            const position = chatContainer.value.scrollTop + chatContainer.value.clientHeight;
            const height = chatContainer.value.scrollHeight;
            isAtBottom.value = position >= height - threshold;
        }
    }

    function scrollToBottom() {
        if(chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    }
    function resize () {
        if(isAtBottom.value) {
            scrollToBottom();
        }
    }
    async function keydown (event: KeyboardEvent, message: string) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            await handleMessage(message);
        }
    }

    function nextID(): number {
        return id++;
    }

    async function handleMessage(message: string) {
        if(message.length == 0) return;
        chats.value.push({
            sender: Sender.USER,
            message: message,
            type: OnboardingMessageType.USER,
            id: nextID()
        });
        await getResponse(message);
    }

    async function getResponse(message: string) {
        disabled.value = true;
        loading.value = true;
        let newId = nextID();
        const response = await onboardingHandler.answer(message);
        let type: OnboardingMessageType;
        switch (response.category) {
            case "avatar": {
                type = OnboardingMessageType.PICTURE
                break;
            }
            case "error": {
                type = OnboardingMessageType.ERROR
                break;
            }
            default: {
                type = OnboardingMessageType.AI
                break;
            }
        }
        chats.value.push({
            sender: Sender.CREATORMATE,
            message: response.question,
            type: type,
            id: newId
        });
        loading.value = false;
        await focus();
    }

    async function savedSocials() {
        chats.value.push({
            sender: Sender.USER,
            message: "I inserted my socials",
            type: OnboardingMessageType.USER,
            id: nextID()
        });
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
        chats.value.push({
            sender: Sender.CREATORMATE,
            message: "sweet. hit the button below to wrap things up. you can tweak your info anytime if you need to.",
            type: OnboardingMessageType.LAST,
            id: nextID()
        });
    }

    async function uploaded() {
        chats.value.push({
            sender: Sender.USER,
            message: "I uploaded my profile picture",
            type: OnboardingMessageType.USER,
            id: nextID()
        });
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
        chats.value.push({
            sender: Sender.CREATORMATE,
            message: `avatar looks awesome, ${onboardingHandler.name}! you're gonna stand out for sure.

            last bit - where are you sharing your stuff right now?`,
            type: OnboardingMessageType.SOCIALS,
            id: nextID()
        });
    }

    async function done() {
        disabled.value = false
        await focus();
    }

    async function save() {
        await onboardingHandler.save();
    }

    async function focus() {
        await new Promise(resolve => setTimeout(resolve, 100));
        //@ts-ignore
        document.getElementById('onboarding_chat_input').focus();
    }
</script>

<template>
    <div class="flex flex-col min-h-full items-center relative">
        <div ref="chatContainer" @scroll="onScroll" class="overflow-y-auto overflow-x-hidden w-full min-h-full flex items-center flex-col">
            <header class="p-6 md:p-10 w-full top-0 sticky flex justify-center bg-black bg-opacity-60 backdrop-blur-[8px]">
                <img alt="creator mate logo"  src="/creatormate.svg">
            </header>
            <div class="px-6 md:px-0 w-full md:w-[500px] flex flex-col pt-6 md:pt-12 flex-grow">
                <div class="h-full flex flex-col gap-6 mb-12 xs:mb-0">
                    <div :key="chatMessage.id" v-for="chatMessage of chats" class="flex flex-col">
                        <p class="text-white text-opacity-60 pb-2">{{chatMessage.sender}}</p>
                        <OnboardingQuestion @saved_socials="savedSocials" @save="save" @uploaded="uploaded" @resize="resize()" @done="done" :question="chatMessage"></OnboardingQuestion>
                    </div>
                    <div v-if="loading" class="flex flex-col">
                        <p class="text-gray-400">{{Sender.CREATORMATE}}</p>
                        <Icon class="text-gray-400" size="30px" name="eos-icons:three-dots-loading"></Icon>
                    </div>
                </div>
            </div>
            <ChatInput :disabled="disabled || onboardingHandler.blocked.value" @on-keydown="keydown" @send="handleMessage"></ChatInput>
        </div>
    </div>
</template>