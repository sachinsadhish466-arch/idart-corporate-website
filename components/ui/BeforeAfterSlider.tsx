"use client";

import React, { useState } from "react";
import { SlidersHorizontal, CheckCircle2, XCircle } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              TRANSFORMATION BENCHMARK
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Traditional Cylinder Clutter vs i-DART Reticulated Pipeline
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Drag the comparison slider to evaluate safety, aesthetics, and space efficiency gains.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          DRAG TO COMPARE
        </span>
      </div>

      {/* Interactive Comparison Split Visualizer */}
      <div className="py-6">
        <div className="relative w-full h-[320px] rounded-xl overflow-hidden select-none border border-slate-200">
          {/* Right Layer (After: Modern i-DART Pipeline) */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 flex flex-col justify-between">
            <div className="text-right">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5" />
                AFTER: i-DART Reticulated Grid
              </span>
            </div>

            <div className="max-w-[45%] ml-auto space-y-2 text-right">
              <h4 className="text-lg font-bold text-slate-900">
                Clean, Concealed & Safe
              </h4>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>✓ Zero cylinder weight inside kitchen</li>
                <li>✓ Automatic backup changeover</li>
                <li>✓ Tested seamless copper conduit</li>
                <li>✓ Under-counter isolation valve</li>
              </ul>
            </div>

            <div className="text-right text-[10px] font-mono text-slate-400">
              [IS 6044 CERTIFIED INSTALLATION]
            </div>
          </div>

          {/* Left Layer (Before: Traditional Clutter) - Clipped by Slider */}
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-br from-amber-100 via-rose-50 to-slate-200 p-6 flex flex-col justify-between overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-600 text-white shadow-sm">
                <XCircle className="w-3.5 h-3.5" />
                BEFORE: Traditional Loose Cylinder
              </span>
            </div>

            <div className="max-w-[280px] space-y-2 text-left">
              <h4 className="text-lg font-bold text-slate-900">
                Cluttered & Risky
              </h4>
              <ul className="text-xs text-slate-700 space-y-1">
                <li>✕ 30kg cylinder occupies prime floor space</li>
                <li>✕ Frequent cylinder handling in kitchen</li>
                <li>✕ Exposed rubber hose exposed to heat</li>
                <li>✕ Unexpected gas cutoffs mid-cooking</li>
              </ul>
            </div>

            <div className="text-[10px] font-mono text-slate-500">
              [TRADITIONAL RESIDENTIAL SETUP]
            </div>
          </div>

          {/* Vertical Divider Line with Draggable Handle */}
          <div
            className="absolute inset-y-0 w-1 bg-white shadow-2xl flex items-center justify-center -translate-x-1/2 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-white text-white flex items-center justify-center shadow-lg">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Invisible Range Slider on Top */}
          <input
            type="range"
            min="10"
            max="90"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
          />
        </div>
      </div>
    </div>
  );
}
