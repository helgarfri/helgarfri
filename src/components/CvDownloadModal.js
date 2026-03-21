import React, {
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { LanguageContext } from "../contexts/LanguageContext";
import {
  CV_LANGUAGE_CODES,
  getCvDownload,
} from "../constants/cvDownload";
import styles from "./CvDownloadModal.module.css";
import { FaFileDownload } from "react-icons/fa";

import icelandFlag from "../assets/iceland-flag-bw.png";
import usFlag from "../assets/uk-flag-bw.png";
import spainFlag from "../assets/spain-flag-bw.png";

const FLAG_BY_CODE = {
  is: icelandFlag,
  en: usFlag,
  es: spainFlag,
};

const LANG_LABELS = {
  is: "íslenska",
  en: "english",
  es: "español",
};

const MODAL_COPY = {
  is: {
    title: "ferilskrá",
    langLegend: "tungumál pdf",
    previewHint:
      "ef forskoðun birtist ekki, opnaðu skjalið í nýjum flipa.",
    openTab: "opna í nýjum flipa",
    download: "sækja",
    close: "loka",
  },
  en: {
    title: "cv",
    langLegend: "pdf language",
    previewHint: "if the preview does not load, open the file in a new tab.",
    openTab: "open in new tab",
    download: "download",
    close: "close",
  },
  es: {
    title: "currículum",
    langLegend: "idioma del pdf",
    previewHint:
      "si no ves la vista previa, abre el archivo en una pestaña nueva.",
    openTab: "abrir en pestaña nueva",
    download: "descargar",
    close: "cerrar",
  },
};

function CvDownloadModal({ open, onClose }) {
  const titleId = useId();
  const radioGroupName = useId();
  const dialogRef = useRef(null);
  const prevOpenRef = useRef(false);
  const { language: siteLanguage } = useContext(LanguageContext);
  const [selectedLang, setSelectedLang] = useState(siteLanguage);

  const t = MODAL_COPY[siteLanguage] || MODAL_COPY.en;
  const cv = getCvDownload(selectedLang);
  const previewSrc = `${cv.href}#view=FitH`;

  useLayoutEffect(() => {
    if (open && !prevOpenRef.current) {
      setSelectedLang(siteLanguage);
    }
    prevOpenRef.current = open;
  }, [open, siteLanguage]);

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
          <h2 id={titleId} className={styles.title}>
            {t.title}
          </h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => onClose()}
          >
            {t.close}
          </button>
        </div>

        <fieldset className={styles.langFieldset}>
          <legend className={styles.langLegend}>{t.langLegend}</legend>
          <div className={styles.langOptions} role="presentation">
            {CV_LANGUAGE_CODES.map((code) => {
              const id = `${radioGroupName}-${code}`;
              return (
                <label key={code} className={styles.langOption} htmlFor={id}>
                  <input
                    id={id}
                    type="radio"
                    name={radioGroupName}
                    value={code}
                    checked={selectedLang === code}
                    onChange={() => setSelectedLang(code)}
                    className={styles.langInput}
                  />
                  <img
                    src={FLAG_BY_CODE[code]}
                    alt=""
                    className={styles.flagImg}
                    width={20}
                    decoding="async"
                  />
                  <span className={styles.langOptionLabel}>
                    {LANG_LABELS[code] || code}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        <div className={styles.previewWrap}>
          {open ? (
            <iframe
              key={previewSrc}
              title={t.title}
              src={previewSrc}
              className={styles.previewFrame}
            />
          ) : null}
        </div>
        <p className={styles.previewHint}>
          {t.previewHint}{" "}
          <a
            href={cv.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            {t.openTab}
          </a>
        </p>

        <div className={styles.actions}>
          <a
            href={cv.href}
            download={cv.download}
            className={styles.downloadBtn}
          >
            <FaFileDownload className={styles.downloadIcon} aria-hidden />
            {t.download}
          </a>
        </div>
      </div>
    </dialog>
  );
}

export default CvDownloadModal;
