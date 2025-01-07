<script setup lang='ts'>
    import {calendar_rows} from "~/src/calendar/calendar_items_new";
    import CalendarRow from "~/components/calendar/CalendarRow.vue";
</script>

<template>
    <div class="h-full w-full flex flex-nowrap">
        <CalendarRow :calendar-row="calendarRow" v-for="calendarRow of calendar_rows" />
    </div>
    <div id="modal">

    </div>
</template>