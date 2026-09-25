"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Math.min(Math.max(Number(scroll) * 100, 0), 100));

      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={scrollToTop}
        className="relative w-11 h-11 rounded-full bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-white flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Scroll back to top"
      >
        {/* Circular Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="#1e293b"
            strokeWidth="2"
          />
          <circle
            cx="22"
            cy="22"
            r="19"
            fill="none"
            stroke="#ff6600"
            strokeWidth="2"
            strokeDasharray="120"
            strokeDashoffset={120 - (120 * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-150"
          />
        </svg>

        <ArrowUp className="w-4 h-4 text-orange-400 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
