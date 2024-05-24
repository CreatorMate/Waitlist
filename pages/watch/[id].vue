<script setup lang='ts'>
    const route = useRoute();
    console.log(route.params.id)

    function getYoutubeEmbed() {
        return `https://youtube.com/embed/${route.params.id}`
    }
</script>

<template>
    <div class="w-full h-full flex justify-center items-center">
        <iframe allowfullscreen width="500" height="350"
                :src="getYoutubeEmbed()"></iframe>
    </div>

</template>