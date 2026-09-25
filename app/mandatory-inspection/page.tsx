'use client';

import React from 'react';
import InspectionChecklist from '@/components/ui/InspectionChecklist';
import SafetyJourney from '@/components/ui/SafetyJourney';
import ImageHotspots from '@/components/ui/ImageHotspots';
import SignaturePipelineLine from '@/components/ui/SignaturePipelineLine';
import FaqSection from '@/components/ui/FaqSection';
import CtaBanner from '@/components/sections/CtaBanner';

export default function MandatoryInspectionPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
            STATUTORY CONSUMER PROTECTION
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            MANDATORY LPG SAFETY INSPECTIONS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Authorized multi-point safety testing protocol verifying cylinders, regulators, Suraksha hoses, and appliance burn efficiency across household consumers.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="INSPECTION REGULATORY PROTOCOL" metric="OMC / PESO DIRECTIVE COMPLIANT" />

      {/* Interactive Inspection Checklist */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InspectionChecklist />
        </div>
      </section>

      {/* Kitchen Schematic Hotspots */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ImageHotspots />
        </div>
      </section>

      {/* Scroll-Based Safety Journey */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyJourney />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </section>

      <CtaBanner
        title="Schedule Your LPG Mandatory Safety Check"
        subtitle="Book an authorized, badged field technician to inspect your domestic gas installation."
        primaryBtnText="Book Inspection"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
