<script setup lang='ts'>
    import {type QuestionAnswer, useQuestionnaireStore} from "~/src/questionnaire/QuestionnaireStore";
    import type {QuestionOption} from "~/src/SupabaseTypes";

    const {question} = defineProps<{
        question: QuestionAnswer
    }>();
    const emits = defineEmits(['updateAnswer']);

    const questionnaireStore = useQuestionnaireStore();

    let questionOptions: QuestionOption[] = await questionnaireStore.getQuestionOptions(question.question.id);

    const selectedCountries = ref<number[]>([]);

    watch(selectedCountries, () => {
        console.log("change")
        update();
    })

    function update() {
        if(selectedCountries.value.length == 0) {
            emits('updateAnswer', question.question.id, null);
            return;
        }
        emits('updateAnswer', question.question.id, selectedCountries.value);
    }

    function checked(questionId: number): boolean {
        for(let answer of question.answers) {
            if(questionId == answer.question_id) return true;
        }
        return false;
    }

    onMounted(() => {
        for(let answer of question.answers) {
            if(!answer.option_id) continue;
            selectedCountries.value.push(answer.option_id)
        }
        update();
    })

</script>

<template>
    <div class="flex flex-col ">
        <p>{{question.question.question}}</p>
        <p class="text-gray-300">{{question.question.description}}</p>
        <div class="flex flex-col gap-2">
            <div v-for="questionOption of questionOptions" class="flex gap-2">
                <input :checked="checked(questionOption.id)" type="checkbox" :name="question.question.question" :id="question.question.question + questionOption.id" :value="questionOption.id" v-model="selectedCountries"/>
                <label :for="question.question.question + questionOption.id">{{questionOption.option}}</label>
            </div>
        </div>
    </div>
</template>