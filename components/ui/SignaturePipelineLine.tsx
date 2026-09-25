"use client";

import React from "react";

interface SignaturePipelineLineProps {
  label?: string;
  metric?: string;
}

export default function SignaturePipelineLine({
  label = "IDART RETICULATED ENERGY GRID",
  metric = "IS 6044 / OISD-162 COMPLIANT"
}: SignaturePipelineLineProps) {
  return (
    <div className="relative w-full py-4 overflow-hidden pointer-events-none select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between border-y border-slate-100 py-2">
          <div className="flex items-center gap-2 text-[10px] font-mono font-semibold tracking-wider text-slate-400">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
            <span className="text-orange-600 font-bold">{label}</span>
          </div>

          <div className="flex-1 mx-6 relative h-[2px] bg-slate-200 overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent animate-[gasParticleStream_4s_linear_infinite]" />
          </div>

          <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
            {metric}
          </div>
        </div>
      </div>
    </div>
  );
}
