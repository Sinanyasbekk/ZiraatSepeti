import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import {initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
   
    resources: {
      en: {
        translation: {
          "Welcome to React": "Welcome to React and react-i18next"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });

function App() {
  const { t } = useTranslation();

  return <h2>{t('Welcome to React')}</h2>;
}

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);
