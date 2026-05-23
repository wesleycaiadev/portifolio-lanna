"use client";

import { useCallback, useEffect, useRef } from "react";

interface MagneticOptions {
  strength?: number;
  radius?: number;
}

/**
 * Hook: retorna ref + handlers para efeito magnético em elementos.
 * O elemento "puxa" o cursor em sua direção dentro do raio especificado.
 */
export function useMagneticEffect<T extends HTMLElement>(
  options: MagneticOptions = {}
) {
  const { strength = 0.35, radius = 100 } = options;
  const ref = useRef<T>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);

      if (distance < radius) {
        posRef.current = {
          x: distX * strength,
          y: distY * strength,
        };
      } else {
        posRef.current = { x: 0, y: 0 };
      }

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
        }
      });
    },
    [strength, radius]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (el) {
      posRef.current = { x: 0, y: 0 };
      el.style.transform = "translate(0px, 0px)";
      el.style.transition = "transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 600);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.addEventListener("mousemove", handleMouseMove as EventListener);
    el.addEventListener("mouseleave", handleMouseLeave as EventListener);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove as EventListener);
      el.removeEventListener("mouseleave", handleMouseLeave as EventListener);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return ref;
}
