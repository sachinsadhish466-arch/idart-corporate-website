"use client";

import React, { useState } from "react";
import { UserCheck, ShieldCheck, Search, FileText, Smartphone, CalendarCheck, Home, ArrowRight, CheckCircle2 } from "lucide-react";

interface JourneyStep {
  id: number;
  title: string;
  role: string;
  icon: any;
  desc: string;
  proof: string;
}

const JOURNEY: JourneyStep[] = [
  {
    id: 1,
    title: "Customer Request",
    role: "Digital Trigger",
    icon: CalendarCheck,
    desc: "Customer books online, calls helpline, or request is routed via LPG distributor portal.",
    proof: "Instant SMS booking confirmation with unique job ID"
  },
  {
    id: 2,
    title: "Technician Assigned",
    role: "Resource Allocation",
    icon: UserCheck,
    desc: "Certified, background-verified IDART technician assigned with specialized diagnostic toolkits.",
    proof: "Engineer photo, name, and badge verification sent to customer"
  },
  {
    id: 3,
    title: "Technician Visits",
    role: "On-Site Arrival",
    icon: Home,
    desc: "Punctual arrival adhering to standardized safety uniforms, PPE, and anti-static boots.",
    proof: "GPS-stamped arrival check-in on IDART enterprise app"
  },
  {
    id: 4,
    title: "Safety Inspection",
    role: "Physical Audit",
    icon: ShieldCheck,
    desc: "Examines cylinder enclosure, regulator collar, rubber hose validity, and stove burner clearances.",
    proof: "8-point physical safety audit checklist completed"
  },
  {
    id: 5,
    title: "Leak Detection",
    role: "Diagnostic Testing",
    icon: Search,
    desc: "Rigorous joint-by-joint electronic hydrocarbon sniffer test and soap bubble hold analysis.",
    proof: "Certified zero-bubble hold held for 60 seconds"
  },
  {
    id: 6,
    title: "Customer Awareness",
    role: "Education",
    icon: UserCheck,
    desc: "Briefs consumer on emergency shutoff, cylinder handling, and carbon monoxide precautions.",
    proof: "Laminated bilingual emergency safety guide handed over"
  },
  {
    id: 7,
    title: "Documentation",
    role: "Compliance Seal",
    icon: FileText,
    desc: "Applies tamper-evident holographic safety sticker showing date, test ID, and expiry.",
    proof: "Physical serialized barcode seal affixed to installation"
  },
  {
    id: 8,
    title: "Digital Record",
    role: "Cloud Archive",
    icon: Smartphone,
    desc: "Audit report, photos, and compliance rating synced to central server and distributor ERP.",
    proof: "Tamper-proof digital certificate accessible 24/7"
  }
];

export default function SafetyJourney() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = JOURNEY.find(j => j.id === activeStep) || JOURNEY[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              SEAMLESS END-TO-END WORKFLOW
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            The IDART Safety Inspection Journey
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Step-by-step consumer journey from initial booking to certified digital record.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <span>Stage:</span>
          <span className="text-orange-600 font-bold">{activeStep} of 8</span>
        </div>
      </div>

      <div className="py-8 overflow-x-auto">
        <div className="min-w-[850px] relative">
          <div className="absolute top-[28px] left-[5%] right-[5%] h-1.5 bg-slate-100 rounded-full z-0 overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${((activeStep - 1) / (JOURNEY.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-8 gap-1">
            {JOURNEY.map((step) => {
              const Icon = step.icon;
              const isCurrent = step.id === activeStep;
              const isPassed = step.id <= activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-110 ring-4 ring-orange-100"
                        : isPassed
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="mt-2 text-[9px] font-mono font-bold text-slate-400">
                    0{step.id}
                  </span>
                  <span
                    className={`text-[11px] font-bold text-center leading-tight mt-0.5 line-clamp-2 transition-colors ${
                      isCurrent ? "text-orange-600" : "text-slate-700"
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-orange-100 text-orange-700">
                STAGE 0{current.id}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {current.role}
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              {current.title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {current.desc}
            </p>
          </div>

          <div className="md:col-span-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wide mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verifiable Output</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {current.proof}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveStep(prev => Math.min(8, prev + 1))}
            disabled={activeStep === 8}
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
