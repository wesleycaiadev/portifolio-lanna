"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook que extrai a cor dominante de um <video> element em tempo real.
 * Usa Canvas offscreen downscaled (50x50) + Median Cut simplificado.
 */
export function useDominantColor(videoRef: React.RefObject<HTMLVideoElement | null>) {
  const [dominant, setDominant] = useState<string>("#e8a045");
  const [palette, setPalette] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const lastUpdateRef = useRef<number>(0);

  const extractColor = useCallback(() => {
    const video = videoRef.current;
    if (!video || video.paused || video.ended || video.readyState < 2) {
      rafRef.current = requestAnimationFrame(extractColor);
      return;
    }

    const now = performance.now();
    // Debounce: atualiza a cada ~300ms
    if (now - lastUpdateRef.current < 300) {
      rafRef.current = requestAnimationFrame(extractColor);
      return;
    }
    lastUpdateRef.current = now;

    if (!canvasRef.current) {
      canvasRef.current = document.createElement("canvas");
      canvasRef.current.width = 50;
      canvasRef.current.height = 50;
    }

    const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
    if (!ctx) {
      rafRef.current = requestAnimationFrame(extractColor);
      return;
    }

    ctx.drawImage(video, 0, 0, 50, 50);
    const imageData = ctx.getImageData(0, 0, 50, 50);
    const pixels = imageData.data;

    // Simplified dominant color: average with weight towards saturated pixels
    let rSum = 0, gSum = 0, bSum = 0, count = 0;
    const buckets: Record<string, { r: number; g: number; b: number; count: number }> = {};

    for (let i = 0; i < pixels.length; i += 16) { // sample every 4th pixel
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      // Skip very dark and very light pixels
      const brightness = (r + g + b) / 3;
      if (brightness < 20 || brightness > 240) continue;

      // Quantize to reduce color space
      const qr = Math.round(r / 32) * 32;
      const qg = Math.round(g / 32) * 32;
      const qb = Math.round(b / 32) * 32;
      const key = `${qr},${qg},${qb}`;

      if (!buckets[key]) buckets[key] = { r: 0, g: 0, b: 0, count: 0 };
      buckets[key].r += r;
      buckets[key].g += g;
      buckets[key].b += b;
      buckets[key].count++;

      rSum += r;
      gSum += g;
      bSum += b;
      count++;
    }

    if (count === 0) {
      rafRef.current = requestAnimationFrame(extractColor);
      return;
    }

    // Sort buckets by count, pick top
    const sorted = Object.values(buckets).sort((a, b) => b.count - a.count);
    const top = sorted[0];
    const dr = Math.round(top.r / top.count);
    const dg = Math.round(top.g / top.count);
    const db = Math.round(top.b / top.count);

    setDominant(`rgb(${dr}, ${dg}, ${db})`);
    setPalette(
      sorted.slice(0, 5).map((b) => {
        const ar = Math.round(b.r / b.count);
        const ag = Math.round(b.g / b.count);
        const ab = Math.round(b.b / b.count);
        return `rgb(${ar}, ${ag}, ${ab})`;
      })
    );

    rafRef.current = requestAnimationFrame(extractColor);
  }, [videoRef]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(extractColor);
    return () => cancelAnimationFrame(rafRef.current);
  }, [extractColor]);

  return { dominant, palette };
}
