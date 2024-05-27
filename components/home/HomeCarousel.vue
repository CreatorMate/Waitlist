<script setup lang='ts'>
    const blocks = ref(["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9",]);
</script>

<template>
    <div class="absolute top-0 left-0 w-screen h-screen max-w-screen max-h-screen overflow-hidden">
        <div class="w-[200vw] h-[200vh] rotate-[30deg] -translate-x-[36%] relative h-screen overflow-hidden">
            <div class="absolute w-fit flex flex-col gap-6 overflow-hidden">
                <div class="flex whitespace-nowrap relative">
                    <div class="flex gap-6 overflow-hidden home-carousel-left inline-block">
                        <div v-for="block of blocks" class="w-80 h-80 bg-red-600 first-of-type:ml-6">{{ block }}</div>
                    </div>
                    <div class="flex gap-6 overflow-hidden home-carousel-left">
                        <div v-for="block of blocks" class="w-80 h-80 bg-blue-500 first-of-type:ml-6">{{ block }}</div>
                    </div>
                </div>
                <div class="flex whitespace-nowrap relative">
                    <div class="flex gap-6 overflow-hidden home-carousel-right inline-block">
                        <div v-for="block of blocks" class="w-80 h-80 bg-red-600 first-of-type:ml-6">{{ block }}</div>
                    </div>
                    <div class="flex gap-6 overflow-hidden home-carousel-right">
                        <div v-for="block of blocks" class="w-80 h-80 bg-blue-500 first-of-type:ml-6">{{ block }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.home-carousel-left {
    animation: 15s slide-left infinite linear;
}

.home-carousel-right {
    animation: 15s slide-right infinite linear;
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
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
</style>
