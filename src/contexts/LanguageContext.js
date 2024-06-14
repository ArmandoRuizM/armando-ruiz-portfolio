import React from 'react';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = React.useState('es');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
