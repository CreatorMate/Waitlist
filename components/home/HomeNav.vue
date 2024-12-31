<script setup lang='ts'>

</script>

<template>
    <nav class="flex justify-between items-center w-full px-32 pt-6">
        <NuxtImg class="w-10 " src="/logo-light.svg"></NuxtImg>
        <ul class="flex gap-9 text-sm">
            <li><NuxtLink class="hover" to="/work">work</NuxtLink></li>
            <li><NuxtLink to="/about-to">about us</NuxtLink></li>
        </ul>
        <HomeButton class="bg-black text-white"/>
    </nav>
</template>