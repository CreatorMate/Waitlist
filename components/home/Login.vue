<script setup lang='ts'>
    import {onMounted} from "vue";
    import {useRouter} from "#app";

    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const emit = defineEmits(['verify'])
    const email = ref("");
    const router = useRouter();

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
        const response = await supabase.auth.signInWithOtp({email: email.value});
        if(response.error) {
            //@todo show error
            return;
        }

        emit('verify', email.value);
    }
</script>

<template>
    <h2 class="text-2xl mb-6 font-medium">create account</h2>
    <button @click="withGoogle" class="bg-white w-full rounded-full py-3 text-black font-medium leading-6">
        <Icon class="mr-1 pb-1 leading-6" size="24px" name="ri:google-fill"></Icon>
        continue with google
    </button>
    <div class="flex items-center w-full">
        <div class="h-[1px] w-full mx-4 bg-white bg-opacity-20"></div>
        <p class="py-4 text-white text-opacity-40">or</p>
        <div class="h-[1px] w-full mx-4 bg-white bg-opacity-20"></div>
    </div>
    <input @keydown.enter="signIn" v-model="email" placeholder="your@email.com" style="background-color: rgba(255, 255, 255, 0.10)" class="w-full py-3 px-4 text-center rounded-full placeholder-opacity-40 placeholder-white text-white text-opacity-40 mb-2" type="email">
    <button class="px-3 py-3 rounded-full bg-white bg-opacity-20 w-full mb-6">continue with email</button>
    <p class="text-white text-opacity-40">already have an account? <span class="text-white font-normal hover:underline cursor-pointer">login here</span></p>
</template>