"use client";

import React, { useState } from "react";
import { Cylinder, Gauge, GitFork, ShieldCheck, Flame, Sliders, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

interface PipelineStep {
  id: number;
  name: string;
  subtitle: string;
  icon: any;
  explanation: string;
  safetyInfo: string;
  techSpec: string;
}

const STEPS: PipelineStep[] = [
  {
    id: 1,
    name: "LPG CYLINDER",
    subtitle: "Primary Storage",
    icon: Cylinder,
    explanation: "Heavy-duty certified LPG cylinders (14.2 kg domestic or 47.5 kg commercial LOT) situated in well-ventilated exterior enclosures.",
    safetyInfo: "Kept upright, minimum 1.5m away from combustible sources and electrical switchboards. Inspected for tare weight & O-ring integrity.",
    techSpec: "Vapor pressure up to 7-10 bar @ ambient 30°C"
  },
  {
    id: 2,
    name: "REGULATOR",
    subtitle: "Pressure Modulation",
    icon: Gauge,
    explanation: "Controls high cylinder storage pressure down to a steady, safe operating pressure before line entry.",
    safetyInfo: "Certified dual-stage or high-pressure regulator fitted with an internal thermal shut-off and excessive-flow limiter.",
    techSpec: "Inlet: 0.5-16 bar -> Outlet: 28-30 mbar (Domestic) / 0.5-2.0 bar (Commercial)"
  },
  {
    id: 3,
    name: "COPPER PIPELINE",
    subtitle: "Conduit Grid",
    icon: Flame,
    explanation: "Seamless heavy-gauge copper pipe (Type L or K / BS EN 1057) silver-brazed for zero-permeation gas transmission.",
    safetyInfo: "Corrosion-resistant copper minimizes joints inside walls. Pressure tested hydrostatically & pneumatically to 1.5x operating limit.",
    techSpec: "Phosphor-deoxidized copper Cu-DHP (99.9% pure) • Tensile: >= 290 N/mm²"
  },
  {
    id: 4,
    name: "DISTRIBUTION MANIFOLD",
    subtitle: "Reticulated Balancing",
    icon: GitFork,
    explanation: "Distributes gas flow evenly to multiple consumption points (hobs, ovens, burners, water heaters) with balanced head loss.",
    safetyInfo: "Each branch features an independent isolation valve allowing selective shutdown without halting whole-building gas supply.",
    techSpec: "Equipped with master line pressure gauge & secondary test nipple"
  },
  {
    id: 5,
    name: "CONTROL VALVE",
    subtitle: "Immediate Isolation",
    icon: Sliders,
    explanation: "Full-bore quarter-turn brass ball valve installed directly adjacent to each consumption appliance for instant shutoff.",
    safetyInfo: "Clearly color-coded yellow/orange lever handle. Fire-safe design with blow-out proof brass stem.",
    techSpec: "Rated PN 25 / Class 150 • 100% factory helium leak-tested"
  },
  {
    id: 6,
    name: "KITCHEN APPLIANCE",
    subtitle: "Safe Combustion",
    icon: Flame,
    explanation: "Commercial burner range, residential cooktop, or industrial furnace calibrated for optimal stoichiometric flame efficiency.",
    safetyInfo: "Connected via reinforced wire-braided flexible hose or rigid metallic flex. Inspected for flame stability and carbon monoxide zero-drift.",
    techSpec: "Gas consumption calibrated to burner rating (kW / BTU)"
  }
];

export default function PipelineVisualizer() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = STEPS.find(s => s.id === activeStep) || STEPS[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              INTERACTIVE ENGINEERING SCHEMATIC
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            LPG Reticulated Flow & Inspection Protocol
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Step-by-step trace from storage bank to terminal kitchen burner conforming to IS 6044.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <span>Active Phase:</span>
          <span className="text-orange-600 font-bold">Step {activeStep} of 6</span>
        </div>
      </div>

      <div className="py-8 overflow-x-auto">
        <div className="min-w-[700px] relative">
          <div className="absolute top-[38px] left-[5%] right-[5%] h-2 bg-slate-100 rounded-full z-0 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transition-all duration-500 rounded-full"
              style={{ width: `${((activeStep - 1) / (STEPS.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-6 gap-2">
            {STEPS.map((step) => {
              const Icon = step.icon;
              const isPassed = step.id <= activeStep;
              const isCurrent = step.id === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-110 ring-4 ring-orange-100"
                        : isPassed
                        ? "bg-slate-900 text-white shadow-md"
                        : "bg-white text-slate-400 border-2 border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-7 h-7 transition-transform group-hover:scale-110" />
                  </div>

                  <span className="mt-3 text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                    Step 0{step.id}
                  </span>
                  <span
                    className={`text-xs font-bold text-center leading-tight mt-0.5 transition-colors ${
                      isCurrent ? "text-orange-600" : "text-slate-800"
                    }`}
                  >
                    {step.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200/80 transition-all duration-300">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-100 text-orange-700">
                COMPONENT {current.id} / 6
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {current.subtitle}
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              {current.name}
            </h4>

            <p className="text-sm text-slate-600 leading-relaxed">
              {current.explanation}
            </p>

            <div className="pt-2">
              <span className="text-[11px] font-mono uppercase font-bold text-slate-400 tracking-wider block mb-1">
                Engineering Specification:
              </span>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-700">
                {current.techSpec}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 p-4 rounded-xl bg-white border border-amber-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>Safety & Inspection Standard</span>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {current.safetyInfo}
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Compliance Check:</span>
              <span className="inline-flex items-center gap-1 font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified IS 6044
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
          <button
            onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous Stage
          </button>

          <div className="flex items-center gap-1.5">
            {STEPS.map(s => (
              <span
                key={s.id}
                className={`w-2 h-2 rounded-full transition-all ${
                  s.id === activeStep ? "w-6 bg-orange-500" : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setActiveStep(prev => Math.min(6, prev + 1))}
            disabled={activeStep === 6}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
