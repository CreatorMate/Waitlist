<script setup lang='ts'>
    import type {Ref} from "vue";
    import AnimatedText from "~/components/AnimatedText.vue";
    enum Sender {
        USER = "User", CREATORMATE = "Creator mate"
    }
    type ChatMessage = {
        sender: Sender
        message: string
    }

    const speed = 5;

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
        chat = "";
        await getReply();
    }

    async function getReply() {
        chats.value.push({
            sender: Sender.CREATORMATE,
            message: "animating this story will take a long time lets see how well it will display this message, " +
                "" +
                "animating this story will take a long time lets see how well it will display this message,animating this story will take a long time lets see how well it will display this message,animating this story will take a long time lets see how well it will display this message,animating this story will take a long time lets see how well it will display this message,"
        })
    }

    let chat = "";
</script>

<template>
   <div class="flex flex-col h-full items-center relative pb-20">
       <div class="overflow-y-auto overflow-x-hidden w-full h-full flex justify-center">
           <div class="w-[500px]">
               <div v-if="chats.length != 0" class="h-full flex flex-col gap-6">
                   <div :key="chatMessage.message" v-for="chatMessage of chats" class="flex flex-col">
                       <p class="text-gray-400 text-lg">{{chatMessage.sender}}</p>
                       <AnimatedText @done="disabled = false" :speed="speed" :text="chatMessage.message" v-if="chatMessage.sender == Sender.CREATORMATE"></AnimatedText>
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