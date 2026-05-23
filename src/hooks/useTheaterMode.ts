"use client";

import { useState, useCallback, useEffect } from "react";

/**
 * Hook para Modo Teatro: escurece interface e foca no conteúdo.
 */
export function useTheaterMode() {
  const [isTheater, setIsTheater] = useState(false);

  const enterTheater = useCallback(() => {
    setIsTheater(true);
    document.body.classList.add("theater-active");
  }, []);

  const exitTheater = useCallback(() => {
    setIsTheater(false);
    document.body.classList.remove("theater-active");
  }, []);

  const toggleTheater = useCallback(() => {
    if (isTheater) exitTheater();
    else enterTheater();
  }, [isTheater, enterTheater, exitTheater]);

  // ESC para sair
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isTheater) {
        exitTheater();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("theater-active");
    };
  }, [isTheater, exitTheater]);

  return { isTheater, enterTheater, exitTheater, toggleTheater };
}
