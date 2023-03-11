import { createI18n } from "vue-i18n";
// element-plus国际化

import type { App } from "vue";
import locales, { type LocaleKey } from "./lang";
const localeLanguage = localStorage.getItem("locale") ?? "zh-CN";
const vueI18n = createI18n({
    locale: localeLanguage,
    fallbackLocale: "en-US",
    allowComposition: true,
    messages: locales,
});
export const useI18n = (app: App) => {
    app.use(vueI18n);
};
export function setLocale(locale: LocaleKey) {
    vueI18n.global.locale = locale;
}
