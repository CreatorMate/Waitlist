<script setup lang="ts">
    import LoginDialog from "~/components/login-dialog.vue";
    import {onMounted, type Ref} from "vue";
    import {definePageMeta} from "#imports";

    definePageMeta({
        layout: 'platform'
    })

    const user = useSupabaseUser();

    const client = useSupabaseClient();

    const madeCall = ref(false);
    const success: Ref<null|boolean> = ref(false);

    async function logout() {
        await client.auth.signOut();
    }

    async function test() {
        const {data: {session}} = await client.auth.getSession();
        const user = await client.auth.getUser(session?.access_token);
        console.log(user);


        console.log(session?.access_token)
        const call = await fetch('http://localhost:5179/WeatherForecast', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer " + session?.access_token,
            },
        });

        madeCall.value = true;
        success.value = call.ok;

        const response = await call.json();
        console.log(response);
    }

    const router = useRouter();
</script>

<template>
    <login-dialog v-if="!user"></login-dialog>
    <section class="flex flex-grow flex-col justify-center h-full items-start gap-6">
        <h1 v-if="user" class="text-8xl flex-wrap">{{user.email}}</h1>
        <h1 v-else class="text-8xl flex-wrap">The all in one workspace for creators</h1>
        <p v-if="madeCall && success">Success</p>
        <p v-if="madeCall && !success">Error</p>
        <p></p>
        <div class="flex gap-4">
            <button @click="logout" class="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-100">Logout</button>
            <button @click="test" class="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-100">Make call</button>
            <button @click="router.push('onboarding')" class="px-4 py-2 bg-white text-black font-semibold hover:bg-gray-100">Account</button>
        </div>
    </section>
</template>