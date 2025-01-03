<script setup lang='ts'>
    const open = ref(false);
</script>

<template>
    <nav class=" justify-between items-center w-full px-32 pt-6 hidden lg:flex">
        <NuxtLink to="/">
            <NuxtImg class="w-10" src="/logo-light.svg"></NuxtImg>
        </NuxtLink>
        <ul class="flex gap-9 text-sm">
            <li><NuxtLink class="hover" to="/work">work</NuxtLink></li>
            <li><NuxtLink to="/about-us">about us</NuxtLink></li>
        </ul>
        <HomeButton class="bg-black text-white"/>
    </nav>
    <nav class=" justify-between items-center w-full px-3 pt-6 lg:hidden flex">
        <NuxtLink to="/">
            <NuxtImg class="w-10" src="/logo-light.svg"></NuxtImg>
        </NuxtLink>
        <div @click="open = !open">
            <div :class="{
                'open': open
            }" id="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <Transition name="menu-show">
                <div v-show="open" class="z-50 bg-white v-menu absolute flex items-center flex-col gap-1 top-12 font-medium right-0 w-full">
                    <router-link to="/work" class=" bg-white bg-opacity-10 rounded-full px-3 py-1.5">work</router-link>
                    <router-link to="/about-us" class=" bg-white bg-opacity-10 rounded-full px-3 py-1.5">about-us</router-link>
                </div>
            </Transition>
        </div>
    </nav>
</template>

<style scoped>
#hamburger-icon {
    width: 16px;
    height: 12px;
    position: relative;
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
    background: #000000;
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
</style>