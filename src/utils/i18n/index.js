import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

//locales
import enLang from './locales/en/en.json';
import itLang from './locales/it/it.json';


export const resources = {
    en: {
        translation: enLang,
    },
    it: {
        translation: itLang,

    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        detection: {
            order: ['localStorage'],
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage'],
            excludeCacheFor: ['cimode'], // Languages to not persist
        },
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;