import React, { createContext, useState, useMemo } from "react";

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // 'is' (Icelandic), 'en' (English), 'es' (Spanish)
  const [language, setLanguage] = useState("is");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  const value = useMemo(() => ({ language, switchLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
