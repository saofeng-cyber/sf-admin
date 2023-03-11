<script setup lang="ts">
// import type { RouteLocationMatched } from "vue-router";
import { collapseStore } from "@/stores/Collapse";

const useCollapseStore = collapseStore();
const { isCollapse } = storeToRefs(useCollapseStore);
const expand = () => {
    console.log(isCollapse.value);
    useCollapseStore.modifyCollapse();
};
// const useroute = useRoute();
// const breadcrumbList = ref<Array<RouteLocationMatched>>([]);
// watch(
//     () => useroute.path,
//     () => {
//         breadcrumbList.value = useroute.matched.filter(
//             (item) => item.children.length !== 1
//         );
//         console.log(breadcrumbList.value);
//     },
//     {
//         immediate: true,
//     }
// );
// const searchValue = ref<string>("");
</script>
<template>
    <div class="flex items-center justify-between h-full w-full">
        <div class="flex items-center h-full">
            <el-icon
                class="cursor-pointer text-[24px] w-[42px] theme-icon-bg"
                @click="expand"
            >
                <Iconify
                    icon="line-md:menu-unfold-right"
                    v-if="!isCollapse"
                    :width="24"
                    :height="24"
                />
                <Iconify
                    icon="line-md:menu-unfold-left"
                    v-else
                    :width="24"
                    :height="24"
                />
            </el-icon>
            <!-- <el-breadcrumb class="px-3 max-sm:hidden" separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">
                    首页
                </el-breadcrumb-item>
                <el-breadcrumb-item
                    v-for="(item, index) in breadcrumbList"
                    :key="index"
                    :to="{ path: item.path }"
                >
                    {{ item.meta.title }}
                </el-breadcrumb-item>
            </el-breadcrumb> -->
        </div>
        <!-- <MenuTabs v-if="!device" class="flex-1" /> -->
        <div class="flex items-center justify-end h-full">
            <HeaderRight />
        </div>
    </div>
</template>
<style scoped lang="scss"></style>
