<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import { collapseStore } from "@/stores/Collapse";
import MenuVue from "../menu/Menu.vue";

const useCollapseStore = collapseStore();
const { device, isCollapse, deviceWidth } = storeToRefs(useCollapseStore);
useResizeObserver(document.body, (entries) => {
    const entry = entries[0];
    const { width } = entry.contentRect;
    if (width > 0 && width < deviceWidth.value) {
        useCollapseStore.settingDevice(true);
    } else {
        useCollapseStore.settingDevice(false);
    }
});
</script>
<template>
    <el-drawer
        v-if="device"
        v-model="isCollapse"
        class="s_drawer"
        :open-delay="100"
        :lock-scroll="true"
        :close-delay="100"
        size="220"
        :modal="true"
        direction="ltr"
        :with-header="false"
    >
        <menu-vue />
    </el-drawer>
    <menu-vue v-else />
</template>
<style scoped lang="scss">
.el-menu-vertical-demo {
    overflow-x: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease-in;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(-30px);
}
</style>
