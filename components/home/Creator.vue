<script setup lang='ts'>
    import type {Creator} from "~/src/creators/creators";

    const {creator} = defineProps<{
        creator: Creator,
    }>();

    console.log("created");
</script>

<template>
    <div class="flex flex-col text-center font-medium">
        <img :alt="`Creatormate friend ${creator.name}`" class="min-h-[220px] min-w-[220px]  xs:min-w-[280px] xs:min-h-[280px] md:min-w-[300px] md:min-h-[300px] xl:min-h-[360px] xl:min-w-[360px] 4xl:min-h-[400px] 4xl:min-w-[400px] 5xl:min-h-[600px] 5xl:min-w-[600px] 6xl:min-h-[700px] 6xl:min-w-[700px] object-cover rounded-lg" :src="`/creators/${creator.name}.png`">
        <div class="p-1 flex flex-col py-2">
            <h3 class="text-xl md:text-2xl">{{creator.name}}</h3>
            <p class="text-gray-400">{{creator.followers}} followers</p>
        </div>
    </div>
</template>