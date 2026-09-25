"use client";

import React, { useState } from "react";
import { Home, Building2, Flame, ShieldCheck, CheckCircle2, ArrowRight, Gauge, Layers } from "lucide-react";

export default function ResidentialVsCommercial() {
  const [mode, setMode] = useState<"residential" | "commercial">("residential");

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              APPLICATION DIVERSITY
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Residential vs Commercial Gas Infrastructure
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare load specifications, pressure profiles, and safety compliance across sectors.
          </p>
        </div>

        <div className="inline-flex rounded-xl p-1.5 bg-slate-100 border border-slate-200">
          <button
            onClick={() => setMode("residential")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === "residential"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>RESIDENTIAL</span>
          </button>
          <button
            onClick={() => setMode("commercial")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              mode === "commercial"
                ? "bg-slate-900 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>COMMERCIAL</span>
          </button>
        </div>
      </div>

      <div className="py-6">
        {mode === "residential" ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                <span>Application: Independent Homes, Gated Communities & Multi-Storey Apartments</span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Safe, Compact & Silent Domestic Reticulated Gas
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                Eliminates heavy cylinder deliveries into living rooms. Cylinders remain in ventilated ground-level utility cages while pure vapor flows directly to apartment hobs through concealed seamless copper conduits.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Pressure Standard</span>
                  <div className="text-sm font-bold text-slate-900">28 - 30 mbar</div>
                  <div className="text-[11px] text-slate-500">Low pressure calibrated</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Cylinder Size</span>
                  <div className="text-sm font-bold text-slate-900">14.2 kg LPG</div>
                  <div className="text-[11px] text-slate-500">Dual cylinder bank</div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Automatic changeover between active and reserve cylinders.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Concealed silver-brazed copper pipes behind tiles or false ceilings.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Under-sink quarter-turn brass isolation valve for instant shutoff.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-amber-50 border border-orange-200 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-600">
                  DOMESTIC SECTOR TARGETS
                </span>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {["Individual Villas", "Apartment Towers", "Gated Communities", "Modular Kitchens"].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-orange-100 shadow-sm mt-4">
                <div className="text-xs font-bold text-slate-900">Why Switch to Domestic Pipeline?</div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  No floor damage from dragging cylinders, no gas interruptions mid-cooking, and zero cylinder weight in your living area.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                <span>Application: Hotels, Cloud Kitchens, Industrial Canteens, Hospitals & Labs</span>
              </div>

              <h4 className="text-2xl font-bold text-slate-900">
                Heavy-Duty LOT Manifolds & High-Capacity Vaporization
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered for high-BTU continuous commercial kitchens. Utilizes Liquid Off-Take (LOT) cylinders coupled with electrical dry-type water bath vaporizers to supply non-freezing uninterrupted fuel to hundreds of burners simultaneously.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Pressure Range</span>
                  <div className="text-sm font-bold text-slate-900">0.5 - 2.0 bar (2-Stage)</div>
                  <div className="text-[11px] text-slate-500">Dual stage pressure reduction</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">Cylinder Scale</span>
                  <div className="text-sm font-bold text-slate-900">47.5 kg LOT / VOT</div>
                  <div className="text-[11px] text-slate-500">4 to 40+ cylinder banks</div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Integrated gas leak detectors with auto-closing solenoid shutoff valves.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Seamless heavy-gauge copper and schedule 40/80 carbon steel headers.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full fire service & statutory PESO/IS 6044 certification dossier provided.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-slate-100 border border-blue-200 flex flex-col justify-between min-h-[320px]">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700">
                  COMMERCIAL ENTERPRISE TARGETS
                </span>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {["Hotel Kitchens", "Cloud Kitchens", "Hospitals", "Food Processing", "Bakeries", "Industrial Canteens"].map((item, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-sm mt-4">
                <div className="text-xs font-bold text-slate-900">High-Capacity ROI</div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Eliminate 25-30% LPG wastage caused by cylinder freeze-ups in high-flame cooking through heated liquid vaporization.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
