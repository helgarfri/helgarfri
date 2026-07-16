import React, { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  EXPERIENCE_ENTRIES,
  EXPERIENCE_HEADING,
  OTHER_EXPERIENCE,
  OTHER_EXPERIENCE_HEADING,
} from "../constants/experience";
import styles from "./Experience.module.css";
import KeepCase from "./KeepCase";

function Experience() {
  const { language } = useContext(LanguageContext);
  const lang = language || "en";
  const heading = EXPERIENCE_HEADING[lang] || EXPERIENCE_HEADING.en;
  const otherHeading =
    OTHER_EXPERIENCE_HEADING[lang] || OTHER_EXPERIENCE_HEADING.en;

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>

        <ol className={styles.timeline}>
          {EXPERIENCE_ENTRIES.map((job) => (
            <li key={job.id} className={styles.item}>
              <div className={styles.marker} aria-hidden />
              <div className={styles.content}>
                {job.logo && (
                  <div className={styles.logoWrap}>
                    <img
                      src={job.logo}
                      alt=""
                      className={styles.logo}
                    />
                  </div>
                )}
                <div className={styles.body}>
                  <div className={styles.meta}>
                    <h3 className={styles.title}>
                      {job.title[lang] || job.title.en}
                    </h3>
                    <span className={styles.period}>{job.period}</span>
                  </div>
                  <p className={styles.org}>
                    <KeepCase>{job.org[lang] || job.org.en}</KeepCase>
                  </p>
                  <p className={styles.description}>
                    {job.description[lang] || job.description.en}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className={styles.other}>
          <h3 className={styles.otherHeading}>{otherHeading}</h3>
          <ul className={styles.otherList}>
            {OTHER_EXPERIENCE.map((job) => (
              <li key={job.id} className={styles.otherItem}>
                <span>
                  {job.title[lang] || job.title.en},{" "}
                  <KeepCase>{job.org[lang] || job.org.en}</KeepCase>
                </span>
                <span className={styles.otherPeriod}>{job.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
