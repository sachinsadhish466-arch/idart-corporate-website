"use client";

import React, { useState } from "react";
import { Info, ShieldCheck, Flame, Layers, AlertCircle, CheckCircle2 } from "lucide-react";

interface HotspotPoint {
  id: number;
  label: string;
  x: number;
  y: number;
  title: string;
  desc: string;
  inspectionTip: string;
}

const KITCHEN_HOTSPOTS: HotspotPoint[] = [
  {
    id: 1,
    label: "Cylinder Enclosure",
    x: 18,
    y: 72,
    title: "Ground-Level Cylinder Bank",
    desc: "Cylinders housed in an exterior shaded alcove or dedicated utility area with cross ventilation.",
    inspectionTip: "Check for upright orientation and clearance from electric meters."
  },
  {
    id: 2,
    label: "Pressure Regulator",
    x: 24,
    y: 48,
    title: "Certified High/Low Regulator",
    desc: "Equipped with automatic excess flow check valve and integrated mechanical pressure gauge.",
    inspectionTip: "Verify neck rubber O-ring elasticity and lock collar engagement."
  },
  {
    id: 3,
    label: "Seamless Copper Pipe",
    x: 48,
    y: 42,
    title: "Wall-Concealed Copper Run",
    desc: "Heavy-gauge Cu-DHP tubing silver brazed inside PVC conduit sleeves without intermediate wall joints.",
    inspectionTip: "Check that no live electrical wiring shares the same conduit chase."
  },
  {
    id: 4,
    label: "Under-Sink Isolation Valve",
    x: 62,
    y: 65,
    title: "Emergency Manual Shutoff",
    desc: "Full-bore quarter-turn brass valve installed at arms reach beneath the kitchen countertop.",
    inspectionTip: "Ensure smooth 90-degree movement and yellow safety handle visibility."
  },
  {
    id: 5,
    label: "Cooktop Combustion Range",
    x: 80,
    y: 35,
    title: "Stoichiometric Burner Unit",
    desc: "Connected via wire-braided flexible stainless steel pigtail hose directly to burner inlet.",
    inspectionTip: "Inspect for sharp blue flame cone and zero odor during operation."
  }
];

export default function ImageHotspots() {
  const [activePoint, setActivePoint] = useState<HotspotPoint>(KITCHEN_HOTSPOTS[2]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              INTERACTIVE INSTALLATION ANATOMY
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Engineered Kitchen Hotspot Explorer
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Click on the pulsing coordinate markers to inspect safety clearances and component standards.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          5 ACTIVE SAFETY POINTS
        </span>
      </div>

      {/* Interactive Visual Blueprint Canvas */}
      <div className="py-6 flex items-center justify-center">
        <div className="relative w-full max-w-[650px] aspect-[16/9] rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-inner flex items-center justify-center p-4">
          {/* Blueprint Grid Lines */}
          <div className="absolute inset-0 bg-engineering-grid opacity-20 pointer-events-none" />

          {/* SVG Kitchen Layout Schematic */}
          <svg className="w-full h-full" viewBox="0 0 600 340" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Kitchen Floor */}
            <rect x="20" y="270" width="560" height="20" fill="#1E293B" rx="2" />

            {/* Kitchen Countertop Cabinet */}
            <rect x="250" y="160" width="310" height="110" fill="#0F172A" stroke="#334155" strokeWidth="2" rx="4" />
            <line x1="250" y1="160" x2="560" y2="160" stroke="#F97316" strokeWidth="4" />

            {/* Cooktop Stove on Counter */}
            <rect x="420" y="140" width="110" height="20" fill="#334155" rx="3" />
            <circle cx="450" cy="135" r="8" fill="#F97316" className="animate-pulse" />
            <circle cx="500" cy="135" r="8" fill="#F97316" className="animate-pulse" />

            {/* Exterior Wall Divider */}
            <rect x="180" y="40" width="20" height="230" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            <text x="110" y="60" fill="#64748B" fontSize="10" fontWeight="700">EXTERIOR</text>
            <text x="210" y="60" fill="#64748B" fontSize="10" fontWeight="700">INTERIOR KITCHEN</text>

            {/* Exterior Cylinder Enclosure */}
            <rect x="60" y="170" width="90" height="100" fill="#0F172A" stroke="#475569" strokeWidth="1.5" strokeDasharray="4 4" rx="4" />
            {/* LPG Cylinder 1 */}
            <rect x="75" y="195" width="26" height="70" fill="#C2410C" rx="5" />
            {/* LPG Cylinder 2 */}
            <rect x="110" y="195" width="26" height="70" fill="#C2410C" rx="5" />

            {/* Copper Pipeline Path (Orange Animated) */}
            <path
              d="M 95 195 L 95 145 L 190 145 L 340 145 L 340 210 L 460 210 L 460 160"
              fill="none"
              stroke="#FF6600"
              strokeWidth="3"
              strokeDasharray="6 4"
              className="animate-pipeline-flow"
            />
          </svg>

          {/* Hotspot Markers */}
          {KITCHEN_HOTSPOTS.map((point) => {
            const isSelected = activePoint.id === point.id;
            return (
              <button
                key={point.id}
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                onClick={() => setActivePoint(point)}
                className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20 focus:outline-none"
              >
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span
                    className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                      isSelected ? "bg-orange-500" : "bg-blue-400"
                    }`}
                  />
                  <span
                    className={`relative inline-flex items-center justify-center rounded-full h-6 w-6 text-[10px] font-bold text-white shadow-lg ${
                      isSelected
                        ? "bg-orange-500 ring-2 ring-white scale-110"
                        : "bg-slate-900 border border-white/60 hover:bg-orange-600"
                    }`}
                  >
                    0{point.id}
                  </span>
                </span>
                <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900/90 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {point.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Hotspot Explanation Panel */}
      <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-100 text-orange-700">
              HOTSPOT 0{activePoint.id}
            </span>
            <h4 className="text-base font-bold text-slate-900">
              {activePoint.title}
            </h4>
          </div>
          <span className="text-xs font-semibold text-slate-500">
            {activePoint.label}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs">
          <div>
            <span className="font-semibold text-slate-700 block mb-1">Engineering Detail:</span>
            <p className="text-slate-600 leading-relaxed">{activePoint.desc}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-700 block mb-1">Technician Inspection Focus:</span>
            <p className="text-slate-600 leading-relaxed">{activePoint.inspectionTip}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
