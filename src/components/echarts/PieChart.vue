<script setup lang="ts">
import { type ECOption, useEcharts } from "@/composables/echarts";
import type { Ref } from "vue";
const pieOptions = ref<ECOption>({
    tooltip: {
        trigger: "item",
    },
    legend: {
        bottom: "1%",
        left: "center",
        itemStyle: {
            borderWidth: 0,
        },
    },
    series: [
        {
            color: ["#5da8ff", "#8e9dff", "#fedc69", "#26deca"],
            name: "时间安排",
            type: "pie",
            radius: ["45%", "75%"],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 1,
            },
            label: {
                show: false,
                position: "center",
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: "12",
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 20, name: "学习" },
                { value: 10, name: "娱乐" },
                { value: 30, name: "工作" },
                { value: 40, name: "休息" },
            ],
        },
    ],
}) as Ref<ECOption>;
const { domRef: pieChart } = useEcharts(pieOptions);
</script>

<template>
    <div ref="pieChart" class="w-full h-full" />
</template>
<style scoped lang="scss"></style>
