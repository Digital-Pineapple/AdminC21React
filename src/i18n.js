// Importación de las dependencias necesarias para la internacionalización (i18n)
import i18n from "i18next"; // Librería principal para la internacionalización
import { initReactI18next } from "react-i18next"; // Integración de i18next con React
import HttpBackend from "i18next-http-backend"; // Carga de archivos de traducción desde un servidor
import LanguageDetector from "i18next-browser-languagedetector"; // Detecta el idioma del navegador del usuario

// Configuración de i18n
i18n
  // Usamos el backend para cargar las traducciones desde un servidor
  .use(HttpBackend)
  // Usamos el detector de idiomas para identificar el idioma del usuario
  .use(LanguageDetector)
  // Usamos la integración de React con i18next
  .use(initReactI18next)
  .init({
    // Idioma por defecto en caso de que no se detecte el idioma del usuario
    fallbackLng: "es",
    // Habilitamos el modo de depuración para ver información detallada en consola
    debug: true,
    // Configuración de la interpolación para que los valores no se escapen
    interpolation: {
      escapeValue: false,
    },
    // Deshabilitamos el modo Suspense de React para la carga de las traducciones
    react: {
      useSuspense: false,
    },
    // Configuración del detector de idioma, primero usa localStorage, luego cookies, y finalmente el idioma del navegador
    detection: {
      order: ["localStorage", "cookie", "navigator"],
      // Especificamos que los idiomas se deben guardar en localStorage y en cookies
      caches: ["localStorage", "cookie"],
    },
    // Configuración del backend para cargar los archivos de traducción desde una URL
    backend: {
      // La ruta donde se encuentran los archivos de traducción en formato JSON
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

// Exportamos la instancia de i18n para que se pueda utilizar en la aplicación
export default i18n;
