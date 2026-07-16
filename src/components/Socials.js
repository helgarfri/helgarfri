import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CvDownloadContext } from "../contexts/CvDownloadContext";
import styles from "./Socials.module.css";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone } from "react-icons/fa";
import KeepCase from "./KeepCase";

const COPY = {
  is: {
    heading: "hafa samband",
    lead: "ekki hika við að senda línu. ég svara fljótt.",
    github: "github",
    linkedin: "linkedin",
    resume: "ferilskrá",
  },
  en: {
    heading: "get in touch",
    lead: "feel free to send a line. i reply quickly.",
    github: "github",
    linkedin: "linkedin",
    resume: "resume",
  },
  es: {
    heading: "contacto",
    lead: "no dudes en escribirme. respondo pronto.",
    github: "github",
    linkedin: "linkedin",
    resume: "currículum",
  },
};

const EMAIL = "helgi@helgarfri.is";
const PHONE = "+354 837 8222";
const PHONE_HREF = "tel:+3548378222";

function Socials() {
  const { language } = useContext(LanguageContext);
  const { openCvModal } = useContext(CvDownloadContext);
  const t = COPY[language] || COPY.en;

  return (
    <section id="socials" className={styles.section}>
      <div className={styles.glow} aria-hidden />

      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.heading}>{t.heading}</h2>
          <p className={styles.lead}>{t.lead}</p>
        </header>

        <div className={styles.contactCol}>
          <div className={styles.channels}>
            <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
              <FaEnvelope className={styles.channelIcon} aria-hidden />
              <KeepCase>{EMAIL}</KeepCase>
            </a>
            <a href={PHONE_HREF} className={styles.phoneLink}>
              <FaPhone className={styles.channelIcon} aria-hidden />
              <KeepCase>{PHONE}</KeepCase>
            </a>
          </div>

          <div className={styles.actionRow}>
            <a
              href="https://github.com/helgarfri"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <FaGithub className={styles.actionIcon} aria-hidden />
              <KeepCase>{t.github}</KeepCase>
            </a>

            <a
              href="https://www.linkedin.com/in/helgi-freyr-davíðsson-9841ba219/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <FaLinkedin className={styles.actionIcon} aria-hidden />
              <KeepCase>{t.linkedin}</KeepCase>
            </a>

            <button
              type="button"
              className={styles.action}
              onClick={openCvModal}
            >
              <FaFilePdf className={styles.actionIcon} aria-hidden />
              <span>{t.resume}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
