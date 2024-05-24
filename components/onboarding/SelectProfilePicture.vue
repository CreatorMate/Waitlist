<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useToastStore} from "~/src/toast/ToastStore";
    import {ToastType} from "~/src/toast/ToastType";

    const emit = defineEmits(['uploaded']);

    const uploaded = ref(false);
    const imageLink = ref("");
    const image = ref("");
    const loading = ref(false);
    const fileInput = ref(null);

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const accountStore = useAccountStore();
    const toastStore = useToastStore();
    const files = ref();
    const acceptableTypes = ["image/jpg", "image/png", "image/jpeg", "image/gif", "image/svg"];

    async function selectImage(evt: any) {
        const maxSizeInBytes = 2 * 1024 * 1024;
        if(evt.target.files[0].size > maxSizeInBytes) {
            toastStore.addToast("Image can only be 2mb", ToastType.ERROR);
            return;
        }
        if(!acceptableTypes.includes(evt.target.files[0].type)) {
            toastStore.addToast("Image must be png,jpg,jpeg or svg", ToastType.ERROR);
            return;
        }
        files.value = evt.target.files;
        imageLink.value = URL.createObjectURL(evt.target.files[0])
        image.value = evt.target.files[0];
    }

    async function save() {
        if (!image.value) return;
        loading.value = true;
        const file = image.value;
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`
        const filePath = `${fileName}`
        const {error: uploadError, data} = await supabase.storage.from('avatars').upload(filePath, file);
        if (uploadError || !data || !user.value) {
            toastStore.addToast("Something went wrong while uploading you're picture", ToastType.ERROR)
            return;
        }
        if (accountStore.avatar_url) {
            await supabase.storage.from('avatars').remove([accountStore.avatar_url]);
        }

        accountStore.avatar_url = data.path;
        emit('uploaded');
    }
</script>

<template>
    <div class="flex flex-col mt-2 gap-4">
        <p class="text-gray-600">This can be changed later</p>
        <div @click="fileInput.click()"
             class="cursor-pointer relative border border-dotted border-gray-500 w-32 h-32 bg-zinc-900 flex justify-center items-center">
            <Icon v-if="!image" size="24px" name="material-symbols:add"></Icon>
            <img v-if="image" :src="imageLink" alt="profile picture" class="w-full h-full object-cover">
            <div v-if="image"
                 class="h-full w-full absolute top-0 left-0 hover:bg-zinc-800 hover:bg-opacity-55 bg-zinc-900 bg-opacity-55 flex justify-center items-center">
                <p v-if="!loading">change</p>
                <Icon size="32px" name="line-md:loading-twotone-loop" v-else></Icon>
            </div>
        </div>
        <div v-if="image">
            <button @click="save" class="px-4 py-2 bg-white text-black font-semibold">Looks good</button>
        </div>
        <input ref="fileInput" type="file" accept="image/*" @change="selectImage" style="display: none"/>
    </div>
</template>