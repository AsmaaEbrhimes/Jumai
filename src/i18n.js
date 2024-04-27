import i18n from "i18next";
import dataAr from "./Locale/Ar.json";
import dataEn from "./Locale/En.json";
import { initReactI18next } from "react-i18next";

const LANGUAGE_KEY = 'language';

const resources = {
  en: {
    translation: dataEn
  },
  ar: {
    translation: dataAr
  }
};

const savedLanguage = localStorage.getItem(LANGUAGE_KEY);

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLanguage || "en",
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
      caches: ['cookie'],
    },
  });

export default i18n;