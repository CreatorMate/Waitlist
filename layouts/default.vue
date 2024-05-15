<script setup lang='ts'>

    import Sidebar from "~/components/Sidebar.vue";
</script>

<template>
    <div class="flex flex-grow max-h-screen ">
        <Sidebar></Sidebar>
        <section class="w-full h-full overflow-scroll p-6">
            <slot>

            </slot>
        </section>
    </div>
</template>