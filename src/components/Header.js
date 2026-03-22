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

const OLD_EMAIL = "helgi@helgarfri.is";
const NEW_EMAIL = "helgifreyr02@gmail.com";

function buildEmailNotice() {
  return {
    is: (
      <>
        ég skipti nýlega um tölvupóstfang: gamla fangið{" "}
        <span className={styles.emailInline}>{OLD_EMAIL}</span> virkar ekki
        lengur. vinsamlegast hafið samband við mig á{" "}
        <a href={`mailto:${NEW_EMAIL}`} className={styles.emailLink}>
          {NEW_EMAIL}
        </a>
        .
      </>
    ),
    en: (
      <>
        i recently changed my email.{" "}
        <span className={styles.emailInline}>{OLD_EMAIL}</span> is no longer in
        use — please contact me at{" "}
        <a href={`mailto:${NEW_EMAIL}`} className={styles.emailLink}>
          {NEW_EMAIL}
        </a>
        .
      </>
    ),
    es: (
      <>
        cambié recientemente mi correo:{" "}
        <span className={styles.emailInline}>{OLD_EMAIL}</span> ya no está en
        uso. por favor escríbeme a{" "}
        <a href={`mailto:${NEW_EMAIL}`} className={styles.emailLink}>
          {NEW_EMAIL}
        </a>
        .
      </>
    ),
  };
}

const EMAIL_NOTICE = buildEmailNotice();

const SCROLL_BLUR_THRESHOLD_PX = 6;

function Header() {
  const { language, switchLanguage } = useContext(LanguageContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function onScroll() {
      setHeaderScrolled(window.scrollY > SCROLL_BLUR_THRESHOLD_PX);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`${styles.header} ${headerScrolled ? styles.headerScrolled : ""}`}
    >
      <h1 className={styles.logo}>helgarfri.is</h1>

      <div className={styles.headerCenter}>
        <div
          className={styles.emailAlert}
          role="status"
          aria-live="polite"
        >
          {EMAIL_NOTICE[language] || EMAIL_NOTICE.en}
        </div>
      </div>

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
