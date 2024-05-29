<script setup lang='ts'>
    import {useRouter} from "#app";

    const router = useRouter();
    const {name, to} = defineProps<{
        name: string,
        to: string
    }>()

    const isActive = ref<boolean>(false);

    watchEffect(() => {
        isActive.value = router.currentRoute.value.path.includes(to);
    });
</script>

<template>
    <div>
        <router-link
            :class="[
                isActive ? 'bg-white bg-opacity-20' : 'bg-white bg-opacity-10 text-opacity-60'
        ]" :to="to"
            class="px-3 py-1.5 rounded-full text-white"
        >
            {{name}}
        </router-link>
    </div>
</template>