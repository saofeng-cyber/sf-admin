<script setup lang="ts">
import { Moon, Sunny } from "@element-plus/icons-vue";
import { toggleDark, isDark } from "@/utils/themes/dark";
import { collapseStore } from "@/stores/Collapse";
import { useRoute } from "vue-router";
import IconifyVue from "@/components/Iconify.vue";
import { settingStore } from "@/stores/modules/theme/SettingTheme";
const drawer = ref<boolean>(false);
const useSettingStore = settingStore();
const useCollapseStore = collapseStore();
const { device } = storeToRefs(useCollapseStore);
const {
    isShowLogo,
    isShowTab,
    isGrayMode,
    isWeakness,
    multiTagsCache,
    systemTheme,
} = storeToRefs(useSettingStore);
const openSetting = () => {
    drawer.value = true;
};

const changeTheme = (value: string | number | boolean) => {
    toggleDark(value as boolean);
};

const setLayoutModel = (type: string) => {
    console.log(type);
};
const useroute = useRoute();
watch(
    () => useroute.path,
    () => {
        drawer.value = false;
    }
);
const themeColors = ref<Array<themeColor.themeColorsType>>([
    /* 道奇蓝（默认） */
    { color: "#409eff", themeColor: "default" },
    /* 猩红色 */
    { color: "#f5222d", themeColor: "dusk" },
    /* 橙红色 */
    { color: "#fa541c", themeColor: "volcano" },
    /* 金色 */
    { color: "#fadb14", themeColor: "yellow" },
    /* 绿宝石 */
    { color: "#13c2c2", themeColor: "mingQing" },
    /* 酸橙绿 */
    { color: "#52c41a", themeColor: "auroraGreen" },
    /* 深粉色 */
    { color: "#eb2f96", themeColor: "pink" },
    /* 深紫罗兰色 */
    { color: "#722ed1", themeColor: "saucePurple" },
]);

const isActive = ref<number>(0);
const customColor = ref<string>("#409eff");
const chooseThemeColor = (i: number) => {
    isActive.value = i;
    const mode: themeColor.Mode = isDark.value ? "black" : "white";
    useSettingStore.setSystemTheme(mode, themeColors.value[i].color);
};

const setThemeColor = (value: string | null) => {
    const mode: themeColor.Mode = isDark.value ? "black" : "white";
    useSettingStore.setSystemTheme(mode, value as string);
    isActive.value = -1;
};

const markValue = ref<string>("card");

const greyChange = (value: string | number | boolean) => {
    if (value) {
        useSettingStore.setHtmlGray(true);
    } else {
        useSettingStore.setHtmlGray(false);
    }
};
const weekChange = (value: string | number | boolean) => {
    if (value) {
        useSettingStore.setHtmlWeakness(true);
    } else {
        useSettingStore.setHtmlWeakness(false);
    }
};
const tagsChange = (value: string | number | boolean) => {
    useSettingStore.changeTabs(value as boolean);
};
const logoChange = (value: string | number | boolean) => {
    useSettingStore.changeLogo(value as boolean);
};
const multiTagsCacheChange = (value: string | number | boolean) => {
    useSettingStore.setTabsLongTime(value as boolean);
};

const onChange = () => {
    console.log(666);
};

