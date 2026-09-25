'use client';

import React from 'react';
import TrussVisualizer from '@/components/ui/TrussVisualizer';
import TrussBuildSequence from '@/components/ui/TrussBuildSequence';
import SignaturePipelineLine from '@/components/ui/SignaturePipelineLine';
import ProjectGallery from '@/components/ui/ProjectGallery';
import CtaBanner from '@/components/sections/CtaBanner';

export default function RoofTrussPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            INDUSTRIAL & COMMERCIAL INFRASTRUCTURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            ENGINEERED ROOF TRUSS & SHED STRUCTURES
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            High-tensile tubular and hollow section structural steel truss fabrication engineered to IS 800 standards for warehouses, factories, and commercial structures.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="STRUCTURAL STEEL SPEC" metric="IS 800 / IS 875 WIND CODE COMPLIANT" />

      {/* 3D-Style Truss Visualizer */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrussVisualizer />
        </div>
      </section>

      {/* Construction Sequence */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrussBuildSequence />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      <CtaBanner
        title="Plan Your Industrial Shed or Warehouse Project"
        subtitle="Speak with our structural steel detailing engineers for accurate load calculations and estimates."
        primaryBtnText="Request Structural Quote"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
