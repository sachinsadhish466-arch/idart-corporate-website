"use client";

import React, { useState } from "react";
import { Layers, ShieldCheck, Activity, Maximize2 } from "lucide-react";

interface TrussType {
  id: string;
  name: string;
  application: string;
  spanRange: string;
  steelGrade: string;
  windRating: string;
  coating: string;
  desc: string;
  svgPath: string;
}

const TRUSS_VARIANTS: TrussType[] = [
  {
    id: "pratt",
    name: "Pratt Structural Truss",
    application: "Commercial Warehouses, Industrial Sheds & Factories",
    spanRange: "12 to 36 Meters",
    steelGrade: "IS 2062 E250 / E350 Structural Steel",
    windRating: "Up to 180 km/h wind gust resistance",
    coating: "Hot-Dip Galvanized / Anti-corrosion Epoxy",
    desc: "Vertical members under compression and diagonal members under tension, maximizing structural load distribution over large open industrial floorplates.",
    svgPath: "M 50 150 L 250 50 L 450 150 Z M 150 150 L 150 100 M 250 150 L 250 50 M 350 150 L 350 100 M 50 150 L 150 100 M 150 150 L 250 50 M 350 150 L 250 50 M 450 150 L 350 100"
  },
  {
    id: "howe",
    name: "Howe Architectural Truss",
    application: "Residential Bungalows, Marriage Halls & Auditoriums",
    spanRange: "8 to 24 Meters",
    steelGrade: "High-Tensile Cold Formed Steel (CFS)",
    windRating: "Up to 160 km/h wind load capacity",
    coating: "Zinc-Alum Primer + Decorative Architectural Finish",
    desc: "Diagonal members under compression and vertical members under tension, providing classic gable pitch aesthetic and clean interior ceiling clearances.",
    svgPath: "M 50 150 L 250 40 L 450 150 Z M 150 150 L 150 95 M 250 150 L 250 40 M 350 150 L 350 95 M 150 150 L 250 40 M 350 150 L 250 40 M 50 150 L 150 95 M 450 150 L 350 95"
  },
  {
    id: "curved",
    name: "Curved / Barrel Vault Truss",
    application: "Sports Complexes, Modern Canopies & Metro Sheds",
    spanRange: "15 to 45 Meters",
    steelGrade: "Precision Curved Hollow Structural Sections (HSS)",
    windRating: "Aerodynamic wind deflection up to 200 km/h",
    coating: "Polyurethane Industrial Grade Topcoat",
    desc: "Sleek curved radius geometry creating column-free clear spans with natural aerodynamic wind deflection and rainwater rapid shedding.",
    svgPath: "M 50 150 Q 250 20 450 150 L 450 160 L 50 160 Z M 150 155 L 150 75 M 250 155 L 250 40 M 350 155 L 350 75 M 100 158 L 150 75 M 200 156 L 250 40 M 300 156 L 250 40 M 400 158 L 350 75"
  }
];

export default function TrussVisualizer() {
  const [selectedTruss, setSelectedTruss] = useState<TrussType>(TRUSS_VARIANTS[0]);

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
            Engineered Load Dynamics
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            Structural Roof Truss Visualization
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {TRUSS_VARIANTS.map((truss) => (
            <button
              key={truss.id}
              onClick={() => setSelectedTruss(truss)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedTruss.id === truss.id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {truss.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* SVG Truss Blueprint Rendering */}
        <div className="lg:col-span-7 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 relative flex flex-col items-center justify-center min-h-[300px]">
          <div className="absolute top-4 left-4 text-xs font-mono text-slate-400">
            BLUEPRINT // CAD_SCALE: 1:50 // STEEL: {selectedTruss.steelGrade.split(" ")[0]}
          </div>

          <svg viewBox="0 0 500 200" className="w-full h-auto max-h-[220px] drop-shadow-xl my-4">
            <defs>
              <pattern id="cadGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1e293b" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cadGrid)" />

            {/* Support Pillars */}
            <rect x="42" y="150" width="16" height="40" fill="#334155" rx="2" />
            <rect x="442" y="150" width="16" height="40" fill="#334155" rx="2" />

            {/* Truss Member Skeleton */}
            <path
              d={selectedTruss.svgPath}
              fill="none"
              stroke="#ff6600"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-500"
            />

            {/* Tie Beam Base Line */}
            <line x1="50" y1="150" x2="450" y2="150" stroke="#f97316" strokeWidth="4" />

            {/* Node Fastener Points */}
            <circle cx="50" cy="150" r="5" fill="#ffffff" />
            <circle cx="250" cy={selectedTruss.id === "curved" ? 40 : selectedTruss.id === "howe" ? 40 : 50} r="5" fill="#ffffff" />
            <circle cx="450" cy="150" r="5" fill="#ffffff" />
            <circle cx="150" cy="150" r="4" fill="#cbd5e1" />
            <circle cx="250" cy="150" r="4" fill="#cbd5e1" />
            <circle cx="350" cy="150" r="4" fill="#cbd5e1" />
          </svg>

          <div className="w-full flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-slate-900">
            <span>SPAN: {selectedTruss.spanRange}</span>
            <span className="text-orange-400">FINITE ELEMENT TESTED</span>
            <span>WIND: {selectedTruss.windRating.split(" ")[2]} KM/H</span>
          </div>
        </div>

        {/* Structural Metrics & Specifications */}
        <div className="lg:col-span-5 space-y-4">
          <div>
            <h4 className="text-xl font-bold text-white">{selectedTruss.name}</h4>
            <p className="text-xs text-orange-400 font-medium mt-0.5">{selectedTruss.application}</p>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {selectedTruss.desc}
          </p>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Maximize2 className="w-3.5 h-3.5 text-orange-400" />
                <span>Span Capability</span>
              </div>
              <div className="mt-1 text-sm font-bold text-white">{selectedTruss.spanRange}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Activity className="w-3.5 h-3.5 text-blue-400" />
                <span>Wind Tolerance</span>
              </div>
              <div className="mt-1 text-sm font-bold text-white">{selectedTruss.windRating}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Steel Spec</span>
              </div>
              <div className="mt-1 text-xs font-semibold text-white">{selectedTruss.steelGrade}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Coating</span>
              </div>
              <div className="mt-1 text-xs font-semibold text-white">{selectedTruss.coating}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
