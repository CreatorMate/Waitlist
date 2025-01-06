<script setup lang='ts'>

import HomeExplenationBlock from "~/components/home/HomeExplenationBlock.vue";
</script>

<template>
    <section class="flex flex-col w-full px-3 lg:px-32 pt-24">
        <h1 class="text-[32px] leading-[32px] lg:text-[96px] lg:leading-[96px]">we make brand accounts <br/> interesting to follow</h1>
        <p class="text-sm lg:text-[18px] mt-6 text-[#68677E]">swap manual admin and messy reporting for automated <br/>learning programs and instand performance insights</p>
        <HomeButton class="mt-3 pl-0 hover:text-[#303030]"></HomeButton>
        <div class="mt-24">
            <HomeExplenationBlock title="creator marketing" number="01" :items="['find formats about your brand', 'match you with the right creators', 'handle concept to production', 'optimize posts based on results']"/>
            <HomeExplenationBlock title="partnerships software" number="02" :items="['better data, smarter decisions', 'bigger impact', 'track performance across creators', 'optimise every creator partnership']"/>
            <HomeExplenationBlock title="creator capital" number="03" :items="['turn hobby creators into businesses', 'connect creators with investors', 'partnerships with leading brands']"/>
            <HomeExplenationBlock title="creator meet-ups" number="04" :items="['host creator events across europe', 'spark connections & collaborations', 'bild a stronger creative community']"/>
        </div>
        <div class="flex flex-col lg:flex-row justify-between w-full mt-24">
            <div class="w-full lg:w-1/3 lg:mb-0 mb-12">
                <p class="text-3xl lg:text-[64px] lg:leading-[48px] ">our creators</p>
            </div>
            <div class="w-full lg:w-[653px] text-sm lg:text-lg font-medium">
                <p class="text-3xl lg:text-[64px] lg:leading-[64px] font-normal break-words">are from <span class="gelica italic font-medium">amsterdam, berlin, london, los angeles, new york, </span> and many more places.</p>
                <p class="lg:mt-24 mt-12">amsterdam</p>
                <p class="mt-3">oudeschans 85</p>
                <p>1011kw, amsterdam</p>
                <p>the netherlands</p>
                <div class="w-fit mt-9">
                    <NuxtLink to="/select-login" class=" pb-2 border-b hover:text-[#303030] hover:border-[#303030] cursor-pointer border-black mb-3 w-auto">interested?</NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.galica {
    font-family: serif;
}
</style>