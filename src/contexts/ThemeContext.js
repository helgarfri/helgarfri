import React, { createContext, useState, useMemo } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // 'light' or 'dark'
  const [theme, setTheme] = useState("light");

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Memoize the value to avoid unnecessary re-renders
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
