<script setup lang='ts'>
    import {RealtimeChannel} from "@supabase/realtime-js";
    import {SupabaseTables} from "~/src/SupabaseTypes";
    import {definePageMeta} from "#imports";

    definePageMeta({
        layout: 'empty'
    })

    const client = useSupabaseClient();
    const activeProfilesCounter = ref("00000");
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
        console.log("hello world")
    });

    onUnmounted(() => {
        client.removeChannel(realtimeChannel);
    })

    async function refreshList() {
        let {error, count} = await client
            .from(SupabaseTables.UserProfiles)
            .select('*', {count: 'exact'})
            .eq('completed_onboarding', true);

        if(error || !count) return;

        activeProfilesCounter.value = count.toString().padStart(5, '0');
    }
</script>

<template>
    <div class="w-full h-full flex items-center justify-center flex-col">
        <h1 class="font-semibold text-6xl">People that joined the waitlist</h1>
        <h2 class="font-semibold text-[20rem] mt-2">{{ activeProfilesCounter }}</h2>
    </div>
</template>