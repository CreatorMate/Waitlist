<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";

    const account = useAccountStore();
</script>

<template>
    <div class="w-full h-full flex items-center justify-center">
        <div class="border border-gray-500 flex flex-col p-2">
            <img alt="Profile picture" class="w-80" :src="account.getProfileImageSrc()"/>
            <p class="text-2xl">{{account.username}}</p>
            <p>Points {{account.points}}</p>
        </div>
    </div>
</template>