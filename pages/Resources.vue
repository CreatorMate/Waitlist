<script setup lang='ts'>
    import {onMounted, type Ref} from "vue";
    import type {Resource} from "~/src/SupabaseTypes";
    import ResourceComponent from "~/components/Resource.vue";
    import {useRouter} from "#app";

    const supabase = useSupabaseClient();
    const resources: Ref<Resource[]> = ref([]);
    const currentResources: Ref<Resource[]> = ref([]);
    const categories: Ref<Set<string>> = ref(new Set);
    const selectedCat = ref("");
    const router = useRouter();
    const loading = ref(true);

    onMounted(async () => {
        await getResources();
    })

    async function getResources() {
        const {data, error} = await supabase.from('resources').select('*');
        if (error) {
            console.log(error)
            //@todo toast popup
            return;
        }
        loading.value = false;
        resources.value = data
        currentResources.value = data
        resources.value.forEach((resource) => {
            categories.value.add(resource.category)
        })

        console.log(resources.value)
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
            <div v-if="!loading" class="w-full h-full mt-12">
                <div class="flex w-full justify-center gap-4 mb-6">
                    <p :class="{
           'bg-opacity-20': selectedCat == '',
        }" @click="changeCategory('')"
                       class="rounded-full px-3 py-1.5 cursor-pointer transition lowercase bg-white text-white bg-opacity-10">
                        All</p>
                    <p :class="{
            'bg-opacity-20': selectedCat == category,
        }" @click="changeCategory(category)"
                       class="rounded-full px-3 py-1.5 cursor-pointer transition lowercase bg-white text-white bg-opacity-10"
                       v-for="category of categories">{{ category }}</p>
                </div>
                <div class="grid xxl:grid-cols-4 grid-cols-3 gap-6 px-40 pb-40">
                    <div v-for="current of currentResources" :key="current.created_at">
                        <ResourceComponent :resource="current"></ResourceComponent>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>