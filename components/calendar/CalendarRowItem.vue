<script setup lang='ts'>
    import {type CalendarItem, CalendarItemType} from "~/src/calendar/calendar_items";
    import GallaryItem from "~/components/calendar/items/GallaryItem.vue";
    import FotoItem from "~/components/calendar/items/FotoItem.vue";
    import PlainItem from "~/components/calendar/items/PlainItem.vue";
    import StoryItem from "~/components/calendar/items/StoryItem.vue";
    import ShareItem from "~/components/calendar/items/ShareItem.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()
</script>

<template>
    <div
        class="h-auto rounded-2xl hover:duration-100 hover:scale-95 transition-transform"
        :class="'bg-[' + calendarItem.color +']'"
    >
        <GallaryItem v-if="calendarItem.type == CalendarItemType.GALLARY" :calendar-item></GallaryItem>
        <FotoItem v-if="calendarItem.type == CalendarItemType.FOTO" :calendar-item></FotoItem>
        <PlainItem v-if="calendarItem.type == CalendarItemType.PLAIN" :calendar-item></PlainItem>
        <StoryItem v-if="calendarItem.type == CalendarItemType.STORY" :calendar-item></StoryItem>
        <ShareItem v-if="calendarItem.type == CalendarItemType.SHARE" :calendar-item></ShareItem>
    </div>
</template>