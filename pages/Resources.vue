<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {Resource} from "~/src/SupabaseTypes";
    import {useRouter} from "#app";
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
</script>

<template>
    <div class="w-full h-full overflow-x-auto px-28">
        <h2 class="text-2xl font-normal my-8">resources</h2>
        <div class="flex gap-4 mb-6">
            <p :class="{
           'border-white text-white': selectedCat == '',
             'bg-black border-gray-400 text-gray-400': selectedCat != '',
        }" @click="selectedCat = ''" class="border rounded-full px-4 py-1 cursor-pointer transition hover:scale-110 lowercase">All</p>
            <p :class="{
            'border-white text-white': selectedCat == category,
            'bg-black border-gray-400 text-gray-400': selectedCat != category,
        }" @click="selectedCat = category" class="border rounded-full px-4 py-1 hover:scale-110 cursor-pointer transition lowercase" v-for="category of categories">{{category}}</p>
        </div>
        <div class="grid xxl:grid-cols-4 grid-cols-3 gap-6">
            <div @click="router.push(`/watch/${getYoutubeId(resource.youtube_url)}`)" class="bg-zinc-900 rounded-xl transition hover:scale-110 cursor-pointer" v-show="selectedCat == '' || resource.category == selectedCat " v-for="resource of resources">
                <img class="w-full rounded-xl" :alt="`creator mate resource ${resource.title}`" :src="`http://img.youtube.com/vi/${getYoutubeId(resource.youtube_url)}/mqdefault.jpg`">
                <div class="p-6">
                    <h2 class="text-lg">{{resource.title}}</h2>
                    <p class="mt-6 text-sm text-zinc-300">posted by jens on
                        {{getDate(resource.created_at).getDate()}}-{{getDate(resource.created_at).getMonth()+1}}-{{getDate(resource.created_at).getFullYear()}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>