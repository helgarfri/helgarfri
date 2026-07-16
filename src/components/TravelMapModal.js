import React, { useEffect, useId, useLayoutEffect, useRef } from "react";
import {
  TRAVEL_MAP_COPY,
  TRAVEL_MAP_EMBED,
} from "../constants/hobbies";
import ModalCloseButton from "./ModalCloseButton";
import styles from "./TravelMapModal.module.css";

function TravelMapModal({ open, onClose, language }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const lang = language || "en";
  const t = TRAVEL_MAP_COPY[lang] || TRAVEL_MAP_COPY.en;

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
            {t.modalTitle}
          </h2>
          <ModalCloseButton
            onClick={onClose}
            label={t.close}
            variant="dark"
          />
        </div>

        <div className={styles.mapFrame}>
          {open && (
            <iframe
              src={TRAVEL_MAP_EMBED}
              title={t.iframeTitle}
              className={styles.iframe}
              loading="lazy"
              allow="fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          )}
        </div>
      </div>
    </dialog>
  );
}

export default TravelMapModal;
