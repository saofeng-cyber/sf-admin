<script setup lang="ts">
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import type TVueSwalInstance from "@/composables/swal";
const $swal: TVueSwalInstance =
    getCurrentInstance()?.appContext.app.config.globalProperties.$swal;
let eventGuid = 0;
const createEventId = () => {
    return String(eventGuid++);
};
const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today
const INITIAL_EVENTS = [
    {
        id: createEventId(),
        title: "All-day event",
        start: todayStr,
    },
    {
        id: createEventId(),
        title: "Timed event",
        start: todayStr + "T12:00:00",
    },
    {
        id: createEventId(),
        title: "Timed love",
        start: todayStr + "T14:00:00",
    },
];

const handleDateClick = (date: any) => {
    console.log(date);
    $swal.fire({
        text: `The datetime is ${date.dateStr}`,
        icon: "success",
    });
};
const calendarOptions = reactive({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin],
    initialView: "dayGridMonth",
    headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    initialEvents: INITIAL_EVENTS,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    weekends: true,
    dateClick: handleDateClick,
});
const initFullcalendar = () => {};
onMounted(() => {
    initFullcalendar();
});
</script>
<template>
    <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>Fullcalendar</h3>
                <el-link
                    type="primary"
                    href="https://fullcalendar.io/docs/vue"
                    target="_blank"
                    >To Fullcalendar</el-link
                >
            </div>
        </template>
        <FullCalendar :options="calendarOptions" />
    </el-card>
</template>
