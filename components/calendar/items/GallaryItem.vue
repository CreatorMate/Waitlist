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
    <div class=" px-5 py-4">
        <PostedBy :calendar-item/>
    </div>
    <div class="relative inline-block px-5 w-[85%] h-[170px] lg:h-auto">
        <div class="invisible">
            <NuxtImg class=" rounded lg:w-full top-0 z-10 mb-12 object-contain h-[150px] lg:h-auto"
                     :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
        </div>
        <NuxtImg class="absolute rotate-2 rounded w-full top-0 z-10 object-contain h-[150px] lg:h-auto"
                 :src="`calandar/${calendarItem.images[0]}`"></NuxtImg>
        <NuxtImg class="absolute -rotate-2 rounded w-full top-0 z-10 object-contain h-[150px] lg:h-auto"
                 :src="`calandar/${calendarItem.images[1]}`"></NuxtImg>
        <NuxtImg class="absolute w-full z-50 top-0 object-contain h-[150px] lg:h-auto" :src="`calandar/${calendarItem.images[2]}`"></NuxtImg>
    </div>
</template>