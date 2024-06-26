import { config } from 'config'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // for all options read: https://www.i18next.com/overview/configuration-options
    debug: config.i18n.debbug,
    fallbackLng: config.i18n.supportedLanguages?.[0],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    supportedLngs: config.i18n.supportedLanguages,
  })

export default i18n
