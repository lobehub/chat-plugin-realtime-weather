import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import resources from './resources';

export const createI18nNext = () => {
  return (
    i18n
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(LanguageDetector)
      // pass the i18n instance to react-i18next.
      .use(initReactI18next)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: process.env.NODE_ENV === 'development',
        // LanguageDetector config, refs: https://github.com/i18next/i18next-browser-languageDetector
        detection: {
          caches: [],
        },
        fallbackLng: 'zh-CN',
        interpolation: {
          escapeValue: false, // not needed for react as it escapes by default
        },
        // resources: getRes(resources, ns),
        resources,
      })
  );
};
