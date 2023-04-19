import { ls } from "@/utils/storage";

export const LOCAL_NAME = "app_setting";
export interface AppSetting {
    isCollapse: boolean;
    device: boolean;
    deviceWidth: number;
}
export const defaultSetting = (): AppSetting => ({
    isCollapse: true,
    device: false,
    deviceWidth: 952,
});

export const getAppSetting = (): AppSetting => {
    return ls.getItem(LOCAL_NAME) || defaultSetting();
};

export const setAppSetting = (appSetting: AppSetting) => {
    ls.setItem(LOCAL_NAME, JSON.stringify(appSetting));
};
export const SET_LOCAL_SETTING = (setting: AppSetting): void => {
    return ls.setItem(LOCAL_NAME, setting);
};
