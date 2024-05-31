<script lang="ts" setup>
    import Login from "~/components/home/Login.vue";

    const router = useRouter();
    const user = useSupabaseUser();
    definePageMeta({
        layout: 'platform'
    });
    useHead({
        title: 'join the waitlist now! - creatormate'
    })

    const modelActive = ref(false)
    const verifying = ref(false);
    const email = ref("");

    function verify(value: string) {
        email.value = value;
        verifying.value = true;
    }
</script>

<template>
    <section style="" class="background-mask w-full h-full flex flex-col items-center justify-between z-40">
        <div class="p-10">
            <img alt="creator mate logo"  src="/creatormate.svg">
        </div>
        <div class="flex flex-col justify-center items-center gap-6 md:gap-10 w-full md:w-[850px]">
            <h1 class="text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl flex-wrap font-medium text-center px-5 md:px-0">ready to build your dream community?</h1>
            <button @click="modelActive = true" class="px-6 py-2 md:py-3 bg-white text-black font-medium hover:bg-gray-200 rounded-full transition duration-300">
                {{user ? 'go to waitlist' : 'join waitlist'}}
            </button>
        </div>
        <div class="p-8 flex gap-6">
            <a class="hover:text-opacity-60" href="mailto:hello@creatormate.com">email</a>
            <a class="hover:text-opacity-20" target="_blank" href="https://www.instagram.com/trycreatormate/">instagram</a>
        </div>
    </section>
    <HomeCarousel></HomeCarousel>
    <BaseModelVue :model-active="modelActive" @close="modelActive = false">
        <Login v-if="!verifying" @verify="verify"></Login>
        <HomeVerify :email="email" v-else></HomeVerify>
    </BaseModelVue>
</template>

<style scoped>
.background-mask {
    background: radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,0.10) 0%, rgb(0, 0, 0, 0.90) 90%);
}
</style>