"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2 className={styles.title}>LANNA<br/>ANJOS</h2>
            <p className={styles.tagline}>{t("footerTagline")}</p>
          </div>
          
          <div className={styles.right}>
            <a href="https://www.instagram.com/lannaanjoss/" target="_blank" rel="noopener noreferrer" className={styles.link} data-cursor="hover">
              Instagram
            </a>
            <a href="mailto:lannaanjos@email.com" className={styles.link} data-cursor="hover">
              Email
            </a>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.rights}>{t("footerRights")}</p>
        </div>
      </div>
    </footer>
  );
}
