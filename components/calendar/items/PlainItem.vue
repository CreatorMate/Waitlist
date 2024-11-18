<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div class="px-5 py-4 flex flex-col">
        <p>{{calendarItem.title}}</p>
        <PostedBy class="mb-36" :name="calendarItem.postedBy"/>
    </div>
</template>