"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./Showreel.module.css";

gsap.registerPlugin(ScrollTrigger);

const SHOWREEL_URL =
  "https://cdn.pixabay.com/video/2024/07/08/220268_large.mp4";

export function ScrollScrubVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // Espera metadata do vídeo para saber duration
    const onLoadedMetadata = () => {
      // Scroll-scrub: avança currentTime com o scroll
      const scrubTl = gsap.to(video, {
        currentTime: video.duration || 10,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          pin: false,
        },
      });

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
        scrubTl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    };

    if (video.readyState >= 1) {
      onLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", onLoadedMetadata, { once: true });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className={styles.section} ref={containerRef} id="showreel">
      <div className={styles.sticky}>
        <video
          ref={videoRef}
          className={styles.video}
          src={SHOWREEL_URL}
          muted
          playsInline
          preload="auto"
          data-cursor="play"
        />

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
