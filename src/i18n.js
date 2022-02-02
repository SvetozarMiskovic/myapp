import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend'
import translationEN from "../src/locales/en/translation.json"
import translationRS from "../src/locales/rs/translation.json"

const resources = {
    en: {
        translation: translationEN
    },
    rs: {
        translation: translationRS
    }
}
i18n.use(initReactI18next).use(LanguageDetector).use(Backend)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
    detection: {
        order: ['cookie','htmlTag', 'localStorage', 'navigator', 'path'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: './src/locales/{{lng}}/translation.json',
    }
  });


export default i18n;