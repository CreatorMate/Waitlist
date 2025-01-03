<script setup lang='ts'>
    const horizontalBox = ref<HTMLDivElement|null>();
    const scrollingBox = ref<HTMLDivElement|null>();
    const screenHeight = ref(0)
    const screenWidth = ref(0)

    function handleScroll(e: WheelEvent) {
        if (!horizontalBox.value) return;
        if (!scrollingBox.value) return;
        const box = horizontalBox.value;
        const scrollingElement = scrollingBox.value;

        const boxTop = box.offsetTop; // Top position of the horizontal box
        const boxHeight = box.offsetHeight; // Height of the horizontal box
        const scrollY = window.scrollY; // Current vertical scroll position
        const maxVerticalScroll = boxHeight - screenHeight.value; // Max vertical scroll in the parent
        const maxHorizontalScroll = scrollingElement.scrollWidth - scrollingElement.clientWidth; // Max horizontal scroll

        if (scrollY >= boxTop && scrollY <= boxTop + boxHeight) {
            e.preventDefault();
            const relativeScroll = (scrollY - boxTop) / maxVerticalScroll;
            scrollingElement.scrollLeft = relativeScroll * maxHorizontalScroll;
        }
    }

    onMounted(() => {
        screenHeight.value = window.innerHeight;
        screenWidth.value = window.innerWidth;

        //@ts-ignore
        window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
        //@ts-ignore
        window.removeEventListener('scroll', handleScroll);
    });

</script>

<template>
    <div class="mt-16">
    </div>
    <div ref="horizontalBox" class="relative w-full " :style="`height: ${screenHeight * 2.5}px;`">
        <div ref="scrollingBox" :style="`max-height: ${screenHeight}px;`" class="top-0 sticky overflow-x-hidden overflow-y-hidden min-h-screen flex justify-start h-screen">
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="1000" width="1000" class="w-full h-1/2 " src="slider_pic_1_ootxel"></CldImage>
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_2_yqx0pm"></CldImage>
            </div>
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="2000" width="1000" class="w-full h-full" src="slider_pic_3_h5vnzf"></CldImage>
            </div>
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_4_jjfd4m"></CldImage>
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_5_xmdarp"></CldImage>
            </div>
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_6_a796cv"></CldImage>
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_7_wd4tyn"></CldImage>
            </div>
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="2000" width="1000" class="w-full h-full" src="slider_pic_9_shtmnh"></CldImage>
            </div>
            <div class="flex-shrink-0 flex flex-col h-full">
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_8_qe3cna"></CldImage>
                <CldImage height="1000" width="1000" class="w-full h-1/2" src="slider_pic_10_qxjn3h"></CldImage>
            </div>
        </div>
    </div>
</template>