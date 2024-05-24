<script setup lang='ts'>
    import type {QuestionAnswer} from "~/src/questionnaire/QuestionnaireStore";

    const {question} = defineProps<{
        question: QuestionAnswer
    }>();
    const emits = defineEmits(['updateAnswer']);

    let text = ref("");

    watch(text, () => {
        emits('updateAnswer', question.question.id, text.value)
    });

    if(question.answers[0] && question.answers[0].answer) {
        text.value = question.answers[0].answer;
    }
</script>

<template>
    <div class="flex flex-col ">
        <p>{{question.question.question}}</p>
        <p class="text-gray-300">{{question.question.description}}</p>
        <div class="w-[500px]">
            <textarea rows="6" v-model="text" placeholder="answer" class="border-gray-500 border bg-black text-white w-full" />
        </div>
    </div>
</template>