<script setup lang='ts'>

</script>

<template>
    <header class="w-full flex justify-center">
        <div class="w-[1500px] h-20 flex items-center justify-between">
            <p class="font-semibold text-lg">creator mate</p>
            <a class="font-semibold text-lg">login</a>
        </div>
    </header>
    <section class="w-full flex flex-grow justify-center">
        <div class="w-[1500px]">
            <slot></slot>
        </div>
    </section>
    <footer class="w-full flex justify-center mt-auto">
        <div class="w-[1500px] h-20 flex items-center">
            footer
        </div>
    </footer>
</template>