<script lang="ts" setup>
    import './assets/css/tailwind.css'
    import {useAccountStore} from "~/src/account/AccountStore";

    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const accountStore = useAccountStore();

    if(user.value) {
        await accountStore.get(user.value?.id)
    }
</script>

<template>
    <main class="w-screen h-screen bg-black text-white flex flex-col">
        <NuxtLayout>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </main>
</template>
