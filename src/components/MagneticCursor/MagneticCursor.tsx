"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import styles from "./MagneticCursor.module.css";

type CursorVariant = "default" | "hover" | "play" | "drag" | "hidden";

export function MagneticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [variant, setVariant] = useState<CursorVariant>("hidden"); // Começa oculto até o primeiro movimento
  const [isMobile, setIsMobile] = useState(true); // Default para true, detecta no client
  const hasMovedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detecta touch device
    const isTouch = window.matchMedia("(hover: none)").matches || 
                    ("ontouchstart" in window) || 
                    (navigator.maxTouchPoints > 0);
    
    setIsMobile(isTouch);
    if (isTouch) {
      document.body.classList.remove("custom-cursor-active");
      return;
    }

    // Ativa classe no body para esconder o cursor padrão de forma segura
    document.body.classList.add("custom-cursor-active");

    const handleMouseMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!hasMovedRef.current) {
        hasMovedRef.current = true;
        setIsVisible(true);
        setVariant("default");
        // Posiciona instantaneamente no primeiro movimento
        pos.current = { x: e.clientX, y: e.clientY };
        ringPos.current = { x: e.clientX, y: e.clientY };
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      if (el.closest("[data-cursor='play']") || el.tagName === "VIDEO") {
        setVariant("play");
      } else if (
        el.closest("a") ||
        el.closest("button") ||
        el.closest("[data-cursor='hover']") ||
        el.style.cursor === "pointer"
      ) {
        setVariant("hover");
      } else if (el.closest("[data-cursor='drag']")) {
        setVariant("drag");
      } else if (el.closest("[data-cursor='hidden']")) {
        setVariant("hidden");
      } else {
        setVariant("default");
      }
    };

    const handleMouseLeave = () => {
      setVariant("hidden");
    };

    const handleMouseEnter = () => {
      setVariant("default");
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  // Render loop ultra-otimizado (sem leitura de DOM/Reflows!)
  const animate = useCallback(() => {
    // Lerp dot
    const dotLerp = 0.25;
    pos.current.x += (target.current.x - pos.current.x) * dotLerp;
    pos.current.y += (target.current.y - pos.current.y) * dotLerp;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    // Lerp ring (um pouco mais lento para efeito orgânico)
    const ringLerp = 0.12;
    ringPos.current.x += (target.current.x - ringPos.current.x) * ringLerp;
    ringPos.current.y += (target.current.y - ringPos.current.y) * ringLerp;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
    }

    if (labelRef.current) {
      labelRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
    }

    requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [animate, isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot central */}
      <div
        ref={dotRef}
        className={`${styles.dot} ${styles[variant]} ${isVisible ? styles.visible : ""}`}
        aria-hidden="true"
      />

      {/* Ring externo */}
      <div
        ref={ringRef}
        className={`${styles.ring} ${styles[variant]} ${isVisible ? styles.visible : ""}`}
        aria-hidden="true"
      />

      {/* Label contextual (PLAY, DRAG, etc.) */}
      <div
        ref={labelRef}
        className={`${styles.label} ${
          (variant === "play" || variant === "drag") && isVisible ? styles.labelVisible : ""
        }`}
        aria-hidden="true"
      >
        {variant === "play" ? "PLAY" : variant === "drag" ? "DRAG" : ""}
      </div>
    </>
  );
}
