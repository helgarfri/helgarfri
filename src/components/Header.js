import React, { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Header.module.css";

import icelandFlag from "../assets/iceland-flag-bw.png";
import usFlag from "../assets/uk-flag-bw.png";
import spainFlag from "../assets/spain-flag-bw.png";

const LANGUAGES = [
  { code: "is", label: "íslenska", level: "móðurmál", flag: icelandFlag },
  { code: "en", label: "english", level: "c2", flag: usFlag },
  { code: "es", label: "español", level: "b1", flag: spainFlag },
];

const LABELS = {
  is: "tungumál sem ég tala",
  en: "languages i speak",
  es: "idiomas que hablo",
};

function Header() {
  const { language, switchLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const current = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];
  const dropdownLabel = LABELS[language] || LABELS.en;

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>helgarfri.is</h1>

      <div className={styles.langDropdownWrap} ref={dropdownRef}>
        <span className={styles.langDropdownLabel}>{dropdownLabel}</span>
        <button
          type="button"
          className={styles.langTrigger}
          onClick={() => setDropdownOpen((o) => !o)}
          aria-expanded={dropdownOpen}
          aria-haspopup="listbox"
          aria-label={`current language: ${current.label}. open language menu`}
        >
          <img src={current.flag} alt="" className={styles.flagImg} />
          <span className={styles.triggerText}>
            {current.label}
            <span className={styles.triggerSubtitle}> — {current.level}</span>
          </span>
          <span className={styles.chevron} aria-hidden>{dropdownOpen ? "▲" : "▼"}</span>
        </button>

        {dropdownOpen && (
          <ul
            className={styles.langMenu}
            role="listbox"
            aria-label="select page language"
          >
            {LANGUAGES.map((lang) => (
              <li key={lang.code} role="option" aria-selected={language === lang.code}>
                <button
                  type="button"
                  className={styles.langOption}
                  onClick={() => {
                    switchLanguage(lang.code);
                    setDropdownOpen(false);
                  }}
                >
                  <img src={lang.flag} alt="" className={styles.flagImg} />
                  <span>
                    {lang.label}
                    <span className={styles.optionSubtitle}> — {lang.level}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
