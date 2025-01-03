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
        <h1 class="text-center text-[36px] leading-[32px] lg:text-[96px] lg:leading-[86px] pt-32 pageTitle">independent creator <br/> & social agency</h1>
        <h2 class="text-center text-sm lg:text-xl normal-case mt-6 pageTitle">AI for accessing, learning and applying all your company's collective knowledge.</h2>
        <HomeButton class="mt-6 mb-12 text-xl bg-black text-white pageTitle"/>
        <HomeBrands class="mb-14"/>
        <div class="w-full lg:px-0 px-3">
            <div class="h-96 w-full bg-gray-500"></div>
        </div>
        <HomeWhatWeDo />
        <HomeChallenges/>
        <HomeSidewardScroll/>
        <HomeFunding/>
        <HomeFooter/>
    </section>
</template>

<style>
.pageTitle {
    animation: 1s fadeInUp;
}

</style>