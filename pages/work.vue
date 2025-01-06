<script setup lang='ts'>
import {definePageMeta} from "#imports";
import WorkBlock from "~/components/home/WorkBlock.vue";

definePageMeta({
    layout: 'white'
});

useHead({
    title: `creatormate - work`
})

</script>

<template>
    <section class="flex flex-col items-center bg-white">
        <h1 class="text-center text-[36px] leading-[32px] lg:text-[96px] lg:leading-[86px] mt-12 lg:pt-32 pageTitle">make your brand account <br/> interesting to follow</h1>
        <h2 class="px-3 lg:w-1/2 text-center text-sm lg:text-base normal-case mt-6 pageTitle">Your brand’s social account should be more than just a sales pitch. It should entertain, inform, and inspire. People follow accounts they connect with—authentic stories, not just products. Check out the examples of brands and creators we’ve worked with below.</h2>
        <HomeButton class="mt-6 mb-12 text-xl bg-black text-white pageTitle"/>
        <CldImage height="900" class="w-full px-3 lg:px-32 mb-10" src="blrgc45ttgxrob6midvc"></CldImage>
        <WorkBlock title="trycreatormate" video_1="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920463/qwr6uldoyvphktsctrdm.mp4" video_2="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920532/-7a60-4314-bd3b-8c0912980544_wg66mm.mp4" video_3="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920545/-3d8b-40f4-b2a8-2cd107fa5790_kgv3mi.mp4" description="helping creators make the internet a better place" label="case study"></WorkBlock>
        <WorkBlock class="bg-black text-white" title="luckyegg" video_1="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920592/-4e22-4a6a-9852-18e21bd8fc28_tiirle.mp4" video_2="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920599/-fa80-4a2b-a480-c4dfd5048246_hkekzt.mp4" video_3="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920606/-44ee-4bd1-b16c-bb225160ac66_qho4bv.mp4" description="we make the world's best party games" label="example"></WorkBlock>
        <WorkBlock title="buildspace" video_1="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920697/-991a-4717-a525-b526a7d9aba9_x8ohxj.mp4" video_2="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920705/-fb90-4425-8ef3-584b37fd917f_v09ajz.mp4" video_3="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920711/-b539-4068-a7b0-d1d3fd987509_thcgp5.mp4" description="we're the place where people build cool shit" label="example"></WorkBlock>
        <WorkBlock class="bg-black text-white" title="mousecase" video_1="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920864/-53cf-4067-82ca-35959664c7ab_dh12al.mp4" video_2="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920869/-25ec-41b7-b9c7-8f19d6cff4e5_eb8ega.mp4" video_3="https://res.cloudinary.com/dusb7aq4h/video/upload/v1735920874/-baf3-4985-9dc4-2b5ded56f43d_lr5ase.mp4" description="live without limits" label="example"></WorkBlock>
        <HomeFooter></HomeFooter>
    </section>
</template>