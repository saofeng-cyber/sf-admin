import en from "./en";
import zhCn from "./zhCn";

const locales = {
    "zh-CN": zhCn,
    en,
};
export type LocaleKey = keyof typeof locales;
export default locales;
