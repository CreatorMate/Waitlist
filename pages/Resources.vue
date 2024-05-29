<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {Resource} from "~/src/SupabaseTypes";
    import ResourceComponent from "~/components/Resource.vue";
    import {useRouter} from "#app";
    import VideoPopup from "~/components/VideoPopup.vue";
    const supabase = useSupabaseClient();
    const resources: Ref<Resource[]> = ref([]);
    const categories: Ref<Set<string>> = ref(new Set);
    const selectedCat = ref("");
    const router = useRouter();

    onMounted(async() => {
        await getResources();
    })

    async function getResources() {
        const {data, error} = await supabase.from('resources').select('*');
        if(error) {
            //@todo toast popup
            return;
        }

        resources.value = data;
        resources.value.forEach((resource) => {
            categories.value.add(resource.category)
        })

        console.log(categories)
    }

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
        const date = new Date(createdAt)

        return date;
    }

    const open = true;
</script>

<template>
    <section class="w-full h-full mt-12">
        <div class="flex w-full justify-center gap-4 mb-6">
            <p :class="{
           'bg-opacity-20': selectedCat == '',
        }" @click="selectedCat = ''" class="rounded-full px-3 py-1.5 cursor-pointer transition lowercase bg-white text-white bg-opacity-10">All</p>
            <p :class="{
            'bg-opacity-20': selectedCat == category,
        }" @click="selectedCat = category" class="rounded-full px-3 py-1.5 cursor-pointer transition lowercase bg-white text-white bg-opacity-10" v-for="category of categories">{{category}}</p>
        </div>
        <div class="grid xxl:grid-cols-4 grid-cols-3 gap-6 px-40 pb-40">
            <ResourceComponent v-show="selectedCat == '' || resource.category == selectedCat " v-for="resource of resources" :resource></ResourceComponent>
        </div>
        <VideoPopup :model-active="open">
            <h3 class="text-3xl font-medium text-center">why do you as a content creator matter</h3>
            <div class="w-full">
                <iframe style="width: 100% !important;" allowfullscreen
                        src="https://youtube.com/embed/geJ17nbnbHg"></iframe>
            </div>
        </VideoPopup>
    </section>
</template>