"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
}

export function AnimatedCounter({ value }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -50px 0px" }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    // Extract numbers and non-numbers
    const numMatch = value.match(/[\d.,]+/);
    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const numberStr = numMatch[0].replace(/,/g, "");
    const targetNumber = parseFloat(numberStr);
    
    if (isNaN(targetNumber)) {
      setDisplayValue(value);
      return;
    }

    const prefix = value.substring(0, numMatch.index);
    const suffix = value.substring(numMatch.index! + numMatch[0].length);

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentNumber = targetNumber * easeProgress;
      
      // Format back with commas if original had commas, or just fixed decimals if it had dots
      let formattedNumber = "";
      if (numberStr.includes(".")) {
        const decimals = numberStr.split(".")[1].length;
        formattedNumber = currentNumber.toFixed(decimals);
      } else {
        formattedNumber = Math.floor(currentNumber).toString();
      }

      setDisplayValue(`${prefix}${formattedNumber}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // Ensure exact final value
      }
    };

    window.requestAnimationFrame(step);
  }, [isInView, value]);

  return <span ref={ref}>{displayValue}</span>;
}
