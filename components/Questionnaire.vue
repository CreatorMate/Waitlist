<script setup lang='ts'>
    import {type Questionnaire, QuestionType} from "~/src/SupabaseTypes";
    import {type QuestionAnswer, useQuestionnaireStore} from "~/src/questionnaire/QuestionnaireStore";
    import OpenQuestion from "~/components/questions/OpenQuestion.vue";
    import MultipleChoiceQuestion from "~/components/questions/MultipleChoiceQuestion.vue";
    import AreaQuestion from "~/components/questions/AreaQuestion.vue";
    import {useAccountStore} from "~/src/account/AccountStore";

    const {questionnaire} = defineProps<{
        questionnaire: Questionnaire
    }>();

    const errors = ref<number[]>([]);

    //answer can be text, option id array or the id of an option
    const answers = ref<Map<number, string|number[]|number>>(new Map())

    const questionnaireStore = useQuestionnaireStore();
    const accountStore = useAccountStore();
    const user = useSupabaseUser();

    let questions = ref<QuestionAnswer[]>([]);
    let answeredQuestions: Set<number> = new Set();

    onMounted(async () => {
        if(user.value) {
            questions.value = await questionnaireStore.getQuestions(questionnaire.id, user.value.id);
        }

        for(let question of questions.value) {
            if(question.answers[0]) {
                answeredQuestions.add(question.question.id)
            }
        }
    })

    function update(questionId: number, answer: number|number[]|string|null) {
        if(!answer) {
            answers.value.delete(questionId)
            return;
        }
        answers.value.set(questionId, answer);
    }

    async function save() {
        errors.value = [];
        for(let question of questions.value) {
            if(!answers.value.has(question.question.id)) {
                errors.value.push(question.question.id);
            }
        }

        if(errors.value.length === 0) {
            //save
            for(let question of questions.value) {
                if(answeredQuestions.has(question.question.id)) continue;
                accountStore.points += 5;
            }

            if(!user.value) return;

            await questionnaireStore.saveAnswers(answers.value, user.value.id, questionnaire.id)
            await accountStore.update(user.value.id);
        }
    }

</script>

<template>
    <div class="flex flex-col gap-2 mt-2">
        <h2 class="text-2xl">Questions</h2>
        <div class="flex flex-col" v-for="question of questions">
            <OpenQuestion @update-answer="update" v-if="question.question.type == QuestionType.OPEN" :question="question"></OpenQuestion>
            <MultipleChoiceQuestion @update-answer="update" v-else-if="question.question.type == QuestionType.MULTIPLE_CHOICE" :question="question"></MultipleChoiceQuestion>
            <AreaQuestion @update-answer="update" v-else-if="question.question.type == QuestionType.AREA" :question="question"></AreaQuestion>
            <p class="text-red-500" v-if="errors.includes(question.question.id)">This field is required</p>
        </div>
        <div>
            <button @click="save" class="bg-white py-2 px-4 text-black">
                Save
            </button>
        </div>

    </div>
</template>