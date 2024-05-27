<script setup lang='ts'>
    const emit = defineEmits(['ask'])
    const questions = [
        "what is creator mate?",
        "who is on the creator mate team?",
        "who did the logo design?",
        "how will creator mate help me?",
        "Who is building creator mate?",
        "how did they raise $200k?",
        "who founded creator mate",
    ]
</script>

<template>
    <div class="flex justify-center flex-wrap gap-2 px-32 mt-6">
        <button @click="emit('ask', question)" class="rounded-full px-4 py-1 border border-gray-400 text-gray-100" v-for="question of questions">{{question}}</button>
    </div>
</template>