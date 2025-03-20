// Introduction.js
import React, { useEffect, useState, useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext"; // needed to read current language
import bgImage from "../assets/helgarfri.jpg";
import styles from "./Introduction.module.css";
import { FaGithub, FaFileDownload } from "react-icons/fa";

const translations = {
  is: {
    greeting: "hæ, ég heiti helgi",
    bio: "ég er forritari",
    education: "menntun: tölvunarfræði - hí",
    ectsLabel: "ects",
    ageLabel: "aldur:",
    timeLabels: ["ár", "mán", "dagar", "klst", "mín", "sek"],
    location: "núverandi staðsetning: madríd, spánn",
    githubHover: "helgarfri",
    statusText:
      "verkefnið hefur verið í stöðugri þróun í nokkur ár..." ,
    resumeText: "sækja ferilskrá" 

      
  },
  en: {
    greeting: "hi, i'm helgi",
    bio: "i'm a developer",
    education: "education: computer science - university of iceland",
    ectsLabel: "ects",
    ageLabel: "age:",
    timeLabels: ["yrs", "mo", "days", "hrs", "min", "sec"],
    location: "current location: madrid, spain",
    githubHover: "helgarfri",
    statusText:
      "this project has been under continuous development for several years..." ,
    resumeText: "download cv"
  },
};

// ECTS data
const totalECTS = 180;
const currentECTS = 84;
const progressPercentage = (currentECTS / totalECTS) * 100;

// The date/time I was "born" (13 Feb 2002, 14:02)
const BIRTHDATE = new Date("2002-02-13T14:02:00Z");

function Introduction() {
  const { language } = useContext(LanguageContext); // "is" or "en"
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
  const t = translations[language] || translations.is;

  return (
    <section
      className={styles.introSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>
      
      <div className={styles.contentBox}>
        {/* greeting */}
        <h2 className={styles.greeting}>{t.greeting}</h2>
        
        <p className={styles.bio}>{t.bio}</p>

        {/* menntun / education & progress bar */}
        <p className={styles.education}>{t.education}</p>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <small className={styles.ectsLabel}>
          {currentECTS} {t.ectsLabel} / {totalECTS} {t.ectsLabel}
        </small>

        {/* aldur & age clock */}
        <p className={styles.ageLabel}>{t.ageLabel}</p>
        <div className={styles.ageClock}>
          <div className={styles.digitsRow}>
            {timeValues.map((val, idx) => (
              <div className={styles.digitBox} key={idx}>
                {val}
              </div>
            ))}
          </div>
          <div className={styles.labelsRow}>
            {t.timeLabels.map((label, idx) => (
              <span className={styles.timeLabels} key={idx}>{label}</span>
            ))}
          </div>
        </div>

        {/* location */}
        <p className={styles.location}>{t.location}</p>

        {/* github - icon + username only */}
        <div className={styles.githubRow}>
          <FaGithub className={styles.githubIcon} />
          <a
            href="https://github.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            {t.githubHover}
          </a>
        </div>

        {/* Download Resume Link */}
        <div className={styles.resumeRow}>
          <a
            href="/docs/helgarfri_cv.pdf"
            download="helgarfri_cv.pdf"
            className={styles.resumeLink}
          >
            <FaFileDownload className={styles.resumeIcon} /> {/* Icon */}
            {t.resumeText}
          </a>
        </div>


      </div>
    </section>
  );
}

export default Introduction;
