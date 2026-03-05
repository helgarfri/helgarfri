import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";
import micLogo from "../assets/mic-logo-2-5-text-cropped.png";
import placesMap from "../assets/Places I've been(7).png";

/** ICELANDIC TRANSLATIONS */
const translationsIS = {
  heading: "verkefni",
  version: "v3.0.0",
  siteLinkLabel: "mapincolor.com",
  status: "status: active",
  description: `v3 leggur áherslu á skýrari kortaupplifun og vettvang til að uppgötva og deila kortum. meðal eiginleika: kort eftir tölulegum eða flokkagögnum, snjallur innflutningur (csv, tsv, excel), uppgötvun og samfélag, leikvangur til að prófa án innskráningar, og einkaréttur og deiling. hjálparskjöl og lifandi síða á mapincolor.com.`,
  techLabel: "tækni:",
  techList: ["react.js", "javascript", "css", "postgresql", "express.js", "node.js"],
  repoLinkText: "helgarfri/map-in-color",
};

/** ENGLISH TRANSLATIONS */
const translationsEN = {
  heading: "projects",
  version: "v3.0.0",
  siteLinkLabel: "mapincolor.com",
  status: "status: active",
  description: `v3 focuses on a clearer, more powerful mapping experience and a dedicated place to discover and share maps. features include choropleth and categorical maps, smart data import (csv, tsv, excel), explore and community, a playground to try without signing up, and ownership and sharing controls. documentation and live site at mapincolor.com.`,
  techLabel: "technologies:",
  techList: ["react.js", "javascript", "css", "postgresql", "express.js", "node.js"],
  repoLinkText: "helgarfri/map-in-color",
};

/** SPANISH TRANSLATIONS */
const translationsES = {
  heading: "proyectos",
  version: "v3.0.0",
  siteLinkLabel: "mapincolor.com",
  status: "estado: activo",
  description: `v3 se centra en una experiencia de mapas más clara y potente y en un espacio para descubrir y compartir mapas. incluye mapas coropléticos y categóricos, importación inteligente (csv, tsv, excel), exploración y comunidad, playground sin registro y controles de propiedad y compartición. documentación y sitio en vivo en mapincolor.com.`,
  techLabel: "tecnologías:",
  techList: ["react.js", "javascript", "css", "postgresql", "express.js", "node.js"],
  repoLinkText: "helgarfri/map-in-color",
};

const translationsByLang = { is: translationsIS, en: translationsEN, es: translationsES };

function Projects() {
  const { language } = useContext(LanguageContext);

  const t = translationsByLang[language] || translationsEN;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>

        <div className={styles.projectContainer}>
          {/* Left side: logo, info, description */}
          <div className={styles.projectInfo}>
            <div className={styles.logoRow}>
              <img
                src={micLogo}
                alt="map in color logo"
                className={styles.micLogo}
              />
            </div>

            <div className={styles.versionAndSite}>
              <a
                href="https://github.com/helgarfri/map-in-color/releases/tag/v3.0.0"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.versionLink}
              >
                {t.version}
              </a>
              <a
                href="https://mapincolor.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {t.siteLinkLabel}
              </a>
            </div>
            <p className={styles.status}>{t.status}</p>

            <p className={styles.description}>{t.description}</p>

            {/* Technologies */}
            <div className={styles.techStack}>
              <p>{t.techLabel}</p>
              <ul>
                {t.techList.map((techItem, idx) => (
                  <li key={idx}>{techItem}</li>
                ))}
              </ul>
            </div>

            {/* GitHub Repo Link */}
            <div className={styles.repoLink}>
              <FaGithub className={styles.repoIcon} />
              <a
                href="https://github.com/helgarfri/map-in-color"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoAnchor}
              >
                {t.repoLinkText}
              </a>
            </div>
          </div>

          {/* Right side: preview image */}
          <div className={styles.previewContainer}>
            <img
              src={placesMap}
              alt="Places I've been – Map in Color"
              className={styles.previewImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
