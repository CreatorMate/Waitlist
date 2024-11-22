<script setup lang="ts">
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";
    import {onBeforeMount, onMounted, type Ref} from "vue";
    import {relative} from "pathe";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem;
    }>();

    const expanded = ref(false);

</script>

<template>
    <div class="max-h-full flex flex-col h-[50vh]">
        <div class="px-5 py-4 flex flex-col">
            <PostedBy :calendar-item/>
        </div>
        <div class="relative flex flex-grow px-5 w-full h-[170px] lg:h-[90%] 5xl:w-[95%] flex">
            <div class="relative w-full h-[90%] flex items-center justify-center">
<!--                <div class="invisible">-->
<!--                    <NuxtImg class=" rounded lg:w-full top-0 z-10 mb-12 object-contain h-[150px] lg:h-full"-->
<!--                             :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>-->
<!--                </div>-->
                <NuxtImg
                    class="absolute rotate-2 rounded w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full"
                    :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
                <NuxtImg
                    class="absolute -rotate-2 rounded w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full"
                    :src="`calandar/${calendarItem.images[1]}`"></NuxtImg>
                <NuxtImg class="absolute w-full z-50 top-0 object-cover h-[150px] lg:h-full max-h-full max-w-full"
                         :src="`calandar/${calendarItem.images[2]}`"></NuxtImg>
            </div>
        </div>
    </div>

</template>