watch(
    () => isDark.value,
    () => {
        chooseThemeColor(isActive.value);
    }
);
onBeforeMount(() => {
    const mode: themeColor.Mode = isDark.value ? "black" : "white";
    isActive.value = themeColors.value.findIndex(
        (item) => item.color === systemTheme.value
    );
    chooseThemeColor(isActive.value);
    useSettingStore.setSystemTheme(mode, systemTheme.value);
    useSettingStore.setHtmlGray(isGrayMode.value);
    useSettingStore.setHtmlWeakness(isWeakness.value);
    useSettingStore.changeLogo(isShowLogo.value);
    useSettingStore.changeTabs(isShowTab.value);
});
</script>
<template>
    <div
        class="absolute right-[12px] top-2/4 -translate-y-[50%] rounded cursor-pointer w-[36px] h-[36px] z-[1000] flex justify-center items-center transition-[scale]"
        style="background-color: var(--el-color-primary)"
        @click="openSetting"
    >
        <IconifyVue
            class="duration-[2s] hover:scale-105"
            icon="ep:setting"
            :width="24"
            :height="24"
            style="color: #fff"
        />
    </div>
    <el-drawer
        v-model="drawer"
        title="主题配置"
        class="theme_drawer"
        :with-header="true"
        :size="320"
        :lock-scroll="true"
    >
        <el-divider>
            <span
                class="font-bold text-[18px]"
                style="color: var(--el-text-color-primary)"
            >
                主题配置
            </span>
        </el-divider>
        <div class="text-center">
            <el-switch
                v-model="isDark"
                size="large"
                inline-prompt
                :inactive-icon="Moon"
                :active-icon="Sunny"
                @change="changeTheme"
            />
        </div>
        <el-divider>
            <span
                class="font-bold text-[18px]"
                style="color: var(--el-text-color-primary)"
            >
                导航栏模式
            </span>
        </el-divider>
        <ul class="sf-theme">
            <el-tooltip
                class="item"
                content="左侧模式"
                placement="bottom"
                popper-class="pure-tooltip"
            >
                <li ref="verticalRef" @click="setLayoutModel('vertical')">
                    <div />
                    <div />
                </li>
            </el-tooltip>
            <el-tooltip
                v-if="!device"
                class="item"
                content="顶部模式"
                placement="bottom"
                popper-class="pure-tooltip"
            >
                <li ref="horizontalRef" @click="setLayoutModel('horizontal')">
                    <div />
                    <div />
                </li>
            </el-tooltip>
        </ul>
        <el-divider>
            <span
                class="font-bold text-[18px]"
                style="color: var(--el-text-color-primary)"
            >
                系统主题
            </span>
        </el-divider>
        <div class="theme-color">
            <ul class="flex items-center justify-around">
                <li
                    v-for="(item, index) in themeColors"
                    :key="index"
                    class="w-[20px] h-[20px] rounded-[4px] cursor-pointer flex items-center justify-center border border-gray-300"
                    :style="{ backgroundColor: item.color }"
                    @click="chooseThemeColor(index)"
                >
                    <el-icon v-show="index === isActive" color="#fff">
                        <Iconify icon="ep:select" />
                    </el-icon>
                </li>
                <el-color-picker
                    v-model="customColor"
                    size="small"
                    @change="setThemeColor"
                />
            </ul>
        </div>
        <el-divider>
            <span
                class="font-bold text-[18px]"
                style="color: var(--el-text-color-primary)"
            >
                界面显示
            </span>
        </el-divider>
        <ul class="w-full showPage">
            <li>
                <span class="dark:text-white">灰色模式</span>
                <el-switch
                    v-model="isGrayMode"
                    inline-prompt
                    inactive-color="#a6a6a6"
                    active-text="开"
                    inactive-text="关"
                    @change="greyChange"
                />
            </li>
            <li>
                <span class="dark:text-white">色弱模式</span>
                <el-switch
                    v-model="isWeakness"
                    inline-prompt
                    inactive-color="#a6a6a6"
                    active-text="开"
                    inactive-text="关"
                    @change="weekChange"
                />
            </li>
            <li>
                <span class="dark:text-white">隐藏标签页</span>
                <el-switch
                    v-model="isShowTab"
                    inline-prompt
                    inactive-color="#a6a6a6"
                    active-text="开"
                    inactive-text="关"
                    @change="tagsChange"
                />
            </li>
            <li>
                <span class="dark:text-white">侧边栏Logo</span>
                <el-switch
                    v-model="isShowLogo"
                    inline-prompt
                    :active-value="true"
                    :inactive-value="false"
                    inactive-color="#a6a6a6"
                    active-text="开"
                    inactive-text="关"
                    @change="logoChange"
                />
            </li>
            <li>
                <span class="dark:text-white">标签页持久化</span>
                <el-switch
                    v-model="multiTagsCache"
                    inline-prompt
                    inactive-color="#a6a6a6"
                    active-text="开"
                    inactive-text="关"
                    @change="multiTagsCacheChange"
                />
            </li>
            <li>
                <span class="dark:text-white">标签风格</span>
                <el-radio-group
                    v-model="markValue"
                    size="small"
                    @change="onChange"
                >
                    <el-radio label="card"> 卡片 </el-radio>
                    <el-radio label="smart"> 灵动 </el-radio>
                </el-radio-group>
            </li>
        </ul>
    </el-drawer>
</template>
<style scoped lang="scss">
.sf-theme {
    margin-top: 25px;
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;

    li {
        width: 18%;
        height: 45px;
        background: #f0f2f5;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        border-radius: 4px;
        box-shadow: 0 1px 2.5px 0 rgb(0 0 0 / 18%);

        &:nth-child(1) {
            margin: 0 8px;

            div {
                &:nth-child(1) {
                    width: 30%;
                    height: 100%;
                    background: #1b2a47;
                }

                &:nth-child(2) {
                    width: 70%;
                    height: 30%;
                    top: 0;
                    right: 0;
                    background: #fff;
                    box-shadow: 0 0 1px #888;
                    position: absolute;
                }
            }
        }

        &:nth-child(2) {
            margin: 0 8px;

            div {
                &:nth-child(1) {
                    width: 100%;
                    height: 30%;
                    background: #1b2a47;
                    box-shadow: 0 0 1px #888;
                }
            }
        }
    }
}

.showPage {
    // border-bottom: 1px solid #ccc;
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 24px 0;
    }
}
</style>
