<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div>
        <NuxtImg class="w-full" :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
    </div>
</template>