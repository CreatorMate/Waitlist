<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {Resource} from "~/src/SupabaseTypes";
    const supabase = useSupabaseClient();
    const resources: Ref<Resource[]> = ref([]);
    const categories: Ref<Set<string>> = ref(new Set);
    const selectedCat = ref("");

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

    function getYoutubeEmbed(url: string): string {
        const regexPattern = /youtu(?:.*\/v\/|.*v\=|\.be\/)([A-Za-z0-9_\-]{11})/

        const match = url.match(regexPattern);
        if (match && match[1]) {
            const videoId = match[1];
            return "https://youtube.com/embed/" + videoId
        } else {
            return "";
        }
    }
</script>

<template>
    <div class="w-full h-full overflow-x-auto">
        <div class="flex gap-4 mb-4">
            <p :class="{
            'text-black bg-white': selectedCat == '',
            'bg-black border border-white': selectedCat != '',
        }" @click="selectedCat = ''" class="rounded-full px-8 py-2 cursor-pointer transition hover:scale-110">All</p>
            <p :class="{
            'text-black bg-white': selectedCat == category,
            'bg-black border border-white': selectedCat != category,
        }" @click="selectedCat = category" class="rounded-full px-8 py-2 hover:scale-110 cursor-pointer transition" v-for="category of categories">{{category}}</p>
        </div>
        <div class="flex flex-wrap gap-4">
            <div v-show="selectedCat == '' || resource.category == selectedCat " v-for="resource of resources">
                <iframe allowfullscreen width="300" height="200"
                        :src="getYoutubeEmbed(resource.youtube_url)"></iframe>
                <h2>{{resource.title}}</h2>
            </div>
        </div>
    </div>
</template>