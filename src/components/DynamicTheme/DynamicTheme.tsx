"use client";

import {
  createContext,
  useContext,
  useCallback,
  useState,
  type ReactNode,
} from "react";

interface ThemeContextValue {
  accentColor: string;
  setAccentFromRgb: (rgb: string) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  accentColor: "hsl(35, 90%, 60%)",
  setAccentFromRgb: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

/**
 * Converte uma string "rgb(r, g, b)" para valores HSL e aplica como CSS custom properties.
 */
function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

export function DynamicThemeProvider({ children }: { children: ReactNode }) {
  const [accentColor, setAccentColor] = useState("hsl(35, 90%, 60%)");

  const setAccentFromRgb = useCallback((input: string) => {
    let r: number, g: number, b: number;

    // Detecta formato HEX (#rrggbb ou #rgb)
    if (input.startsWith('#')) {
      const hex = input.replace('#', '');
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      }
    } else {
      // Formato rgb(r, g, b)
      const match = input.match(/(\d+)/g);
      if (!match || match.length < 3) return;
      [r, g, b] = match.map(Number);
    }

    const [h, s, l] = rgbToHsl(r, g, b);

    // Garante saturação e luminosidade mínimas para visibilidade
    const finalS = Math.max(s, 40);
    const finalL = Math.min(Math.max(l, 35), 70);

    const root = document.documentElement;
    root.style.setProperty("--accent-h", String(h));
    root.style.setProperty("--accent-s", `${finalS}%`);
    root.style.setProperty("--accent-l", `${finalL}%`);

    setAccentColor(`hsl(${h}, ${finalS}%, ${finalL}%)`);
  }, []);

  return (
    <ThemeContext.Provider value={{ accentColor, setAccentFromRgb }}>
      {children}
    </ThemeContext.Provider>
  );
}
