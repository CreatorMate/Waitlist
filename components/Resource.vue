<script setup lang='ts'>
    import type {Resource} from "~/src/SupabaseTypes";
    import VideoPopup from "~/components/VideoPopup.vue";
    const {resource} = defineProps<{
        resource: Resource
    }>()

    const open = ref(false);

    function getYoutubeId(url: string): string {
        const regexPattern = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/

        const match = url.match(regexPattern);
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

    const url = `/watch/${getYoutubeId(resource.youtube_url)}`;
</script>

<template>
    <div class="transition hover:scale-110 cursor-pointer bg-white bg-opacity-10 rounded-2xl p-1">
        <img class="w-full rounded-xl" :alt="`creator mate resource ${resource.title}`" :src="`http://img.youtube.com/vi/${getYoutubeId(resource.youtube_url)}/mqdefault.jpg`">
        <div class="m-4 h-20 font-medium flex flex-col flex-grow justify-between">
            <h2 class="text-center">{{resource.title}}</h2>
            <p class="mt-2 text-sm text-white text-opacity-40 text-center">posted by jens on
                {{getDate(resource.created_at).getDate()}}-{{getDate(resource.created_at).getMonth()+1}}-{{getDate(resource.created_at).getFullYear()}}
            </p>
        </div>
    </div>
    <VideoPopup :model-active="open">

    </VideoPopup>
</template>