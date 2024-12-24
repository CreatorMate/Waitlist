<script setup lang='ts'>

    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import {onMounted} from "vue";

    const props = defineProps<{
        calendarItem: CalendarItem,
    }>();
    const {calendarItem} = toRefs(props)
    const emits = defineEmits(['click-outside'])

    const teleportBlock = ref<HTMLDivElement | null>(null);
    onClickOutside(teleportBlock, event => emits('click-outside'))

    onMounted(() => {
        setTimeout(() => {
            teleportBlock.value?.classList.add("animationStory");
        }, 10);
    });
</script>

<template>
    <Teleport to="body">
        <div style="background: rgba(0, 0, 0, 0.40);" class="w-full h-full z-50 absolute top-0 left-0">
            <div ref="teleportBlock"
                 class="w-[95%] lg:w-auto teleportedStory absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 text-white">
                <div class="flex w-full">
                    <NuxtImg
                        class=" rotate-6 z-10 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl"
                        :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[1]}`"></NuxtImg>
                    <NuxtImg
                        class=" -rotate-6 z-10 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl"
                        :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[2]}`"></NuxtImg>
                    <NuxtImg class="rotate-12 z-50 object-cover min-w-[33%] lg:min-w-[35vh] min-h-[33%] lg:min-h-[35vh] max-w-[33%] lg:max-w-[35vh] max-h-[33%] lg:max-h-[35vh] rounded-2xl"
                             :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[3]}`"></NuxtImg>
                </div>
                <div class="justify-center flex w-full mt-9">
                    <div class="bg-[#F5F5F5] rounded-xl px-10 py-6 text-center flex flex-col items-center text-black">
                        <h3 class="font-semibold text-xl mb-2">{{calendarItem.hoverTitle}}</h3>
                        <p class="text-sm xs:text-base w-[95%] xs:w-[35vh]">{{calendarItem.hoverText}}</p>
                        <a :href="calendarItem.linkTo" target="_blank" class="flex items-center mt-4 text-white py-2 px-4 rounded-xl gap-2 bg-black">
                            <Icon class="text-white" name="ri:instagram-line"></Icon>
                            follow
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.teleportedStory {
    opacity: 0;
    transition: opacity 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
    scale: 0;
}

.animationStory {
    opacity: 1;
    scale: 1;
    transition: opacity 0.4s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
</style>