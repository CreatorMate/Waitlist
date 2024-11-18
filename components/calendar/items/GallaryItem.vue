<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="relative h-full">
        <NuxtImg class="absolute rotate-2 rounded w-full top-0 z-10" :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
        <NuxtImg class="absolute -rotate-2 rounded w-full top-0 z-10" :src="`calandar/${calendarItem.images[1]}`"></NuxtImg>
        <NuxtImg class="absolute rounded w-full z-50" :src="`calandar/${calendarItem.images[2]}`"></NuxtImg>
    </div>
</template>