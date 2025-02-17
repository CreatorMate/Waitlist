<script setup lang='ts'>

</script>

<template>
    <footer class="bg-[#F5F5F5] hidden sm:flex justify-center w-full text-gray-700">
        <div class="py-16 p-3 lg:px-24 w-full flex lg:flex-row flex-col lg:gap-0 gap-12 text-sm 5xl:w-[2500px]">
            <div class="w-full lg:w-1/2 flex flex-col">
                <p class="font-medium text-gray-700 text-lg">We’re a group of friends who grew up with creators,<br/> inspired by their impact. Now, we’re lucky enough to<br/> call helping them our job.</p>
                <div class="flex gap-6 mt-12 lg:mt-6 flex-wrap">
                    <NuxtLink to="/privacy-policy" class="hover:text-blue-500">privacy policy</NuxtLink>
                    <NuxtLink to="/terms-of-service" class="hover:text-blue-500">terms of use</NuxtLink>
                    <p>imprint</p>
                    <p>@ creatormate 2024</p>
                </div>
            </div>
            <div class="flex gap-12 lg:justify-end lg:w-1/2 w-full lg:text-base text-xs">
                <div class="flex flex-col gap-2">
                    <NuxtLink class="hover:text-blue-500" to="about-us">our story</NuxtLink>
                    <a class="hover:text-blue-500" target="_blank" href="https://tally.so/r/wL5rgG">for brands</a>
                </div>
                <div class="flex flex-col gap-2">
                    <p>reviews</p>
                    <a class="hover:text-blue-500" target="_blank" href="https://tally.so/r/wL5rgG">work with us</a>
                </div>
                <div class="flex flex-col gap-2">
                    <a class="hover:text-blue-500 font-medium text-gray-700" target="_blank" href="https://nl.linkedin.com/company/creatormate">linkedin</a>
                    <a class="hover:text-blue-500 font-medium text-gray-700" target="_blank" href="https://www.instagram.com/trycreatormate/">instagram</a>
                    <a class="hover:text-blue-500 font-medium text-gray-700" target="_blank" href="https://x.com/trycreatormate?lang=en&mx=2">x.com</a>
                </div>
            </div>
        </div>
    </footer>
    <footer class="bg-[#F5F5F5] flex sm:hidden justify-center w-full">
        <div class="py-16 p-3 lg:px-24 w-full flex lg:flex-row flex-col lg:gap-0 gap-12 text-sm 5xl:w-[2500px]">
            <div class="w-full lg:w-1/2 flex flex-col">
                <p class="font-medium text-gray-700">We’re a group of friends who grew up with creators, inspired by their impact. Now, we’re lucky enough to call helping them our job.</p>
                <div class="flex gap-12 lg:justify-end lg:w-1/2 w-full lg:text-base text-sm mt-12">
                    <div class="flex flex-col gap-2">
                        <NuxtLink to="about us">our story</NuxtLink>
                        <a target="_blank" href="https://tally.so/r/wL5rgG">for brands</a>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p>reviews</p>
                        <a target="_blank" href="https://tally.so/r/wL5rgG">work with us</a>
                    </div>
                </div>
                <div class="flex gap-2 justify-center mt-12 text-base">
                    <a target="_blank" href="https://nl.linkedin.com/company/creatormate">linkedin</a>
                    <a target="_blank" href="https://www.instagram.com/trycreatormate/">instagram</a>
                    <a target="_blank" href="https://x.com/trycreatormate?lang=en&mx=2">x.com</a>
                </div>
                <div class="flex gap-6 mt-6 lg:mt-6 justify-center">
                    <NuxtLink to="/privacy-policy">privacy policy</NuxtLink>
                    <NuxtLink to="/terms-of-service">terms of use</NuxtLink>
                    <p>imprint</p>
                </div>
                <p class="mt-6 text-center">@ creatormate 2024</p>
            </div>

        </div>
    </footer>
</template>