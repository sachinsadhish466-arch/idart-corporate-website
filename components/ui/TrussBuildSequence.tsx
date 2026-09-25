"use client";

import React, { useState } from "react";
import { Layers, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface BuildStage {
  step: number;
  title: string;
  subtitle: string;
  description: string;
  elements: string[];
}

const STAGES: BuildStage[] = [
  {
    step: 1,
    title: "Stage 1: Foundation & Pedestals",
    subtitle: "Ground Engineering",
    description: "Reinforced concrete pile caps and pedestals cast with high-strength galvanized anchor bolt templates precisely surveyed using laser levels.",
    elements: ["Excavation & soil compaction", "M25 / M30 Grade concrete", "Cast-in anchor bolt cage"]
  },
  {
    step: 2,
    title: "Stage 2: Structural Frame & Columns",
    subtitle: "Vertical Erection",
    description: "ISMB / tubular steel columns hoisted via mobile cranes and locked onto base plates, verified for vertical plumb and diagonal alignment.",
    elements: ["Column base plate torqueing", "Grouting with non-shrink grout", "Plumb & diagonal cross-checks"]
  },
  {
    step: 3,
    title: "Stage 3: Roof Truss & Webbing",
    subtitle: "Rafter Assembly",
    description: "Pre-fabricated trusses lifted into position, connected to column heads, and interlocked with longitudinal tie beams and bracing members.",
    elements: ["Tandem crane truss hoisting", "High tensile friction bolts", "Wind cross-bracings installed"]
  },
  {
    step: 4,
    title: "Stage 4: Purlins & Roof Sheets",
    subtitle: "Weatherproof Cladding",
    description: "Cold-formed Z/C purlins spaced across rafters, followed by precision installation of Galvalume profile sheets and thermal underlays.",
    elements: ["Galvanized Z-purlins", "AZ150 Galvalume roof sheets", "EPDM-washer self-drilling screws"]
  },
  {
    step: 5,
    title: "Stage 5: Finished Engineered Facility",
    subtitle: "Commissioned Handover",
    description: "Installation of aerodynamic ridge ventilators, rainwater gutters, downspouts, and final structural quality certification audit.",
    elements: ["Turbo ridge ventilators", "Rainwater guttering systems", "Structural safety sign-off"]
  }
];

export default function TrussBuildSequence() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const stage = STAGES.find(s => s.step === currentStep) || STAGES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              CONSTRUCTION VISUALIZATION
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            5-Stage Roof Truss Build Sequence
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Step through the rapid on-site assembly sequence of an i-DART industrial structure.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <span>Active Phase:</span>
          <span className="text-orange-600 font-bold">Stage {currentStep} of 5</span>
        </div>
      </div>

      <div className="py-6 flex items-center justify-center">
        <svg
          viewBox="0 0 600 280"
          className="w-full max-w-[600px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect x="60" y="240" width="480" height="25" fill="#CBD5E1" rx="2" />
            <rect x="100" y="225" width="40" height="15" fill="#94A3B8" />
            <rect x="460" y="225" width="40" height="15" fill="#94A3B8" />
            <text x="70" y="256" fill="#475569" fontSize="10" fontWeight="700">Stage 1: Concrete Pedestals</text>
          </g>

          {currentStep >= 2 && (
            <g>
              <rect x="110" y="110" width="20" height="115" fill="#334155" rx="1" />
              <rect x="470" y="110" width="20" height="115" fill="#334155" rx="1" />
              <text x="135" y="170" fill="#334155" fontSize="9" fontWeight="700">Stage 2: Columns</text>
            </g>
          )}

          {currentStep >= 3 && (
            <g>
              <rect x="110" y="105" width="380" height="8" fill="#475569" />
              <line x1="110" y1="108" x2="300" y2="25" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />
              <line x1="300" y1="25" x2="490" y2="108" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" />
              <g stroke="#EA580C" strokeWidth="2.5">
                <line x1="300" y1="25" x2="300" y2="105" />
                <line x1="180" y1="80" x2="180" y2="105" />
                <line x1="240" y1="52" x2="240" y2="105" />
                <line x1="420" y1="80" x2="420" y2="105" />
                <line x1="360" y1="52" x2="360" y2="105" />
                <line x1="180" y1="105" x2="240" y2="52" />
                <line x1="420" y1="105" x2="360" y2="52" />
              </g>
              <text x="260" y="70" fill="#EA580C" fontSize="9" fontWeight="800">Stage 3: Truss Web</text>
            </g>
          )}

          {currentStep >= 4 && (
            <g>
              <line x1="100" y1="102" x2="300" y2="15" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
              <line x1="300" y1="15" x2="500" y2="102" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
              <text x="320" y="35" fill="#0284C7" fontSize="9" fontWeight="700">Stage 4: Galvalume Sheeting</text>
            </g>
          )}

          {currentStep >= 5 && (
            <g>
              <polygon points="300,8 285,18 315,18" fill="#0369A1" />
              <circle cx="250" cy="18" r="6" fill="#F59E0B" />
              <circle cx="350" cy="18" r="6" fill="#F59E0B" />
              <rect x="95" y="100" width="8" height="12" fill="#0369A1" />
              <rect x="497" y="100" width="8" height="12" fill="#0369A1" />
              <text x="240" y="270" fill="#15803D" fontSize="11" fontWeight="800">✓ Stage 5: Complete & Certified</text>
            </g>
          )}
        </svg>
      </div>

      <div className="grid grid-cols-5 gap-2 pt-4 border-t border-slate-100">
        {STAGES.map((s) => (
          <button
            key={s.step}
            onClick={() => setCurrentStep(s.step)}
            className={`p-2.5 rounded-xl border text-left transition-all ${
              s.step === currentStep
                ? "bg-orange-500 text-white border-orange-500 shadow-md"
                : s.step < currentStep
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
            }`}
          >
            <div className="text-[10px] font-mono font-bold uppercase opacity-80">
              0{s.step}
            </div>
            <div className="text-xs font-bold truncate mt-0.5">
              {s.subtitle}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <h4 className="text-base font-bold text-slate-900">
          {stage.title}
        </h4>
        <p className="text-xs text-slate-600 leading-relaxed mt-1">
          {stage.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {stage.elements.map((el, i) => (
            <span key={i} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-500" />
              <span>{el}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
