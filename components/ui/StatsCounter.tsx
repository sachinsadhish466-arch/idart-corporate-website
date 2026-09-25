"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export default function StatsCounter({
  end,
  suffix = "+",
  prefix = "",
  duration = 2000,
  label,
  sublabel,
  icon
}: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          let startTime: number | null = null;
          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end, duration, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-slate-800/80 hover:border-orange-500/40 transition-all duration-300 group shadow-xl"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-bl-full pointer-events-none group-hover:bg-orange-500/10 transition-colors" />

      {icon && (
        <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-400 mb-4 border border-orange-500/20 group-hover:scale-110 transition-transform">
          {icon}
        </div>
      )}

      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-baseline">
        <span className="text-orange-500">{prefix}</span>
        <span>{count.toLocaleString()}</span>
        <span className="text-orange-500 ml-0.5">{suffix}</span>
      </div>

      <div className="mt-3 text-base sm:text-lg font-semibold text-slate-200">
        {label}
      </div>

      {sublabel && (
        <div className="mt-1 text-xs sm:text-sm text-slate-400">
          {sublabel}
        </div>
      )}
    </div>
  );
}
