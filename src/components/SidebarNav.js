import React, { useState, useEffect, useContext, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./SidebarNav.module.css";
import KeepCase from "./KeepCase";

import icelandFlag from "../assets/iceland-flag-bw.png";
import usFlag from "../assets/uk-flag-bw.png";
import spainFlag from "../assets/spain-flag-bw.png";

const SECTION_IDS = [
  "intro",
  "education",
  "experience",
  "projects",
  "skills",
  "hobbies",
  "socials",
];

const SECTION_LABELS = {
  intro: { is: "heima", en: "home", es: "inicio" },
  education: { is: "menntun", en: "education", es: "educación" },
  experience: { is: "reynsla", en: "experience", es: "experiencia" },
  skills: { is: "hæfni", en: "skills", es: "habilidades" },
  hobbies: { is: "áhugamál", en: "hobbies", es: "pasatiempos" },
  projects: { is: "verkefni", en: "projects", es: "proyectos" },
  socials: { is: "hafa samband", en: "contact", es: "contacto" },
};

const LANGUAGES = [
  { code: "is", label: "Íslenska", level: "móðurmál", flag: icelandFlag },
  { code: "en", label: "English", level: "C2", flag: usFlag },
  { code: "es", label: "Español", level: "B1", flag: spainFlag },
];

const LANG_LABELS = {
  is: "tungumál sem ég tala",
  en: "languages i speak",
  es: "idiomas que hablo",
};

function LangPicker({ menuPlacement = "up" }) {
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
  const dropdownLabel = LANG_LABELS[language] || LANG_LABELS.en;

  return (
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
          <KeepCase>{current.label}</KeepCase>
          <span className={styles.triggerSubtitle}>
            {" "}
            — <KeepCase>{current.level}</KeepCase>
          </span>
        </span>
        <span className={styles.chevron} aria-hidden>
          {dropdownOpen ? "▲" : "▼"}
        </span>
      </button>

      {dropdownOpen && (
        <ul
          className={`${styles.langMenu} ${
            menuPlacement === "up" ? styles.langMenuUp : styles.langMenuDown
          }`}
          role="listbox"
          aria-label="select page language"
        >
          {LANGUAGES.map((item) => (
            <li
              key={item.code}
              role="option"
              aria-selected={language === item.code}
            >
              <button
                type="button"
                className={styles.langOption}
                onClick={() => {
                  switchLanguage(item.code);
                  setDropdownOpen(false);
                }}
              >
                <img src={item.flag} alt="" className={styles.flagImg} />
                <span>
                  <KeepCase>{item.label}</KeepCase>
                  <span className={styles.optionSubtitle}>
                    {" "}
                    — <KeepCase>{item.level}</KeepCase>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function SidebarNav() {
  const { language } = useContext(LanguageContext);
  const [activeId, setActiveId] = useState("intro");

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setActiveId(entry.target.id);
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = SECTION_IDS.indexOf(activeId);
  const lineFillPercent =
    SECTION_IDS.length > 0
      ? ((activeIndex + 0.5) / SECTION_IDS.length) * 100
      : 0;

  const lang = language || "en";

  return (
    <>
      <aside className={styles.sidebar} aria-label="site">
        <div className={styles.sidebarTop}>
          <h1 className={styles.logo}>helgarfri.is</h1>
        </div>

        <nav className={styles.sidebarNav} aria-label="page sections">
          <div className={styles.sidebarInner}>
            <div className={styles.trackWrap}>
              <div className={styles.track} aria-hidden />
              <div
                className={styles.lineFill}
                style={{ height: `${lineFillPercent}%` }}
                aria-hidden
              />
            </div>
            <ul className={styles.navList}>
              {SECTION_IDS.map((id) => (
                <li key={id} className={styles.navItem}>
                  <button
                    type="button"
                    className={
                      activeId === id ? styles.navLinkActive : styles.navLink
                    }
                    onClick={() => handleClick(id)}
                    aria-current={activeId === id ? "true" : undefined}
                  >
                    <span className={styles.dot} />
                    <span>
                      {SECTION_LABELS[id][lang] || SECTION_LABELS[id].en}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className={styles.sidebarBottom}>
          <LangPicker menuPlacement="up" />
        </div>
      </aside>

      <div className={styles.mobileChrome}>
        <h1 className={styles.mobileLogo}>helgarfri.is</h1>
        <LangPicker menuPlacement="down" />
      </div>
    </>
  );
}

export default SidebarNav;
