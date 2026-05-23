"use client";

import { useLanguage } from "@/context/LanguageContext";
import styles from "./Showreel.module.css";
import Image from "next/image";

export function ScrollScrubVideo() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="showreel">
      <div className={styles.sticky}>
        {/* Background Escuro Fixo ao invés de Vídeo 404 */}
        <div className={styles.video} style={{ backgroundColor: "#050505" }}>
          {/* Opcional: Colocar um background pattern ou imagem sutil aqui */}
        </div>

        {/* Overlay gradiente para legibilidade do texto */}
        <div className={styles.overlay} />

        {/* Título sobreposto */}
        <div className={styles.titleWrap}>
          <h2 className={styles.title}>
            LANNA
            <br />
            ANJOS
          </h2>
          <p className={styles.subtitle}>
            {t("tagline")}
          </p>
        </div>

        {/* Indicador de scroll */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>{t("scrollExplore")}</span>
        </div>
      </div>
    </section>
  );
}
