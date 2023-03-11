<script setup lang="ts">
import type { TabPaneName } from "element-plus";
interface TabsType {
    label: string;
    name: string;
}
const activeName = ref<string>("first");
const handleChange = (name: TabPaneName) => {
    console.log(name);
};

const tabsList = ref<Array<TabsType>>([
    {
        label: "通知",
        name: "first",
    },
    {
        label: "消息",
        name: "second",
    },
    {
        label: "代办",
        name: "third",
    },
]);
</script>
<template>
    <el-tabs
        v-model="activeName"
        class="w-full demo-tabs"
        :stretch="true"
        @tab-change="handleChange"
    >
        <el-tab-pane
            v-for="item in tabsList"
            :key="item.name"
            :label="item.label"
            :name="item.name"
        >
            <el-scrollbar max-height="320">
                <div class="flex notice_container">
                    <div class="notice_avatar mr-[16px]">
                        <el-avatar
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        />
                    </div>
                    <div
                        class="flex flex-col justify-between flex-1 notice-container-text"
                    >
                        <el-tooltip placement="top">
                            <template #content>
                                这种模板可以区分多种通知类型
                            </template>
                            这种模板可以区分多种通知类型
                        </el-tooltip>
                        <div
                            class="text-gray-400 text-[12px] notice-text-datetime"
                        >
                            一年前
                        </div>
                    </div>
                </div>
            </el-scrollbar>
        </el-tab-pane>
    </el-tabs>
</template>
<style scoped lang="scss"></style>
