import React from "react";
import styles from "./Projects.module.css";

// React Icons (for GitHub repo icon)
import { FaGithub } from "react-icons/fa";

// Import images
import micLogo from "../assets/map-in-color-logo.png";
import micPreview from "../assets/mic_preview.png";

function Projects() {
  return (
    <section className={styles.projectsSection}>
      {/* A container to center content and keep a max width */}
      <div className={styles.container}>
        <h2 className={styles.heading}>verkefni</h2>

        {/* Container for the main project (Map in Color) */}
        <div className={styles.projectContainer}>
          {/* Left side: logo, info, description */}
          <div className={styles.projectInfo}>
            <div className={styles.logoRow}>
              <img
                src={micLogo}
                alt="map in color logo"
                className={styles.micLogo}
              />
              <span className={styles.projectTitle}>map in color</span>
            </div>

            <h3 className={styles.version}>v2.0.0 beta</h3>
            {/* Link to the project site */}
            <a
              href="https://mapincolor.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              mapincolor.com
            </a>
            <p className={styles.status}>status: no response from server</p>

            <p className={styles.description}>
              verkefnið hefur verið í stöðugri þróun í nokkur ár. upphaflega var 
              markmiðið að búa til forrit sem gerir notendum kleift að búa til kort 
              út frá gögnum. þetta verkefni varð vendipunktur í minni þróun sem 
              forritari, þar sem ég dýpkaði skilning minn á react og 
              framendaforritun. þegar forritið þróaðist ákvað ég að taka það 
              skrefinu lengra og bæta við bakenda með netþjóni, gagnagrunni og 
              ýmsum viðbótum.
              <br />
              <br />
              í dag geta notendur hlaðið upp csv-skrám, sérsniðið sín eigin kort 
              og vistað þau á sínum svæðum. þeir geta deilt kortum með öðrum, haft 
              gagnvirk samskipti við kort og notendur, og greint gögn á sjónrænan 
              hátt. markmið verkefnisins er að búa til vettvang þar sem hægt er að 
              skoða og greina gögn í gegnum kort, hvort sem það er fyrir vísindalega 
              úrvinnslu eða einfaldlega til að sjá heiminn í nýju ljósi út frá gögnum.
            </p>

            {/* Technologies used */}
            <div className={styles.techStack}>
              <p>tækni:</p>
              <ul>
                <li>react.js</li>
                <li>javascript</li>
                <li>css</li>
                <li>postgresql</li>
                <li>express.js</li>
                <li>node.js</li>
              </ul>
            </div>

            {/* GitHub Repository Link */}
            <div className={styles.repoLink}>
              <FaGithub className={styles.repoIcon} />
              <a
                href="https://github.com/helgarfri/map-in-color" 
                target="_blank"
                rel="noopener noreferrer"
                className={styles.repoAnchor}
              >
                helgarfri/map-in-color
              </a>
            </div>
          </div>

          {/* Right side: tilted preview image */}
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
