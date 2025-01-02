<script setup lang='ts'>

import HomeExplenationBlock from "~/components/home/HomeExplenationBlock.vue";
</script>

<template>
    <section class="flex flex-col w-full px-32 pt-24">
        <h1 class="text-[96px] leading-[96px]">the challenges we <br/> help to solve</h1>
        <p class="text-[18px] mt-6 text-[#68677E]">swap manual admin and messy reporting for automated <br/>learning programs and instand performance insights</p>
        <HomeButton class="mt-3"></HomeButton>
        <div class="mt-24">
            <HomeExplenationBlock title="creator marketing" number="01" :items="['find formats about your brand', 'match you with the right creators', 'handle concept to production', 'optimize posts based on results']"/>
            <HomeExplenationBlock title="partnerships software" number="02" :items="['better data, smarter decisions', 'bigger impact', 'track performance across creators', 'optimise every creator partnership']"/>
            <HomeExplenationBlock title="creator capital" number="03" :items="['turn hobby creators into businesses', 'connect creators with investors', 'partnerships with leading brands']"/>
            <HomeExplenationBlock title="creator meet-ups" number="04" :items="['host creator events across europe', 'spark connections & collaborations', 'bild a stronger creative community']"/>
        </div>
        <div class="flex justify-between w-full mt-24">
            <div class="w-1/3">
                <p class="text-[64px] leading-[48px] ">our creators</p>
            </div>
            <div class="w-[653px] text-lg font-medium">
                <p class="text-[64px] leading-[48px] font-normal">are from <span class="galica italic font-medium">amsterdam,<br/> berlin, london, los <br/> angeles, new york, </span> and <br/>many more places.</p>
                <p class="mt-24">amsterdam</p>
                <p class="mt-3">oudeschans 85</p>
                <p>1011kw, amsterdam</p>
                <p>the netherlands</p>
                <div class="w-fit">
                    <p class="mt-9 pb-2 border-b border-black mb-3 w-auto">interested?</p>
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