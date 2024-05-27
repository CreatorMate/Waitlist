<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    const accountStore = useAccountStore();
    const user = useSupabaseUser();

    async function logout() {
        await accountStore.logout();
    }
</script>

<template>
    <nav class="w-[300px] p-6 flex flex-col flex-grow">
        <h1 class="font-semibold text-xl">creator mate</h1>
        <div class="flex flex-col gap-2 mt-6 flex-grow">
            <NavItem to="/home" name="start here"></NavItem>
            <NavItem to="/resources" name="resources"></NavItem>
            <NavItem to="/information" name="information"></NavItem>
            <NavItem v-if="accountStore.isAdmin" to="/admin-waitlist" name="tracker"></NavItem>
            <div class="mt-auto flex flex-col gap-2">
                <NavItem to="/profile" name="profile"></NavItem>
                <button @click="logout" class="text-left text-gray-400">Logout</button>
            </div>
        </div>
        <div class="mt-auto pt-6 border-gray-500 flex items-center gap-3">
            <img alt="profile picture" class="w-14 h-14 object-cover rounded-lg" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
            <div>
                <p>{{accountStore.username}}</p>
                <p class="text-zinc-500 text-sm">{{user.email}}</p>
            </div>
        </div>
    </nav>
</template>