import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  HOBBIES,
  HOBBIES_HEADING,
  TRAVEL_MAP_COPY,
} from "../constants/hobbies";
import { FiArrowUpRight, FiHeadphones, FiMap } from "react-icons/fi";
import KeepCase from "./KeepCase";
import TravelMapModal from "./TravelMapModal";
import styles from "./Hobbies.module.css";

function HobbyDescription({ text }) {
  const parts = text.split(
    /(Golfklúbb Mosfellsbæjar|Mosfellsbær Golf Club|Club de golf de Mosfellsbær|Bólivíu|Bolivia|Bolivian|Selfossi|Selfoss)/g
  );
  return parts.map((part, i) =>
    /^(Golfklúbb Mosfellsbæjar|Mosfellsbær Golf Club|Club de golf de Mosfellsbær|Bólivíu|Bolivia|Bolivian|Selfossi|Selfoss)$/.test(
      part
    ) ? (
      <KeepCase key={i}>{part}</KeepCase>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
}

function HobbyThumb({ hobby, lang }) {
  if (hobby.image) {
    return (
      <img
        src={hobby.image}
        alt={hobby.imageAlt[lang] || hobby.imageAlt.en}
        className={styles.thumb}
        style={
          hobby.imagePosition
            ? { objectPosition: hobby.imagePosition }
            : undefined
        }
      />
    );
  }

  return (
    <span className={`${styles.thumb} ${styles.thumbIcon}`} aria-hidden>
      <FiHeadphones />
    </span>
  );
}

function HobbyItem({ hobby, lang, onOpenMap }) {
  const title = hobby.title[lang] || hobby.title.en;
  const description = hobby.description[lang] || hobby.description.en;
  const mapCopy = TRAVEL_MAP_COPY[lang] || TRAVEL_MAP_COPY.en;

  return (
    <li className={styles.item}>
      <HobbyThumb hobby={hobby} lang={lang} />
      <div className={styles.text}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          <HobbyDescription text={description} />
        </p>
        {hobby.href && (
          <a
            href={hobby.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <KeepCase>{hobby.hrefLabel}</KeepCase>
            <FiArrowUpRight aria-hidden />
          </a>
        )}
        {hobby.opensMap && (
          <button
            type="button"
            className={styles.link}
            onClick={onOpenMap}
            aria-haspopup="dialog"
          >
            {mapCopy.hoverHint}
            <FiMap aria-hidden />
          </button>
        )}
      </div>
    </li>
  );
}

function Hobbies() {
  const { language } = useContext(LanguageContext);
  const [mapOpen, setMapOpen] = useState(false);
  const lang = language || "en";
  const heading = HOBBIES_HEADING[lang] || HOBBIES_HEADING.en;

  return (
    <section id="hobbies" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>

        <ul className={styles.list}>
          {HOBBIES.map((hobby) => (
            <HobbyItem
              key={hobby.id}
              hobby={hobby}
              lang={lang}
              onOpenMap={() => setMapOpen(true)}
            />
          ))}
        </ul>
      </div>

      <TravelMapModal
        open={mapOpen}
        onClose={() => setMapOpen(false)}
        language={lang}
      />
    </section>
  );
}

export default Hobbies;
