import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = React.useState(localStorage.getItem('language') || 'es');

    React.useEffect(() => {
        localStorage.setItem('language', language);
        i18n.changeLanguage(language);
    }, [language, i18n]);

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
