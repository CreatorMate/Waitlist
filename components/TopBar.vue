<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    const accountStore = useAccountStore();
    const user = useSupabaseUser();

    async function logout() {
        await accountStore.logout();
    }
</script>

<template>
    <nav class="w-full flex justify-between items-center p-10 sticky top-0 bg-black bg-opacity-60 backdrop-blur-[8px] z-40">
        <div class="flex gap-1 w-1/3">
            <NavItem to="/home" name="discover"></NavItem>
            <NavItem to="/resources" name="resources"></NavItem>
            <NavItem to="/information" name="questionnaire"></NavItem>
            <NavItem v-if="accountStore.isAdmin" to="/admin-waitlist" name="tracker"></NavItem>
        </div>
        <div class="w-1/3 flex justify-center">
            <img alt="creator mate logo"  src="/creatormate.svg">
        </div>
        <div class="flex w-1/3 justify-end">
            <div class="flex gap-1.5 bg-white bg-opacity-10 py-0.5 pl-1.5 pr-3 rounded-full items-center">
                <img alt="profile picture" class="w-6 h-6 object-fill rounded-full" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
                <div class="py-0.5">
                    <p class="leading-6">{{accountStore.username}}</p>
                </div>
            </div>

        </div>
    </nav>
</template>