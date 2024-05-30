<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import ProfileIcon from "~/components/ProfileIcon.vue";
    import HamburgerMenu from "~/components/HamburgerMenu.vue";
    const accountStore = useAccountStore();
    const user = useSupabaseUser();

    async function logout() {
        await accountStore.logout();
    }
</script>

<template>
    <nav class="hidden md:flex w-full justify-between items-center p-10 sticky top-0 bg-black bg-opacity-60 backdrop-blur-[8px] z-40">
         <div class="w-1/3">
            <div class="hidden md:flex gap-1">
                <NavItem to="/home" name="discover"></NavItem>
                <NavItem to="/resources" name="resources"></NavItem>
                <NavItem v-if="accountStore.isAdmin" to="/admin-waitlist" name="tracker"></NavItem>
            </div>
        </div>
        <div class="w-1/3 flex justify-center">
            <img alt="creator mate logo"  src="/creatormate.svg">
        </div>
        <div class="flex w-1/3 justify-end">
            <ProfileIcon class="hidden md:flex"></ProfileIcon>
        </div>
    </nav>
    <HamburgerMenu>

    </HamburgerMenu>
</template>