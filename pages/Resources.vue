<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {Resource} from "~/src/SupabaseTypes";
    import ResourceComponent from "~/components/Resource.vue";
    import {useRouter} from "#app";

    const supabase = useSupabaseClient();
    const currentResources: Ref<Resource[]> = ref([]);
    const categories: Ref<Set<string>> = ref(new Set);
    const selectedCat = ref("");
    const router = useRouter();
    const loading = ref(true);

    useHead({
        title: 'resources - creatormate'
    })

    const resources: Ref<Resource[]> = ref([]);

    onMounted(async () => {
        await getResources();
    })

    async function getResources() {
        const {data, error} = await supabase.from('resources').select('*');
        if (error) {
            //@todo toast popup
            return;
        }
        loading.value = false;
        resources.value = data




        // currentResources.value = data
        // resources.value.forEach((resource) => {
        //     categories.value.add(resource.category)
        // })

    }

    function canDisplay(resource: Resource): boolean {
        if (!resource) return false;
        return selectedCat.value == '' || resource.category == selectedCat.value
    }

    function changeCategory(category: string) {
        selectedCat.value = category;
        if (category == '') {
            currentResources.value = resources.value;
            return;
        } else {
            currentResources.value = resources.value.filter((resource) => resource.category == category)
        }

    }
</script>

<template>
    <section class="flex flex-col flex-grow overflow-x-hidden">
        <TopBar></TopBar>
        <div class=" w-full h-full">
            <div v-if="!loading && currentResources.length == 0" class="flex justify-center w-full mt-6 md:mt-12">
                <p>No resources yet!, please check back soon</p>
            </div>
            <div v-else-if="!loading" class="w-full mt-6 md:mt-12 flex flex-col items-center px-7 md:px-20 xl:px-40">
                <div class="flex w-full sm:justify-center gap-1 flex-wrap">
                    <p :class="[selectedCat == '' ? 'bg-opacity-20': 'text-opacity-60']"
                       @click="changeCategory('')"
                       class="rounded-full px-3 py-1.5 cursor-pointer transition lowercase duration-100 bg-white text-white bg-opacity-10">
                        All</p>
                    <p :class="[selectedCat == category ? 'bg-opacity-20': 'text-opacity-60']"
                       @click="changeCategory(category)"
                       class="rounded-full px-3 py-1.5 cursor-pointer transition duration-100 lowercase bg-white text-white bg-opacity-10"
                       v-for="category of categories">{{ category }}</p>
                </div>
                <div
                    class="grid xxl:grid-cols-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 mt-6 gap-6 mb-10 max-w-[1600px]">
                    <div v-for="current of currentResources" :key="current.created_at">
                        <ResourceComponent :resource="current"></ResourceComponent>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>