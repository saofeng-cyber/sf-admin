<script setup lang="ts">
import { tagRouter } from "@/stores/modules/route/TagRouter";
import type { TabPaneName } from "element-plus";
const useTagRouter = tagRouter();
const useroute = useRoute();
const userouter = useRouter();
const tabRouter = useTagRouter.newTagRouter;
const editableTabsValue = ref<string>("");

const addTag = () => {
    useTagRouter.addTab({
        path: useroute.path,
        name: useroute.meta.title as string,
    });
};
watch(
    () => useroute.name,
    () => {
        if (useroute.name === "login" || useroute.name === "NotFound") {
            return;
        }
        editableTabsValue.value = useroute.path;
        addTag();
    },
    { deep: true, immediate: true }
);
const tabRef = ref<HTMLElement>();
const handleClickTab = (path: TabPaneName) => {
    userouter.push({ path: path as string });
};
const removeChromeTab = (path: TabPaneName) => {
    tabRouter.forEach((item: any, index: number) => {
        if (item.path === path) {
            const nextTab =
                tabRouter[index - 1]?.path || tabRouter[index + 1].path;
            editableTabsValue.value = nextTab;
            userouter.push(editableTabsValue.value);
        }
    });
    useTagRouter.delRouter(path as string);
};
</script>
<template>
    <div class="w-full overflow-x-auto">
        <div class="h-[36px] menu-tabs">
            <div
                ref="tabRef"
                class="flex-1 h-full pl-4 overflow-x-auto tabs-nav"
            >
                <el-tabs
                    v-model="editableTabsValue"
                    type="card"
                    stretch
                    class="demo-tabs"
                    @tab-remove="removeChromeTab"
                    @tab-change="handleClickTab"
                >
                    <el-tab-pane
                        v-for="item in tabRouter"
                        :key="item.name"
                        lazy
                        :closable="item.name !== '分析页'"
                        :label="item.name"
                        :name="item.path"
                    />
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.menu-tabs {
    .tabs-nav {
        .el-tabs {
            --el-tabs-header-height: 32px;
        }

        :deep(.el-tabs__nav-wrap) {
            display: flex;
            align-items: center;
        }

        :deep(.el-tabs__header) {
            border: none;
            height: 100%;
            display: flex;
            align-items: center;
            margin: 0;
        }

        :deep(.el-tabs__nav) {
            border-bottom: 1px solid var(--el-border-color-light);
            border-radius: 4px;
        }
    }
}
</style>
