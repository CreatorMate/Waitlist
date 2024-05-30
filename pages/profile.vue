<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import {Sender} from "~/src/chat/Sender";
    import SelectSocials from "~/components/onboarding/SelectSocials.vue";
    import SelectProfilePicture from "~/components/onboarding/SelectProfilePicture.vue";

    const account = useAccountStore();

    useHead({
        title: `${account.username}'s profile - creatormate`
    })
</script>

<template>

    <section class="flex flex-col min-h-full items-center relative">
        <div ref="chatContainer"
             class="overflow-y-auto overflow-x-hidden w-full min-h-full flex items-center flex-col">
            <TopBar/>
            <div class="flex justify-center pt-12 w-full items-start">
                <div class="absolute top-40 flex w-[800px] 2xl:w-[992px] z-20">
                    <div class="flex flex-col gap-6 sticky items-end">
                        <div class="flex flex-col gap-6">
                            <img alt="Profile picture" class="w-20 top-0 h-20 rounded-2xl"
                                 :src="account.getProfileImageSrc()"/>
                            <h2 class="text-xl font-medium">{{ account.username }}</h2>
                            <div class="flex flex-col gap-2">
                                <p class="text-white text-opacity-60 text-sm">share profile</p>
                                <div class="flex gap-2">
                                    <div
                                        class="w-10 h-10 rounded-full flex justify-center items-center bg-white bg-opacity-20">
                                        <Icon size="16" name="bi:twitter-x"></Icon>
                                    </div>
                                    <div
                                        class="w-10 h-10 rounded-full flex justify-center items-center bg-white bg-opacity-20">
                                        <Icon size="16" name="mdi:linkedin"></Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-6 md:px-0 w-full md:w-[500px] flex flex-col top-60 z-30">
                    <div class="h-full flex flex-col gap-6">
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>hey, nice to meet you. i'd love to get to know you a bit better what's your name</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input v-model="account.username" placeholder="name" class="bg-white bg-opacity-10 text-white px-4 py-2" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>where are you located</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input v-model="account.location" placeholder="location" class="bg-white bg-opacity-10 text-white px-4 py-2" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>what kind of creator do you want to be?</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input  placeholder="creator type" class="bg-white bg-opacity-10 text-white px-4 py-2" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>what kind of content do you want to make</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input  placeholder="content type" class="bg-white bg-opacity-10 text-white px-4 py-2" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>What socials are you using?</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <SelectSocials></SelectSocials>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>What would you like to be your profile picture</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <SelectProfilePicture></SelectProfilePicture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.container {
    display: flex;
    height: 200vh; /* Adjust based on your needs */
    overflow-y: auto; /* Enable vertical scrolling */
}

/* Tall content styling */
.tall-content {
    flex-grow: 1;
    border: 1px solid black; /* Just for visibility */
}

/* Sticky content styling */
.sticky-content {
    position: sticky;
    top: 0;
    left: 0;
    border: 1px solid red; /* Just for visibility */
    width: max-content; /* Ensure it takes only as much space as needed */
    margin-left: auto; /* Push it to the right */
}
</style>