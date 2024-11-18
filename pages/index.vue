<script lang="ts" setup>
    import Login from "~/components/home/Login.vue";
    import PrimaryButton from "~/components/common/PrimaryButton.vue";
    import {useAccountStore} from "~/src/account/AccountStore";

    const router = useRouter();
    const user = useSupabaseUser();
    const account = useAccountStore();
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

    function toBeta() {
        window.location.href = "https://app.creatormate.com";
    }
</script>

<template>
    <section style="" class="background-mask w-full h-full flex flex-col items-center justify-between z-40">
        <PrimaryButton @click="modelActive = true">
            {{user ? 'go to community' : 'join community'}}
        </PrimaryButton>
    </section>
    <PrimaryButton v-if="account.isBetaTester" @click="toBeta()">
        Go to beta
    </PrimaryButton>
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