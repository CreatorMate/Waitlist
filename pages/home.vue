<script setup lang='ts'>
    import type {Ref} from "vue";
    import AnimatedText from "~/components/AnimatedText.vue";
    import type {ChatMessage} from "~/src/chat/ChatMessage";
    import {Sender} from "~/src/chat/Sender";
    import {SupabaseTables} from "~/src/SupabaseTypes";
    import {useAccountStore} from "~/src/account/AccountStore";


    const chatContainer = ref<HTMLElement | null>(null);
    const isAtBottom = ref(true);
    const supabase = useSupabaseClient();
    const account = useAccountStore();

    let chats: Ref<ChatMessage[]> = ref([
    ]);

    const disabled = ref(false)
    async function keydown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            await handleMessage();
        }
    }

    async function handleMessage() {
        if(chat.length == 0) return;
        chats.value.push({
            sender: Sender.USER,
            message: chat
        })
        disabled.value = true;
        let copy = chat;
        chat = "";
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
            message: message
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
        if(chatContainer.value) {
            chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
        }
    }

    function resize() {
        if(isAtBottom.value) {
            scrollToBottom();
        }
    }

    let chat = "";
</script>

<template>
   <div class="flex flex-col h-full items-center relative pb-20">
       <div ref="chatContainer" @scroll="onScroll" class="overflow-y-auto overflow-x-hidden w-full h-full flex justify-center">
           <div class="w-[500px]">
               <div v-if="chats.length != 0" class="h-full flex flex-col gap-6">
                   <div :key="chatMessage.message" v-for="chatMessage of chats" class="flex flex-col">
                       <p class="text-gray-400 text-lg">{{chatMessage.sender}}</p>
                       <GptAnswer @resize="resize()" @done="disabled = false" :question="chatMessage.message" v-if="chatMessage.sender == Sender.CREATORMATE"></GptAnswer>
                       <p v-else>{{chatMessage.message}}</p>
                   </div>
               </div>
               <div v-else>
                   Ask a question to start.
               </div>
           </div>
       </div>
       <div :class="{
           'border-zinc-600': disabled
       }" class="w-[500px] flex border-gray-500 absolute bottom-0 border items-center pr-4">
               <textarea
                   @keydown="keydown"
                   :disabled="disabled"
                   rows="1"
                   placeholder="Ask me a question"
                   v-model="chat"
                   type="text"
                   :class="{
                       'placeholder-zinc-600': disabled
                   }"
                   class=" bg-black px-4 py-2 flex flex-grow resize-none outline-0 "/>
           <Icon @click="handleMessage" size="20px" class="text-gray-500 cursor-pointer hover:text-gray-300" name="heroicons:arrow-right-16-solid"></Icon>
       </div>
   </div>
</template>