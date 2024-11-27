<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="py-5 px-2.5 h-full w-full">
        <div class="px-2 mb-4">
            <PostedBy :calendar-item />
        </div>
        <NuxtImg class="w-full object-cover max-h-full max-w-full" :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[0]}`"></NuxtImg>
    </div>
</template>