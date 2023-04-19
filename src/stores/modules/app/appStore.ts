import { getAppSetting, type AppSetting, SET_LOCAL_SETTING } from "./help";

export const appStore = defineStore("appStore", {
    state: (): AppSetting => getAppSetting(),
    actions: {
        modifyCollapse() {
            this.isCollapse = !this.isCollapse;
            this.recordStore();
        },
        settingDevice(isDevice: boolean) {
            this.device = isDevice;
            this.recordStore();
        },
        recordStore() {
            SET_LOCAL_SETTING(this.$state);
        },
    },
});
