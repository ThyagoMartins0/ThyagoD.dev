'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, languages, getTranslation, Translation } from './index';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt-BR');
  const [t, setT] = useState<Translation>(getTranslation('pt-BR'));

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && languages[savedLang]) {
      setLanguage(savedLang);
      setT(getTranslation(savedLang));
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    setT(getTranslation(newLang));
    localStorage.setItem('language', newLang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleLanguageChange,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 