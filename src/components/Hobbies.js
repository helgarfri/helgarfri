import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  HOBBIES,
  HOBBIES_HEADING,
  TRAVEL_MAP_COPY,
} from "../constants/hobbies";
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

function HobbyMedia({ hobby, lang }) {
  if (hobby.image) {
    return (
      <img
        src={hobby.image}
        alt={hobby.imageAlt[lang] || hobby.imageAlt.en}
        className={styles.photo}
        style={
          hobby.imagePosition
            ? { objectPosition: hobby.imagePosition }
            : undefined
        }
      />
    );
  }

  return (
    <div className={styles.djVisual} aria-hidden>
      <div className={styles.djGlow} />
      <div className={styles.djRings}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.djWave}>
        {Array.from({ length: 24 }, (_, i) => (
          <i
            key={i}
            style={{
              "--h": `${28 + ((i * 37) % 52)}%`,
              "--d": `${(i % 8) * 0.05}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function HobbyPanel({ hobby, lang, onOpenMap }) {
  const title = hobby.title[lang] || hobby.title.en;
  const description = hobby.description[lang] || hobby.description.en;
  const caption = hobby.caption
    ? hobby.caption[lang] || hobby.caption.en
    : null;
  const mapCopy = TRAVEL_MAP_COPY[lang] || TRAVEL_MAP_COPY.en;
  const className = `${styles.panel} ${styles[hobby.theme]}`;

  const body = (
    <>
      <HobbyMedia hobby={hobby} lang={lang} />
      <div className={styles.scrim} aria-hidden />
      <span className={styles.titleBadge}>{title}</span>
      {hobby.opensMap && (
        <span className={styles.hoverHint}>{mapCopy.hoverHint}</span>
      )}
      <span className={styles.copyBlock}>
        <span className={styles.description}>
          <HobbyDescription text={description} />
        </span>
        {caption && (
          <span className={styles.caption}>
            <HobbyDescription text={caption} />
          </span>
        )}
      </span>
    </>
  );

  if (hobby.href) {
    return (
      <a
        href={hobby.href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  if (hobby.opensMap) {
    return (
      <button
        type="button"
        className={className}
        onClick={onOpenMap}
        aria-haspopup="dialog"
      >
        {body}
      </button>
    );
  }

  return <article className={className}>{body}</article>;
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

        <div className={styles.grid}>
          {HOBBIES.map((hobby) => (
            <HobbyPanel
              key={hobby.id}
              hobby={hobby}
              lang={lang}
              onOpenMap={() => setMapOpen(true)}
            />
          ))}
        </div>
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
