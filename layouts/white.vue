<template>
    <div class="w-full h-full 5xl:flex 5xl:justify-center">
        <main class="text-black w-full">
            <HomeNav/>
            <slot></slot>
        </main>
    </div>

</template>
<script setup lang="ts">
</script>

<style>
html, body {
    background-color: white !important;
}
</style>