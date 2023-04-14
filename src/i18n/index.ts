import { createI18n } from 'vue-i18n'
import enLocale from './config/en';
import zhLocale from './config/zh';
import { getStoredLanguage, saveStoredLanguage } from "../languageStorage";

// import { useUserInfoStore } from "../store/user";
// import { storeToRefs } from "pinia";
// const userInfoStore = useUserInfoStore();
// const { c } = storeToRefs(userInfoStore);
const messages = {
    简体中文: zhLocale,
    en: enLocale,
}

const defaultLocale = "en";
const storedLocale = getStoredLanguage() || defaultLocale;

const i18n = createI18n({
    globalInjection: true, //全局生效$t
    fallbackLocale: 'en',
    // locale: c.value,
    locale: storedLocale,
    legacy: false, // 解决legacy mode 报错
    messages
})


export default i18n;
