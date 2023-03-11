<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
import { collapseStore } from "@/stores/Collapse";
const dialogVisible = ref<boolean>(false);
const searchValue = ref<string>("骚风");
const useCollapseStore = collapseStore();
const { device } = storeToRefs(useCollapseStore);
const searchRef = ref();
const openDialogVisible = () => {
    dialogVisible.value = true;
    setTimeout(() => {
        searchRef.value.focus();
    }, 200);
};
defineExpose({ openDialogVisible });
</script>
<template>
    <el-dialog
        v-model="dialogVisible"
        title="搜索"
        :width="device ? '80%' : '50%'"
        :show-close="true"
        align-center
    >
        <transition name="fade" appear mode="out-in">
            <div class="flex items-center">
                <el-input
                    ref="searchRef"
                    v-model="searchValue"
                    class="w-full"
                    size="large"
                    placeholder="请输入关键词搜索"
                    :suffix-icon="Search"
                /></div
        ></transition>
        <el-empty description="暂无搜索结果" />
        <template #footer>
            <div class="search-footer text-[#333] dark:text-white">
                <span class="search-footer-item">
                    <div class="icon">
                        <IconifyVue
                            icon="ic:baseline-subdirectory-arrow-left"
                        />
                    </div>
                    确认
                </span>
                <span class="search-footer-item">
                    <div class="icon">
                        <IconifyVue icon="mdi:arrow-up" />
                    </div>
                    <div class="icon">
                        <IconifyVue icon="mdi:arrow-down" />
                    </div>
                    切换
                </span>
                <span class="search-footer-item">
                    <div class="icon">
                        <IconifyVue icon="mdi:keyboard-esc" />
                    </div>
                    关闭
                </span>
            </div>
        </template>
    </el-dialog>
</template>
<style lang="scss">
.search-footer {
    display: flex;

    .search-footer-item {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 14px;
    }

    .icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        margin-right: 5px;
        border: 10px;
        box-shadow: inset 0 -2px #cdcde6, inset 0 0 1px 1px #fff,
            0 1px 2px 1px #1e235a66;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
