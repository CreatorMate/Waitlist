<script lang="ts" setup>
    import {definePageMeta} from "#imports";

    const blocks = ["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8"];

    const router = useRouter();
    definePageMeta({
        layout: 'platform'
    });
</script>

<template>
    <section class="flex flex-grow flex-col justify-center h-full items-center gap-6 z-50 relative">
        <h1 class="text-8xl flex-wrap font-medium text-center">ready to build your dream community</h1>
        <button @click="router.push('/login')" class="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-100">Join the waitlist</button>
    </section>
    <HomeCarousel></HomeCarousel>

</template>
