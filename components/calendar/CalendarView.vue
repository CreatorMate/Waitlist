<script setup lang='ts'>
    import {calendar_rows} from "~/src/calendar/calendar_items";
    import CalendarRow from "~/components/calendar/CalendarRow.vue";
</script>

<template>
    <div class="h-full w-screen flex flex-nowrap ">
        <CalendarRow :calendar-row="calendarRow" v-for="calendarRow of calendar_rows" />
    </div>
</template>