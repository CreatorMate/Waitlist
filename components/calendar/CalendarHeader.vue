<script setup lang='ts'>
    import PrimaryButton from "~/components/common/PrimaryButton.vue";

    const user = useSupabaseUser();
    const emits = defineEmits(['joinButton']);
</script>

<template>
    <nav class="py-4 px-20 flex items-center justify-between">
        <NuxtImg class="h-4" src="/favicon.svg"></NuxtImg>
        <div class="flex gap-4">
            <button class="font-semibold hover:text-opacity-80 text-white">login</button>
            <PrimaryButton @click="emits('joinButton')">
                <div class="flex items-center gap-1">
                    <p>join here</p>
                    <icon name="tabler:arrow-right"></icon>
                </div>
            </PrimaryButton>
        </div>
    </nav>
</template>