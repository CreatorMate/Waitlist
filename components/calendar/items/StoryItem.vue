<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="relative flex flex-col flex-grow h-full rounded-2xl">
        <div class="mb-6 px-5 py-6 absolute top-0">
            <PostedBy :calendar-item/>
        </div>
        <NuxtImg class="w-full object-cover h-full rounded-2xl" :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[0]}`"></NuxtImg>
    </div>
</template>

<style>
.cover_img {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), lightgray 50% / cover no-repeat;

}
</style>