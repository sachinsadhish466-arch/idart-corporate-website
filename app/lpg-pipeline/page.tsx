'use client';

import React from 'react';
import PipelineVisualizer from '@/components/ui/PipelineVisualizer';
import PipelineCrossSection from '@/components/ui/PipelineCrossSection';
import ResidentialVsCommercial from '@/components/ui/ResidentialVsCommercial';
import SignaturePipelineLine from '@/components/ui/SignaturePipelineLine';
import ProjectGallery from '@/components/ui/ProjectGallery';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import CtaBanner from '@/components/sections/CtaBanner';

export default function LpgPipelinePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
            ENGINEERING & RETICULATION DIVISION
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            COMMERCIAL & RESIDENTIAL LPG PIPELINE SYSTEMS
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            High-integrity reticulated gas infrastructure designed in strict adherence to IS 6044 (Part 1 & 2) and Petroleum and Natural Gas Regulatory Board (PNGRB) safety mandates.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="RETICULATION ACTIVE SPEC" metric="ASTM B88 / IS 6044 COMPLIANT" />

      {/* Interactive Pipeline Visualizer */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineVisualizer />
        </div>
      </section>

      {/* Cross Section Graphic */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineCrossSection />
        </div>
      </section>

      {/* Residential vs Commercial Interaction */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResidentialVsCommercial />
        </div>
      </section>

      {/* Before / After Slider */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BeforeAfterSlider />
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      <CtaBanner
        title="Request an On-Site Engineering Survey"
        subtitle="Our pipeline engineers assess kitchen loads, manifold positioning, and prepare custom schematics."
        primaryBtnText="Book Engineering Visit"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
