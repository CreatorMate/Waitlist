<script setup lang='ts'>
    import {definePageMeta} from "#imports";
    import WorkBlock from "~/components/home/WorkBlock.vue";

    definePageMeta({
        layout: 'white'
    });

    useHead({
        title: `creatormate - work`
    })

    const supabase = useSupabaseClient();
    const {data} = supabase.storage.from('CM_WEB').getPublicUrl('boni_laugh.png',
        {
            transform:
                {
                    height: 900
                }
        });


</script>

<template>
    <section class="flex flex-col items-center bg-white">
        <h1 class="text-center text-[36px] leading-[32px] lg:text-[96px] lg:leading-[86px] mt-12 lg:pt-32 pageTitle">
            make your brand account <br/> interesting to follow</h1>
        <h2 class="px-3 lg:w-1/2 text-center text-sm lg:text-base normal-case mt-6 pageTitle">Your brand’s social
            account should be more than just a sales pitch. It should entertain, inform, and inspire. People follow
            accounts they connect with—authentic stories, not just products. Check out the examples of brands and
            creators we’ve worked with below.</h2>
        <HomeButton class="mt-6 mb-12 text-xl bg-black text-white pageTitle"/>
        <NuxtImg height="900" class="w-full px-3 lg:px-32 mb-10" :src="data.publicUrl"></NuxtImg>
        <WorkBlock title="trycreatormate"
                   video_1="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/trycreatormate1.mp4?t=2025-01-13T11%3A08%3A43.389Z"
                   video_2="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/trycreatormate2.mp4?t=2025-01-13T11%3A08%3A51.767Z"
                   video_3="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/trycreatormate3.mp4?t=2025-01-13T11%3A08%3A58.143Z"
                   description="helping creators make the internet a better place" label="case study"></WorkBlock>
        <WorkBlock class="bg-black text-white" title="luckyegg"
                   video_1="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/luckyegg1.mp4?t=2025-01-13T11%3A09%3A10.010Z"
                   video_2="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/luckyegg2.mp4?t=2025-01-13T11%3A09%3A15.888Z"
                   video_3="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/luckyegg3.mp4?t=2025-01-13T11%3A09%3A21.397Z"
                   description="we make the world's best party games" label="example"></WorkBlock>
        <WorkBlock title="buildspace"
                   video_1="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/buildspace1.mp4"
                   video_2="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/buildspace2.mp4?t=2025-01-13T11%3A09%3A37.571Z"
                   video_3="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/buildspace3.mp4"
                   description="we're the place where people build cool shit" label="example"></WorkBlock>
        <WorkBlock class="bg-black text-white" title="mousecase"
                   video_1="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/mouscase1.mp4"
                   video_2="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/mouscase2.mp4?t=2025-01-13T11%3A15%3A27.629Z"
                   video_3="https://accounts.creatormate.com/storage/v1/object/public/CM_WEB/mousecase3.mp4"
                   description="live without limits" label="example"></WorkBlock>
        <HomeFooter></HomeFooter>
    </section>
</template>