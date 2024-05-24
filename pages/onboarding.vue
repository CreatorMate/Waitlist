<script setup lang='ts'>
    import {definePageMeta} from "#imports";
    import OnboardingTop from "~/components/onboarding/OnboardingTop.vue";
    import type {Ref} from "vue";
    import {Sender} from "~/src/chat/Sender";
    import {OnboardingHandler} from "~/src/onboarding/OnboardingHandler";
    import type {OnboardingMessage} from "~/src/onboarding/OnboardingMessage";
    import {OnboardingMessageType} from "~/src/onboarding/OnboardingMessageType";

    definePageMeta({
        layout: 'empty'
    })

    let chats: Ref<OnboardingMessage[]> = ref([]);
    let onboardingHandler = new OnboardingHandler();
    let loading = ref(false);
    let id = 0;
    const chatContainer = ref<HTMLElement | null>(null);
    const isAtBottom = ref(true);

    const disabled = ref(true);

    onMounted(() => {
        let firstQuestion = onboardingHandler.getQuestionByStep();
        chats.value.push({
            message: firstQuestion,
            sender: Sender.CREATORMATE,
            type: OnboardingMessageType.PICTURE,
            id: nextID()
        });
        onboardingHandler.chatHistory.push({
            question: firstQuestion,
            answer: ""
        });
    });

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
            message: "okay i think i've got everything i need to get you applied for the waiting list. \n\n" +
                "Looks great. if you need to change anything later you can do so in the profile page. Hit the join now button to get join your creative journey!",
            type: OnboardingMessageType.LAST,
            id: nextID()
        });
    }

    async function save() {
        await onboardingHandler.save();
    }
</script>

<template>
    <div class="flex flex-col h-full items-center relative pb-32 text-sm">
        <div ref="chatContainer" @scroll="onScroll" class="overflow-y-auto overflow-x-hidden w-full h-full flex justify-center">
            <div class="w-[500px] flex flex-col pt-6">
                <OnboardingTop :onboarding-handler="onboardingHandler"></OnboardingTop>
                <div class="h-full flex flex-col gap-6 pt-10">
                    <div :key="chatMessage.id" v-for="chatMessage of chats" class="flex flex-col">
                        <p class="text-gray-400">{{chatMessage.sender}}:</p>
                        <OnboardingQuestion @save="save" @uploaded="uploaded" @resize="resize()" @done="disabled = false" :question="chatMessage"></OnboardingQuestion>
                    </div>
                    <div v-if="loading" class="flex flex-col">
                        <p class="text-gray-400">{{Sender.CREATORMATE}}:</p>
                        <Icon class="text-gray-400" size="30px" name="eos-icons:three-dots-loading"></Icon>
                    </div>
                </div>
            </div>
        </div>
        <ChatInput :disabled="disabled" @on-keydown="keydown" @send="handleMessage"></ChatInput>
    </div>
</template>