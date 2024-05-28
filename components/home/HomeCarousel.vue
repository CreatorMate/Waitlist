<script setup lang='ts'>
    import CreatorMateSlider from "~/components/cm/CreatorMateSlider.vue";
    import Creator from "~/components/home/Creator.vue";

    const blocks = ref(["block1", "block2", "block3", "block4", "block5", "block6", "block7", "block8", "block9",]);
</script>

<template>
    <div class="absolute top-0 left-0 w-screen h-screen max-w-screen max-h-screen overflow-hidden">
        <div class="w-[200vw] h-[200vh] rotate-[30deg] -translate-x-[32%] relative overflow-hidden">
            <div class="absolute w-fit flex flex-col gap-6 overflow-hidden">
                <CreatorMateSlider direction="left">
                    <Creator name="Jens" :followers="300" image="/creators/jens.png" v-for="block of blocks" class="first-of-type:ml-6">{{ block }}</Creator>
                </CreatorMateSlider>
                <CreatorMateSlider direction="right">
                    <Creator name="Jens" :followers="300" image="/creators/jens.png" v-for="block of blocks" class="first-of-type:ml-6">{{ block }}</Creator>
                </CreatorMateSlider>
            </div>
        </div>
    </div>
</template>