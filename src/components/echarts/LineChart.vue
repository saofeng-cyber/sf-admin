<script setup lang="ts">
import { type ECOption, useEcharts } from "@/composables/echarts";
const lineOptions = ref<ECOption>({
    tooltip: {
        trigger: "axis",
        axisPointer: {
            type: "cross",
            label: {
                backgroundColor: "#6a7985",
            },
        },
    },
    legend: {
        data: ["下载量", "注册数"],
    },
    grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
    },
    xAxis: [
        {
            type: "category",
            boundaryGap: false,
            data: [
                "06:00",
                "08:00",
                "10:00",
                "12:00",
                "14:00",
                "16:00",
                "18:00",
                "20:00",
                "22:00",
                "24:00",
            ],
        },
    ],
    yAxis: [
        {
            type: "value",
        },
    ],
    series: [
        {
            color: "rgb(203,12,159)",
            name: "下载量",
            type: "line",
            smooth: true,
            // stack: "Total",
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0.25,
                            color: "rgb(203,12,159, 0.5)",
                        },
                        {
                            offset: 1,
                            color: "rgb(203,12,159,0.01)",
                        },
                    ],
                },
            },
            data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311],
        },
        {
            color: "rgb(67,63,117)",
            name: "注册数",
            type: "line",
            smooth: true,
            areaStyle: {
                color: {
                    type: "linear",
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        {
                            offset: 0.25,
                            color: "rgb(67, 63, 117, 0.5)",
                        },
                        {
                            offset: 1,
                            color: "rgb(67, 63, 117, 0.01)",
                        },
                    ],
                },
            },
            data: [4311, 3200, 6268, 7000, 7889, 1000, 7800, 1600, 6700, 5890],
        },
    ],
});
const { domRef: linechart } = useEcharts(lineOptions);
</script>

<template>
    <div ref="linechart" class="w-full h-full" />
</template>
<style scoped lang="scss"></style>
