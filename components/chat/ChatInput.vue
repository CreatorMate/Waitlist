<script setup lang='ts'>
    const props = defineProps<{
        disabled: boolean,
    }>()
    const {disabled} = toRefs(props);
    const emits = defineEmits(["onKeydown", "send", "update:modelValue"]);

    function keyDown(event: KeyboardEvent) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            send();
        }
    }

    function send(){
        if(value.length == 0) return;
        emits('send', value);
        value = "";
    }
    let value = "";
</script>

<template>
    <div :class="{
           'border-zinc-600': disabled
       }" class="w-[500px] flex border-gray-500 absolute bottom-6 border items-center pr-4">
               <textarea
                   v-model="value"
                   @keydown="keyDown"
                   :disabled="disabled"
                   rows="1"
                   placeholder="Ask me a question"
                   type="text"
                   :class="{
                       'placeholder-zinc-600': disabled
                   }"
                   class=" bg-black px-4 py-2 flex flex-grow resize-none outline-0 "/>
        <Icon @click="emits('send', value)" size="20px" class="text-gray-500 cursor-pointer hover:text-gray-300" name="heroicons:arrow-right-16-solid"></Icon>
    </div>
</template>