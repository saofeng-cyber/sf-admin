<script setup lang="ts">
import { settingStore } from "@/stores/modules/theme/SettingTheme";
import MenuItem from "./MenuItem.vue";
import { RouterModule } from "@/stores/modules/route/RouterModel";
import { useAppSetting } from "@/hooks/useAppSetting";
const useRouterModule = RouterModule();
const { routerList } = storeToRefs(useRouterModule);
const useSettingStore = settingStore();
const isShowLogo = computed(() => useSettingStore.isShowLogo);
const { isCollapse } = useAppSetting();
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
        class="h-full menu_aside el-menu-vertical-demo border-none ml-4 rounded-[2rem]"
        :default-active="path"
        unique-opened
        collapse-transition
        router
    >
        <RouterLink v-show="isShowLogo" to="/" class="no-underline">
            <div
                v-if="isCollapse"
                class="flex items-center justify-center w-full px-1 py-2 whitespace-nowrap"
            >
                <IconifyVue :width="36" :height="36" icon="logos:vitejs" />
                <span
                    class="ml-2 font-bold text-xl text-[#344767] dark:text-white"
                    >SF Admin</span
                >
            </div>
            <div v-else class="w-full px-1 py-2 text-center">
                <IconifyVue :width="36" :height="36" icon="logos:vitejs" />
            </div>
        </RouterLink>
        <menu-item :route-list="routerList" />
    </el-menu>
</template>
<style lang="scss">
.el-menu-vertical-demo {
    overflow-x: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 15rem;
}
.menu_aside::-webkit-scrollbar {
    width: 0px;
}
</style>
