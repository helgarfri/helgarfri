import React from "react";
import styles from "./Socials.module.css";

// React Icons (optional) for logos
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Socials() {
  return (
    <section className={styles.socialsSection}>
      <div className={styles.container}>
        {/* Heading */}
        <h2 className={styles.heading}>ekki hika við að hafa samband</h2>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <p>símanúmer: +34 610 31 68 71</p>
          <p>netfang: helgifreyr02@gmail.com</p>
        </div>

        {/* Social Links */}
        <div className={styles.socialLinks}>
          {/* GitHub */}
          <a
            href="https://github.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub className={styles.icon} />
            <span>helgarfri</span>
          </a>
          
          {/* Instagram */}
          <a
            href="https://instagram.com/helgarfri"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram className={styles.icon} />
            <span>helgarfri</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/helgi-freyr-davíðsson-9841ba219/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin className={styles.icon} />
            <span>linkedin</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Socials;
