<script setup lang='ts'>
    const {label, title, description, video_1, video_2, video_3} = defineProps<{
        label: string
        title: string
        description: string
        video_1: string
        video_2: string
        video_3: string
    }>();

</script>

<template>
    <div class="w-full flex flex-col items-center px-3 md:px-12">
        <p class="bg-[#1B1B1B] text-white py-2 px-3 rounded-lg mb-3 mt-12">{{label}}</p>
        <h2 class="lg:leading-[86px] lg:text-[96px] text-4xl font-regular mb-3">{{title}}</h2>
        <p class="mb-3 text-sm">{{description}}</p>
        <div class="my-2.5 flex md:flex-row flex-col gap-6 mb-24">
            <div class="2xl:w-[370px] 2xl:h-[600px] relative text-white">
                <HomeVideoBlock :video="video_1"></HomeVideoBlock>
            </div>
            <div class="2xl:w-[370px] 2xl:h-[600px] relative text-white">
                <HomeVideoBlock :video="video_2"></HomeVideoBlock>
            </div>
            <div class="2xl:w-[370px] 2xl:h-[600px] relative text-white">
                <HomeVideoBlock :video="video_3"></HomeVideoBlock>
            </div>
        </div>
    </div>

</template>

<style>
.video-container {
    @apply 2xl:w-[370px] 2xl:h-[600px]
}
</style>