import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Projects.module.css";
import { FaGithub } from "react-icons/fa";
import micLogo from "../assets/map-in-color-logo.png";
import micPreview from "../assets/mic_preview.png";

/** ICELANDIC TRANSLATIONS */
const translationsIS = {
  heading: "verkefni",
  projectTitle: "map in color",
  version: "v2.0.0 beta",
  siteLinkLabel: "mapincolor.com",
  status: "status: no response from server",
  // Instead of one big string, store each paragraph as a separate array element
  description: [
    `verkefnið hefur verið í stöðugri þróun í nokkur ár. upphaflega var 
    markmiðið að búa til forrit sem gerir notendum kleift að búa til kort 
    út frá gögnum. þetta verkefni varð vendipunktur í minni þróun sem 
    forritari, þar sem ég dýpkaði skilning minn á react og 
    framendaforritun. þegar forritið þróaðist ákvað ég að taka það 
    skrefinu lengra og bæta við bakenda með netþjóni, gagnagrunni og 
    ýmsum viðbótum.`,

    `í dag geta notendur hlaðið upp csv-skrám, sérsniðið sín eigin kort 
    og vistað þau á sínum svæðum. þeir geta deilt kortum með öðrum, haft 
    gagnvirk samskipti við kort og notendur, og greint gögn á sjónrænan 
    hátt. markmið verkefnisins er að búa til vettvang þar sem hægt er að 
    skoða og greina gögn í gegnum kort, hvort sem það er fyrir vísindalega 
    úrvinnslu eða einfaldlega til að sjá heiminn í nýju ljósi út frá gögnum.`
  ],
  techLabel: "tækni:",
  techList: ["react.js", "javascript", "css", "postgresql", "express.js", "node.js"],
  repoLinkText: "helgarfri/map-in-color",
};

/** ENGLISH TRANSLATIONS */
const translationsEN = {
  heading: "projects",
  projectTitle: "map in color",
  version: "v2.0.0 beta",
  siteLinkLabel: "mapincolor.com",
  status: "status: no response from server",
  description: [
    `this project has been in continuous development for several years. 
    originally, the goal was to create a program that enables users to build 
    maps from data. this project became a turning point in my developer 
    journey, deepening my understanding of react and front-end development. 
    as the application grew, i decided to take it further by adding a backend 
    with a server, database, and various extensions.`,

    `today, users can upload csv files, customize their own maps, and save 
    them. they can share maps with others, interact with maps and users, and 
    analyze data visually. the objective is to create a platform for exploring 
    and analyzing data through maps, whether for scientific purposes or simply 
    to see the world in a new light from data.`
  ],
  techLabel: "technologies:",
  techList: ["react.js", "javascript", "css", "postgresql", "express.js", "node.js"],
  repoLinkText: "helgarfri/map-in-color",
};

function Projects() {
  const { language } = useContext(LanguageContext);
  
  // Pick translations based on language
  const t = language === "en" ? translationsEN : translationsIS;

  return (
    <section className={styles.projectsSection}>
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
              <span className={styles.projectTitle}>{t.projectTitle}</span>
            </div>

            <h3 className={styles.version}>{t.version}</h3>
            {/* Link to the site */}
            <a
              href="https://mapincolor.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              {t.siteLinkLabel}
            </a>
            <p className={styles.status}>{t.status}</p>

            {/* Map over the array of paragraphs to create multiple <p> tags */}
            {t.description.map((paragraph, idx) => (
              <p className={styles.description} key={idx}>
                {paragraph}
              </p>
            ))}

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
              src={micPreview}
              alt="map in color preview"
              className={styles.previewImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
