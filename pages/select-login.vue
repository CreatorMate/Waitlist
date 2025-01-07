<script setup lang='ts'>
    import {useRouter} from "#app";
    import Login from "~/components/home/Login.vue";

    const router = useRouter();

    const modelActive = ref(false)
    const verifying = ref(false);
    const email = ref("");

    function verify(value: string) {
        email.value = value;
        verifying.value = true;
    }
</script>

<template>
    <section class="w-full h-full bg-white text-black flex justify-center items-center px-3">
        <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
                <Icon @click="router.back()" class="text-[#1C1B1F] rotate-90" size="20" name="mdi:arrow-down"></Icon>
                <NuxtImg width="40" src="/logo-light.svg"/>
            </div>

            <p class="text-xl">welcome at creatormate</p>
            <h1>choose how you will use the platform.</h1>
            <div class="w-full md:w-[780px] flex flex-col md:flex-row gap-12 justify-between mt-5 ">
                <NuxtLink to="https://app.creatormate.com" class="w-full md:w-1/2 card flex flex-col py-3 overflow-x-hidden">
                    <p class="px-6">i am a brand</p>
                    <h2 class="text-2xl mt-4 mb-32 px-6">looking for creators</h2>
                    <div class="flex flex-col gap-3">
                        <div class="flex sliding-left w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a creative source</p>
                                <p class="label">i'm a manager</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label">i'm a freelancer</p>
                                <p class="label">i'm an agency owner</p>
                                <p class="label mr-3">i'm a manager</p>
                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a creative source</p>
                                <p class="label">i'm a manager</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label">i'm a freelancer</p>
                                <p class="label">i'm an agency owner</p>
                                <p class="label mr-3">i'm a manager</p>
                            </div>
                        </div>
                        <div class="flex sliding-right w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a head of marketing</p>
                                <p class="label">i'm an agency owner</p>
                                <p class="label">i'm looking for a film crew</p>
                                <p class="label">i'm a freelancer</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label mr-3">i'm a fan</p>
                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a head of marketing</p>
                                <p class="label">i'm an agency owner</p>
                                <p class="label">i'm looking for a film crew</p>
                                <p class="label">i'm a freelancer</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label mr-3">i'm a fan</p>
                            </div>
                        </div>
                        <div class="flex sliding-left w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a content manager</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label mr-3">i'm a fan</p>
                                <p class="label mr-3">i'm a creative source</p>
                                <p class="label">i'm a head of marketing</p>
                                <p class="label mr-3">i'm a fan</p>
                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a content manager</p>
                                <p class="label">i'm a marketeer</p>
                                <p class="label mr-3">i'm a fan</p>
                                <p class="label mr-3">i'm a creative source</p>
                                <p class="label">i'm a head of marketing</p>
                                <p class="label mr-3">i'm a fan</p>
                            </div>
                        </div>

                    </div>
                </NuxtLink>
                <div @click="modelActive = true" class="w-full md:w-1/2 card flex flex-col py-3 overflow-x-hidden">
                    <p class="px-6">i am a creator</p>
                    <h2 class="text-2xl mt-4 mb-32 px-6">looking for work and hire</h2>
                    <div class="flex gap-3 flex-col">
                        <div class="flex sliding-left w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a photographer</p>
                                <p class="label">i'm a videographer</p>
                                <p class="label">i'm a content creator</p>
                                <p class="label">i'm a cinematographer</p>
                                <p class="label">i'm a filmmaker</p>
                                <p class="label mr-3">i'm a musician</p>
                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a photographer</p>
                                <p class="label">i'm a videographer</p>
                                <p class="label">i'm a content creator </p>
                                <p class="label">i'm a cinematographer </p>
                                <p class="label">i'm a filmmaker </p>
                                <p class="label mr-3">i'm a musician</p>
                            </div>
                        </div>
                        <div class="flex sliding-right w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="ml-3 label">i'm a filmmaker</p>
                                <p class="label">i'm a content creator</p>
                                <p class="label">i'm an artist</p>
                                <p class="label">i'm a cinematographer</p>
                                <p class="label">i'm a cameraman</p>
                                <p class="label">i'm an editor</p>

                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="ml-3 label">i'm a filmmaker</p>
                                <p class="label">i'm a content creator</p>
                                <p class="label">i'm an artist</p>
                                <p class="label">i'm a cinematographer</p>
                                <p class="label">i'm a cameraman</p>
                                <p class="label">i'm an editor</p>
                            </div>
                        </div>
                        <div class="flex sliding-left w-full">
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a videographer</p>
                                <p class="label">i'm a color grading editor</p>
                                <p class="label">i'm an editor</p>
                                <p class="label">i'm a cameraman</p>
                                <p class="label">i'm a content creator</p>
                                <p class="label mr-3">i'm a photographer</p>
                            </div>
                            <div class="flex items-center justify-between text-xs w-[200%] flex-shrink-0">
                                <p class="label">i'm a videographer</p>
                                <p class="label">i'm a color grading editor</p>
                                <p class="label">i'm an editor</p>
                                <p class="label">i'm a cameraman</p>
                                <p class="label">i'm a content creator</p>
                                <p class="label mr-3">i'm a photographer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <BaseModelVue :model-active="modelActive" @close="modelActive = false">
        <Login v-if="!verifying" @verify="verify"></Login>
        <HomeVerify :email="email" v-else></HomeVerify>
    </BaseModelVue>
</template>

<style scoped>
.label {
    @apply py-3 bg-white px-2 rounded-lg first-of-type:rounded-l-none last-of-type:rounded-r-none;
}

.card {
    background: linear-gradient(0deg, #F9F9F9 0%, #F9F9F9 100%), #FFF;
}

.sliding-left {
    animation: 10s slide-left infinite linear;
}

.sliding-right {
    animation: 10s slide-right infinite linear;
}


@keyframes slide-left {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-200%);
        -webkit-transform: translateX(-200%);
    }
}
@keyframes slide-right {
    from {
        transform: translateX(-200%);
        -webkit-transform: translateX(-200%);
    }
    to {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
}
</style
</style>
