<script setup lang="ts">
import screenfull from "screenfull";
import { toggleDark } from "@/utils/index";
import { RouterModule } from "@/stores/modules/route/RouterModel";
import { localeLanguage } from "@/stores/modules/Lang";
import { setLocale } from "@/i18n/index";
import Search from "./search/Search.vue";
import Notice from "./notice/Notice.vue";
import type { LocaleKey } from "@/i18n/lang";
const isfull = ref<boolean>(true);
const useRouterModule = RouterModule();
const useLocaleLanguage = localeLanguage();
const localeLanguageValue = computed(() => useLocaleLanguage.localeLanguage);
const router = useRouter();
const instance = getCurrentInstance();
const fullScreen = () => {
    screenfull.toggle();
    isfull.value = screenfull.isFullscreen;
};
const handleCommand = (command: string) => {
    if (command === "logout") {
        useRouterModule.clearToken();
        router.push({ path: "/login", replace: true });
    }
};

const togithub = () => {
    window.open("https://github.com/saofeng-cyber/sf-admin", "_target");
};

const openSearch = () => {
    (instance?.refs as any)["dialogVisibleRef"].openDialogVisible();
};
const toggleLanguage = (command: LocaleKey) => {
    useLocaleLanguage.changeLocale(command);
    setLocale(command);
};
onMounted(() => {
    toggleLanguage(localeLanguageValue.value);
});
</script>
<template>
    <el-tooltip content="搜索" placement="bottom-end">
        <div class="searchBox" @click.prevent="openSearch">
            <span class="searchIcon">
                <Iconify
                    icon="material-symbols:search-rounded"
                    :width="20"
                    :height="20"
                />
            </span>
        </div>
    </el-tooltip>
    <el-tooltip content="Github" placement="bottom-end">
        <el-icon
            class="w-[32px] mr-[12px] text-center cursor-pointer"
            @click.prevent="togithub"
        >
            <span class="text-2xl iconfont icon-github" />
        </el-icon>
    </el-tooltip>
    <el-dropdown
        class="flex items-center justify-center w-[32px] mr-[12px] cursor-pointer"
        @command="toggleLanguage"
        trigger="click"
        teleported
        hide-on-click
    >
        <el-icon class="w-[32px] h-full text-center cursor-pointer">
            <Iconify icon="clarity:language-solid" :width="20" :height="20" />
        </el-icon>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item
                    command="zh-CN"
                    :disabled="localeLanguageValue === 'zh-CN'"
                    icon=""
                >
                    中文简体
                </el-dropdown-item>
                <el-dropdown-item
                    divided
                    command="en"
                    :disabled="localeLanguageValue === 'en'"
                    icon=""
                >
                    英文
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>

    <el-tooltip content="全屏" placement="bottom-end">
        <el-icon
            class="w-[32px] h-full mr-[12px] text-center cursor-pointer"
            @click.prevent="fullScreen"
        >
            <span
                v-if="!isfull"
                class="text-2xl iconfont icon-quxiaoquanping"
            />
            <span v-else class="text-2xl iconfont icon-quanping" />
        </el-icon>
    </el-tooltip>
    <el-tooltip content="主题模式" placement="bottom-end">
        <el-icon
            class="w-[32px] mr-[12px] text-center cursor-pointer"
            @click.prevent="toggleDark()"
        >
            <span class="text-2xl iconfont icon-taiyang" />
        </el-icon>
    </el-tooltip>
    <el-tooltip content="消息通知" placement="bottom-end">
        <el-icon class="w-[32px] mr-[12px] text-center cursor-pointer">
            <el-badge is-dot>
                <el-popover
                    placement="top-start"
                    title=""
                    :width="300"
                    trigger="click"
                    content="this is content, this is content, this is content"
                >
                    <template #reference>
                        <IconifyVue icon="mdi:bell" />
                    </template>
                    <slot>
                        <Notice />
                    </slot>
                </el-popover>
            </el-badge>
        </el-icon>
    </el-tooltip>
    <el-dropdown
        class="flex items-center justify-center w-[48px] cursor-pointer"
        @command="handleCommand"
    >
        <span class="el-dropdown-link">
            <img
                class="w-[32px] h-[32px] rounded-[4px]"
                src="@/assets/images/logo.gif"
                alt=""
                srcset=""
            />
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item command="usercenter">
                    用户中心
                </el-dropdown-item>
                <el-dropdown-item command="logout"> 退出登录 </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <search ref="dialogVisibleRef" />
</template>
<style scoped lang="scss">
.searchBox {
    width: auto;
    height: 27px;
    display: flex;
    align-items: center;

    .searchIcon {
        display: inline-block;
        width: 27px;
        height: 27px;
        border-radius: 50%;
        margin-right: 12px;
        background-color: var(--el-color-primary);
        color: #fff;
        text-align: center;
        line-height: 27px;
        cursor: pointer;
        transition: 0.3s;
    }

    .searchIcon:hover {
        background-color: var(--el-color-primary-light-4);
    }
}
</style>
