<script lang="ts" setup>
    import Login from "~/components/home/Login.vue";
    import {useAccountStore} from "~/src/account/AccountStore";
    import CalendarHeader from "~/components/calendar/CalendarHeader.vue";
    import CalendarView from "~/components/calendar/CalendarView.vue";
    import {onMounted, type Ref} from "vue";

    const calendar: Ref<HTMLDivElement|null> = ref(null);

    const router = useRouter();
    const account = useAccountStore();
    useHead({
        title: 'join the waitlist now! - creatormate'
    })

    const modelActive = ref(false)
    const verifying = ref(false);
    const email = ref("");

    function verify(value: string) {
        email.value = value;
        verifying.value = true;
    }

    function toBeta() {
        window.location.href = "https://app.creatormate.com";
    }

    onMounted(() => {
        document.addEventListener('wheel', (e: WheelEvent) => {
            e.preventDefault();
            if(!calendar.value) return;

            calendar.value.scrollLeft += e.deltaY * 0.7
        })
    })

    onUnmounted(() => {
        document.removeEventListener('wheel', (e: WheelEvent) => {});
    })
</script>

<template>
    <section class="w-full h-full flex flex-col custom_scroll overflow-y-hidden relative">
        <CalendarHeader @joinButton="modelActive = true"/>
        <div ref="calendar" class="flex h-full overflow-x-scroll overflow-y-hidden">
            <CalendarView></CalendarView>
        </div>
    </section>
    <BaseModelVue :model-active="modelActive" @close="modelActive = false">
        <Login v-if="!verifying" @verify="verify"></Login>
        <HomeVerify :email="email" v-else></HomeVerify>
    </BaseModelVue>
</template>

<style scoped>
.custom_scroll {
    ::-webkit-scrollbar {
        width: 2em;
    }
    ::-webkit-scrollbar-track {
        background: hsl(0, 0%, 21%);
        margin-block: .5em;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 6%);
        border-radius: 100vw;
        padding: 10px;
    }
}
</style>