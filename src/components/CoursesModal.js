import React, { useContext, useEffect, useId, useLayoutEffect, useMemo, useRef } from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  getCoursesByGroup,
  formatCourseMonth,
  getTotalEcts,
} from "../constants/courses";
import styles from "./CoursesModal.module.css";
import KeepCase from "./KeepCase";
import ModalCloseButton from "./ModalCloseButton";

const COPY = {
  is: {
    titleAll: "námskeið — ",
    titleAllPlace: "Háskóli Íslands",
    titleExchange: "námskeið — skiptinám (",
    titleExchangePlace: "Complutense",
    titleExchangeEnd: ")",
    close: "loka",
    date: "dagsetning",
    course: "námskeið",
    code: "númer",
    ects: "ects",
    grade: "einkunn",
    mode: "fyrirkomulag",
    place: "staður",
    campus: "staðnám",
    distance: "fjarnám",
    summary: (n, ects) => `${n} námskeið · ${ects} ects (án skiptináms)`,
    summaryExchange: (n, ects) =>
      `${n} námskeið lokið í skiptinámi · ${ects} ects`,
  },
  en: {
    titleAll: "courses — ",
    titleAllPlace: "University of Iceland",
    titleExchange: "courses — exchange (",
    titleExchangePlace: "Complutense",
    titleExchangeEnd: ")",
    close: "close",
    date: "date",
    course: "course",
    code: "code",
    ects: "ects",
    grade: "grade",
    mode: "mode",
    place: "place",
    campus: "on campus",
    distance: "distance",
    summary: (n, ects) => `${n} courses · ${ects} ects (excluding exchange)`,
    summaryExchange: (n, ects) =>
      `${n} courses completed on exchange · ${ects} ects`,
  },
  es: {
    titleAll: "cursos — ",
    titleAllPlace: "Universidad de Islandia",
    titleExchange: "cursos — intercambio (",
    titleExchangePlace: "Complutense",
    titleExchangeEnd: ")",
    close: "cerrar",
    date: "fecha",
    course: "curso",
    code: "código",
    ects: "ects",
    grade: "nota",
    mode: "modalidad",
    place: "lugar",
    campus: "presencial",
    distance: "a distancia",
    summary: (n, ects) => `${n} cursos · ${ects} ects (sin intercambio)`,
    summaryExchange: (n, ects) =>
      `${n} cursos completados en el intercambio · ${ects} ects`,
  },
};

function CoursesModal({ open, onClose, courseGroup = "all" }) {
  const { language } = useContext(LanguageContext);
  const titleId = useId();
  const dialogRef = useRef(null);
  const lang = language || "en";
  const t = COPY[lang] || COPY.en;

  const sorted = useMemo(() => {
    return [...getCoursesByGroup(courseGroup)].sort((a, b) =>
      b.completed.localeCompare(a.completed)
    );
  }, [courseGroup]);

  const ects = getTotalEcts(sorted);
  const isExchange = courseGroup === "exchange";
  const summary = isExchange
    ? t.summaryExchange(sorted.length, ects)
    : t.summary(sorted.length, ects);

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

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby={titleId}
    >
      <div className={styles.panel}>
        <div className={styles.headerRow}>
          <div>
            <h2 id={titleId} className={styles.title}>
              {isExchange ? (
                <>
                  {t.titleExchange}
                  <KeepCase>{t.titleExchangePlace}</KeepCase>
                  {t.titleExchangeEnd}
                </>
              ) : (
                <>
                  {t.titleAll}
                  <KeepCase>{t.titleAllPlace}</KeepCase>
                </>
              )}
            </h2>
            <p className={styles.summary}>{summary}</p>
          </div>
          <ModalCloseButton onClick={() => onClose()} label={t.close} />
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th scope="col">{t.date}</th>
                <th scope="col">{t.course}</th>
                <th scope="col">{t.code}</th>
                <th scope="col">{t.ects}</th>
                <th scope="col">{t.grade}</th>
                <th scope="col">{t.mode}</th>
                <th scope="col">{t.place}</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((course) => (
                <tr key={`${course.code}-${course.completed}`}>
                  <td>{formatCourseMonth(course.completed, lang)}</td>
                  <td>
                    <KeepCase>{course.name[lang] || course.name.en}</KeepCase>
                  </td>
                  <td className={styles.code}>
                    <KeepCase>{course.code}</KeepCase>
                  </td>
                  <td>{course.ects.toFixed(1)}</td>
                  <td>
                    <KeepCase>{course.grade}</KeepCase>
                  </td>
                  <td>
                    {course.mode === "distance" ? t.distance : t.campus}
                  </td>
                  <td>
                    <KeepCase>{course.place[lang] || course.place.en}</KeepCase>
                    {course.note ? (
                      <span className={styles.note}>
                        {" "}
                        · {course.note[lang] || course.note.en}
                      </span>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </dialog>
  );
}

export default CoursesModal;
