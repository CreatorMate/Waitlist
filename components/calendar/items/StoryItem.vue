<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="relative">
        <div class="mb-6 px-5 py-6 absolute top-0">
            <PostedBy :calendar-item/>
        </div>
        <NuxtImg class="w-full object-cover h-[200px] lg:h-auto" :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
    </div>
</template>