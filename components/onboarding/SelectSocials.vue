<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";

    const accountStore = useAccountStore();

    const youtube = ref(accountStore.youtube)
    const instagram = ref(accountStore.instagram)
    const twitter = ref(accountStore.twitter)

    async function save() {
        if(!youtube && !instagram && !twitter) return;
        accountStore.twitter = twitter.value;
        accountStore.youtube = youtube.value;
        accountStore.instagram = instagram.value;
        emit('save');
    }

    const emit = defineEmits(['save']);
</script>

<template>
    <div class="flex flex-col gap-1 mt-2">
        <div class="flex">
            <p class="w-9 py-1 bg-white bg-opacity-10 rounded-l-lg text-center">IG</p>
            <input v-model="instagram" placeholder="Instagram username" class="pr-3 py-1 bg-white bg-opacity-10 rounded-r-lg border-0 outline-0 placeholder-opacity-20 placeholder-white" type="text">
        </div>
        <div class="flex">
            <p class="w-9 py-1 bg-white bg-opacity-10 rounded-l-lg text-center">X</p>
            <input v-model="twitter" placeholder="X username" class="pr-3 py-1 bg-white bg-opacity-10 rounded-r-lg border-0 outline-0 placeholder-opacity-20 placeholder-white" type="text">
        </div>
        <div class="flex">
            <p class="w-9 py-1 bg-white bg-opacity-10 rounded-l-lg text-center">YT</p>
            <input v-model="youtube" placeholder="YouTube username" class="pr-3 py-1 bg-white bg-opacity-10 rounded-r-lg border-0 outline-0 placeholder-opacity-20 placeholder-white" type="text">
        </div>
    </div>
    <button :class="[
        !youtube && !instagram && !twitter ? 'text-opacity-25' : ''
    ]" @click="save" class="bg-white bg-opacity-20 rounded-full py-1 px-3 mt-4 font-medium text-white">confirm</button>
</template>