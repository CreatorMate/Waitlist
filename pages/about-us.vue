<script lang="ts" setup>
    import Login from "~/components/home/Login.vue";
    import {useAccountStore} from "~/src/account/AccountStore";
    import CalendarHeader from "~/components/calendar/CalendarHeader.vue";
    import CalendarView from "~/components/calendar/CalendarView.vue";
    import {onMounted, type Ref} from "vue";
    import {definePageMeta} from "#imports";


    const calendar: Ref<HTMLDivElement|null> = ref(null);

    const router = useRouter();
    const account = useAccountStore();
    useHead({
        title: 'join the waitlist now! - creatormate'
    })

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
    <section class="bg-white text-black w-full h-full flex flex-col custom_scroll overflow-y-hidden relative">
<!--        <CalendarHeader @joinButton="modelActive = true"/>-->
        <HomeNav/>
        <div ref="calendar" class="flex h-full overflow-x-scroll overflow-y-hidden">
            <CalendarView></CalendarView>
        </div>
    </section>
</template>

<style scoped>
.custom_scroll {
    ::-webkit-scrollbar {
        width: 2em;
    }
    ::-webkit-scrollbar-track {
        background: hsl(0, 0%, 79%);
        margin-block: .5em;
        border-radius: 100vw;
    }

    ::-webkit-scrollbar-thumb {
        background: hsl(0, 0%, 95%);
        border-radius: 100vw;
        padding: 10px;
    }
}
</style>