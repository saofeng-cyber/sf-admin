<script setup lang="ts">
import Chart from "chart.js/auto";
// import { Delete } from "@element-plus/icons-vue";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import Dropzone from "dropzone";
import { DataTable } from "simple-datatables";
import "simple-datatables/dist/style.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Swal from "sweetalert2";
const chatCanvas = ref<HTMLCanvasElement | null>(null);
const newData = {
    headings: ["NAME", "POSITION", "OFFICE", "AGE", "STARTDATE", "SALARY"],
    data: [
        [
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "61",
            "2011/04/25",
            "$320,800",
        ],
    ],
};
let lightbox: any = null;
onMounted(() => {
    const ctx = (chatCanvas.value as HTMLCanvasElement).getContext(
        "2d"
    ) as CanvasRenderingContext2D;
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: [
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            datasets: [
                {
                    label: "Sales",
                    // tension: 0.4,
                    borderWidth: 0,
                    borderRadius: 4,
                    borderSkipped: false,
                    backgroundColor: "#fff",
                    data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
                    maxBarThickness: 6,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            interaction: {
                intersect: false,
                mode: "index",
            },
            scales: {
                y: {
                    grid: {
                        // drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    ticks: {
                        // suggestedMin: 0,
                        // suggestedMax: 500,
                        // beginAtZero: true,
                        padding: 15,
                        font: {
                            size: 14,
                            family: "Open Sans",
                            style: "normal",
                            lineHeight: 2,
                        },
                        color: "#fff",
                    },
                },
                x: {
                    grid: {
                        // drawBorder: false,
                        display: false,
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
            },
        },
    });
    const previewNode = document.getElementById("template") as HTMLElement;
    previewNode.id = "";
    const previewTemplate = (previewNode?.parentNode as HTMLElement).innerHTML;
    const myDropzone = new Dropzone("#my-dropzone", {
        url: "https://httpbin.org/post",
        thumbnailWidth: 80,
        thumbnailHeight: 80,
        parallelUploads: 20,
        previewTemplate: previewTemplate,
        autoQueue: false, // Make sure the files aren't queued until manually added
        previewsContainer: "#dropzone-list", // Define the container to display the previews
        clickable: true, // Define the element that should be used as click trigger to select files.
    });
    myDropzone.on("addedfile", (file: any) => {
        console.log(`File added: ${file.name}`);
    });
    const dataTable = new DataTable("#myTable", {
        header: true,
        searchable: true,
        fixedHeight: true,
        fixedColumns: true,
        classes: {
            active: "datatable-active", // will be "datatable-active" in version 7
            bottom: "datatable-bottom",
            container: "datatable-container",
            dropdown: "datatable-dropdown",
            ellipsis: "ellipsis", // will be "datatable-ellipsis" in version 7
            empty: "datatable-empty",
            headercontainer: "datatable-headercontainer",
            info: "datatable-info",
            input: "datatable-input",
            loading: "datatable-loading",
            pagination: "datatable-pagination",
            paginationList: "datatable-pagination-list",
            search: "datatable-search",
            selector: "datatable-selector",
            sorter: "datatable-sorter",
            table: "datatable-table",
            top: "datatable-top",
            wrapper: "datatable-wrapper",
        },
    });
    for (let i = 0; i < 99; i++) {
        newData.data.push([
            "Tiger Nixon",
            "System Architect",
            "Edinburgh",
            "61",
            "2011/04/25",
            "$320,800",
        ]);
    }
    dataTable.insert(newData);

    lightbox = new PhotoSwipeLightbox({
        gallery: "#my-gallery",
        children: "a",
        pswpModule: () => import("photoswipe"),
    });
    lightbox.init();
});
onUnmounted(() => {
    lightbox.destroy();
    lightbox = null;
});
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
});

