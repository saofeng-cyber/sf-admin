// import { deviceDetection } from "@pureadmin/utils";
export const collapseStore = defineStore("Collapse", {
    state: () => ({
        isCollapse: true,
        device: false,
        deviceWidth: 952,
    }),
    getters: {},
    actions: {
        modifyCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        settingDevice(isDevice: boolean) {
            this.device = isDevice;
        },
    },
    presist: {
        enable: true,
        option: {
            storage: "local",
        },
        resetToState: true,
    },
});
