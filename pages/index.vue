<script setup lang='ts'>
import {definePageMeta} from "#imports";
import HomeBrands from "~/components/home/HomeBrands.vue";
import HomeWhatWeDo from "~/components/home/HomeWhatWeDo.vue";

definePageMeta({
    layout: 'white'
});
</script>

<template>
    <section class="flex flex-col items-center bg-white">
        <h1 class="text-center text-[96px] leading-[86px] pt-32">independent creator <br/> & social agency</h1>
        <h2 class="text-center text-xl normal-case mt-6">AI for accessing, learning and applying all your company's collective knowledge.</h2>
        <HomeButton class="mt-6 mb-12 text-xl bg-black text-white"/>
        <HomeBrands class="mb-14"/>
        <div class="h-96 w-full bg-gray-500"></div>
        <HomeWhatWeDo />
        <HomeChallenges/>
    </section>
</template>