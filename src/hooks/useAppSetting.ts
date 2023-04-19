import { appStore } from "@/stores/modules/app/appStore";
export const useAppSetting = () => {
    const useAppSetting = appStore();
    const { device, isCollapse, deviceWidth } = storeToRefs(useAppSetting);
    const settingDevice = (isDevice: boolean) => {
        useAppSetting.settingDevice(isDevice);
    };
    const modifyCollapse = () => {
        useAppSetting.modifyCollapse();
    };
    return {
        device,
        isCollapse,
        deviceWidth,
        settingDevice,
        modifyCollapse,
    };
};
