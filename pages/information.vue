<script setup lang='ts'>
    import {useQuestionnaireStore} from "~/src/questionnaire/QuestionnaireStore";
    import Questionnaire from "~/components/Questionnaire.vue";

    const questionnaireStore = useQuestionnaireStore();
    const questionnaires = await questionnaireStore.getQuestionnaires();
    const selectedIndex = 0;

</script>

<template>
    <div class="flex gap-2">
        <p class="px-4 py-2 border border-white rounded-full" v-for="questionnaire of questionnaires">{{questionnaire.name}}</p>
    </div>
    <div v-if="questionnaires.length != 0">
        <questionnaire :questionnaire="questionnaires[selectedIndex]"></questionnaire>
    </div>
</template>