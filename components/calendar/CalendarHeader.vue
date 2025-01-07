<script setup lang='ts'>
    import PrimaryButton from "~/components/common/PrimaryButton.vue";
    import MainButton from "~/components/common/MainButton.vue";

    const user = useSupabaseUser();
    const emits = defineEmits(['joinButton']);
</script>

<template>
    <nav class="py-4 px-6 md:px-10 xl:px-20 flex items-center justify-between">
        <NuxtImg class="h-4" src="/logo-light.svg"></NuxtImg>
        <div class="flex gap-4">
            <button @click="emits('joinButton')" class="font-semibold hover:text-opacity-80 text-white">login</button>
            <MainButton @click="emits('joinButton')">
                <div class="flex items-center gap-1">
                    <p class="font-semibold">join here</p>
                    <icon name="tabler:arrow-right"></icon>
                </div>
            </MainButton>
        </div>
    </nav>
</template>