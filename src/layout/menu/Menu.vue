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
        class="h-full menu_aside el-menu-vertical-demo border-none ml-4 rounded-[2rem]"
        :default-active="path"
        unique-opened
        collapse-transition
        router
    >
        <RouterLink v-show="isShowLogo" to="/" class="no-underline">
            <div
                v-if="isCollapse"
                class="flex justify-center items-center py-2 px-1 w-full whitespace-nowrap"
            >
                <IconifyVue :width="36" :height="36" icon="logos:vitejs" />
                <span
                    class="ml-2 font-bold text-xl text-[#344767] dark:text-white"
                    >SF Admin</span
                >
            </div>
            <div v-else class="text-center py-2 px-1 w-full">
                <IconifyVue :width="36" :height="36" icon="logos:vitejs" />
            </div>
        </RouterLink>
        <menu-item :route-list="routerList" />
    </el-menu>
</template>
<style lang="scss"></style>
