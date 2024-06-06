<script lang="ts" setup>
    import './assets/css/tailwind.css'
    import {useAccountStore} from "~/src/account/AccountStore";
    const supabase = useSupabaseClient();
    const user = useSupabaseUser();
    const accountStore = useAccountStore();

    supabase.auth.onAuthStateChange(async (event, session: any) => {
        if(event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
            const maxAge = 14 * 24 * 60 * 60;
            // document.cookie = `cmat=${session.access_token}; Domain=.localhost; Path=/; Max-Age=${maxAge}; SameSite=Strict;`;
            // document.cookie = `cmrt=${session.refresh_token}; Domain=localhost; Path=/; Max-Age=${maxAge} SameSite=Strict;`;
            document.cookie = `cmat=${session.access_token}; Domain=.creatormate.com; Path=/; Max-Age=${maxAge}; Secure; SameSite=Strict;`;
            document.cookie = `cmrt=${session.refresh_token}; Domain=creatormate.com; Path=/; Max-Age=${maxAge}; Secure SameSite=Strict;`;
        } else if (event === 'SIGNED_OUT') {
            // document.cookie = `cmat=; Domain=.localhost; Path=/; Expires=${new Date(0).toUTCString()}; Secure; SameSite=Strict;`;
            // document.cookie = `cmrt=; Domain=.localhost; Path=/; Expires=${new Date(0).toUTCString()}; Secure; SameSite=Strict;`;
            document.cookie = `cmat=; Domain=.creatormate.com; Path=/; Expires=${new Date(0).toUTCString()}; Secure; SameSite=Strict;`;
            document.cookie = `cmrt=; Domain=.creatormate.com; Path=/; Expires=${new Date(0).toUTCString()}; Secure; SameSite=Strict;`;
        }
    })
</script>

<template>
    <main class="screen-size bg-black text-white flex flex-col lowercase">
        <ToastModel></ToastModel>
        <NuxtLayout>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
    </main>
</template>