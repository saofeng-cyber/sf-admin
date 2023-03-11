<script setup lang="ts">
// import MenuTabs from "@/components/MenuTabs.vue";
import AsideBar from "./sider/AsideBar.vue";
import HeaderBar from "./header/HeaderBar.vue";
import SettingVue from "./setting/Setting.vue";
// import { settingStore } from "@/stores/modules/theme/SettingTheme";
// const useSettingStore = settingStore();
// const isShowTab = computed(() => useSettingStore.isShowTab);
import { collapseStore } from "@/stores/Collapse";
const useCollapseStore = collapseStore();
const device = computed(() => useCollapseStore.device);
</script>

<template>
    <el-container
        class="relative w-full h-full overflow-x-hidden admin-container bg-[var(--el-bg-color-page)]"
    >
        <el-aside
            width="auto"
            :class="[device ? 'el-aside-device' : 'el-aside-on']"
        >
            <el-scrollbar height="100%" class="bg-[var(--el-bg-color)]">
                <aside-bar />
            </el-scrollbar>
        </el-aside>
        <el-container class="content-container">
            <setting-vue />
            <el-header
                class="p-0 menu_header"
                :class="[device ? 'el-header-device' : 'el-header-on']"
            >
                <header-bar class="bg-[var(--el-bg-color)]" />
            </el-header>
            <!-- <div
                v-show="isShowTab"
                class="shadow bg-[var(--el-bg-color)]"
                style="margin: 8px 16px 0 16px"
            >
                <MenuTabs />
            </div> -->
            <el-main class="menu_content">
                <div :class="[device ? 'default-main-device' : 'default-main']">
                    <RouterView v-slot="{ Component }">
                        <template v-if="Component">
                            <transition name="slide-x" appear mode="out-in">
                                <!-- <KeepAlive>
                                        <Suspense>
                                            <component :is="Component" />
                                        </Suspense>
                                    </KeepAlive> -->
                                <component :is="Component" />
                            </transition>
                        </template>
                    </RouterView>
                </div>
                <el-backtop target=".menu_content" :right="50" :bottom="50">
                    <Iconify icon="bi:rocket-fill" />
                </el-backtop>
            </el-main>

            <!-- <el-footer
                height="56px"
                class="bg-[var(--el-bg-color)]"
                :class="[device ? 'el-aside-device' : 'el-footer-on']"
            >
                <div
                    class="flex items-center text-center justify-center w-full h-full text-[var(--el-color-primary)]"
                >
                    MIT Licensed | Copyright © 2023-present SaoFeng
                </div>
            </el-footer> -->
        </el-container>
    </el-container>
</template>
<style scoped lang="scss">
.admin-container {
    .el-menu {
        border: none;
    }

    .el-aside {
        height: calc(100% - 32px);
    }
    .el-header,
    .el-aside,
    .el-footer {
        box-shadow: var(--el-box-shadow-light);
    }
    .el-aside-device {
        margin: 0;
    }
    .el-other-on {
        margin: 16px 16px 0 0;
    }
    .el-header-device {
        margin: 0 0 16px 0;
    }
    .el-header-on {
        margin: 16px 16px 16px 0;
    }
    .el-footer-on {
        margin: 16px 16px 16px 0;
    }
    .el-aside-on {
        margin: 16px 16px 0 16px;
    }

    & .content-container {
        position: relative;
        & .menu_content {
            position: relative;
            height: 100%;
            overflow-x: hidden;
            background-color: var(--el-bg-color-page);
            padding: 0;
        }
        .default-main {
            margin: 0 16px 16px 0;
        }
        .default-main-device {
            margin: 0 16px 16px 16px;
        }
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

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-x-enter-active {
    transition: all 0.3s ease-out;
}

.slide-x-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-x-enter-from,
.slide-x-leave-to {
    transform: translateX(30px);
    opacity: 0;
}

.slide-y-enter-active {
    transition: all 0.3s ease-out;
}

.slide-y-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-y-enter-from,
.slide-y-leave-to {
    transform: translateY(20px);
    opacity: 0;
}

.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

.rotate-fade-enter-active {
    transition: all 0.3s ease-out;
}

.rotate-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.rotate-fade-enter-from {
    transform: rotate(90deg);
    opacity: 1;
}

.rotate-fade-leave-to {
    transform: rotate(-90deg);
    opacity: 0;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}

:deep(.s_drawer) {
    --el-drawer-padding-primary: 0;
}

:deep(.theme_drawer) {
    .el-drawer__header {
        margin-bottom: 0;
    }
}
</style>
