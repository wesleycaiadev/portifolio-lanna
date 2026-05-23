"use client";

import { useRef, useState, useEffect } from "react";
import styles from "./Preloader.module.css";
import { useLanguage } from "@/context/LanguageContext";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isExiting, setIsExiting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Inicia a saída automaticamente após 2.5s (tempo da animação inicial)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      
      // Fallback de segurança: desmonta 1 segundo depois de começar a sair
      setTimeout(() => {
        onComplete();
      }, 1000);
      
    }, 2500);

    return () => clearTimeout(exitTimer);
  }, [onComplete]);

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
      </div>
    </div>
  );
}
