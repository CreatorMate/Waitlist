<script setup lang='ts'>
    const {direction} = defineProps<{
        direction: string,
    }>();
</script>

<template>
    <div class="flex whitespace-nowrap relative">
        <div :class="[
            direction === 'left' ? 'home-carousel-left' : 'home-carousel-right'
        ]" class="flex gap-6 overflow-hidden duration-150">
            <slot></slot>
        </div>
        <div :class="[
            direction === 'left' ? 'home-carousel-left' : 'home-carousel-right'
        ]" class="flex gap-6 overflow-hidden ">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.home-carousel-left {
    animation: 90s slide-left infinite linear;
}

.home-carousel-right {
    animation: 90s slide-right infinite linear;
}

@keyframes slide-left {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
        -ms-transform: translateY(0);
        -moz-transform: translateY(0);
        -o-transform: translateY(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
        -moz-transform: translateX(-100%);
        -o-transform: translateX(-100%);
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