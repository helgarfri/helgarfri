// Introduction.js
import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext"; // needed to read current language
import { CvDownloadContext } from "../contexts/CvDownloadContext";
import styles from "./Introduction.module.css";
import { FaGithub, FaLinkedin, FaFileDownload, FaCheck } from "react-icons/fa";
import KeepCase from "./KeepCase";

const translations = {
  is: {
    greetingBefore: "hæ, ég heiti ",
    greetingName: "Helgi",
    bio: "ég er forritari",
    educationBefore: "menntun: tölvunarfræði - ",
    educationSchool: "HÍ",
    ectsLabel: "ects",
    degreeComplete: "útskrifaður",
    ageLabel: "aldur:",
    timeLabels: ["ár", "mán", "dagar", "klst", "mín", "sek"],
    locationBefore: "núverandi staðsetning: ",
    locationPlace: "Reykjavík, Ísland",
    githubHover: "helgarfri",
    linkedinLabel: "linkedin",
    statusText:
      "verkefnið hefur verið í stöðugri þróun í nokkur ár...",
    resumeText: "sækja ferilskrá",
  },
  en: {
    greetingBefore: "hi, i'm ",
    greetingName: "Helgi",
    bio: "i'm a developer",
    educationBefore: "education: computer science - ",
    educationSchool: "University of Iceland",
    ectsLabel: "ects",
    degreeComplete: "graduated",
    ageLabel: "age:",
    timeLabels: ["yrs", "mo", "days", "hrs", "min", "sec"],
    locationBefore: "current location: ",
    locationPlace: "Reykjavík, Iceland",
    githubHover: "helgarfri",
    linkedinLabel: "linkedin",
    statusText:
      "this project has been under continuous development for several years...",
    resumeText: "download cv",
  },
  es: {
    greetingBefore: "hola, soy ",
    greetingName: "Helgi",
    bio: "soy desarrollador",
    educationBefore: "formación: informática - ",
    educationSchool: "Universidad de Islandia",
    ectsLabel: "ects",
    degreeComplete: "graduado",
    ageLabel: "edad:",
    timeLabels: ["años", "mes", "días", "h", "min", "seg"],
    locationBefore: "ubicación actual: ",
    locationPlace: "Reikiavik, Islandia",
    githubHover: "helgarfri",
    linkedinLabel: "linkedin",
    statusText:
      "este proyecto lleva varios años en desarrollo continuo...",
    resumeText: "descargar cv",
  },
};

const totalECTS = 180.5;

// The date/time I was "born" (13 Feb 2002, 14:02)
const BIRTHDATE = new Date("2002-02-13T14:02:00Z");

function Introduction() {
  const { language } = useContext(LanguageContext); // "is" or "en"
  const { openCvModal } = useContext(CvDownloadContext);
  const [timeSinceBirth, setTimeSinceBirth] = useState(getTimeComponents());

  // Calculate Y, M, D, h, m, s
  function getTimeComponents() {
    const now = new Date();
    let diff = now.getTime() - BIRTHDATE.getTime();
    if (diff < 0) diff = 0;

    let totalSeconds = Math.floor(diff / 1000);

    const years = Math.floor(totalSeconds / (3600 * 24 * 365));
    totalSeconds -= years * 3600 * 24 * 365;

    const months = Math.floor(totalSeconds / (3600 * 24 * 30.4368));
    totalSeconds -= Math.floor(months * 3600 * 24 * 30.4368);

    const days = Math.floor(totalSeconds / (3600 * 24));
    totalSeconds -= days * 3600 * 24;

    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds -= hours * 3600;

    const minutes = Math.floor(totalSeconds / 60);
    totalSeconds -= minutes * 60;

    const seconds = totalSeconds;

    return { years, months, days, hours, minutes, seconds };
  }

  // Update every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceBirth(getTimeComponents());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // For the age clock boxes
  const timeValues = [
    timeSinceBirth.years,
    timeSinceBirth.months,
    timeSinceBirth.days,
    timeSinceBirth.hours,
    timeSinceBirth.minutes,
    timeSinceBirth.seconds,
  ];

  // Pick the correct translation object based on `language`
  const t = translations[language] || translations.en;

  return (
    <section id="intro" className={styles.introSection}>
      <div className={styles.introLayout}>
        <div className={styles.contentBox}>
          <h2 className={styles.greeting}>
            {t.greetingBefore}
            <KeepCase className={styles.greetingName}>{t.greetingName}</KeepCase>
          </h2>

          <p className={styles.bio}>{t.bio}</p>

          <p className={styles.education}>
            {t.educationBefore}
            <KeepCase>{t.educationSchool}</KeepCase>
          </p>
          <div className={styles.progressContainer}>
            <div className={`${styles.progressBar} ${styles.progressBarComplete}`} />
          </div>
          <div className={styles.ectsStatus}>
            <span className={styles.completeBadge}>
              <FaCheck className={styles.completeIcon} aria-hidden />
              {t.degreeComplete}
            </span>
            <small className={styles.ectsLabel}>
              {totalECTS} {t.ectsLabel}
            </small>
          </div>

          <p className={styles.ageLabel}>{t.ageLabel}</p>
          <div className={styles.ageClock}>
            {timeValues.map((val, idx) => (
              <div className={styles.ageClockColumn} key={idx}>
                <div className={styles.digitBox}>{val}</div>
                <span className={styles.timeLabel}>{t.timeLabels[idx]}</span>
              </div>
            ))}
          </div>

          <p className={styles.location}>
            {t.locationBefore}
            <KeepCase>{t.locationPlace}</KeepCase>
          </p>

          <div className={styles.socialRows}>
            <div className={styles.socialRow}>
              <FaGithub className={styles.socialIcon} aria-hidden />
              <a
                href="https://github.com/helgarfri"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <KeepCase>{t.githubHover}</KeepCase>
              </a>
            </div>
            <div className={styles.socialRow}>
              <FaLinkedin className={styles.socialIcon} aria-hidden />
              <a
                href="https://www.linkedin.com/in/helgi-freyr-davíðsson-9841ba219/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <KeepCase>{t.linkedinLabel}</KeepCase>
              </a>
            </div>
          </div>

          <div className={styles.resumeRow}>
            <button
              type="button"
              className={styles.resumeLink}
              onClick={openCvModal}
            >
              <FaFileDownload className={styles.resumeIcon} aria-hidden />
              {t.resumeText}
            </button>
          </div>
        </div>

        <figure className={styles.photoFrame}>
          <img
            src="/assets/helgarfri_foto.jpg"
            alt="Helgi"
            className={styles.photo}
            width={720}
            height={900}
          />
        </figure>
      </div>
    </section>
  );
}

export default Introduction;
