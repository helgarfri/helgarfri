import React, { useEffect, useId, useLayoutEffect, useRef } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBook,
  FaGraduationCap,
} from "react-icons/fa";
import { getCoursesForSkill, formatCourseMonth } from "../constants/courses";
import styles from "./SkillDetailModal.module.css";
import KeepCase from "./KeepCase";
import ModalCloseButton from "./ModalCloseButton";

const COPY = {
  is: {
    close: "loka",
    docs: "skjölun",
    repos: "github",
    courses: "námskeið",
    noRepos: "engin opinber repo tengd við þessa tækni enn.",
    noCourses: "engin námskeið tengd við þessa tækni enn.",
    rating: "stig",
  },
  en: {
    close: "close",
    docs: "docs",
    repos: "github",
    courses: "courses",
    noRepos: "no public repos linked for this technology yet.",
    noCourses: "no courses linked to this technology yet.",
    rating: "rating",
  },
  es: {
    close: "cerrar",
    docs: "docs",
    repos: "github",
    courses: "cursos",
    noRepos: "aún no hay repos públicos vinculados a esta tecnología.",
    noCourses: "aún no hay cursos vinculados a esta tecnología.",
    rating: "nivel",
  },
};

function renderDots(rating, stylesRef) {
  const dots = [];
  for (let i = 1; i <= 5; i++) {
    dots.push(
      <span
        key={i}
        className={i <= rating ? stylesRef.dotFilled : stylesRef.dotEmpty}
        aria-hidden
      />
    );
  }
  return dots;
}

function SkillDetailModal({
  open,
  onClose,
  skill,
  skillId,
  language,
  IconComponent,
  tone,
}) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const t = COPY[language] || COPY.en;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onDialogClose = () => onClose();
    d.addEventListener("close", onDialogClose);
    return () => d.removeEventListener("close", onDialogClose);
  }, [onClose]);

  useLayoutEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (open) {
      if (!d.open) d.showModal();
    } else if (d.open) {
      d.close();
    }
  }, [open]);

  if (!skill) return null;

  const Icon = IconComponent;
  const courses = skillId ? getCoursesForSkill(skillId) : [];
  const accent = tone?.color || "#4f9d82";
  const wash = tone?.bg || "rgba(79, 157, 130, 0.14)";

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
    >
      <div
        className={styles.panel}
        style={{ "--skill-accent": accent, "--skill-wash": wash }}
      >
        <div className={styles.hero}>
          <div className={styles.headerRow}>
            <div className={styles.titleBlock}>
              <span
                className={styles.iconBadge}
                style={{
                  background: wash,
                  color: accent,
                  borderColor: accent,
                }}
                aria-hidden
              >
                {Icon ? <Icon /> : null}
              </span>
              <div className={styles.titleMeta}>
                <h2 id={titleId} className={styles.title}>
                  {skill.name}
                </h2>
                <div
                  className={styles.ratingRow}
                  aria-label={`${t.rating}: ${skill.rating} / 5`}
                >
                  {renderDots(skill.rating, styles)}
                  <span className={styles.ratingLabel}>
                    {skill.rating}/5
                  </span>
                </div>
              </div>
            </div>
            <ModalCloseButton onClick={() => onClose()} label={t.close} />
          </div>
        </div>

        <div className={styles.body}>
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <FaGraduationCap aria-hidden />
              {t.courses}
              {courses.length > 0 && (
                <span className={styles.count}>{courses.length}</span>
              )}
            </h3>
            {courses.length > 0 ? (
              <ul className={styles.courseList}>
                {courses.map((course) => (
                  <li
                    key={`${course.code}-${course.completed}`}
                    className={styles.courseItem}
                  >
                    <div className={styles.courseText}>
                      <span className={styles.courseName}>
                        <KeepCase>
                          {course.name[language] || course.name.en}
                        </KeepCase>
                      </span>
                      <span className={styles.courseMeta}>
                        <KeepCase>{course.code}</KeepCase> ·{" "}
                        {formatCourseMonth(course.completed, language)} ·{" "}
                        <KeepCase>{course.grade}</KeepCase>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.emptyRepos}>{t.noCourses}</p>
            )}
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <FaBook aria-hidden />
              {t.docs}
            </h3>
            <a
              href={skill.docs}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.docsLink}
            >
              <span>{skill.docs.replace(/^https?:\/\//, "")}</span>
              <FaExternalLinkAlt className={styles.extIcon} aria-hidden />
            </a>
          </section>

          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>
              <FaGithub aria-hidden />
              {t.repos}
              {skill.repos?.length > 0 && (
                <span className={styles.count}>{skill.repos.length}</span>
              )}
            </h3>
            {skill.repos?.length > 0 ? (
              <ul className={styles.repoList}>
                {skill.repos.map((repo) => (
                  <li key={repo.url}>
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.repoLink}
                    >
                      <span>{repo.label}</span>
                      <FaExternalLinkAlt
                        className={styles.extIcon}
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={styles.emptyRepos}>{t.noRepos}</p>
            )}
          </section>
        </div>
      </div>
    </dialog>
  );
}

export default SkillDetailModal;
