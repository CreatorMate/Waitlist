<script setup lang='ts'>
import {definePageMeta} from "#imports";
import HomeBrands from "~/components/home/HomeBrands.vue";
import HomeWhatWeDo from "~/components/home/HomeWhatWeDo.vue";
import HomeFunding from "~/components/home/HomeFunding.vue";
import HomeFooter from "~/components/home/HomeFooter.vue";

definePageMeta({
    layout: 'white'
});
</script>

<template>
    <section class="flex flex-col items-center bg-white">
        <h1 class="text-center text-[36px] leading-[32px] lg:text-[96px] lg:leading-[86px] pt-32 pageTitle">a remote creator <br/> marketing partner</h1>
        <h2 class="text-center text-sm lg:text-xl normal-case mt-6 pageTitle">helping brands measure partnerships, improve sales funnel and build interesting social accounts</h2>
        <HomeButton class="mt-6 mb-12 text-xl bg-black text-white pageTitle hover:bg-[#303030]"/>
        <HomeBrands class="mb-14"/>
        <div class="w-full lg:px-0 px-3 bg-white">
            <video class="rounded-none bg-white" autoplay loop muted width="100%" src="https://res.cloudinary.com/dusb7aq4h/video/upload/v1736250617/landing1_wdlfld.mp4"></video>
        </div>
        <HomeWhatWeDo  class="5xl:w-[2500px]"/>
        <div class="5xl:w-[2500px] px-3 bg-white">
            <video class="rounded-none bg-white" autoplay loop muted width="100%" src="https://res.cloudinary.com/dusb7aq4h/video/upload/v1736250604/landing2_htvqdm.mp4"></video>
            <div class="w-full flex gap-24 flex-col">
                <p class="font-semibold mt-3">software that analyses large-scale social media data to identify audience engagement patterns</p>
                <p class="pb-6 border-b border-[#5E5E5E]">what we do</p>
            </div>
        </div>
        <HomeChallenges class="5xl:w-[2500px]"/>
        <HomeSidewardScroll/>
        <HomeFunding class="5xl:w-[2500px]"/>
        <HomeFooter/>
    </section>
</template>

<style>
.pageTitle {
    animation: 1s fadeInUp;
}

</style>