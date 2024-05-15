<script lang="ts" setup>
    import {definePageMeta} from "#imports";

    const router = useRouter();
    definePageMeta({
        layout: 'platform'
    });
</script>

<template>
    <section class="flex flex-grow flex-col justify-center h-full items-start gap-6">
        <h1 class="text-8xl flex-wrap">The all in one workspace for creators</h1>
        <button @click="router.push('/login')" class="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-100">Join the waitlist</button>
    </section>
</template>