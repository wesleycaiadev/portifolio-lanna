"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { type Project } from "@/lib/projects";
import styles from "./ProjectCard.module.css";
import { useTheme } from "@/components/DynamicTheme/DynamicTheme";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlayingPendingRef = useRef(false);
  const shouldPlayRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const { setAccentFromRgb } = useTheme();
  const { language } = useLanguage();

  const handleMouseEnter = () => {
    setIsHovered(true);
    setAccentFromRgb(project.color);
    shouldPlayRef.current = true;
    
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      isPlayingPendingRef.current = true;
      
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            isPlayingPendingRef.current = false;
            // Se o usuário tirou o mouse enquanto o vídeo carregava, pausa agora
            if (!shouldPlayRef.current && videoRef.current) {
              videoRef.current.pause();
            }
          })
          .catch((err) => {
            isPlayingPendingRef.current = false;
            // Silencia o AbortError do navegador
          });
      } else {
        isPlayingPendingRef.current = false;
      }
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    shouldPlayRef.current = false;
    
    if (videoRef.current) {
      // Se a promessa de play() ainda está carregando no browser,
      // evitamos pausar para não gerar o AbortError.
      // O callback .then() da Promise se encarregará de pausar o vídeo.
      if (!isPlayingPendingRef.current) {
        try {
          videoRef.current.pause();
        } catch (err) {
          // Silencia
        }
      }
    }
  };

  // Localiza os campos conforme o idioma
  const title = language === "pt" ? project.titlePt : project.titleEn;
  const category = language === "pt" ? project.categoryPt : project.categoryEn;

  return (
    <Link
      href={`/case-study/${project.slug}`}
      ref={cardRef}
      className={styles.card}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cursor="play"
    >
      <div className={styles.imageContainer}>
        {/* Imagem estática sempre presente (impede piscadas ou tela preta) */}
        <Image
          src={project.thumbnail}
          alt={title}
          fill
          className={`${styles.staticImage} ${isHovered ? styles.shrunk : ""}`}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index < 2}
        />

        {/* Vídeo de Preview Cinematográfico nativo (carrega sob demanda, ultra-fluido) */}
        <video
          ref={videoRef}
          src={project.videoPreview}
          className={`${styles.hoverVideo} ${isHovered ? styles.videoVisible : ""}`}
          loop
          muted
          playsInline
          preload="none"
        />

        {/* Overlay Escuro com Vinheta de Cinema */}
        <div className={`${styles.overlay} ${isHovered ? styles.overlayVisible : ""}`} />
      </div>

      <div className={styles.meta}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
      </div>
    </Link>
  );
}
