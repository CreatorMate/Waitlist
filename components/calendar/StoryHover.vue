<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import {onMounted, onUnmounted} from "vue";
    import Story from "~/components/calendar/items/Story.vue";

    const props = defineProps<{
        calendarItem: CalendarItem,
        parentBlock: HTMLDivElement
    }>();

    const {parentBlock, calendarItem} = toRefs(props)
    const emits = defineEmits(['click-outside'])

    function isDivOnLeftOrRight() {
        const div = parentBlock.value;
        if (!div) return null;
        const rect = div.getBoundingClientRect();
        const screenMiddle = window.innerWidth / 2;
        return rect.left + rect.width / 2 < screenMiddle ? 'left' : 'right';
    }

    function isDivOnTopOrBottom() {
        const div = parentBlock.value;
        if (!div) return null;
        const rect = div.getBoundingClientRect();
        const screenMiddle = window.innerHeight / 2;
        return rect.top + rect.height / 2 < screenMiddle ? 'top' : 'bottom';
    }

    const max_width = 765;
    const isWideScreen = ref(window.innerWidth > max_width);

    onMounted(() => {
        window.addEventListener("resize", updateScreenWidth);

        setTimeout(() => {
            teleportBlock.value?.classList.add("animationStory");
        }, 10);
    });

    onUnmounted(() => {
        window.removeEventListener("resize", updateScreenWidth);
    });

    function updateScreenWidth() {
        isWideScreen.value = window.innerWidth > max_width;
    }

    const teleportBlock = ref<HTMLDivElement | null>(null);
    onClickOutside(teleportBlock, event => emits('click-outside'))

    function close() {
        emits('click-outside')
    }

</script>

<template>
    <div v-if="isWideScreen"
         class="bg-[#ffff] absolute z-50 p-1 rounded-xl"
         :class="[
            isDivOnTopOrBottom() == 'top' ? 'top-0' : 'bottom-0',
            isDivOnLeftOrRight() == 'left' ? '-right-[320px] xl:-right-[420px]' : '-left-[320px] xl:-left-[420px]',
            ]"
    >
        <Story :parent-block @close="close" :calendar-item @click-outside="emits('click-outside')"/>
    </div>
    <Teleport v-else to="body">
        <div ref="teleportBlock"
             class="teleportedStory bg-zinc-900 absolute z-50 p-1 rounded-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] xs:w-9/12 text-white">
            <Story @close="close" :parent-block :calendar-item/>
        </div>
    </Teleport>
</template>

<style scoped>
.teleportedStory {
    opacity: 0;
    transition: all 0.3s ease;
    scale: 0;
}

.animationStory {
    opacity: 1;
    scale: 1;
    transition: all 0.3s ease;
}
</style>