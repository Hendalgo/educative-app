import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import es from '@locales/es/es.json';
import en from '@locales/en/en.json';
import tr from '@locales/tr/tr.json';

i18n.use(initReactI18next).init({
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
    tr: {
      translation: tr,
    }
  },
  lng: 'en',
  fallbackLng: 'es',
});

export default i18n;
