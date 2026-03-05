import React, { createContext, useState, useMemo, useEffect } from "react";

export const LanguageContext = createContext();

const PATH_TO_LANG = {
  "/eng": "en",
  "/esp": "es",
};
const LANG_TO_PATH = {
  is: "/",
  en: "/eng",
  es: "/esp",
};

function getInitialLanguage() {
  if (typeof window === "undefined") return "is";
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return PATH_TO_LANG[path] || "is";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    const path = LANG_TO_PATH[lang] || "/";
    const url = path === "/" ? window.location.origin + "/" : window.location.origin + path;
    window.history.replaceState({ lang }, "", url);
  };

  useEffect(() => {
    function onPopState() {
      const lang = getInitialLanguage();
      setLanguage(lang);
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(() => ({ language, switchLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
