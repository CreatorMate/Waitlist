<script setup lang='ts'>
    import {RealtimeChannel} from "@supabase/realtime-js";
    import {SupabaseTables} from "~/src/SupabaseTypes";
    import {definePageMeta} from "#imports";
    import {useAccountStore} from "~/src/account/AccountStore";
    import {useRouter} from "#app";

    const client = useSupabaseClient();
    const activeProfilesCounter = ref("01192");
    const accountStore = useAccountStore();
    const router = useRouter();
    const showOnboarded = ref(false);

    useHead({
        title: 'waitlist signups - creatormate'
    })

    if (!accountStore.isAdmin) {
        await router.replace('/home')
    }

    let realtimeChannel: RealtimeChannel
    onMounted(async () => {
        await refreshList();
        realtimeChannel = client.channel('profile counter').on('postgres_changes', {
            event: '*',
            schema: 'public',
            table: SupabaseTables.UserProfiles
        }, async () => {
            await refreshList();
        }).subscribe();
    });

    onUnmounted(() => {
        client.removeChannel(realtimeChannel);
    })

    async function refreshList() {
        if(showOnboarded.value) {
            let {error, count} = await client
                .from(SupabaseTables.UserProfiles)
                .select('*', {count: 'exact'})
                .eq('completed_onboarding', true);

            if (error || !count) return;

            activeProfilesCounter.value = count.toString().padStart(5, '0');
        } else {
            let {error, count} = await client
                .from(SupabaseTables.UserProfiles)
                .select('*', {count: 'exact'});

            if (error || !count) return;

            activeProfilesCounter.value = count.toString().padStart(5, '0');
        }
    }

    async function switchCounterMode() {
        showOnboarded.value = !showOnboarded.value;
        await refreshList();
    }

    function isGray(index: number): boolean {
        const formatted = activeProfilesCounter.value.split('');
        if(formatted[index] !== '0') return false;
        const char = formatted[index];
        return !formatted.slice(0, index).some(c => c !== '0');
    }

    const number = 1
</script>

<template>
    <section style="background: radial-gradient(50% 50% at 50% 50%,rgba(255,255,255,0) 0%, rgb(0, 0, 0) 100%);" class="w-full h-full z-40 overflow-y-hidden overflow-x-hidden">
        <div class="w-full flex justify-center  p-10">
            <img class="cursor-pointer" @click="switchCounterMode()" alt="creator mate logo" src="/creatormate.svg">
        </div>
        <div class="flex items-center justify-center flex-col absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 v-if="!showOnboarded" class="font-semibold text-3xl absolute -top-10">waitlist signups</h1>
            <h1 v-if="showOnboarded" class="font-semibold text-3xl absolute -top-10">onboarded users</h1>
            <div class="flex gap-2 mt-10">
                <div :class="[
                    isGray(index) ? 'text-opacity-20 text-white' : ''
                ]" v-for="(char, index) in activeProfilesCounter" class="flex flex-col gap-2">
                    <div class="background-number pt-10">
                        <div class="half-number px-6 z-20">{{ char }}</div>
                    </div>
                    <div class="digit-container background-number px-6 pb-10">
                        <div class="digit">
                            <p class="absolute -top-1">{{ char }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <HomeCarousel></HomeCarousel>
</template>


<style scoped>
.digit-container {
    font-size: 164px;
    line-height: 0;
}

.digit {
    position: relative;
    overflow: hidden;
    height: 60px;
}

.half-number {
    height: 60px;
    overflow: hidden;
    line-height: 132px;
    font-size: 165px;
}

.background-number {
    border-radius: 16px;
    background: radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,0.10) 0%, rgb(0, 0, 0, 0.60) 100%);
    backdrop-filter: blur(8px);
}

</style>