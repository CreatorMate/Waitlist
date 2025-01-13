<script setup lang='ts'>
    import type {CalendarItem} from "~/src/calendar/calendar_items";
    import PostedBy from "~/components/calendar/items/PostedBy.vue";

    const {calendarItem} = defineProps<{
        calendarItem: CalendarItem
    }>()

    const supabase = useSupabaseClient();
    const {data} = supabase.storage.from('calendar_images').getPublicUrl(calendarItem.images[0], {
        transform: {
            width: 700,
            height: 700
        }
    });
</script>

<template>
    <div class="py-5 px-2.5 h-full w-full">
        <div class="px-2 mb-4">
            <PostedBy :calendar-item />
        </div>
        <img  />
        <NuxtImg width="700" height="700" class="w-full object-cover max-h-full max-w-full" :src="data.publicUrl"></NuxtImg>
    </div>
</template>