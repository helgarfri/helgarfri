import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import { CvDownloadContext } from "../contexts/CvDownloadContext";
import styles from "./Socials.module.css";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

// ICELANDIC
const translationsIS = {
  heading: "ekki hika við að hafa samband",
  phoneLabel: "símanúmer",
  emailLabel: "netfang",
  phoneNumber: "+354 837 8222",
  email: "helgi@helgarfri.is",
  github: "helgarfri",
  linkedin: "linkedin",
  resume: "ferilskrá"
};

// ENGLISH
const translationsEN = {
  heading: "feel free to get in touch",
  phoneLabel: "phone",
  emailLabel: "email",
  phoneNumber: "+354 837 8222",
  email: "helgi@helgarfri.is",
  github: "helgarfri",
  linkedin: "linkedin",
  resume: "resume"
};

// SPANISH
const translationsES = {
  heading: "no dudes en contactarme",
  phoneLabel: "teléfono",
  emailLabel: "correo",
  phoneNumber: "+354 837 8222",
  email: "helgi@helgarfri.is",
  github: "helgarfri",
  linkedin: "linkedin",
  resume: "currículum"
};

const translationsByLang = { is: translationsIS, en: translationsEN, es: translationsES };

function Socials() {
  const { language } = useContext(LanguageContext);
  const { openCvModal } = useContext(CvDownloadContext);

  const t = translationsByLang[language] || translationsEN;

  return (
    <section id="socials" className={styles.socialsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>

        <div className={styles.socialsBox}>
        <div className={styles.contactInfo}>
          <p>
            {t.phoneLabel}: {t.phoneNumber}
          </p>
          <p>
            {t.emailLabel}: {t.email}
          </p>
        </div>

        <div className={styles.socialLinks}>
          {/* GitHub */}
          <a
            href="https://github.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub className={styles.icon} />
            <span>{t.github}</span>
          </a>
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/helgi-freyr-davíðsson-9841ba219/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin className={styles.icon} />
            <span>{t.linkedin}</span>
          </a>

          {/* CV Download */}
          <button
            type="button"
            className={styles.socialLink}
            onClick={openCvModal}
          >
            <FaFilePdf className={styles.icon} aria-hidden />
            <span>{t.resume}</span>
          </button>

        </div>
        </div>
      </div>
    </section>
  );
}

export default Socials;
