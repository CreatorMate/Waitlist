<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    const accountStore = useAccountStore();

    async function logout() {
        await accountStore.logout();
    }
</script>

<template>
    <nav class="w-[300px] p-6 flex flex-col flex-grow shadow border-r border-zinc-700">
        <h1 class="font-semibold text-xl">creator mate</h1>
        <div class="flex flex-col gap-2 mt-10 flex-grow">
            <NavItem to="/home" name="discover"></NavItem>
            <NavItem to="/resources" name="resources"></NavItem>
            <NavItem to="/information" name="information"></NavItem>
            <div class="mt-auto flex flex-col gap-2">
                <NavItem to="/profile" name="profile"></NavItem>
                <button @click="logout" class="py-4 text-left hover:text-gray-200">Logout</button>
            </div>
        </div>
        <div class="mt-auto border-t pt-6 border-gray-500 flex items-center gap-3">
            <img alt="profile picture" class="w-14 h-14 object-cover" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
            <p>{{accountStore.username}}</p>
        </div>
    </nav>
</template>