<script setup lang="ts">
import printJS from "print-js";
import printImg from "@/assets/images/001935-1615911575642b.jpg";
const printTable = () => {
    const myData = [
        {
            name: "骚风",
            weChat: "saofeng_521",
            remark: "欢迎来技术交流",
        },
    ];
    printJS({
        printable: myData,
        type: "json",
        properties: ["name", "weChat", "remark"],
        documentTitle: "打印表格",
        showModal: true,
        gridStyle: "border: 1px solid #ccc;text-align:center",
        gridHeaderStyle: "color: #000;  border: 1px solid #ccc;",
        header: "欢迎来技术交流",
    });
};
const printImage = () => {
    const myData = printImg;
    printJS({
        printable: myData,
        type: "image",
        documentTitle: "打印图片",
        showModal: true,
    });
};
</script>
<template>
    <div class="app rounded-2xl p-[12px]">
        <div class="text-[20px] font-bold mb-3">打印</div>
        <div id="print_content" class="app">
            <el-button type="primary" @click="printTable"> 打印表格 </el-button>
            <el-button type="primary" @click="printImage"> 打印图片 </el-button>
        </div>
        <div class="flex items-center w-full my-3">
            <span>对接说明：</span>
            <el-link
                type="primary"
                class="break-all"
                href="https://github.com/crabbly/Print.js"
                target="_blank"
            >
                https://github.com/crabbly/Print.js
            </el-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app {
    background-color: var(--el-bg-color);
}
</style>
