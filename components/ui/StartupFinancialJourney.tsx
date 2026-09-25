"use client";

import React, { useState } from "react";
import { Lightbulb, IndianRupee, ShieldCheck, FileText, Send, CheckCircle2, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

interface FinanceStage {
  id: number;
  title: string;
  subtitle: string;
  icon: any;
  desc: string;
  keyDoc: string;
}

const STAGES: FinanceStage[] = [
  {
    id: 1,
    title: "BUSINESS IDEA",
    subtitle: "Concept Formulation",
    icon: Lightbulb,
    desc: "Entrepreneur identifies market opportunity, target consumer base, and initial service proposition.",
    keyDoc: "Executive summary & market demand assessment"
  },
  {
    id: 2,
    title: "CAPITAL REQUIREMENT",
    subtitle: "Financial Modeling",
    icon: IndianRupee,
    desc: "Detailed estimation of capital expenditures (Capex for machinery, premises) and working capital requirements.",
    keyDoc: "Projected 3-year cash flow statement & Capex breakdown"
  },
  {
    id: 3,
    title: "ELIGIBILITY CHECK",
    subtitle: "Scheme Alignment",
    icon: ShieldCheck,
    desc: "Mapping project to central/state schemes (PMEGP, Mudra, Stand-Up India, MSME subsidies) and bank norms.",
    keyDoc: "Credit score appraisal & applicant qualification check"
  },
  {
    id: 4,
    title: "DOCUMENTATION",
    subtitle: "Dossier Preparation",
    icon: FileText,
    desc: "Preparation of Comprehensive Detailed Project Report (DPR), financial ratios (DSCR, BEP, IRR), and KYC dossiers.",
    keyDoc: "Chartered Accountant certified DPR & CMA data"
  },
  {
    id: 5,
    title: "APPLICATION FILING",
    subtitle: "Portal Submission",
    icon: Send,
    desc: "Formal online application submission through nodal agency portals and partner scheduled commercial banks.",
    keyDoc: "Digital acknowledgment receipt & application tracking ID"
  },
  {
    id: 6,
    title: "BANK APPRAISAL & APPROVAL",
    subtitle: "Credit Sanction",
    icon: CheckCircle2,
    desc: "Field verification, technical feasibility appraisal, and issuance of formal in-principle bank sanction letter.",
    keyDoc: "Credit Committee formal sanction letter & terms of credit"
  },
  {
    id: 7,
    title: "FUND DISBURSEMENT",
    subtitle: "Capital Release",
    icon: IndianRupee,
    desc: "Execution of loan agreements, charge creation, and phase-wise direct vendor disbursement of machinery funds.",
    keyDoc: "Direct RTGS disbursement to equipment manufacturers"
  },
  {
    id: 8,
    title: "BUSINESS GROWTH",
    subtitle: "Operational Scale",
    icon: TrendingUp,
    desc: "Commercial operations commence with continuous working capital monitoring and enterprise expansion advisory.",
    keyDoc: "Operational revenue generation & balance sheet growth"
  }
];

export default function StartupFinancialJourney() {
  const [activeStep, setActiveStep] = useState<number>(1);
  const current = STAGES.find(s => s.id === activeStep) || STAGES[0];

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              CAPITAL CONSULTING FLOW
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Startup Financial Advisory Journey
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Structured 8-stage financial lifecycle guiding founders from concept to institutional bank funding.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          <span>Stage:</span>
          <span className="text-orange-600 font-bold">Phase {activeStep} of 8</span>
        </div>
      </div>

      {/* Horizontal Financial Steps Flow */}
      <div className="py-8 overflow-x-auto">
        <div className="min-w-[850px] relative">
          <div className="absolute top-[28px] left-[5%] right-[5%] h-1.5 bg-slate-100 rounded-full z-0 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-blue-600 transition-all duration-300"
              style={{ width: `${((activeStep - 1) / (STAGES.length - 1)) * 100}%` }}
            />
          </div>

          <div className="relative z-10 grid grid-cols-8 gap-1">
            {STAGES.map((stage) => {
              const Icon = stage.icon;
              const isCurrent = stage.id === activeStep;
              const isPassed = stage.id <= activeStep;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStep(stage.id)}
                  className="flex flex-col items-center group cursor-pointer focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isCurrent
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-110 ring-4 ring-blue-100"
                        : isPassed
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>
                  <span className="mt-2 text-[9px] font-mono font-bold text-slate-400">
                    0{stage.id}
                  </span>
                  <span
                    className={`text-[11px] font-bold text-center leading-tight mt-0.5 line-clamp-2 transition-colors ${
                      isCurrent ? "text-blue-600" : "text-slate-700"
                    }`}
                  >
                    {stage.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Active Stage Details Card */}
      <div className="mt-6 p-6 rounded-xl bg-slate-50 border border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-700">
                PHASE 0{current.id}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {current.subtitle}
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
            <div className="flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Key Documentation Deliverable</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {current.keyDoc}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
            disabled={activeStep === 1}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Previous Phase
          </button>
          <button
            onClick={() => setActiveStep(prev => Math.min(8, prev + 1))}
            disabled={activeStep === 8}
            className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>Next Phase</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
