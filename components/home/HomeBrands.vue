<script setup lang='ts'>
    const width = ref(0);

</script>

<template>
    <div class="lg:flex items-center gap-[72px] hidden mb-14">
        <NuxtImg class="h-9" src="/partners/tebi.svg"/>
        <NuxtImg class="h-20" src="/partners/celebratix.svg"/>
        <NuxtImg class="h-9" src="/partners/mous.svg"/>
        <NuxtImg class="h-9" src="/partners/otrium.svg"/>
    </div>
    <div class="overflow-hidden block lg:hidden mb-14">
        <div class="w-full hidden md:flex home-carousel-left">
            <div class="flex flex-shrink-0 w-full justify-between pr-10 md:pr-20 items-center">
                <NuxtImg class="h-9 md:w-auto " src="/partners/tebi.svg"/>
                <NuxtImg class="h-14 md:w-auto " src="/partners/celebratix.svg"/>
                <NuxtImg class="h-9 md:w-auto " src="/partners/mous.svg"/>
                <NuxtImg class="h-9 md:w-auto" src="/partners/otrium.svg"/>
            </div>
            <div class="flex flex-shrink-0 w-full justify-between pr-20 items-center">
                <NuxtImg class="h-9 flex-shrink-0" src="/partners/tebi.svg"/>
                <NuxtImg class="h-14 flex-shrink-0" src="/partners/celebratix.svg"/>
                <NuxtImg class="h-9 flex-shrink-0" src="/partners/mous.svg"/>
                <NuxtImg class="h-9 flex-shrink-0" src="/partners/otrium.svg"/>
            </div>
        </div>
        <div class="flex flex-nowrap w-full md:hidden home-carousel-left2">
            <div class="flex flex-shrink-0 w-[200%] items-center ">
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9" src="/partners/tebi.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-16" src="/partners/celebratix.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9 " src="/partners/mous.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9" src="/partners/otrium.svg"/>
                </div>
            </div>
            <div class="flex flex-shrink-0 w-[200%] items-center">
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9" src="/partners/tebi.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-16" src="/partners/celebratix.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9 " src="/partners/mous.svg"/>
                </div>
                <div class="w-1/4 flex-shrink-0">
                    <NuxtImg class="h-9" src="/partners/otrium.svg"/>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.home-carousel-left {
    animation: 5s slide-left infinite linear;
}

.home-carousel-left2 {
    animation: 10s slide-left2 infinite linear;
}

@keyframes slide-left {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-100%);
    }
}

@keyframes slide-left2 {
    from {
        transform: translateX(0);
        -webkit-transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
        -webkit-transform: translateX(-200%);
    }
}
</style>
