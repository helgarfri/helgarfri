import React from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./ModalCloseButton.module.css";

/** Shared modal dismiss control — X icon, accessible label. */
function ModalCloseButton({ onClick, label = "close", variant = "light" }) {
  return (
    <button
      type="button"
      className={`${styles.closeBtn} ${styles[variant]}`}
      onClick={onClick}
      aria-label={label}
    >
      <FaTimes aria-hidden />
    </button>
  );
}

export default ModalCloseButton;