const showAlertDefault = () => {
    Swal.fire("Any fool can use a computer");
    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //     if (result.isConfirmed) {
    //         Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //     }
    // });
};
const showAlertPrimart = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
    });
};
const showAlertSuccess = () => {
    Swal.fire({
        position: "top-end",
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        timer: 1500,
    });
};
const showAlertWarning = () => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result: { isConfirmed: any }) => {
        if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
    });
};
const showAlertInfo = () => {
    Swal.fire({
        title: "<strong>HTML <u>example</u></strong>",
        icon: "info",
        html:
            "You can use <b>bold text</b>, " +
            '<a href="//sweetalert2.github.io">links</a> ' +
            "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: "Thumbs down",
    });
};
const showAlertDanger = () => {
    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
    }).then((result: { isConfirmed: any; isDenied: any }) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire("Saved!", "", "success");
        } else if (result.isDenied) {
            Swal.fire("Changes are not saved", "", "info");
        }
    });
};
</script>
<template>
    <div class="workPlatform">
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
                    <h3>Chartjs</h3>
                    <el-link
                        type="primary"
                        href="https://www.chartjs.org/docs/latest/"
                        target="_blank"
                        >To ChartJs</el-link
                    >
                </div>
            </template>
            <div class="bg-gray-800">
                <canvas ref="chatCanvas"></canvas>
            </div>
        </el-card>
        <el-divider />
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
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
        <el-divider />
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
                    <h3>Dropzone</h3>
                    <el-link
                        type="primary"
                        href="https://docs.dropzone.dev/"
                        target="_blank"
                        >To Dropzone</el-link
                    >
                </div>
            </template>
            <div id="my-dropzone">
                <div class="dz-preview dz-file-preview">
                    <div class="dz-default dz-message">
                        <el-button class="dz-button">
                            Drop files here to upload
                        </el-button>
                    </div>
                    <div id="dropzone-list">
                        <div id="template" class="flex items-center mb-3">
                            <div>
                                <span class="preview">
                                    <img
                                        class="rounded-xl shadow"
                                        data-dz-thumbnail
                                    />
                                </span>
                            </div>
                            <div class="dz-filename flex-1 mx-[12px]">
                                <h4 class="text-[#32325d]" data-dz-name></h4>
                                <p
                                    data-dz-size
                                    class="small text-muted mb-0 text-[#8898AA]"
                                ></p>
                            </div>
                            <div class="dz-progress"></div>
                            <div class="dz-error-message"></div>
                            <div class="dz-success-mark"></div>
                            <div class="dz-error-mark"></div>
                            <!-- <div class="dz-remove" data-dz-remove>
                                <el-button
                                    type="danger"
                                    :icon="Delete"
                                    circle
                                    data-dz-remove="true"
                                />
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </el-card>
        <el-divider />
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
                    <h3>Datatables</h3>
                    <el-link
                        type="primary"
                        href="https://github.com/fiduswriter/Simple-DataTables"
                        target="_blank"
                        >To Datatables</el-link
                    >
                </div>
            </template>
            <div id="myTable"></div>
        </el-card>
        <el-divider />
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
                    <h3>PhotoSwipe</h3>
                    <el-link
                        type="primary"
                        href="https://photoswipe.com/"
                        target="_blank"
                        >To PhotoSwipe</el-link
                    >
                </div>
            </template>
            <div id="my-gallery" class="flex gap-4 items-center">
                <a
                    href="https://unsplash.com"
                    data-pswp-src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-2500.jpg"
                    data-pswp-width="2500"
                    data-pswp-height="1666"
                    target="_blank"
                >
                    <img
                        src="https://cdn.photoswipe.com/photoswipe-demo-images/photos/3/img-200.jpg"
                        alt=""
                    />
                </a>
            </div>
        </el-card>
        <el-divider />
        <el-card>
            <template #header>
                <div class="card-header flex justify-between">
                    <h3>Sweetalert2</h3>
                    <el-link
                        type="primary"
                        href="https://sweetalert2.github.io/"
                        target="_blank"
                        >To Sweetalert2</el-link
                    >
                </div>
            </template>
            <div class="flex flex-wrap gap-[2px] justify-center items-center">
                <el-button @click="showAlertDefault"> Default </el-button>
                <el-button type="info" @click="showAlertInfo"> Info </el-button>
                <el-button type="primary" @click="showAlertPrimart">
                    Primary
                </el-button>
                <el-button type="success" @click="showAlertSuccess">
                    Success
                </el-button>
                <el-button type="warning" @click="showAlertWarning">
                    Warning
                </el-button>
                <el-button type="danger" @click="showAlertDanger">
                    Danger
                </el-button>
            </div>
        </el-card>
    </div>
</template>
<style scoped lang="scss">
.dz-message {
    text-align: center;
    padding: 32px 16px;
    background-color: #fff;
    border: 1px dashed #dee2e6;
    border-radius: 0.375rem;
    color: #8898aa;
}
</style>
<style lang="scss">
.dropzone-list {
    .dz-success {
        display: flex;
    }
}
.datatable-active {
    & a {
        background: 0 0;
        background-image: linear-gradient(
            310deg,
            var(--el-color-primary),
            #2dcecc
        );
        box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
        color: #fff;
        border: none;
        border-radius: 50% !important;
    }
}
.datatable-pagination a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 3px;
    border: 1px solid #dee2e6;
    border-radius: 50% !important;
    width: 36px;
    height: 36px;
    font-size: 14px;
    margin-left: 0;
}
.datatable-search {
    font-size: 14px;
    color: #495057;
    border: 1px solid var(--el-border-color-light);
    border-radius: 8px;
}
.datatable-info {
    color: #8392ab;
    font-size: 14px;
}
</style>
