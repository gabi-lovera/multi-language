import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "./translations/en/global.json";
import global_es from "./translations/es/global.json";
import global_fr from "./translations/fr/global.json";

i18n.use(initReactI18next).init({
  resources: {
    en: global_en,
    es: global_es,
    fr: global_fr,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
