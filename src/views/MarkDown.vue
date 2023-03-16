<script setup lang="ts">
import Vditor from "vditor";
import "vditor/dist/index.css";
import { isDark } from "@/utils/themes/dark";
const vditor = ref<Vditor>();
const vditorRef = ref<HTMLElement>();
const renderVditor = () => {
    if (!vditorRef.value) return;
    vditor.value = new Vditor(vditorRef.value, {
        height: 750,
        mode: "sv",
        icon: "ant",
        toolbarConfig: {
            pin: true,
        },
        theme: isDark.value ? "dark" : "classic",
        cache: { enable: false },
        after: () => {
            nextTick(() => {
                vditor.value!.setValue(
                    localStorage.getItem("vditorvditor")
                        ? (localStorage.getItem("vditorvditor") as string)
                        : "Hello World！"
                );
            });
        },
    });
};
watch(
    () => isDark.value,
    (newValue) => {
        const themeMode = newValue ? "dark" : "classic";
        vditor.value?.setTheme(themeMode);
    }
);
onMounted(() => {
    renderVditor();
});
</script>
<template>
    <div class="h-full mark rounded-2xl">
        <div class="text-[20px] font-bold mb-3 text-white">Markdown插件</div>
        <div id="vditor" ref="vditorRef"></div>

        <div class="mt-[12px] flex items-center w-full">
            <span>对接说明：</span>
            <el-link
                type="primary"
                class="break-all"
                href="https://b3log.org/vditor/demo/index.html"
                target="_blank"
            >
                https://b3log.org/vditor/demo/index.html
            </el-link>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
