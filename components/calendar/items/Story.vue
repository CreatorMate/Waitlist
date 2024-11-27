<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import {onMounted} from "vue";

    const emits = defineEmits(['click-outside', 'close'])

    const {calendarItem, parentBlock} = defineProps<{
        calendarItem: CalendarItem,
        parentBlock: HTMLDivElement
    }>();

    onMounted(() => {
        if(calendarItem.images.length == 1) return;
        const a = setInterval(() => {
            if(calendarItem.images[currentPhoto.value].includes('.mp4')) return;
            timer.value++;
            if(timer.value == 1000) {
                currentPhoto.value++;
                timer.value = 0;
                if(currentPhoto.value == calendarItem.images.length) currentPhoto.value = 1;
            }
        }, 1);
    });



    let currentPhoto = ref(0);
    let timer = ref(0);

    const container = ref<HTMLDivElement|null>(null);
    onClickOutside(parentBlock, event => emits('click-outside'))

    function goLeft() {
        currentPhoto.value--;
        if(currentPhoto.value < 0) {
            currentPhoto.value = calendarItem.images.length - 1;
        }
        timer.value = 0;
    }

    function goRight() {
        currentPhoto.value++;
        if(currentPhoto.value == calendarItem.images.length ) {
            currentPhoto.value = 0;
        }

        timer.value = 0;
    }
</script>

<template>
    <div ref="container" class="relative rounded-xl z-50">
        <div @click="goLeft" class="absolute h-full top-0 left-0 w-1/4 cursor-pointer z-50">

        </div>
        <div @click="goRight" class="absolute h-full right-0 top-0 w-1/4 cursor-pointer z-50">

        </div>
        <NuxtImg v-if="!calendarItem.images[currentPhoto].includes('mp4')" class="w-full h-full md:w-[300px] xl:w-[400px] md:h-[350px] xl:h-[480px] object-cover" :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[currentPhoto]}`"/>
        <video autoplay v-else class="w-full md:w-[300px] xl:w-[400px] h-full  xl:h-[480px] md:h-[350px] object-cover" :src="`https://accounts.creatormate.com/storage/v1/object/public/calendar_images/${calendarItem.images[currentPhoto]}`"/>
        <div v-if="calendarItem.images.length > 1" class="absolute flex top-[11px] gap-2 left-1/2 -translate-x-1/2">
            <div v-for="(item, index) of calendarItem.images" class="h-[5px] w-[21px] rounded-full" :class="
                [
                    index == currentPhoto ? 'bg-gray-400' : '',
                    index > currentPhoto ? 'bg-gray-400' : '',
                    index < currentPhoto ? 'bg-white' : ''
                ]">
                <div v-if="index == currentPhoto" class="h-full bg-white transition duration-75 rounded-full"
                     :style="'width: ' + timer/10 + '%'">
                </div>
            </div>
        </div>
    </div>
    <div class="flex items-center justify-between p-1 py-2">
        <div class=" flex items-center gap-3">
            <NuxtImg src="https://accounts.creatormate.com/storage/v1/object/public/calendar_images/jens_profile.png" class="w-6 rounded-full "></NuxtImg>
            by {{calendarItem.postedBy}}
        </div>
        <Icon @click="emits('close')" class="mr-2 mt-1 hover:cursor-pointer hover:text-gray-400" size="16" name="material-symbols:close"></Icon>
    </div>
</template>