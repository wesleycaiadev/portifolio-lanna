"use client";

import { useState, useEffect, useRef } from "react";
import { Preloader } from "@/components/Preloader/Preloader";
import { ScrollScrubVideo } from "@/components/Showreel/ScrollScrubVideo";
import { ProjectGrid } from "@/components/ProjectGrid/ProjectGrid";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import styles from "./Home.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);
  const { language, t } = useLanguage();
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const aboutImageRef = useRef<HTMLImageElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!preloaderComplete) return;

    // Efeito cinemático na imagem de fundo de Lanna removido para deixar cor viva
    // CSS no Home.module.css agora cuida do hover e brilho
    
    // Efeito de reveal em cascata (stagger) suave no texto quando entra na viewport
    const textChildren = aboutContentRef.current?.children;
    let textTrigger: gsap.core.Tween | null = null;
    if (textChildren) {
      textTrigger = gsap.fromTo(
        Array.from(textChildren),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1.0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      if (textTrigger) {
        textTrigger.scrollTrigger?.kill();
        textTrigger.kill();
      }
    };
  }, [preloaderComplete]);

  return (
    <main>
      {!preloaderComplete && <Preloader onComplete={() => setPreloaderComplete(true)} />}

      <div style={{ opacity: preloaderComplete ? 1 : 0, transition: "opacity 1s ease" }}>
        <ScrollScrubVideo />

        {/* Sobre — Seção com foto da Lana de fundo cinematográfico (Background) e biografia sobreposta */}
        <section ref={aboutSectionRef} className={styles.aboutSection} id="about">
          {/* Imagem de Fundo Cinematográfica da Lana */}
          <div className={styles.aboutBackgroundWrapper}>
            <Image
              ref={aboutImageRef}
              src="/images/lanna-portrait.jpg"
              alt="Lanna Anjos Background"
              fill
              className={styles.aboutBgImage}
              sizes="100vw"
              priority
            />
            {/* Overlay gradiente escuro de cinema para contraste perfeito de texto */}
            <div className={styles.aboutBgOverlay} />
          </div>

          <div ref={aboutContentRef} className={styles.aboutContainer}>
            <p className={styles.aboutLabel}>{t("aboutLabel")}</p>
            <h2 className={styles.aboutHeading}>{t("aboutHeading")}</h2>
            <p className={styles.aboutBody}>{t("aboutBody")}</p>
          </div>
        </section>

        <ProjectGrid projects={projects} />
      </div>
    </main>
  );
}
