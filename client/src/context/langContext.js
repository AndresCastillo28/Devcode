import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import EnglishMessages from '../lang/en-US.json';
import SpanishMessages from '../lang/es-MX.json';

const langContext = React.createContext();

const LangProvider = ({ children }) => {
    let defaultLocale;
    let defaultMessages;
    const lang = localStorage.getItem('lang');

    if (lang) {
        defaultLocale = lang;
        if (lang === 'es-MX') {
            defaultMessages = SpanishMessages;
        } else if (lang === 'en-US') {
            defaultMessages = EnglishMessages;
        } else {
            defaultLocale = 'en-US'
            defaultMessages = EnglishMessages;
        }
    }

    const [message, setMessages] = useState(defaultMessages);
    const [locale, setLocale] = useState(defaultLocale);

    const setLanguage = (language) => {
        switch (language) {
            case 'es-MX':
                setMessages(SpanishMessages);
                setLocale('es-MX');
                localStorage.setItem('lang', 'es-MX');
                break;
            case 'en-US':
                setMessages(EnglishMessages);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
                break;
            default:
                setMessages(EnglishMessages);
                setLocale('en-US');
                localStorage.setItem('lang', 'en-US');
        }
    }

    return (
        <langContext.Provider value={{ setLanguage: setLanguage }}>
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export { LangProvider, langContext };

