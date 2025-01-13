<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";
    import {getSupabaseImage} from "~/src/utils/SupabaseStorage";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();

    const image = getSupabaseImage('calendar_images', calendarItem.images[0]);
</script>

<template>
    <div class="relative flex flex-col flex-grow h-full rounded-2xl">
        <div class="mb-6 px-5 py-6 absolute top-0">
            <PostedBy :calendar-item/>
        </div>
        <NuxtImg width="700" height="700" class="w-full object-cover h-full rounded-2xl" :src="image"></NuxtImg>
    </div>
</template>

<style>
.cover_img {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.00) 100%), lightgray 50% / cover no-repeat;

}
</style>