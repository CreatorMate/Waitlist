<script setup lang='ts'>
    const {name} = defineProps<{
        name: string
    }>();
</script>

<template>
    <div class="flex text-[#D1D1D1] text-xs items-center gap-2 mt-3">
        <Icon size="14" name="mage:pin"/>
        <p>posted by {{name}}</p>
    </div>
</template>