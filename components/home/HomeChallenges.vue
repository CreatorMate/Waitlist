<script setup lang='ts'>

import HomeExplenationBlock from "~/components/home/HomeExplenationBlock.vue";
</script>

<template>
    <section class="flex flex-col w-full px-3 lg:px-32 pt-12">
        <h1 class="text-[32px] leading-[32px] lg:text-[96px] lg:leading-[96px] tracking-[-1.92px]">making brand accounts <br/> interesting to follow</h1>
<!--        <p class="text-sm lg:text-[18px] mt-6 text-[#68677E]">swap manual admin and messy reporting for automated <br/>learning programs and instand performance insights</p>-->
        <div class="mt-12">
            <HomeExplenationBlock title="brand marketing" number="01" description="we act as your remote creator marketing team, creating campaigns that fit your brand’s goals, audience, and budget. Using our creator network and software, we analyze large-scale social media data to understand global audience preferences and optimize your sales funnel."/>
            <HomeExplenationBlock title="creator partnerships" number="02" description="we help your brand connect with top creative talent by managing the entire process—from identifying the right creators and handling briefings to executing campaigns that resonate with your audience. Whether for one-time projects or long-term partnerships, we simplify the process to help you build meaningful online connections."/>
            <HomeExplenationBlock title="performance software" number="03" description="we’ve invested in AI software that analyses large-scale social media data to identify audience engagement patterns. This enables us to determine which copy, edits, graphics, and sentiments resonate most with your audience, optimizing your sales funnel for better performance."/>
            <HomeExplenationBlock title="creator experience" number="04" description="we help creators with AI tools, funding, brand partnerships, knowledge, and events to bring the next generation of filmmakers and storytellers together. Interested? join us (it's free)"/>
        </div>
        <div class="flex flex-col lg:flex-row justify-between w-full mt-24">
            <div class="w-full lg:w-1/3 lg:mb-0 mb-12">
                <p class="text-3xl lg:text-[64px] lg:leading-[48px] tracking-[-2px]">our creators</p>
            </div>
            <div class="w-full lg:w-[653px] text-sm lg:text-lg ">
                <p class="text-3xl lg:text-[64px] lg:leading-[64px] font-normal break-words tracking-[-1.28px]">are from <span class="gelica italic font-medium">amsterdam, berlin, london, los angeles, new york, </span> and many more places.</p>
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