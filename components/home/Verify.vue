<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    let text = ref("");
    const loading = ref(false);
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const accountStore = useAccountStore();
    const form = ref();
    const router = useRouter();

    const {email} = defineProps<{
        email: string
    }>();

    const inputs = 6;

    async function reSend() {
        const response = await supabase.auth.signInWithOtp({email: email});
        if(response.error) {
            //@todo show error
            return;
        }
    }

    async function verify() {
        loading.value = true;
        const {error, data} = await supabase.auth.verifyOtp({email: email, token: text.value, type: 'email'});
        loading.value = false;

        //@todo display error
        if(error) return;
        await router.push('/callback');
    }

    watchEffect(() => {
        if(text.value.length === 6) {
            verify();
        }
    })

    async function updateText() {
        text.value = "";
        const inputs = [...form.value.querySelectorAll('input[type=text]')]

        inputs.forEach((input) => {
            text.value += input.value;
        });

        if (text.value.length === 6) {
            await verify();
        }
    }

    function handlePaste(e: any) {
        e.preventDefault();
        const text = e.clipboardData.getData('text')
        const inputs = [...form.value.querySelectorAll('input[type=text]')]
        if (!new RegExp(`^[0-9]{${inputs.length}}$`).test(text)) {
            return
        }
        const digits = text.split('')
        inputs.forEach((input, index) => input.value = digits[index])
        updateText();
    }

    function handleInput(e: any) {
        const {target} = e
        const inputs = [...form.value.querySelectorAll('input[type=text]')]
        const index = inputs.indexOf(target)
        if (target.value) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus()
            }
        }
    }

    function handleKeyDown (e: any) {
        if (
            !/^[0-9]{1}$/.test(e.key)
            && e.key !== 'Backspace'
            && e.key !== 'Delete'
            && e.key !== 'Tab'
            && !e.metaKey
        ) {
        }
        const inputs = [...form.value.querySelectorAll('input[type=text]')]
        if (e.key === 'Delete' || e.key === 'Backspace') {
            const index = inputs.indexOf(e.target);
            if (index > 0) {
                inputs[index].value = '';
                inputs[index - 1].focus();
            }
        }
    };

</script>

<template>
    <h2 class="text-2xl mb-6 font-medium">verify email</h2>
    <p class="text-white text-opacity-40 mb-4">enter the code sent to your email address</p>
    <form ref="form" @submit.prevent="verify" class="h-full">
        <div class="grid grid-cols-6 gap-2">
            <input v-for="index in inputs" :key="index"
                   @change="updateText"
                   @input="handleInput"
                   @paste="handlePaste"
                   @keydown="handleKeyDown"
                   type="text"
                   class="p-4 h-[56px] text-center text-white bg-white bg-opacity-10 rounded border border-white border-opacity-20 active:border-opacity-0"
                   pattern="\d*" maxlength="1"/>
        </div>
        <div class="max-w-[260px] mx-auto mt-4">
        </div>
    </form>
    <p class="text-white text-opacity-40">didn't receive the code? <span class="font-medium text-white">resend</span></p>
</template>