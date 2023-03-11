import type { LocaleKey } from "./../../i18n/lang/index";
interface localeLanguageInter {
    localeLanguage: LocaleKey;
}
export const localeLanguage = defineStore("Lang", {
    state: (): localeLanguageInter => ({
        localeLanguage: "en",
    }),
    actions: {
        changeLocale(localeLanguage: LocaleKey) {
            this.localeLanguage = localeLanguage;
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
