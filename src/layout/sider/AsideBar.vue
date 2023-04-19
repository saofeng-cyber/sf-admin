<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";
import MenuVue from "../menu/Menu.vue";
import { useAppSetting } from "@/hooks/useAppSetting";

const { device, isCollapse, deviceWidth, settingDevice } = useAppSetting();
useResizeObserver(document.body, (entries) => {
    const entry = entries[0];
    const { width } = entry.contentRect;
    if (width > 0 && width < deviceWidth.value) {
        settingDevice(true);
    } else {
        settingDevice(false);
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
        size="16rem"
        :modal="true"
        direction="ltr"
        :with-header="false"
    >
        <menu-vue />
    </el-drawer>
    <menu-vue v-else />
</template>
<style scoped lang="scss">
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
