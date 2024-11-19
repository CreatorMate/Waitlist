<script setup lang='ts'>
    import {type CalendarItem, CalendarItemType} from "~/src/calendar/calendar_items";
    import GallaryItem from "~/components/calendar/items/GallaryItem.vue";
    import FotoItem from "~/components/calendar/items/FotoItem.vue";
    import PlainItem from "~/components/calendar/items/PlainItem.vue";
    import StoryItem from "~/components/calendar/items/StoryItem.vue";
    import ShareItem from "~/components/calendar/items/ShareItem.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();

    const item = ref<HTMLElement | null>(null);
    const targetIsVisible = useElementVisibility(item);
    const loaded = ref(false);

    watch(targetIsVisible, async (newValue) => {
        if(newValue) {
            loaded.value = true;
        }
    })
</script>

<template>
    <div
        ref="item"
        class="item rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative"
        :class="[
  { 'popup-animation': targetIsVisible || loaded },
  `bg-[${calendarItem.color}]`
]">
        <GallaryItem v-if="calendarItem.type == CalendarItemType.GALLARY" :calendar-item></GallaryItem>
        <FotoItem v-if="calendarItem.type == CalendarItemType.FOTO" :calendar-item></FotoItem>
        <PlainItem v-if="calendarItem.type == CalendarItemType.PLAIN" :calendar-item></PlainItem>
        <StoryItem v-if="calendarItem.type == CalendarItemType.STORY" :calendar-item></StoryItem>
        <ShareItem v-if="calendarItem.type == CalendarItemType.SHARE" :calendar-item></ShareItem>
    </div>
</template>

<style scoped>
.item {
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s ease;
}

.item.popup-animation {
    opacity: 1;
    transform: scale(1);
}
</style>