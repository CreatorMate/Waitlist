<script setup lang='ts'>

</script>

<template>
    <section class="w-full p-3 text-xl">
        <h3 class="text-2xl lg:text-[64px] lg:leading-[64px] lg:mt-0 mt-20">we make brand accounts <br>interesting to follow</h3>
        <HomeButton class="pl-0 text-sm mt-3"></HomeButton>
        <p class=" lg:mt-[170px] pb-6 w-full border-b text-xl border-[#5E5E5E] lg:text-black text-white">ai-native consulting tech and marketing</p>
        <h4 class="text-[96px] py-12 leading-[64px] font-normal lg:block hidden">what we do</h4>
        <div class="flex lg:flex-row flex-col gap-12 w-full mb-20 font-semibold lg:mt-0 mt-6">
            <div class="w-full lg:w-2/3">
                <LazyNuxtImg class="w-full" src="/what_we_do.png"/>
                <p class="mt-3">creator marketing</p>
            </div>
            <div class="w-full lg:w-1/3 flex flex-col">
                <LazyNuxtImg class="w-full" src="/what_we_do2.png"/>
                <p class="mt-3">measure partnership performance</p>
            </div>
        </div>

    </section>
</template>