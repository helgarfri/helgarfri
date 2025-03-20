import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Socials.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaFilePdf } from "react-icons/fa";

// ICELANDIC
const translationsIS = {
  heading: "ekki hika við að hafa samband",
  phoneLabel: "símanúmer",
  emailLabel: "netfang",
  phoneNumber: "+34 610 31 68 71",
  email: "helgifreyr02@gmail.com",
  github: "helgarfri",
  instagram: "helgarfri",
  linkedin: "linkedin",
  resume: "ferilskrá"
};

// ENGLISH
const translationsEN = {
  heading: "feel free to get in touch",
  phoneLabel: "phone",
  emailLabel: "email",
  phoneNumber: "+34 610 31 68 71",
  email: "helgifreyr02@gmail.com",
  github: "helgarfri",
  instagram: "helgarfri",
  linkedin: "linkedin",
  resume: "resume"
};

function Socials() {
  const { language } = useContext(LanguageContext);

  const t = language === "en" ? translationsEN : translationsIS;

  return (
    <section className={styles.socialsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t.heading}</h2>

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
          
          {/* Instagram */}
          <a
            href="https://instagram.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram className={styles.icon} />
            <span>{t.instagram}</span>
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
          <a
            href="/docs/helgarfri_cv.pdf"
            download="helgarfri_cv.pdf"
            className={styles.socialLink}
          >
            <FaFilePdf className={styles.icon} />
            <span>{t.resume}</span>
          </a>

        </div>
      </div>
    </section>
  );
}

export default Socials;
