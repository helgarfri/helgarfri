import React, { useEffect, useState } from "react";
import bgImage from "../assets/helgarfri.jpg"; 
import styles from "./Introduction.module.css";

import { FaGithub } from "react-icons/fa";

const BIRTHDATE = new Date("2002-02-13T14:02:00Z");

// ECTS data (adjust as needed)
const totalECTS = 180;
const currentECTS = 84;
const progressPercentage = (currentECTS / totalECTS) * 100;

function Introduction() {
  const [timeSinceBirth, setTimeSinceBirth] = useState(getTimeComponents());

  // calculate years, months, days, hours, minutes, seconds
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

  // update every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceBirth(getTimeComponents());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // array of the six time values
  const timeValues = [
    timeSinceBirth.years,
    timeSinceBirth.months,
    timeSinceBirth.days,
    timeSinceBirth.hours,
    timeSinceBirth.minutes,
    timeSinceBirth.seconds,
  ];

  // corresponding labels for each box
  const timeLabels = ["ár", "mán", "dagar", "klst", "mín", "sek"];

  return (
    <section
      className={styles.introSection}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.overlay}></div>
      
      <div className={styles.contentBox}>
        <h2 className={styles.greeting}>hæ, ég heiti helgi</h2>
        
        <p className={styles.bio}>ég er forritari</p>

        {/* menntun & progress bar */}
        <p className={styles.education}>
          menntun: tölvunarfræði - hí
        </p>
        <div className={styles.progressContainer}>
          <div
            className={styles.progressBar}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <small className={styles.ectsLabel}>
          {currentECTS} ects / {totalECTS} ects
        </small>

        {/* aldur & age clock */}
        <p className={styles.ageLabel}>aldur:</p>
        <div className={styles.ageClock}>
          <div className={styles.digitsRow}>
            {timeValues.map((val, idx) => (
              <div className={styles.digitBox} key={idx}>
                {val}
              </div>
            ))}
          </div>
          <div className={styles.labelsRow}>
            {timeLabels.map((label, idx) => (
              <span className={styles.timeLabels} key={idx}>{label}</span>
            ))}
          </div>
        </div>

        {/* location */}
        <p className={styles.location}>
          núverandi staðsetning: madríd, spánn
        </p>

        {/* github - icon + username only */}
        <div className={styles.githubRow}>
          <FaGithub className={styles.githubIcon} />
          <a
            href="https://github.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            helgarfri
          </a>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
