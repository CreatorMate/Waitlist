<script setup lang='ts'>
    import {CalendarRowAlignment, type CalendarRowType} from "~/src/calendar/calendar_items";
    import SocialItems from "~/components/calendar/items/SocialItems.vue";

    const {calendarRow} = defineProps<{
        calendarRow: CalendarRowType
    }>()

    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
    }).format(date);
</script>

<template>
    <div class="w-[60vw] sm:w-1/2 lg:w-1/4 2xl:w-1/5 flex-none flex flex-col h-full text-black">
        <div class="flex flex-col items-center py-3">
            <p v-if="calendarRow.final" class="font-bold">{{ formattedDate }}</p>
            <p v-else class="text-sm font-bold">{{ calendarRow.date }}</p>
            <p class="text-xs text-[#474747]">{{ calendarRow.year }}</p>
        </div>
        <div class="flex flex-grow h-full flex-col p-1.5 border-t border-r border-white border-opacity-20 gap-3"
             :class="{
                'justify-start': calendarRow.postition == CalendarRowAlignment.TOP,
                'justify-between': calendarRow.postition == CalendarRowAlignment.BETWEEN,
                'justify-center': calendarRow.postition == CalendarRowAlignment.CENTER,
                'justify-end': calendarRow.postition == CalendarRowAlignment.END,
            }"
        >
            <CalendarRowItem v-for="calendarItem of calendarRow.items" :calendar-item="calendarItem"></CalendarRowItem>
            <SocialItems v-if="calendarRow.socials"></SocialItems>
        </div>

    </div>
</template>

<!--<template>-->
<!--    <div class="w-[60vw] sm:w-1/2 lg:w-1/4 2xl:w-1/5 flex-none flex flex-col mr-2 h-full bg-green-500 justify-between">-->
<!--        <div class="flex flex-col items-center py-3">-->
<!--            <p v-if="calendarRow.final" class="">{{ formattedDate }}</p>-->
<!--            <p v-else class="text-sm">{{ calendarRow.date }}</p>-->
<!--            <p class="text-xs text-white text-opacity-60">{{ calendarRow.year }}</p>-->
<!--        </div>-->
<!--        <div class="h-[40vh] bg-blue-600">-->
<!--            <NuxtImg class="w-full object-cover h-full" :src="`calandar/boni_joins.png`"></NuxtImg>-->
<!--        </div>-->
<!--        <div class="h-[40vh] bg-red-600"></div>-->
<!--    </div>-->
<!--</template>-->