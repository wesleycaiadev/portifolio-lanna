"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Showreel.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function ScrollScrubVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Título parallax: desaparece ao scrollar
    gsap.to(titleRef.current, {
      y: -200,
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "30% top",
        scrub: true,
      },
    });

    gsap.to(subtitleRef.current, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "20% top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef} id="showreel">
      <div className={styles.sticky}>
        {/* Background Escuro Fixo ao invés de Vídeo 404 */}
        <div className={styles.video} style={{ backgroundColor: "#050505" }}>
          {/* Opcional: Colocar um background pattern ou imagem sutil aqui */}
        </div>

        {/* Overlay gradiente para legibilidade do texto */}
        <div className={styles.overlay} />

        {/* Título sobreposto */}
        <div className={styles.titleWrap}>
          <h2 ref={titleRef} className={styles.title}>
            LANNA
            <br />
            ANJOS
          </h2>
          <p ref={subtitleRef} className={styles.subtitle}>
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
