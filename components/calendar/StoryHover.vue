<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import {onMounted} from "vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();

    const emits = defineEmits(['click-outside'])

    const storyBlock = ref<HTMLDivElement|null>(null);
    function isDivOnLeftOrRight() {
        const div = storyBlock.value;
        if (!div) return null;
        const rect = div.getBoundingClientRect();
        const screenMiddle = window.innerWidth / 2;
        return rect.left + rect.width / 2 < screenMiddle ? 'left' : 'right';
    }

    function isDivOnTopOrBottom() {
        const div = storyBlock.value;
        if (!div) return null;
        const rect = div.getBoundingClientRect();
        const screenMiddle = window.innerHeight / 2;
        return rect.top + rect.height / 2 < screenMiddle ? 'top' : 'bottom';
    }

    onMounted(() => {
        const a = setInterval(() => {
            timer.value++;
            if(timer.value == 1000) {
                currentPhoto.value++;
                timer.value = 0;
                if(currentPhoto.value == calendarItem.images.length) currentPhoto.value = 1;
            }
        }, 1);
    });

    const loopIndices = computed(() => Array.from({ length: calendarItem.images.length - 1 }, (_, i) => i));

    let currentPhoto = ref(1);
    let timer = ref(0);

    const container = ref<HTMLDivElement|null>(null);
    onClickOutside(storyBlock, event => emits('click-outside'))
</script>

<template>
    <div
        ref="storyBlock"
        class="bg-black absolute z-50 p-1 rounded-xl"
        :class="[
            isDivOnTopOrBottom() == 'top' ? 'top-0' : 'bottom-0',
            isDivOnLeftOrRight() == 'left' ? '-right-[320px]' : '-left-[320px]',
            ]"
    >
        <div ref="container" class="relative rounded-xl">
            <NuxtImg class="w-[300px]" :src="`calandar/${calendarItem.images[currentPhoto]}`"/>
            <div class="absolute flex top-[11px] gap-2 left-[111px]">
                <div v-for="(item, index) of loopIndices" class="h-[5px] w-[21px] rounded-full" :class="
                [
                    index + 1 == currentPhoto ? 'bg-gray-400' : '',
                    index + 1 > currentPhoto ? 'bg-gray-400' : '',
                    index + 1 < currentPhoto ? 'bg-white' : ''
                ]">
                    <div v-if="index + 1 == currentPhoto" class="h-full bg-white transition duration-75 rounded-full"
                         :style="'width: ' + timer/10 + '%'">
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between p-1 py-2">
            <div class=" flex items-center gap-3">
                <NuxtImg src="calandar/jens_profile.png" class="w-6 rounded-full "></NuxtImg>
                by {{calendarItem.postedBy}}
            </div>
            <Icon @click="emits('click-outside')" class="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400" size="16" name="material-symbols:close"></Icon>
        </div>
    </div>
</template>