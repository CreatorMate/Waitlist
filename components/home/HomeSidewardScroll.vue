<script setup lang='ts'>
    import {getSupabaseImage} from "~/src/utils/SupabaseStorage";

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

    const image1 = getSupabaseImage('CM_WEB', 'slider_pic_1.png', 1000, 1000);
    const image2 = getSupabaseImage('CM_WEB', 'slider_pics_2.png', 1000, 1000);
    const image3 = getSupabaseImage('CM_WEB', 'slider_pics_3.png', 1000, 1000);
    const image4 = getSupabaseImage('CM_WEB', 'slider_pics_4.png', 1000, 1000);
    const image5 = getSupabaseImage('CM_WEB', 'slider_pics_5.png', 1000, 1000);
    const image6 = getSupabaseImage('CM_WEB', 'slider_pics_6.png', 1000, 1000);
    const image7 = getSupabaseImage('CM_WEB', 'slider_pics_7.png', 1000, 1000);
    const image8 = getSupabaseImage('CM_WEB', 'slider_pics_8.png', 1000, 1000);
    const image9 = getSupabaseImage('CM_WEB', 'slider_pics_9.png', 1000, 1000);
    const image10 = getSupabaseImage('CM_WEB', 'slider_pics_10.png', 1000, 1000);

    console.log(image1);

</script>

<template>
    <div class="mt-16">
    </div>
    <div ref="horizontalBox" class="relative w-full horizontalBox h-[250vh] 6xl:h-[150vh]">
        <div  :style="`max-height: ${screenHeight}px;`" class="top-0 sticky  overflow-y-hidden min-h-screen flex justify-start h-screen ">
            <div ref="scrollingBox" class="w-full h-full relative overflow-y-hidden min-h-screen flex overflow-x-hidden">
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2 " :src="image1"></NuxtImg>
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image2"></NuxtImg>
                </div>
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="2000" width="1000" class="w-full h-full" :src="image3"></NuxtImg>
                </div>
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image4"></NuxtImg>
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image5"></NuxtImg>
                </div>
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image6"></NuxtImg>
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image7"></NuxtImg>
                </div>
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="2000" width="1000" class="w-full h-full" :src="image9"></NuxtImg>
                </div>
                <div class="flex-shrink-0 flex flex-col h-full">
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image8"></NuxtImg>
                    <NuxtImg height="1000" width="1000" class="w-full h-1/2" :src="image10"></NuxtImg>
                </div>
            </div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-9 w-full">
                <h6 :style="`opacity: ${scrollPercentage + 0.8}`" class="text-white leading-[60px] text-[64px] text-center tracking-[-1.28px]">no one matches our <br/> <span :style="`opacity: ${scrollPercentage + 0.5}`">understanding or trust</span><br/> <span :style="`opacity: ${scrollPercentage + 0.2}`">with creators.</span></h6>
                <RouterLink to="/select-login" class=" px-3 py-2 rounded-lg duration-150 flex gap-1 items-center bg-white text-black">get started <Icon name="mdi:arrow-right"/></RouterLink>
            </div>
        </div>
    </div>
</template>