<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";

    const open = ref(false)
    const accountStore = useAccountStore();
</script>

<template>
    <nav
        class="flex md:hidden p-6  items-center justify-between bg-black sticky bg-opacity-60 backdrop-blur-[8px] top-0 z-40 w-full">
        <div class="h-9 w-9"></div>
        <img alt="creator mate logo" src="/creatormate.svg">
        <div @click="open = !open"
             class="h-9 w-9 rounded-full bg-white bg-opacity-10 flex justify-center items-center relative">
            <div :class="{
                'open': open
            }" id="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Transition name="menu-show">
                <div v-show="open" class="v-menu absolute flex flex-col items-end gap-1 top-10 font-medium right-0">
                    <router-link v-if="accountStore.isAdmin" to="/admin-waitlist" class=" bg-white bg-opacity-10 rounded-full px-3 py-1.5">tracker</router-link>
                    <router-link to="/home" class=" bg-white bg-opacity-10 rounded-full px-3 py-1.5">discover</router-link>
                    <router-link to="/resources" class=" bg-white bg-opacity-10 rounded-full px-3 py-1.5">resources</router-link>
                    <ProfileIcon></ProfileIcon>
                </div>
            </Transition>

        </div>
    </nav>
    <Transition @click="open = false" name="modal-outer">
        <div v-if="open" class="absolute w-full h-full bg-black bg-opacity-60 backdrop-blur-[4px] z-30"></div>
    </Transition>
</template>

<style scoped>
.v-menu {
    transform-origin: top;
    transition: transform 100ms;
}

.menu-show-enter-from {
    transform: scaleY(0);
}

.menu-show-leave-to {
    opacity: 0;
}

#hamburger-icon {
    width: 16px;
    height: 12px;
    position: relative;
    margin: 50px auto;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .2s ease-in-out;
    -moz-transition: .2s ease-in-out;
    -o-transition: .2s ease-in-out;
    transition: .2s ease-in-out;
    cursor: pointer;
}

#hamburger-icon span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #ADADAD;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
}

#hamburger-icon span:nth-child(1) {
    top: 0px;
}

#hamburger-icon span:nth-child(2), #hamburger-icon span:nth-child(3) {
    top: 5.25px;
}

#hamburger-icon span:nth-child(4) {
    top: 10px;
}

#hamburger-icon.open span:nth-child(1) {
    top: 5.25px;
    width: 0%;
    left: 50%;
}

#hamburger-icon.open span:nth-child(2) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

#hamburger-icon.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}

#hamburger-icon.open span:nth-child(4) {
    top: 5.25px;
    width: 0%;
    left: 50%;
}
</style>
