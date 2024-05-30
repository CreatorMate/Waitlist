<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";

    const accountStore = useAccountStore();
</script>

<template>
    <div class="flex gap-1.5 bg-white bg-opacity-10 py-0.5 pl-1.5 pr-3 rounded-full items-center">
        <img alt="profile picture" class="w-6 h-6 object-fill rounded-full" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
        <div class="py-0.5">
            <p class="leading-6">{{accountStore.username}}</p>
        </div>
    </div>
</template>