<script setup lang='ts'>
    import {type CalendarItem, CalendarItemHoverAction, CalendarItemType} from "~/src/calendar/calendar_items";
    import GallaryItem from "~/components/calendar/items/GallaryItem.vue";
    import FotoItem from "~/components/calendar/items/FotoItem.vue";
    import PlainItem from "~/components/calendar/items/PlainItem.vue";
    import StoryItem from "~/components/calendar/items/StoryItem.vue";
    import ShareItem from "~/components/calendar/items/ShareItem.vue";
    import StoryHover from "~/components/calendar/StoryHover.vue";
    import GallaryHover from "~/components/calendar/items/GallaryHover.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();

    const itemActive = ref(false);

    const item = ref<HTMLElement | null>(null);
    const targetIsVisible = useElementVisibility(item);
    const loaded = ref(false);

    const currentActiveItem = useState('currentActiveItem')

    watch(targetIsVisible, async (newValue) => {
        if (newValue) {
            loaded.value = true;
        }
    });

    function handleClick() {
        if (calendarItem.hover == CalendarItemHoverAction.STORY || calendarItem.hover || CalendarItemHoverAction.GALLARY) {
            itemActive.value = !itemActive.value
        }

        if(calendarItem.link) {
            window.open(calendarItem.link, '_blank')
        }

        if(calendarItem.hover == CalendarItemHoverAction.MAILTO) {
            window.location.assign("mailto:jens@creatormate.com");
        }

        if(itemActive.value) {
            currentActiveItem.value = calendarItem.title;
        }
    }

    function handleClickOutside() {
        itemActive.value = false;
    }
</script>

<template>
    <div ref="item" class="item text-white" :class="{ 'popup-animation': targetIsVisible || loaded },{ 'z-50': itemActive && currentActiveItem == calendarItem.title },
    {'max-h-[35vh]' : calendarItem.type == CalendarItemType.STORY || calendarItem.type == CalendarItemType.GALLARY}">
        <div
            @click="handleClick()"
            class="rounded-2xl hover:duration-100 hover:scale-95 transition-transform relative z-10 h-full w-full"
            :class="[
  `bg-[${calendarItem.color}]`
]">
            <GallaryItem v-if="calendarItem.type == CalendarItemType.GALLARY" :calendar-item></GallaryItem>
            <FotoItem v-if="calendarItem.type == CalendarItemType.FOTO" :calendar-item></FotoItem>
            <PlainItem v-if="calendarItem.type == CalendarItemType.PLAIN" :calendar-item></PlainItem>
            <StoryItem v-if="calendarItem.type == CalendarItemType.STORY" :calendar-item></StoryItem>
            <ShareItem v-if="calendarItem.type == CalendarItemType.SHARE" :calendar-item></ShareItem>
        </div>
        <ClientOnly>
            <Transition>
                <StoryHover :class="{'hidden': !itemActive}" v-if="calendarItem.hover == CalendarItemHoverAction.STORY" :parent-block="item" @click.stop
                            :calendar-item  @click-outside="handleClickOutside()"></StoryHover>
            </Transition>
            <Transition>
                <GallaryHover :active="itemActive" v-if="calendarItem.hover == CalendarItemHoverAction.GALLARY" @click.stop
                              @click-outside="handleClickOutside()" :calendar-item></GallaryHover>
            </Transition>
        </ClientOnly>
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