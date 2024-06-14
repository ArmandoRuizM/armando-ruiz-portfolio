import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "Inicio": "Home",
            "Sobre mi": "About Me",
            "Mis proyectos": "My Projects",
            "Contacto": "Contact",
            // Añade más traducciones aquí
        }
    },
    es: {
        translation: {
            "Inicio": "Inicio",
            "Sobre mi": "Sobre mi",
            "Mis proyectos": "Mis proyectos",
            "Contacto": "Contacto",
            // Añade más traducciones aquí
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "es", // Idioma predeterminado
        interpolation: {
            escapeValue: false // React ya escapa valores por defecto
        }
    });

export default i18n;
