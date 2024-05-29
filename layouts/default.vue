<script setup lang='ts'>

    import TopBar from "~/components/TopBar.vue";
</script>

<template>
    <div class="flex flex-col flex-grow max-h-screen overflow-x-hidden ">
        <TopBar/>
        <slot>

        </slot>
    </div>
</template>