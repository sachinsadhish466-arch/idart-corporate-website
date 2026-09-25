"use client";

import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, ArrowRight, PhoneCall, Award, MapPin, CheckCircle2 } from "lucide-react";
import HeroEcosystem from "../ui/HeroEcosystem";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 bg-white border-b border-slate-100">
      <div className="absolute inset-0 bg-engineering-grid opacity-60 pointer-events-none" />

      <div className="absolute top-4 left-6 text-[10px] font-mono text-slate-400 hidden sm:block">
        [IDART-ENG-V26] • LAT 11.0168° N • LNG 76.9558° E
      </div>
      <div className="absolute top-4 right-6 text-[10px] font-mono text-slate-400 hidden sm:block">
        REF: ISO-9001:2015 • IS 6044 / OISD-162
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                South India's Certified Safety Enterprise
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                ISO 9001:2015 Accredited
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08] uppercase">
              WE BRING <span className="text-orange-600">SAFE FLAMES</span>
              <br />
              TO EVERY HOME
              <br />
              <span className="text-slate-700 font-extrabold text-3xl sm:text-4xl lg:text-5xl">
                ACROSS SOUTH INDIA
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              AGTRS IDART PRIVATE LIMITED is the premier enterprise specializing in LPG Mandatory Inspections, seamless copper gas pipelines, turnkey commercial manifolds, and industrial roof structures across 457+ verified branches.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs text-slate-700">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>IS 6044 Gas Piping</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>457+ Verified Branches</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero-Leakage Assurance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href="/mandatory-inspection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-600 text-white font-bold text-sm shadow-lg shadow-orange-500/20 hover:bg-orange-700 transition-all group"
              >
                <span>Book Safety Inspection</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/lpg-pipeline"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm border border-slate-200 transition-colors"
              >
                <span>LPG Pipeline Engineering</span>
              </Link>
            </div>

            <div className="pt-2 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                <span>Regional Helpline: <strong className="text-slate-900">+91 8248012319</strong></span>
              </div>
              <span>•</span>
              <span>HQ: Coimbatore, TN</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex items-center justify-center">
            <HeroEcosystem />
          </div>
        </div>
      </div>
    </section>
  );
}
