<script lang="ts" setup>
    import Login from "~/components/home/Login.vue";

    const router = useRouter();
    const user = useSupabaseUser();
    definePageMeta({
        layout: 'platform'
    });

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
        <div class="flex flex-col justify-center items-center gap-10 w-[850px]">
            <h1 class="text-8xl flex-wrap font-medium text-center">ready to build your dream community?</h1>
            <button @click="modelActive = true" class="px-6 py-3 bg-white text-black font-semibold hover:bg-gray-200 rounded-full transition duration-300">
                {{user ? 'Goto waitlist' : 'Join waitlist'}}
            </button>
        </div>
        <div class="p-8 flex gap-6">
            <p>email</p>
            <p>instagram</p>
        </div>
    </section>
    <HomeCarousel ></HomeCarousel>
    <BaseModelVue :model-active="modelActive" @close="modelActive = false">
        <Login v-if="!verifying" @verify="verify"></Login>
        <HomeVerify :email="email" v-else></HomeVerify>
    </BaseModelVue>
</template>

<style>
.background-mask {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgb(0, 0, 0) 48%, rgba(255,255,255,0) 100%);
}
</style>