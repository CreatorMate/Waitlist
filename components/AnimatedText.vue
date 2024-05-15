<script setup lang='ts'>
    const {text, speed} = defineProps<{
        text: string,
        speed: number
    }>();
    const emit = defineEmits(['done']);

    const animatedText = ref("");
    const loading = ref(true);

    async function animateText() {
        let index = 0;
        await setTimeout(() => {
            loading.value = false;
            const interval = setInterval(() => {
                if(index < text.length) {
                    animatedText.value += text[index];
                    index++;
                } else {
                    clearInterval(interval);
                    emit('done');
                }
            }, speed);
        }, 3000)
    }

    onMounted(async() => await animateText());
</script>

<template>
    <Icon class="text-gray-400" size="30px" v-if="loading" name="eos-icons:three-dots-loading"></Icon>
    <p v-else>{{animatedText}}</p>
</template>