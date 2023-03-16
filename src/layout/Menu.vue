<script setup lang="ts">
// import MenuTabs from "@/components/MenuTabs.vue";
import AsideBar from "./sider/AsideBar.vue";
import HeaderBar from "./header/HeaderBar.vue";
import type { CSSProperties } from "vue";
// import SettingVue from "./setting/Setting.vue";
// import { settingStore } from "@/stores/modules/theme/SettingTheme";
// const useSettingStore = settingStore();
// const isShowTab = computed(() => useSettingStore.isShowTab);
import { collapseStore } from "@/stores/Collapse";
const useCollapseStore = collapseStore();
const { isCollapse } = storeToRefs(useCollapseStore);
const mainCss = computed((): CSSProperties => {
    return {
        marginLeft: isCollapse.value ? "16.8rem" : "4.8rem",
    };
});
</script>

<template>
    <div class="common-layout">
        <div
            class="h-[320px] absolute w-full bg-[var(--sf-dark)] dark:bg-transparent"
        ></div>
        <aside class="sf-aside">
            <AsideBar />
        </aside>
        <main class="sf-main" :style="mainCss">
            <header class="px-2 py-1 sf-header">
                <HeaderBar />
            </header>
            <div class="px-4 py-2 sf-view">
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
        </main>
        <el-backtop target=".common-layout" :right="50" :bottom="50">
            <Iconify icon="bi:rocket-fill" />
        </el-backtop>
    </div>
</template>
<style scoped lang="scss">
.common-layout {
    position: relative;
    height: 100%;
    overflow-y: auto;
    background-color: var(--el-bg-color-page);
    overflow-x: hidden;
    .sf-aside {
        position: fixed;
        top: 1rem;
        left: 0;
        bottom: 1rem;
        width: auto;
    }
    .sf-main {
        position: relative;
        height: 100%;
        max-height: 100vh;
        transition: all 0.3s var(--el-transition-function-ease-in-out-bezier);
    }
}
</style>
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
