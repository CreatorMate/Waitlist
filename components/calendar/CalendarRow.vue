<script setup lang='ts'>
    import {CalendarRowAlignment, type CalendarRowType} from "~/src/calendar/calendar_items";
    import CalendarRowItem from "~/components/calendar/CalendarRowItem.vue";

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
    <div class="w-[350px] sm:w-1/2 lg:w-1/4 2xl:w-1/5 xxl:w-[320px] flex-none flex flex-col ">
        <div class="flex flex-col items-center py-3">
            <p v-if="calendarRow.final" class="text-[12px]">{{formattedDate}}</p>
            <p v-else class="text-[12px]">{{calendarRow.date}}</p>
            <p class="text-[10px] text-white text-opacity-60">{{calendarRow.year}}</p>
        </div>
        <div class="flex flex-1 flex-col p-1.5 border-t border-r border-white border-opacity-20 gap-3"
            :class="{
                'justify-start': calendarRow.postition == CalendarRowAlignment.TOP,
                'justify-between': calendarRow.postition == CalendarRowAlignment.BETWEEN,
                'justify-center': calendarRow.postition == CalendarRowAlignment.CENTER,
                'justify-end': calendarRow.postition == CalendarRowAlignment.END,
            }"
        >
            <CalendarRowItem v-for="calendarItem of calendarRow.items" :calendar-item="calendarItem"></CalendarRowItem>
        </div>

    </div>
</template>