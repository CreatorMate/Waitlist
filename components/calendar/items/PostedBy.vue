<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>();
</script>

<template>
    <div>
        <p class="font-semibold text-sm md:text-[16px] ">{{calendarItem.title}}</p>
    </div>
    <div class="flex text-[#D1D1D1] text-[12px] md:text-sm items-center gap-2 mt-2.5">
        <Icon size="14" name="mage:pin"/>
        <p class="text-[12px] md:text-sm">posted by {{calendarItem.postedBy}}</p>
    </div>
</template>