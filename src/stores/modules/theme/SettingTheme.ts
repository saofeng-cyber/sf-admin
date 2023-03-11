import { setThemeType, toggleClass } from "./helps";
export const settingStore = defineStore("settingStore", {
    state: () => ({
        navigationBarMode: "",
        menuBgColor: "",
        systemTheme: "#409eff",
        base: "primary",
        isShowLogo: true,
        isShowTab: true,
        isGrayMode: false,
        isWeakness: false,
        multiTagsCache: false,
    }),
    getters: {},
    actions: {
        setNavigationBarMode(navBarMode: string) {
            this.navigationBarMode = navBarMode;
        },
        setSystemTheme(mode: themeColor.Mode, systemTheme: string) {
            this.systemTheme = systemTheme;
            setThemeType(mode, this.base as themeColor.Base, systemTheme);
        },
        setHtmlWeakness(isWeakness: boolean) {
            toggleClass(isWeakness, "html-weakness");
        },
        setHtmlGray(isGrayMode: boolean) {
            toggleClass(isGrayMode, "html-grey");
        },
        setTabsLongTime(multiTagsCache: boolean) {
            this.multiTagsCache = multiTagsCache;
        },
        changeLogo(isShowLogo: boolean) {
            this.isShowLogo = isShowLogo;
        },
        changeTabs(isShowTab: boolean) {
            this.isShowTab = isShowTab;
        },
    },
    presist: {
        enable: true,
        key: "settingStore",
        option: {
            storage: "local",
        },
        resetToState: true,
    },
});
