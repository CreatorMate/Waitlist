<script setup lang='ts'>
    import CreatorMateSlider from "~/components/cm/CreatorMateSlider.vue";
    import CreatorComponent from "~/components/home/Creator.vue";
    import {creators} from "~/src/creators/creators";
    import type {Creator} from "~/src/creators/creators";

    function shuffle<T>(array: T[]): T[] {
        let currentIndex = array.length, temporaryValue, randomIndex;

        let newArray = [...array];

        while (0!== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = newArray[currentIndex];
            newArray[currentIndex] = newArray[randomIndex];
            newArray[randomIndex] = temporaryValue;
        }

        return newArray;
    }

    function testShuffle<T>(array: T[]): void {
        console.log("Before shuffle:", array);
        const shuffledArray = shuffle(array); // Assuming shuffle is defined as above
        console.log("After shuffle:", shuffledArray);
    }

    const slideListOne = shuffle(creators);
    const slideListTwo = shuffle(creators);
</script>

<template>
    <div class="absolute top-0 left-0 screen-size max-screen-size overflow-hidden">
        <div class="w-[300vw] md:w-[200vw] h-[200vh] rotate-[30deg] translate-y-[6%] xs:translate-y-[0%] md:translate-y-0 -translate-x-[45%]  md:-translate-x-[32%] relative overflow-hidden">
            <div class="absolute w-fit flex flex-col gap-6 overflow-hidden">
                <CreatorMateSlider direction="left">
                    <CreatorComponent :creator="creator" v-for="creator of slideListOne" class="first-of-type:ml-6"></CreatorComponent>
                </CreatorMateSlider>
                <CreatorMateSlider direction="right">
                    <CreatorComponent :creator="creator" v-for="creator of slideListTwo" class="first-of-type:ml-6"></CreatorComponent>
                </CreatorMateSlider>
            </div>
        </div>
    </div>
</template>