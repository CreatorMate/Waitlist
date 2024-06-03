<script setup lang='ts'>
    import {useAccountStore} from "~/src/account/AccountStore";
    import SelectSocials from "~/components/onboarding/SelectSocials.vue";
    import SelectProfilePicture from "~/components/onboarding/SelectProfilePicture.vue";

    const account = useAccountStore();

    useHead({
        title: `${account.username}'s profile - creatormate`
    })

    const name = ref(account.username);
    const location = ref(account.location);
    const creatorType = ref(account.creatorType);
    const contentType = ref(account.contentType);

    async function save() {
        if(name.value.length > 0) {
            account.username = name.value;
        }
        if(location.value.length > 0) {
            account.location = location.value;
        }
        if(creatorType.value && creatorType.value.length > 0) {
            account.creatorType = creatorType.value;
        }
        if(contentType.value && contentType.value.length > 0) {
            account.contentType = contentType.value;
        }
        await account.update();
    }

    function shareWithTwitter() {
        const photoUrl = 'https://creatormate.com/creatormate.svg';
        const tweetText = `this is a cool text on twitter ${photoUrl}`;
        const encodedTweetText = encodeURIComponent(tweetText);
        const url = `https://twitter.com/intent/tweet?text=${encodedTweetText}&url=${encodeURIComponent('https://creatormate.com')}`;
        window.open(url, '_blank');
    }

    function shareWithLinkedIn() {
        const shareMessage = `I just joined the creator mate waitlist`;
        const encodedShareMessage = encodeURIComponent(shareMessage);
        const url = `https://www.linkedin.com/shareArticle?mini=true&url=https://creatormate.com&text=${encodedShareMessage}`;
        window.open(url, '_blank');
    }
</script>

<template>

    <section class="flex flex-col min-h-full items-center relative">
        <div ref="chatContainer"
             class="overflow-y-auto overflow-x-hidden w-full min-h-full flex items-center flex-col">
            <TopBar/>
            <div class="flex justify-start pt-6 lg:pt-12 w-full items-center flex-col">
                <div class="lg:absolute lg:top-40 flex w-full justify-center lg:justify-start lg    :w-[800px] 2xl:w-[992px] z-20 pb-6">
                    <div class="flex flex-col gap-6 sticky items-end">
                        <div class="flex flex-col gap-6">
                            <img alt="Profile picture" class="w-20 top-0 h-20 rounded-2xl"
                                 :src="account.getProfileImageSrc()"/>
                            <h2 class="text-xl font-medium">{{ account.username }}</h2>
                            <div class="flex flex-col gap-2">
                                <p class="text-white text-opacity-60 text-sm">share profile</p>
                                <div class="flex gap-2">
                                    <div @click="shareWithTwitter"
                                        class="w-10 h-10 rounded-full flex justify-center items-center bg-white bg-opacity-20 cursor-pointer">
                                        <Icon size="16" name="bi:twitter-x"></Icon>
                                    </div>
                                    <div @click="shareWithLinkedIn"
                                        class="w-10 h-10 rounded-full flex justify-center items-center bg-white bg-opacity-20 cursor-pointer">
                                        <Icon size="16" name="mdi:linkedin"></Icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-6 mb-6 md:px-0 w-full md:w-[500px] flex flex-col top-60 z-30">
                    <div class="h-full flex flex-col gap-6 lowercase">
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>hey, nice to meet you. i'd love to get to know you a bit better what's your name</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input @change="save" v-model="name" placeholder="name" class="lowercase bg-white outline-0 bg-opacity-10 text-white px-3 py-2 rounded-lg placeholder-white placeholder-opacity-40 border border-black focus:shadow-input focus:border focus:border-white" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>where are you located</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input @change="save" v-model="location" placeholder="location" class="lowercase bg-white outline-0 bg-opacity-10 text-white px-3 py-2 rounded-lg placeholder-white placeholder-opacity-40 border border-black focus:shadow-input focus:border focus:border-white" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>what kind of content do you want to make</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input @change="save" v-model="contentType" placeholder="content type" class="lowercase bg-white outline-0 bg-opacity-10 text-white px-3 py-2 rounded-lg placeholder-white placeholder-opacity-40 border border-black focus:shadow-input focus:border focus:border-white" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>what kind of creator do you want to be?</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <input @change="save" v-model="creatorType" placeholder="creator type" class="lowercase bg-white outline-0 bg-opacity-10 text-white px-3 py-2 rounded-lg placeholder-white placeholder-opacity-40 border border-black focus:shadow-input focus:border focus:border-white" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>What socials are you using?</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <SelectSocials :on-onboarding="false" @update="save"></SelectSocials>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">jens</p>
                            <p>What would you like to be your profile picture</p>
                        </div>
                        <div class="flex flex-col">
                            <p class="text-gray-400 text-lg mb-2">you</p>
                            <SelectProfilePicture @uploaded="save"></SelectProfilePicture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>