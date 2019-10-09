import i18n from 'i18next';
//import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  //.use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector);
  // pass the i18n instance to the react-i18next components.
  // Alternative use the I18nextProvider: https://react.i18next.com/components/i18nextprovider
  //.use(reactI18nextModule);
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  // .init({
  //   fallbackLng: 'en',
  // });

var i18nOptions = {
  fallbackLng: 'en',
  debug: true,
  resources: {
    "en": {
      translation: {
        "title": " Minimalist Todo List"
      }
    },
    "fr": {
      translation: {
        "title": " Title in fr"
      }
    }
  }
};

export {i18nOptions};
export default i18n;
