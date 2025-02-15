import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Header.module.css";

// Local imports of black/white flag images
import icelandFlag from "../assets/iceland-flag-bw.png";
import usFlag from "../assets/uk-flag-bw.png";
import spainFlag from "../assets/spain-flag-bw.png";

function Header() {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>helgarfri.is</h1>

      <div className={styles.langSelector}>
        {/* Icelandic Flag */}
        <button
          onClick={() => switchLanguage("is")}
          className={styles.flagButton}
          aria-label="switch to icelandic"
        >
          <img src={icelandFlag} alt="icelandic flag" />
        </button>

        {/* English Flag */}
        <button
          onClick={() => switchLanguage("en")}
          className={styles.flagButton}
          aria-label="switch to english"
        >
          <img src={usFlag} alt="english flag" />
        </button>

        {/* Spanish Flag */}
        <button
          onClick={() => switchLanguage("es")}
          className={styles.flagButton}
          aria-label="switch to spanish"
        >
          <img src={spainFlag} alt="spanish flag" />
        </button>
      </div>
    </header>
  );
}

export default Header;
