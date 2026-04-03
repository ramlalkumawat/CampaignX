"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type SiteLanguage = 'en' | 'hi';

const STORAGE_KEY = 'campaignx-language';
const DEFAULT_LANGUAGE: SiteLanguage = 'hi';

interface LanguageContextValue {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function applyDocumentLanguage(language: SiteLanguage) {
  document.documentElement.lang = language === 'hi' ? 'hi' : 'en';
  document.documentElement.dataset.language = language;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>(DEFAULT_LANGUAGE);

  useEffect(() => {
    try {
      const storedLanguage = localStorage.getItem(STORAGE_KEY);

      if (storedLanguage === 'en' || storedLanguage === 'hi') {
        setLanguageState(storedLanguage);
        applyDocumentLanguage(storedLanguage);
        return;
      }

      localStorage.setItem(STORAGE_KEY, DEFAULT_LANGUAGE);
      applyDocumentLanguage(DEFAULT_LANGUAGE);
    } catch {
      applyDocumentLanguage(DEFAULT_LANGUAGE);
    }
  }, []);

  const setLanguage = (nextLanguage: SiteLanguage) => {
    setLanguageState(nextLanguage);
    applyDocumentLanguage(nextLanguage);

    try {
      localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Ignore storage failures and keep the in-memory language change.
    }
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider.');
  }

  return context;
}
