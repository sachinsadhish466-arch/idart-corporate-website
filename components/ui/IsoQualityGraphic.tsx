"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, CheckCircle2, RotateCw, Sparkles, FileCheck, ArrowRight } from "lucide-react";

interface QualityPillar {
  id: string;
  title: string;
  desc: string;
  standard: string;
  x: number;
  y: number;
}

const PILLARS: QualityPillar[] = [
  {
    id: "quality",
    title: "Quality Management",
    desc: "Rigid standard operating procedures applied across materials sourcing, brass metallurgy, and installation handoffs.",
    standard: "Clause 8.4 - Control of externally provided processes",
    x: 50,
    y: 12
  },
  {
    id: "process",
    title: "Process Control",
    desc: "Every technician adheres to serialized digital inspection workflows with multi-point photographic verification.",
    standard: "Clause 8.5 - Production & service provision",
    x: 88,
    y: 42
  },
  {
    id: "safety",
    title: "Safety Auditing",
    desc: "Zero-tolerance diagnostic protocol utilizing electronic combustible gas detectors and pneumatic pressure retention.",
    standard: "IS 6044 / OISD-162 Alignment",
    x: 75,
    y: 85
  },
  {
    id: "compliance",
    title: "Statutory Compliance",
    desc: "Strict compliance with Indian petroleum standards, PESO guidelines, and local fire department safety clearances.",
    standard: "Clause 9.1 - Monitoring, measurement & analysis",
    x: 25,
    y: 85
  },
  {
    id: "improvement",
    title: "Continuous Improvement",
    desc: "Closed-loop feedback via bi-annual customer audits, technician retraining, and digital ERP logging.",
    standard: "Clause 10.2 - Nonconformity & corrective action",
    x: 12,
    y: 42
  }
];

export default function IsoQualityGraphic() {
  const [activePillar, setActivePillar] = useState<QualityPillar>(PILLARS[0]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              CERTIFIED QUALITY SYSTEM
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            ISO 9001:2015 Quality & Compliance Grid
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Interconnected quality pillars ensuring zero-compromise safety across 457+ branches.
          </p>
        </div>

        {/* Certificate Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 border border-amber-200 text-xs font-bold text-amber-800">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Accredited ISO 9001:2015</span>
        </div>
      </div>

      {/* Main Grid: Interactive Center Hub + Continuous PDCA Cycle */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-6">
        {/* Left: Interactive ISO Emblem & 5 Connected Pillars */}
        <div className="lg:col-span-7 relative aspect-square max-w-[420px] mx-auto flex items-center justify-center p-4">
          {/* Background Blueprint Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[88%] h-[88%] rounded-full border border-dashed border-slate-200" />
            <div className="w-[60%] h-[60%] rounded-full border border-slate-100" />
          </div>

          {/* SVG Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
            {PILLARS.map((p) => {
              const isSelected = activePillar.id === p.id;
              return (
                <line
                  key={p.id}
                  x1="50"
                  y1="50"
                  x2={p.x}
                  y2={p.y}
                  stroke={isSelected ? "#FF6600" : "#E2E8F0"}
                  strokeWidth={isSelected ? "1.5" : "0.75"}
                  strokeDasharray={isSelected ? "none" : "2 2"}
                />
              );
            })}
          </svg>

          {/* Center Hub: ISO 9001:2015 */}
          <div className="relative z-10 w-28 h-28 rounded-full bg-white border-2 border-orange-500 shadow-xl shadow-orange-500/15 flex flex-col items-center justify-center text-center p-2">
            <Award className="w-6 h-6 text-amber-500" />
            <span className="text-xs font-black text-slate-900 mt-1">ISO 9001</span>
            <span className="text-[9px] font-mono font-bold text-orange-600">2015 CERTIFIED</span>
          </div>

          {/* 5 Outer Quality Pillars */}
          {PILLARS.map((p) => {
            const isSelected = activePillar.id === p.id;
            return (
              <button
                key={p.id}
                style={{
                  left: `${p.x}%`,
                  top: `${p.y}%`,
                  transform: "translate(-50%, -50%)"
                }}
                onClick={() => setActivePillar(p)}
                className={`absolute z-20 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isSelected
                    ? "bg-orange-500 text-white border-orange-500 shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-orange-300"
                }`}
              >
                {p.title}
              </button>
            );
          })}
        </div>

        {/* Right: Quality Control PDCA Cycle Diagram */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h4 className="text-base font-bold text-slate-900">
                {activePillar.title}
              </h4>
              <span className="text-[10px] font-mono text-orange-600 font-bold uppercase">
                ISO PILLAR
              </span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pt-2">
              {activePillar.desc}
            </p>
            <div className="mt-3 p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] font-mono text-slate-700">
              {activePillar.standard}
            </div>
          </div>

          {/* Continuous Improvement PDCA Cycle (Plan -> Implement -> Check -> Improve) */}
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5">
                <RotateCw className="w-3.5 h-3.5 text-orange-600 animate-spin [animation-duration:12s]" />
                Continuous PDCA Quality Cycle
              </span>
              <span className="text-[10px] font-mono text-slate-400">4-PHASE CLOSED LOOP</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-orange-600 block">1. PLAN</span>
                <span className="text-[11px] text-slate-600">Standardize engineering blueprints & technical safety protocols.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-blue-600 block">2. IMPLEMENT</span>
                <span className="text-[11px] text-slate-600">Execute on-site piping, manifolds, or home safety audits.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-emerald-600 block">3. CHECK</span>
                <span className="text-[11px] text-slate-600">Electronic sniffer tests, pressure gauges & customer signoff.</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200">
                <span className="font-bold text-amber-600 block">4. IMPROVE</span>
                <span className="text-[11px] text-slate-600">Field telemetry reviews, safety refresher courses & audits.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
