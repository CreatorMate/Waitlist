<script setup lang='ts'>
    import CreatorMateSlider from "~/components/cm/CreatorMateSlider.vue";
    import CreatorComponent from "~/components/home/Creator.vue";
    import {creatorsTop, creatorsBottom} from "~/src/creators/creators";
</script>

<template>
    <div class="absolute top-0 left-0 screen-size max-screen-size overflow-hidden bg-black">
        <div class="w-[300vw] md:w-[200vw] h-[200vh] rotate-[30deg] translate-y-[6%] xs:translate-y-[0%] md:translate-y-0 -translate-x-[44%]  md:-translate-x-[31%] relative overflow-hidden">
            <div class="absolute w-fit flex flex-col gap-6 overflow-hidden">
                <CreatorMateSlider direction="left">
                    <CreatorComponent :creator="creator" v-for="creator of creatorsTop" class="first-of-type:ml-6"></CreatorComponent>
                </CreatorMateSlider>
                <CreatorMateSlider direction="right">
                    <CreatorComponent :creator="creator" v-for="creator of creatorsBottom" class="first-of-type:ml-6"></CreatorComponent>
                </CreatorMateSlider>
            </div>
        </div>
    </div>
</template>