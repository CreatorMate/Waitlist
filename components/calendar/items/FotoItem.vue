<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="py-5 px-2.5">
        <div class="px-2 mb-4">
            <PostedBy :calendar-item />
        </div>
        <NuxtImg class="w-full h-[150px] object-cover lg:h-auto" :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
    </div>
</template>