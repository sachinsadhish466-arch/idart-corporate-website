'use client';

import React from 'react';
import StartupFinancialJourney from '@/components/ui/StartupFinancialJourney';
import BusinessGrowthChart from '@/components/ui/BusinessGrowthChart';
import SignaturePipelineLine from '@/components/ui/SignaturePipelineLine';
import CtaBanner from '@/components/sections/CtaBanner';

export default function StartupSolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            TURNKEY COMMERCIAL CONSULTING
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            STARTUP & COMMERCIAL KITCHEN SOLUTIONS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Accelerate your food enterprise with express commercial gas manifold installations, Detailed Project Reports (DPR), and equipment loan facilitation.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="INSTITUTIONAL SYNDICATION" metric="MSME / PMEGP / COMMERCIAL BANK NORMS" />

      {/* Financial Journey */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StartupFinancialJourney />
        </div>
      </section>

      {/* Conceptual Growth Chart */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BusinessGrowthChart />
        </div>
      </section>

      <CtaBanner
        title="Accelerate Your Food Enterprise or Hospitality Venture"
        subtitle="Connect with our commercial gas engineers and startup project advisors."
        primaryBtnText="Consult Startup Team"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
