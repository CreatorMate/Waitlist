<script setup lang='ts'>
    const blocks = ["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8"];
</script>

<template>
    <div class="absolute top-0 left-0 w-fit flex flex-col gap-6 rotate-[30deg] z-10 -translate-x-[46%] overflow-hidden">
        <div class="  flex gap-2 overflow-hidden home-carousel-left ">
            <div v-for="block of blocks" class="w-80 h-80 bg-red-600">{{ block }}</div>
        </div>
        <div class="  flex gap-2 overflow-hidden home-carousel-right ">
            <div v-for="block of blocks" class="w-80 h-80 bg-red-600">{{ block }}</div>
        </div>
    </div>

</template>

<style scoped>
.home-carousel-left {
    animation: 1500s slide-left infinite linear;
}

.home-carousel-right {
    animation: 1500s slide-right infinite linear;
}

@keyframes slide-left {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}
@keyframes slide-right {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}
</style>
