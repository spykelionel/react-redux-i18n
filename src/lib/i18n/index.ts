// src/i18n.ts
import i18n from "i18next";
import i18nextBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(i18nextBackend)
  .use(initReactI18next)
  .init({
    backend: {
      // Path to load translation files
      loadPath: "/locales/{{lng}}/translation.json", // This assumes you have your JSON files in the public directory
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback to English if the translation is not found
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
