<script setup lang='ts'>
    import type {Resource} from "~/src/SupabaseTypes";
    import VideoPopup from "~/components/VideoPopup.vue";
    const {resource} = defineProps<{
        resource: Resource
    }>()

    const open = ref(false);

    function getYoutubeId(): string {
        const regexPattern = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/

        const match = resource.youtube_url.match(regexPattern);
        if (match && match[1]) {
            const videoId = match[1];
            return videoId
        } else {
            return "";
        }
    }
    function getDate(createdAt: any) {
        return new Date(createdAt)
    }
</script>

<template>
    <div @click="open = true" class="transition hover:scale-110 cursor-pointer bg-white bg-opacity-10 rounded-2xl p-1">
        <img class="w-full rounded-xl" :alt="`creator mate resource ${resource.title}`" :src="`http://img.youtube.com/vi/${getYoutubeId()}/mqdefault.jpg`">
        <div class="m-4 h-20 font-medium flex flex-col flex-grow justify-between">
            <h2 class="text-center">{{resource.title}}</h2>
            <p class="mt-2 text-sm text-white text-opacity-40 text-center">posted by jens on
                {{getDate(resource.created_at).getDate()}}-{{getDate(resource.created_at).getMonth()+1}}-{{getDate(resource.created_at).getFullYear()}}
            </p>
        </div>
    </div>
    <VideoPopup @close="open = false" :model-active="open">
        <h3 class="text-2xl font-medium text-center mb-6">why do you as a content creator matter</h3>
        <div class="w-full h-auto rounded-full">
            <iframe style="aspect-ratio: 16 / 9;" class="h-auto w-full rounded-2xl" allowfullscreen
                    :src="`https://youtube.com/embed/${getYoutubeId()}`"></iframe>
        </div>
    </VideoPopup>
</template>