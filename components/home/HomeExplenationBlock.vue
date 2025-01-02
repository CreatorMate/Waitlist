<script setup lang='ts'>
    const {number, title, items} = defineProps<{
        number: string, title: string, items: string[]
    }>();

    const open = ref(false);
</script>

<template>
    <div @click="open = !open" class="border-b py-7 first-of-type:border-t border-[#5E5E5E] flex flex-col transition-all duration-150 cursor-pointer hover:pl-8">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-14">
                <p class="text-[36px] pt-3">{{ number }}</p>
                <p class="text-[64px]">{{ title }}</p>
            </div>
            <Icon class="text-[#1C1B1F]" :class="{
            'rotate-180': open
        }" size="64" name="mdi:arrow-down"></Icon>
        </div>
        <transition name="menu-show">
            <div v-if="open" class="v-menu">
                <div class="ml-[95px] flex items-center gap-1" v-for="item of items">
                    <icon name="mdi:add"></icon>
                    <p>{{ item }}</p>
                </div>
            </div>
        </transition>
    </div>
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
</style>