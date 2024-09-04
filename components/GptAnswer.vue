<script setup lang='ts'>
    import type {ChatMessage} from "~/src/chat/ChatMessage";

    const loading = ref(true)
    const error = ref(false)
    let text = "";
    const speed = 5;
    let observer: ResizeObserver;
    const elementRef = ref<HTMLElement | null>(null);

    const emit = defineEmits(['done', 'resize']);

    const {question} = defineProps<{
        question: ChatMessage
    }>();

    onMounted(async () => {
        if(question.type == 'start') {
            text = question.message
            loading.value = false;
            return;
        };
        const response = await fetch("/api/ask-gpt", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify({
                message: question.message
            })
        })
        //@todo handle error.
        try {
            const data = await response.json();
            if (!data.success || !data.data.choices[0].message.content) {
                error.value = true;
                loading.value = false;
                return;
            }
            text = cleanUp(data.data.choices[0].message.content);
            loading.value = false;
        } catch (err) {
            error.value = true;
        }
    });

    function cleanUp(str: string): string {
        const answerMatch = str.match(/<answer>\s*([\s\S]*?)\s*<\/answer>/);
        const answerContent = answerMatch ? answerMatch[1].trim() : null;

        return answerContent ?? "i'm sorry but i dont have an answer for this right now";
    }

    onMounted(() => {
        observer = new ResizeObserver(() => {
            emit('resize')
        })
        if (elementRef.value) {
            observer.observe(elementRef.value);
        }
    })

    onBeforeUnmount(() => {
        observer.disconnect();
    })

    function done() {
        observer.disconnect()
        emit('done');
    }
</script>

<template>
    <div ref="elementRef">
        <Icon class="text-gray-400" size="30px" v-if="loading" name="eos-icons:three-dots-loading"></Icon>
        <AnimatedText v-else-if="!error" @done="done" :text="text" :speed="speed"></AnimatedText>
        <p v-else class="text-red-500">Something went wrong, please comeback later</p>
    </div>
</template>