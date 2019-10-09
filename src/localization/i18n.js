import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './strings_en';
import frTranslation from './strings_fr';

i18n
  .use(LanguageDetector);

var i18nOptions = {
  fallbackLng: 'en',
  resources: {
    "en": {
      translation: enTranslation
    },
    "fr": {
      translation: frTranslation
    }
  }
};

export {i18nOptions};
export default i18n;
