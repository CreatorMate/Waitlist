<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    const accountStore = useAccountStore();
    const router = useRouter();

    const isActive = ref<boolean>(false);

    watchEffect(() => {
        isActive.value = router.currentRoute.value.path.includes('/profile');
    });
</script>

<template>
    <router-link to="/profile" :class="[isActive ? 'bg-opacity-20' : 'bg-opacity-10']" class="flex gap-1.5 bg-white  py-0.5 pl-1.5 pr-3 rounded-full items-center cursor-pointer">
        <img alt="profile picture" class="w-6 h-6 object-fill rounded-full" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
        <div class="py-0.5">
            <p class="leading-6">{{accountStore.username}}</p>
        </div>
    </router-link>
</template>