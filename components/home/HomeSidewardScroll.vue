<script setup lang='ts'>
    const horizontalBox = ref<HTMLDivElement|null>();
    const scrollingBox = ref<HTMLDivElement|null>();
    const screenHeight = ref(0);
    const screenWidth = ref(0);

    const scrollPercentage = ref(0);

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

        scrollPercentage.value = scrollingElement.scrollLeft / maxHorizontalScroll;
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
    <div ref="horizontalBox" class="relative w-full horizontalBox h-[250vh] 6xl:h-[150vh]">
        <div  :style="`max-height: ${screenHeight}px;`" class="top-0 sticky  overflow-y-hidden min-h-screen flex justify-start h-screen ">
            <div ref="scrollingBox" class="w-full h-full relative overflow-y-hidden min-h-screen flex overflow-x-hidden">
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
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-9 w-full">
                <h6 :style="`opacity: ${scrollPercentage + 0.8}`" class="text-white leading-[60px] text-[64px] text-center">no one matches our <br/> <span :style="`opacity: ${scrollPercentage + 0.5}`">understanding or trust</span><br/> <span :style="`opacity: ${scrollPercentage + 0.2}`">with creators.</span></h6>
                <RouterLink to="/select-login" class=" px-3 py-2 rounded-lg duration-150 flex gap-1 items-center bg-white text-black">get started <Icon name="mdi:arrow-right"/></RouterLink>
            </div>
        </div>
    </div>
</template>