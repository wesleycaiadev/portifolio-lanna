"use client";

import { useRef, useState } from "react";
import styles from "./Preloader.module.css";

import { useLanguage } from "@/context/LanguageContext";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const { t } = useLanguage();

  const handleEnter = () => {
    if (isExiting) return;
    setIsExiting(true);

    // Garantia de segurança dupla: desmonta o preloader após 1 segundo
    // mesmo que o navegador atrase ou falte o evento onTransitionEnd
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.container} ${isExiting ? styles.exiting : ""}`}
      onTransitionEnd={(e) => {
        // Desmonta o preloader assim que o transform ou a opacidade terminarem
        if (e.propertyName === "transform" || e.propertyName === "opacity") {
          onComplete();
        }
      }}
    >
      <div className={styles.content}>
        {/* Nome — animado via CSS @keyframes */}
        <h1 className={styles.name}>
          {"LANNA ANJOS".split("").map((char, i) => (
            <span
              key={i}
              className={styles.char}
              style={{
                animationDelay: `${i * 0.06}s`,
                display: char === " " ? "inline" : "inline-block",
                width: char === " " ? "0.3em" : undefined,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p className={styles.tagline}>{t("tagline")}</p>

        <div className={styles.barTrack}>
          <div className={styles.barFill} />
        </div>

        <button
          className={styles.enterBtn}
          onClick={handleEnter}
          data-cursor="hover"
        >
          <span className={styles.pulse} />
          {t("enterBtn")}
        </button>
      </div>
    </div>
  );
}
