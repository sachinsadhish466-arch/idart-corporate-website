"use client";

import React, { useState } from "react";
import { Flame, Gauge, ShieldCheck, CheckCircle2, Info } from "lucide-react";

interface PipelineStage {
  id: string;
  stepNumber: number;
  name: string;
  category: "Source" | "Conduit" | "Control" | "Routing" | "Appliance";
  techSpec: string;
  safetyFeature: string;
  flowRate: string;
}

const STAGES: PipelineStage[] = [
  {
    id: "source",
    stepNumber: 1,
    name: "LPG Source & Manifold",
    category: "Source",
    techSpec: "High-pressure cylinder bank (LOT/VOT) with heavy-duty brass header manifold",
    safetyFeature: "Dual NRV (Non-Return Valves) & automatic changeover manifold",
    flowRate: "Up to 5.0 bar input regulation"
  },
  {
    id: "pipeline",
    stepNumber: 2,
    name: "Copper Pipeline Conduit",
    category: "Conduit",
    techSpec: "ASTM B88 / BS EN 1057 certified seamless copper tubing with silver-brazed joints",
    safetyFeature: "Non-corrosive, seismic flexible, helium leak & hydraulic pressure tested",
    flowRate: "+30% flow efficiency vs iron pipes"
  },
  {
    id: "regulator",
    stepNumber: 3,
    name: "Pressure Regulator & Gauge",
    category: "Control",
    techSpec: "Dual-stage pressure control regulator with glycerin-damped pressure gauge",
    safetyFeature: "Over-pressure shut-off (OPSO) & under-pressure shut-off (UPSO)",
    flowRate: "Stabilized 30 mbar domestic / 1.0 bar comm."
  },
  {
    id: "distribution",
    stepNumber: 4,
    name: "Multi-Point Distribution",
    category: "Routing",
    techSpec: "Branch ball valves with forged brass quarter-turn lever handles",
    safetyFeature: "Individual line isolation valves allowing safe zone maintenance",
    flowRate: "Even pressure across all kitchen taps"
  },
  {
    id: "kitchen",
    stepNumber: 5,
    name: "Burner & Appliance",
    category: "Appliance",
    techSpec: "Suraksha wire-braided flexible connection to certified commercial/domestic burners",
    safetyFeature: "Flame failure auto cut-off device & certified quick-disconnect couplings",
    flowRate: "100% blue flame optimized combustion"
  }
];

export default function PipelineVisualizer() {
  const [activeStage, setActiveStage] = useState<PipelineStage>(STAGES[1]);
  const [activeMode, setActiveMode] = useState<"residential" | "commercial">("residential");

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Mode Switcher Tabs */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
            Interactive Engineering Flow
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            LPG Pipeline Architecture
          </h3>
        </div>

        <div className="flex items-center p-1 bg-slate-950 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveMode("residential")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === "residential"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Residential / Apartments
          </button>
          <button
            onClick={() => setActiveMode("commercial")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === "commercial"
                ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Commercial / Hotels & Labs
          </button>
        </div>
      </div>

      {/* SVG Pipeline Flow Architecture */}
      <div className="relative py-4">
        {/* Five Visual Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
          {STAGES.map((stage) => {
            const isSelected = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage)}
                className={`p-4 rounded-2xl text-left transition-all duration-300 relative group flex flex-col justify-between ${
                  isSelected
                    ? "bg-slate-800 border-2 border-orange-500 shadow-xl shadow-orange-500/20 translate-y-[-4px]"
                    : "bg-slate-950/80 border border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isSelected ? "bg-orange-500 text-white" : "bg-slate-800 text-slate-400"
                    }`}>
                      0{stage.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white mt-3 leading-snug">
                    {stage.name}
                  </h4>
                  <span className="text-[10px] font-semibold text-orange-400/90 uppercase tracking-wider block mt-1">
                    {stage.category}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center text-[11px] text-slate-400 group-hover:text-orange-400">
                  <span>Inspect Specs</span>
                  <Info className="w-3.5 h-3.5 ml-1" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Animated Connecting Copper Flow Pipe Line in SVG */}
        <div className="hidden sm:block mt-6 px-4">
          <svg viewBox="0 0 1000 30" className="w-full h-8">
            <defs>
              <linearGradient id="copperFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#b45309" />
                <stop offset="50%" stopColor="#f97316" />
                <stop offset="100%" stopColor="#fb923c" />
              </linearGradient>
            </defs>
            {/* Outer Conduits */}
            <line x1="50" y1="15" x2="950" y2="15" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
            {/* Inner Flow */}
            <line
              x1="50"
              y1="15"
              x2="950"
              y2="15"
              stroke="url(#copperFlow)"
              strokeWidth="4"
              strokeDasharray="16 10"
              className="pipeline-dash"
            />
          </svg>
        </div>
      </div>

      {/* Active Stage Technical Inspector Box */}
      <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Flame className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <span className="text-xs text-orange-400 uppercase font-bold tracking-wider">
                Step 0{activeStage.stepNumber} Diagnostic
              </span>
              <h4 className="text-xl font-bold text-white">{activeStage.name}</h4>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Gauge className="w-4 h-4 text-orange-400" />
            <span>Pressure/Flow: <strong className="text-white">{activeStage.flowRate}</strong></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Technical & Material Specification
            </div>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {activeStage.techSpec}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-orange-400" />
              Safety & Regulatory Redundancy
            </div>
            <p className="text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {activeStage.safetyFeature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
