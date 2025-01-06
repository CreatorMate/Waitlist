<script setup lang='ts'>
    const {number, title, items} = defineProps<{
        number: string, title: string, items: string[]
    }>();

    const open = ref(false);
</script>

<template>
    <div @click="open = !open" class="border-b py-7 first-of-type:border-t border-[#5E5E5E] flex flex-col transition-all duration-150 cursor-pointer hover:lg:pl-4">
        <div class="flex justify-between items-center">
            <div class="flex items-center gap-3 lg:gap-14">
                <p class="text-2xl lg:text-[36px] lg:pt-3 gelica font-light">{{ number }}</p>
                <p class="text-2xl lg:text-[64px]">{{ title }}</p>
            </div>
            <Icon class="text-[#1C1B1F] flex lg:hidden" :class="{
            'rotate-180': open
        }" size="32" name="mdi:arrow-down"></Icon>
            <Icon class="text-[#1C1B1F] hidden lg:flex w-[28px] h-[31px]" :class="{
            'rotate-180': open
        }" name="mdi:arrow-down"></Icon>
        </div>
        <transition name="menu-show">
            <div v-if="open" class="v-menu mt-6">
                <div class="lg:ml-[95px] flex items-center gap-1" v-for="item of items">
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