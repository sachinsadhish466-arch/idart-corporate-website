"use client";

import React from "react";
import { Quote, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function CeoMessageSection() {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-engineering-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-orange-500/20 via-slate-200 to-transparent blur-sm pointer-events-none" />

              <div className="relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl p-6 text-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-full bg-gradient-to-b from-orange-100 via-slate-100 to-slate-200 p-2 shadow-inner overflow-hidden mb-4">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-white text-5xl font-black shadow-md group-hover:scale-105 transition-transform duration-500">
                    SG
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  S. Gowtham Kumar
                </h3>
                <p className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase mt-1">
                  CHIEF EXECUTIVE OFFICER
                </p>
                <p className="text-xs text-slate-500 font-semibold mt-0.5">
                  AGTRS IDART PRIVATE LIMITED
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center">
                  <span className="font-serif italic text-slate-400 text-lg select-none">
                    S. Gowtham Kumar
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 uppercase tracking-widest">
              <Quote className="w-3.5 h-3.5" />
              EXECUTIVE LEADERSHIP PERSPECTIVE
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
              "ENERGY MUST BE DELIVERED WITH UNCOMPROMISING PRECISION, TECHNICAL DISCIPLINE, AND ABSOLUTE INTEGRITY."
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When we founded this enterprise in 2009 in Coimbatore, our conviction was simple: no Indian family or commercial kitchen should ever face gas hazards due to substandard fittings, missing safety inspections, or unscientific installation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Today, with over 457 branches and 482+ verified engineering staff across South India, IDART operates as the trusted bridge between petroleum distributors and consumers, delivering certified peace of mind every single day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>100% IS 6044 Statutory Compliance</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 font-bold">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Zero-Compromise Material Sourcing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
