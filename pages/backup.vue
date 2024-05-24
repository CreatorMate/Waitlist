<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import {definePageMeta} from "#imports";
    import {useToastStore} from "~/src/toast/ToastStore";
    import {ToastType} from "~/src/toast/ToastType";

    definePageMeta({
        layout: 'empty'
    })

    const router = useRouter();

    const user = useSupabaseUser();
    const supabase = useSupabaseClient();
    const accountStore = useAccountStore();
    const toastStore = useToastStore();

    toastStore.addToast("this is working!", ToastType.SUCCESS);

    const files = ref();

    async function uploadAvatar(evt: any) {
        files.value = evt.target.files;
        try {
            if(!files.value || files.value.length === 0) {
                throw new Error("Image must be selected")
            }

            const file = evt.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`
            const filePath = `${fileName}`
            const {error: uploadError, data} = await supabase.storage.from('avatars').upload(filePath, file);
            if(uploadError || !data) {
                return;
            }


            if(accountStore.avatar_url) {
                await supabase.storage.from('avatars').remove([accountStore.avatar_url]);
            }
            console.log(data.path)
            accountStore.avatar_url = data.path;
            await accountStore.update(user.value?.id);
        } catch (e) {
            alert("e");
        }
    }

    function finish() {
        router.push('/home')
    }
</script>

<template>
    <section class="flex flex-col">
        hello

        <img class="w-28 h-28 object-cover" :src="'https://jrirqcnnxpbhvmuugxnl.supabase.co/storage/v1/object/public/avatars/'+accountStore.avatar_url">
        <input
            type="file"
            id="single"
            accept="image/*"
            @change="uploadAvatar"
        />
        <div>
            <button @click="finish" class="w-50 p-2 bg-white text-black mt-auto">Finish onboarding</button>
        </div>

    </section>

</template>