<script setup lang="ts">
// import Chart from "chart.js/auto";
// const chatCanvas = ref<HTMLCanvasElement>();
// const initChart = () => {
//     const ctx = (chatCanvas.value as HTMLCanvasElement).getContext(
//         "2d"
//     ) as CanvasRenderingContext2D;
//     new Chart(ctx, {
//         type: "bar",
//         data: {
//             labels: [
//                 "Apr",
//                 "May",
//                 "Jun",
//                 "Jul",
//                 "Aug",
//                 "Sep",
//                 "Oct",
//                 "Nov",
//                 "Dec",
//             ],
//             datasets: [
//                 {
//                     label: "Sales",
//                     // tension: 0.4,
//                     borderWidth: 0,
//                     borderRadius: 4,
//                     borderSkipped: false,
//                     backgroundColor: "#fff",
//                     data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
//                     maxBarThickness: 6,
//                 },
//             ],
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             plugins: {
//                 legend: {
//                     display: false,
//                 },
//             },
//             interaction: {
//                 intersect: false,
//                 mode: "index",
//             },
//             scales: {
//                 y: {
//                     grid: {
//                         // drawBorder: false,
//                         display: false,
//                         drawOnChartArea: false,
//                         drawTicks: false,
//                     },
//                     ticks: {
//                         // suggestedMin: 0,
//                         // suggestedMax: 500,
//                         // beginAtZero: true,
//                         padding: 15,
//                         font: {
//                             size: 14,
//                             family: "Open Sans",
//                             style: "normal",
//                             lineHeight: 2,
//                         },
//                         color: "#fff",
//                     },
//                 },
//                 x: {
//                     grid: {
//                         // drawBorder: false,
//                         display: false,
//                         drawOnChartArea: false,
//                         drawTicks: false,
//                     },
//                     ticks: {
//                         display: false,
//                     },
//                 },
//             },
//         },
//     });
// };
// onMounted(() => {
//     initChart();
// });
import StatisticsCard from "../container/src/card/StatisticsCard.vue";
</script>
<template>
    <div>
        <div
            v-for="(item, index) in 4"
            :key="index"
            class="sm:w-full md:w-1/2 lg:w-1/4"
        >
            <StatisticsCard title="我值多少钱" value="$5000" />
        </div>
    </div>
    <!-- <el-card class="mb-4">
        <template #header>
            <div class="flex justify-between card-header">
                <h3>Chartjs</h3>
                <el-link
                    type="primary"
                    href="https://www.chartjs.org/docs/latest/"
                    target="_blank"
                >
                    To ChartJs
                </el-link>
            </div>
        </template>
        <div class="bg-gray-800">
            <canvas ref="chatCanvas"></canvas>
        </div>
    </el-card> -->
</template>
