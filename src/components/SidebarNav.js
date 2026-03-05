import React, { useState, useEffect, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./SidebarNav.module.css";

const SECTION_IDS = ["intro", "skills", "projects", "socials"];

const LABELS = {
  intro: { is: "heima", en: "home", es: "inicio" },
  skills: { is: "hæfni", en: "skills", es: "habilidades" },
  projects: { is: "verkefni", en: "projects", es: "proyectos" },
  socials: { is: "hafa samband", en: "contact", es: "contacto" },
};

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
  const lineFillPercent = SECTION_IDS.length > 0
    ? ((activeIndex + 0.5) / SECTION_IDS.length) * 100
    : 0;

  const lang = language || "en";

  return (
    <nav className={styles.sidebar} aria-label="page sections">
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
              className={activeId === id ? styles.navLinkActive : styles.navLink}
              onClick={() => handleClick(id)}
              aria-current={activeId === id ? "true" : undefined}
            >
              <span className={styles.dot} />
              <span>{LABELS[id][lang] || LABELS[id].en}</span>
            </button>
          </li>
        ))}
        </ul>
      </div>
    </nav>
  );
}

export default SidebarNav;
