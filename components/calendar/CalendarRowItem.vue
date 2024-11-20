<script setup lang='ts'>
    import {type CalendarItem, CalendarItemHoverAction, CalendarItemType} from "~/src/calendar/calendar_items";
    import GallaryItem from "~/components/calendar/items/GallaryItem.vue";
    import FotoItem from "~/components/calendar/items/FotoItem.vue";
    import PlainItem from "~/components/calendar/items/PlainItem.vue";
    import StoryItem from "~/components/calendar/items/StoryItem.vue";
    import ShareItem from "~/components/calendar/items/ShareItem.vue";
    import StoryHover from "~/components/calendar/StoryHover.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();

    const itemActive = ref(false);

    const item = ref<HTMLElement | null>(null);
    const targetIsVisible = useElementVisibility(item);
    const loaded = ref(false);

    watch(targetIsVisible, async (newValue) => {
        if (newValue) {
            loaded.value = true;
        }
    })

    function handleClick() {
        if (calendarItem.hover == CalendarItemHoverAction.STORY) {
            itemActive.value = !itemActive.value
        }

        if(calendarItem.link) {
            window.open(calendarItem.link, '_blank')
        }
    }

    function handleClickOutside() {
        itemActive.value = false;
    }
</script>

<template>
    <div ref="item" class="item" :class="{ 'popup-animation': targetIsVisible || loaded },{ 'z-50': itemActive }">
        <div
            @click="handleClick()"
            class="rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10"
            :class="[


  `bg-[${calendarItem.color}]`
]">
            <GallaryItem v-if="calendarItem.type == CalendarItemType.GALLARY" :calendar-item></GallaryItem>
            <FotoItem v-if="calendarItem.type == CalendarItemType.FOTO" :calendar-item></FotoItem>
            <PlainItem v-if="calendarItem.type == CalendarItemType.PLAIN" :calendar-item></PlainItem>
            <StoryItem v-if="calendarItem.type == CalendarItemType.STORY" :calendar-item></StoryItem>
            <ShareItem v-if="calendarItem.type == CalendarItemType.SHARE" :calendar-item></ShareItem>
        </div>
        <Transition>
            <StoryHover @click.stop v-if="calendarItem.hover == CalendarItemHoverAction.STORY && itemActive"
                        @click-outside="handleClickOutside()" :calendar-item></StoryHover>
        </Transition>
    </div>
</template>

<style scoped>
.item {
    opacity: 0;
    transform: scale(0);
    transition: all 0.5s ease;
}

.item:hover {
    transform: scale(1.05); /* Slightly increase scale on hover */
    transition: transform 0.2s ease; /* Faster transition for hover */
}

.item.popup-animation {
    opacity: 1;
    transform: scale(1);
}

.v-enter-active,
.v-leave-active {
    transform: scale(1);
    transition: all 0.2s ease;
    opacity: 1;

}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: scale(0);
    transition: all 0.2s ease;
}

</style>