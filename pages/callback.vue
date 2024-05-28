<script setup lang='ts'>
    import {onMounted} from "vue";
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const accountStore = useAccountStore();
    const router = useRouter();

    onMounted(async () => {
        if(!user.value) {
            await router.push('/')
            return;
        }
        await accountStore.get(user.value.id);
        if(accountStore.completedOnboarding) {
            await router.push('/home');
            return;
        } else {
            await router.push('/onboarding');
        }
    })
</script>

<template>

</template>