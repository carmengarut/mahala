import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App';

import globalEs from './translations/es/global.json'
import globalEn from './translations/en/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: window.localStorage.getItem('language') || 'es',
  resources: {
    es: {
      global: globalEs
    },
    en: {
      global: globalEn
    }
  }
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>,
  document.getElementById('root')
);
