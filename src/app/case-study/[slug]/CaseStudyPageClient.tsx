"use client";

import { useEffect, useRef } from "react";
import { useTheaterMode } from "@/hooks/useTheaterMode";
import { useTheme } from "@/components/DynamicTheme/DynamicTheme";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import styles from "./CaseStudy.module.css";
import type { Project } from "@/lib/projects";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CaseStudyPageClient({ project }: { project: Project }) {
  const { enterTheater, exitTheater } = useTheaterMode();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { setAccentFromRgb } = useTheme();
  const { language, t } = useLanguage();

  useEffect(() => {
    enterTheater();
    window.scrollTo(0, 0);
    return () => exitTheater();
  }, [enterTheater, exitTheater]);

  useEffect(() => {
    setAccentFromRgb(project.color);
  }, [project.color, setAccentFromRgb]);

  const title = language === "pt" ? project.titlePt : project.titleEn;
  const synopsis = language === "pt" ? project.synopsisPt : project.synopsisEn;
  const credits = language === "pt" ? project.creditsPt : project.creditsEn;
  const bodyText = language === "pt" ? project.bodyTextPt : project.bodyTextEn;

  const pressEscText = language === "pt"
    ? "Pressione ESC ou suba o cursor para exibir o menu"
    : "Press ESC or move cursor to top to show menu";

  return (
    <main style={{ backgroundColor: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Hero */}
      <section className={styles.heroSection}>
        {project.videoFull ? (
          <video
            ref={videoRef}
            src={project.videoFull}
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={title}
            fill
            className={styles.heroVideo}
            style={{ objectFit: "cover" }}
            priority
          />
        )}
        <div className={styles.heroGradient} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {project.subtitle && (
            <p className={styles.heroSubtitle}>{project.subtitle}</p>
          )}
        </div>
      </section>

      {/* Content */}
      <section className={styles.contentSection}>
        {/* Body text - real project description */}
        {bodyText && (
          <p className={styles.bodyText}>{bodyText}</p>
        )}

        {/* Instagram links */}
        {project.instagramItems && project.instagramItems.length > 0 && (
          <>
            <p className={styles.ctaText}>{t('accessInstagram')}</p>
            <div className={styles.instagramGrid}>
              {project.instagramItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.instagramLink}
                  data-cursor="hover"
                >
                  <span className={styles.instagramIcon}>
                    <InstagramIcon />
                  </span>
                  <span className={styles.instagramLabel}>{item.label}</span>
                </a>
              ))}
            </div>
          </>
        )}

        <div className={styles.divider} />

        {/* Synopsis (secondary) */}
        <div className={styles.synopsisSection}>
          <h2 className={styles.sectionLabel}>{t('synopsisLabel')}</h2>
          <p className={styles.synopsisText}>{synopsis}</p>
          <p className={styles.creditsText}>{credits}</p>
        </div>

        {/* Hint */}
        <div className={styles.backHint}>
          <p className={styles.backHintText}>{pressEscText}</p>
        </div>
      </section>
    </main>
  );
}
