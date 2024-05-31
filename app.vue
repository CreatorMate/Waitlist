<script lang="ts" setup>
    import './assets/css/tailwind.css'
    import {useAccountStore} from "~/src/account/AccountStore";
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const accountStore = useAccountStore();
</script>

<template>
    <main class="screen-size bg-black text-white flex flex-col lowercase">
        <ToastModel></ToastModel>
        <NuxtLayout>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </main>
</template>