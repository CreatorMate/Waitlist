<script setup lang='ts'>
    import {onMounted} from "vue";
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const accountStore = useAccountStore();
    const router = useRouter();

    useHead({
        title: 'logging you in... - creatormate'
    })

    onMounted(async () => {
        if(!user.value) {
            await router.push('/')
            return;
        }
        await accountStore.get(user.value.id);
        await router.push('/home');
    });
</script>

<template>
    <section style="" class="background-mask w-full h-full flex justify-center z-40">
        <div class="p-10">
            <img alt="creator mate logo"  src="/creatormate.svg">
        </div>
    </section>
</template>