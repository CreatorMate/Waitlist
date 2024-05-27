<script lang="ts" setup>
    import {definePageMeta} from "#imports";

    const router = useRouter();
    definePageMeta({
        layout: 'platform'
    });
</script>

<template>
    <section class="w-full h-full flex flex-col items-center justify-between z-50">
        <div class="">creatormate</div>
        <div class="flex flex-col justify-center items-center gap-10 w-[850px]">
            <h1 class="text-8xl flex-wrap font-medium text-center">ready to build your dream community?</h1>
            <button @click="router.push('/login')" class="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 rounded-full">Join waitlist</button>
        </div>
        <div class="">creatormate</div>
    </section>
    <HomeCarousel></HomeCarousel>
</template>
