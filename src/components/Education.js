import React, { useContext, useState } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  EDUCATION_PROGRAMS,
  EDUCATION_HEADING,
} from "../constants/courses";
import CoursesModal from "./CoursesModal";
import styles from "./Education.module.css";
import KeepCase from "./KeepCase";

const COPY = {
  is: { viewCourses: "skoða námskeið" },
  en: { viewCourses: "view courses" },
  es: { viewCourses: "ver cursos" },
};

function Education() {
  const { language } = useContext(LanguageContext);
  const [modalGroup, setModalGroup] = useState(null);
  const lang = language || "en";
  const t = COPY[lang] || COPY.en;
  const heading = EDUCATION_HEADING[lang] || EDUCATION_HEADING.en;

  return (
    <section id="education" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>{heading}</h2>

        <div className={styles.grid}>
          {EDUCATION_PROGRAMS.map((program) => (
            <article key={program.id} className={styles.card}>
              <div className={styles.logoWrap}>
                <img
                  src={program.logo}
                  alt=""
                  className={styles.logo}
                />
              </div>

              <div className={styles.body}>
                <div className={styles.row}>
                  <h3 className={styles.cardTitle}>
                    <KeepCase>
                      {program.title[lang] || program.title.en}
                    </KeepCase>
                  </h3>
                  <span className={styles.period}>{program.period}</span>
                </div>

                <p className={styles.school}>
                  <KeepCase>
                    {program.school[lang] || program.school.en}
                  </KeepCase>
                </p>

                <div className={styles.footer}>
                  <span className={styles.detail}>
                    {program.detail[lang] || program.detail.en}
                  </span>

                  {program.hasCourses && (
                    <button
                      type="button"
                      className={styles.coursesBtn}
                      onClick={() =>
                        setModalGroup(program.courseGroup || "all")
                      }
                    >
                      {t.viewCourses}
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <CoursesModal
        open={Boolean(modalGroup)}
        onClose={() => setModalGroup(null)}
        courseGroup={modalGroup || "all"}
      />
    </section>
  );
}

export default Education;
