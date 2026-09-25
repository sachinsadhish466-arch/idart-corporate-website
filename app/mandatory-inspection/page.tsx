import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import InspectionChecklist from "@/components/ui/InspectionChecklist";
import CtaBanner from "@/components/sections/CtaBanner";
import { INSPECTION_STEPS } from "@/data/services";
import { ShieldCheck, Flame, CheckCircle2, FileText, Smartphone, AlertCircle, Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "LPG Mandatory Inspection | AGTRS IDART PRIVATE LIMITED",
  description:
    "Comprehensive domestic and commercial LPG mandatory safety inspections across South India. Protecting consumers, ensuring compliance, and empowering 3687+ distributors.",
};

export default function MandatoryInspectionPage() {
  const inspectionPoints = [
    {
      title: "Installation Inspection",
      desc: "Checking cylinder upright positioning, floor clearance, and natural room ventilation to prevent vapor trapping.",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    },
    {
      title: "LPG Hose Inspection",
      desc: "Validating BIS-approved Suraksha rubber hose integrity, expiry dates, clamp tightness, and absence of cracks or burns.",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Electronic Leak Detection",
      desc: "Using calibrated digital hydrocarbon sensors to detect combustible gas concentrations down to parts per million (PPM).",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Hot Plate & Burner Check",
      desc: "Inspecting burner flame color, nozzle clearance, carbon soot build-up, and valve knob rotation smoothness.",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Safety Awareness & Demonstration",
      desc: "On-the-spot demonstration to homemakers on regulator locking, smell identification, and emergency ventilation protocols.",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    },
    {
      title: "Digital Compliance Records",
      desc: "Instant generation of an authentic digital inspection report linked to consumer number and distributor records.",
      icon: <CheckCircle2 className="w-5 h-5 text-orange-400" />
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a182e] to-[#060D17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                <ShieldCheck className="w-4 h-4" />
                <span>Statutory Safety Standard</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
                LPG MANDATORY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                  INSPECTION
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Safety inspections designed to protect consumers, strengthen compliance and support distributors. Conducted by 482+ certified field technicians across South India.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  Calibrated Electronic Gas Detectors
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Smartphone className="w-4 h-4 text-blue-400" />
                  Instant Digital Certificate
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EnterpriseImage
                type="technician"
                alt="IDART Safety Inspector Conducting LPG Mandatory Inspection"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Inspection: 6 Detailed Focus Areas */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Inspection Protocol"
            title="Rigorous 360° Safety Assessment"
            subtitle="Every domestic installation undergoes a methodical physical, mechanical, and electronic inspection."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inspectionPoints.map((point, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 space-y-3 group shadow-xl"
              >
                <div className="p-3 rounded-xl bg-orange-500/10 w-fit group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Step Inspection Process Flow */}
      <section className="py-24 bg-[#071324] border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Execution Workflow"
            title="The 8-Stage Inspection Journey"
            subtitle="Standardized, transparent and prompt from request logging to cloud documentation."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSPECTION_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 rounded-xl bg-orange-500/15 text-orange-400 font-black text-sm flex items-center justify-center border border-orange-500/30 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                      0{step.step}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Stage {step.step}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Safety Checklist Component */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <InspectionChecklist />
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Schedule Your Mandatory LPG Inspection"
        subtitle="Protect your family, tenants, or commercial facility with a certified IDART safety inspection visit."
        primaryBtnText="Book Inspection Visit"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
