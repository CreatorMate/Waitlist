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
    console.log(isActive)
</script>

<template>
    <div>
        <router-link :class="[
            isActive ? 'text-gray-100' : 'text-gray-400'
        ]" :to="to">{{name}}</router-link>
    </div>
</template>