<script setup lang='ts'>
    const {name, to} = defineProps<{
        name: string,
        to: string
    }>()
</script>

<template>
    <div>
        <router-link :to="to">{{name}}</router-link>
    </div>
</template>