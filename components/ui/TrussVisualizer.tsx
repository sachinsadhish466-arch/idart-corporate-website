"use client";

import React, { useState } from "react";
import { Wrench, ShieldCheck, Layers, Wind, Ruler, CheckCircle2, ArrowRight } from "lucide-react";

interface Hotspot {
  id: string;
  name: string;
  x: number;
  y: number;
  spec: string;
  desc: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "strength",
    name: "Structural Strength & Load Webbing",
    x: 50,
    y: 28,
    spec: "Grade YSt 310 / 355 High Tensile Steel",
    desc: "Triangulated web members engineered to withstand wind loads up to 47 m/s (170 km/h) and dead/live loads per IS 875."
  },
  {
    id: "covering",
    name: "Galvalume Roof Cladding",
    x: 75,
    y: 35,
    spec: "AZ150 Pre-Painted Galvalume 0.50mm",
    desc: "Corrosion-proof 55% Aluminum-Zinc alloy coated steel profiling with thermal heat-reflective underlay options."
  },
  {
    id: "column",
    name: "Heavy Support Columns",
    x: 18,
    y: 72,
    spec: "ISMB / Heavy Tubular Hollow Section",
    desc: "Anchor-bolted columns transfer vertical weight and seismic horizontal shear moments directly to foundation pile caps."
  },
  {
    id: "ventilation",
    name: "Natural Ridge Ventilation",
    x: 50,
    y: 12,
    spec: "Aerodynamic Continuous Ridge Vents",
    desc: "Continuous ridge relief monitors release hot industrial air passively without electric power consumption."
  },
  {
    id: "joint",
    name: "Precision Erection Joints",
    x: 82,
    y: 72,
    spec: "Grade 8.8 High Strength Friction Bolts",
    desc: "Factory pre-fabricated gusset plates fastened with torque-calibrated high-tensile bolts for rapid error-free assembly."
  }
];

export default function TrussVisualizer() {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot>(HOTSPOTS[0]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              STRUCTURAL ENGINEERING SIMULATOR
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Industrial Roof Truss Architecture
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Explore interactive structural hotspots across rafters, columns, purlins, and cladding.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          CONFORMS: IS 800:2007 (STEEL STRUCTURES)
        </span>
      </div>

      <div className="py-6 flex items-center justify-center relative">
        <svg
          viewBox="0 0 600 320"
          className="w-full max-w-[600px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="50" y="270" width="500" height="20" fill="#E2E8F0" rx="2" />
          <line x1="50" y1="290" x2="550" y2="290" stroke="#94A3B8" strokeWidth="2" strokeDasharray="4 4" />

          <rect x="90" y="140" width="20" height="130" fill="#334155" rx="2" />
          <rect x="85" y="260" width="30" height="10" fill="#475569" />

          <rect x="490" y="140" width="20" height="130" fill="#334155" rx="2" />
          <rect x="485" y="260" width="30" height="10" fill="#475569" />

          <rect x="90" y="135" width="420" height="10" fill="#475569" />

          <line x1="90" y1="140" x2="300" y2="40" stroke="#1E293B" strokeWidth="10" strokeLinecap="round" />
          <line x1="300" y1="40" x2="510" y2="140" stroke="#1E293B" strokeWidth="10" strokeLinecap="round" />

          <g stroke="#F97316" strokeWidth="3" opacity="0.9">
            <line x1="300" y1="40" x2="300" y2="135" />
            <line x1="160" y1="108" x2="160" y2="135" />
            <line x1="230" y1="74" x2="230" y2="135" />
            <line x1="160" y1="135" x2="230" y2="74" />
            <line x1="230" y1="135" x2="300" y2="40" />
            <line x1="440" y1="108" x2="440" y2="135" />
            <line x1="370" y1="74" x2="370" y2="135" />
            <line x1="440" y1="135" x2="370" y2="74" />
            <line x1="370" y1="135" x2="300" y2="40" />
          </g>

          <line x1="80" y1="132" x2="300" y2="28" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
          <line x1="300" y1="28" x2="520" y2="132" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" opacity="0.8" />

          <polygon points="300,20 285,32 315,32" fill="#0284C7" />

          {HOTSPOTS.map((spot) => {
            const isSelected = activeHotspot.id === spot.id;
            return (
              <g
                key={spot.id}
                className="cursor-pointer"
                onClick={() => setActiveHotspot(spot)}
              >
                <circle
                  cx={`${spot.x}%`}
                  cy={`${spot.y}%`}
                  r={isSelected ? "12" : "9"}
                  fill="#FF6600"
                  opacity={isSelected ? "0.3" : "0.15"}
                  className="animate-ping"
                />
                <circle
                  cx={`${spot.x}%`}
                  cy={`${spot.y}%`}
                  r={isSelected ? "7" : "5"}
                  fill={isSelected ? "#FF6600" : "#EA580C"}
                  stroke="#FFFFFF"
                  strokeWidth="2"
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
              COMPONENT SPECIFICATION
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              {activeHotspot.name}
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700">
            {activeHotspot.spec}
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed pt-3">
          {activeHotspot.desc}
        </p>

        <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Custom spans engineered from 10m to 60m column-free clear spaces.
          </span>
          <a
            href="/roof-truss"
            className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
          >
            <span>Truss Configurations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
