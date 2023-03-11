<script setup lang="ts">
import { collapseStore } from "@/stores/Collapse";
import { settingStore } from "@/stores/modules/theme/SettingTheme";
import MenuItem from "./MenuItem.vue";
import { RouterModule } from "@/stores/modules/route/RouterModel";
const useRouterModule = RouterModule();
const { routerList } = storeToRefs(useRouterModule);
const useSettingStore = settingStore();
const isShowLogo = computed(() => useSettingStore.isShowLogo);
const useCollapseStore = collapseStore();
const isCollapse = computed(() => useCollapseStore.isCollapse);
const useroute = useRoute();
const path = ref<string>("");
watch(
    () => useroute.path,
    (getPath: string) => {
        path.value = getPath;
        console.log(getPath);
    },
    {
        immediate: true,
    }
);
</script>
<template>
    <el-menu
        mode="vertical"
        :collapse="!isCollapse"
        class="h-full menu_aside el-menu-vertical-demo"
        :default-active="path"
        unique-opened
        collapse-transition
        router
    >
        <RouterLink v-show="isShowLogo" to="/" class="no-underline">
            <div v-if="isCollapse" class="title">
                <!-- <IconifyVue :width="36" :height="36" icon="logos:vitejs" /> -->
                <svg-icon :width="36" :height="36" name="logo" />
                <span class="ml-[8px]">Sf-Admin</span>
            </div>
            <div v-else class="title">
                <svg-icon :width="36" :height="36" name="logo" />
            </div>
        </RouterLink>
        <menu-item :route-list="routerList" />
    </el-menu>
</template>
<style lang="scss">
.title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: linear-gradient(
        120deg,
        rgb(0, 128, 255),
        rgb(255, 0, 238)
    );
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-weight: bold;
    font-size: 24px;
    white-space: nowrap;
    user-select: none;
    height: var(--el-menu-item-height);
    cursor: pointer;
}
</style>
