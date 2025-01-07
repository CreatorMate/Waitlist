<script setup lang='ts'>
    const {video} = defineProps<{
        video: string
    }>();

    const videoRef = ref<HTMLVideoElement | null>(null);
    const muted = ref(true);

    const showControls = () => {
        if (videoRef.value) {
            videoRef.value.muted = false;
        }
    };

    // Hide controls when mouse leaves
    const hideControls = () => {
        if (videoRef.value) {
            videoRef.value.muted = true;
        }
    };
</script>

<template>
    <video @click="muted = !muted" autoplay loop :muted="muted" ref="videoRef" width="100%" height="100%" v-if="video" :src="video" class="rounded-xl"></video>
    <Icon size="16" v-if="!muted" class="absolute top-6 right-6 z-50" name="mdi:speakerphone"></Icon>
    <Icon size="16" v-if="muted" class="absolute top-6 right-6 z-50" name="mdi:speakerphone-off"></Icon>
</template>