<script setup lang='ts'>
    import {onMounted} from "vue";
    import {useRouter} from "#app";
    import {useToastStore} from "~/src/toast/ToastStore";

    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const emit = defineEmits(['verify'])
    const email = ref("");
    const router = useRouter();
    const toastStore = useToastStore();
    const loading = ref(false);
    const emailRegex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validationError = ref(false);

    onMounted(async () => {
        if(user.value) {
            await router.push('/callback')
        }
    })
    async function withGoogle() {
        const {data, error} = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/callback`,
            }
        });
    }

    async function signIn() {
        if(loading.value) return;
        if(!emailRegex.test(email.value)) {
            validationError.value = true;
            return;
        }
        validationError.value = false;
        loading.value = true;
        const response = await supabase.auth.signInWithOtp({email: email.value});
        loading.value = false;
        if(response.error) {
            toastStore.addToast("something went wrong while trying to email you, come back again later", ToastType.ERROR);
            return;
        }

        emit('verify', email.value);
    }
</script>

<template>
    <h2 class="text-2xl mb-6 font-medium">create account</h2>
    <button @click="withGoogle" class="bg-white w-full rounded-full py-3 text-black font-medium leading-6 hover:bg-gray-200 transition duration-300">
        <Icon class="mr-1 pb-1 leading-6" size="24px" name="ri:google-fill"></Icon>
        continue with google
    </button>
    <div class="flex items-center w-full">
        <div class="h-[1px] w-full mx-4 bg-white bg-opacity-20"></div>
        <p class="py-4 text-white text-opacity-40">or</p>
        <div class="h-[1px] w-full mx-4 bg-white bg-opacity-20"></div>
    </div>
    <input @keydown.enter="signIn" v-model="email" placeholder="your@email.com" style="background-color: rgba(255, 255, 255, 0.10)" class="w-full py-3 px-4 text-center rounded-full placeholder-opacity-40 placeholder-white text-white text-opacity-40 mb-2" type="email">
    <button @click="signIn" v-if="!loading" class="px-3 py-3 rounded-full bg-white bg-opacity-20 w-full mb-6 hover:bg-opacity-15 transition duration-300">continue with email</button>
    <button v-else class="px-3 py-3 rounded-full bg-white bg-opacity-20 w-full mb-6">
        <Icon size="23" name="line-md:loading-loop"></Icon>
    </button>
    <p v-if="validationError" class="mb-6 text-red-500">Please enter a valid email</p>
    <p class="text-white text-opacity-40">already have an account? <span class="text-white font-normal hover:underline cursor-pointer">login here</span></p>
</template>