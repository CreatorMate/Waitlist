<script setup lang='ts'>
    const {name, followers, image} = defineProps<{
        name: string,
        followers: number,
        image: string
    }>();
</script>

<template>
    <div class="flex flex-col text-center font-medium">
        <img :alt="`Creatormate friend ${name}`" class="min-w-[300px] min-h-[300px] object-cover rounded-lg" :src="image">
        <div class="p-1 flex flex-col py-2">
            <h3 class="text-2xl">{{name}}</h3>
            <p class="text-gray-400">{{followers}} followers</p>
        </div>
    </div>
</template>