"use client";

import React, { useState, useEffect } from "react";
import { Flame, Shield } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 450);
    const timer2 = setTimeout(() => setLoading(false), 750);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-300 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-xl shadow-orange-500/20 mb-4 animate-bounce">
          <Flame className="w-8 h-8" />
          <div className="absolute -bottom-1.5 -right-1.5 p-1 rounded-full bg-white shadow-md border border-orange-200">
            <Shield className="w-4 h-4 text-orange-600" />
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-black tracking-wider text-slate-900">
            i-DART<span className="text-orange-500">.</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mt-1">
            AGTRS IDART PRIVATE LIMITED
          </p>
        </div>

        <div className="w-48 h-1 bg-slate-100 rounded-full mt-5 overflow-hidden relative">
          <div className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 animate-pulse rounded-full w-full" />
        </div>

        <p className="text-[11px] font-mono tracking-widest text-orange-600 font-bold mt-2">
          Safety. Service. Scale.
        </p>
      </div>
    </div>
  );
}
