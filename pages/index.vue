<script lang="ts" setup>
    const router = useRouter();
    definePageMeta({
        layout: 'platform'
    });
</script>

<template>
    <section style="" class="background-mask w-full h-full flex flex-col items-center justify-between z-50">
        <div class="p-10">
            <img src="/creatormate.svg">
        </div>
        <div class="flex flex-col justify-center items-center gap-10 w-[850px]">
            <h1 class="text-8xl flex-wrap font-medium text-center">ready to build your dream community?</h1>
            <button @click="router.push('/login')" class="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-100 rounded-full">Join waitlist</button>
        </div>
        <div class="p-8 flex gap-6">
            <p>email</p>
            <p>instagram</p>
        </div>
    </section>
    <HomeCarousel></HomeCarousel>
</template>

<style>
.background-mask {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgb(0, 0, 0) 48%, rgba(255,255,255,0) 100%);
}
</style>