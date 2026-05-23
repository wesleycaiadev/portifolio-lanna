"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CinematicMetrics.module.css";

gsap.registerPlugin(ScrollTrigger);

interface CinematicMetricsProps {
  metrics: { label: string; value: string }[];
}

export function CinematicMetrics({ metrics }: CinematicMetricsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<(HTMLParagraphElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animação stagger entrada e números contando
    const elements = valuesRef.current.filter(Boolean);

    elements.forEach((el) => {
      if (!el) return;
      const targetValueStr = el.dataset.value || "0";
      // Extrai os números e os caracteres (ex: "1.5M+" -> num: 1.5, suffix: "M+")
      const numMatch = targetValueStr.match(/[\d.]+/);
      const suffixMatch = targetValueStr.match(/[^\d.]+/);

      const targetNum = numMatch ? parseFloat(numMatch[0]) : 0;
      const suffix = suffixMatch ? suffixMatch[0] : "";
      
      // Decidir quantidade de decimais (ex: 1.5 tem 1 casa, 45 tem 0)
      const decimals = targetValueStr.includes(".") ? targetValueStr.split(".")[1].length : 0;

      const obj = { val: 0 };

      gsap.to(obj, {
        val: targetNum,
        duration: 2.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.innerText = obj.val.toFixed(decimals) + suffix;
          }
        },
      });
      
      // Animação de entrada dos itens
      gsap.fromTo(el.parentElement, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [metrics]);

  return (
    <div className={styles.container} ref={containerRef}>
      {metrics.map((metric, index) => (
        <div key={metric.label} className={styles.metricItem}>
          <p className={styles.label}>{metric.label}</p>
          <p
            className={styles.value}
            ref={(el) => {
              valuesRef.current[index] = el;
            }}
            data-value={metric.value}
          >
            0
          </p>
        </div>
      ))}
    </div>
  );
}
