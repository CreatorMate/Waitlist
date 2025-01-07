<script setup lang="ts">
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem;
    }>();

    const hovering = ref(false);

</script>

<template>
    <div class="max-h-full flex flex-col h-[50vh]">
        <div class="px-5 py-4 flex flex-col">
            <PostedBy :calendar-item/>
        </div>
        <div @mouseover="hovering = true" @mouseleave="hovering = false" class="relative flex flex-grow px-5 w-full h-[170px] lg:h-[90%] 5xl:w-[95%] flex ">
            <div class="relative w-full h-[90%] flex items-center justify-center">
                <CldImage width="500" height="500"
                    class="absolute rotate-2 w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl"
                    :src="calendarItem.images[0]"
                    :class="{'rotate-[4deg]': hovering}"></CldImage>
                <CldImage width="500" height="500"
                    class="absolute -rotate-2 w-full top-0 z-10 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl"
                    :src="calendarItem.images[1]"
                    :class="{'-rotate-[4deg]': hovering}"></CldImage>
                <CldImage width="500" height="500"
                    class="absolute w-full z-50 top-0 object-cover h-[150px] lg:h-full max-h-full max-w-full duration-150 transition-transform ease-in-out rounded-xl"
                         :src="calendarItem.images[2]"
                         :class="{'-rotate-2': hovering}"></CldImage>
            </div>
        </div>
    </div>

</template>