"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
import ScaleSection from "@/components/sections/ScaleSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import PipelineVisualizer from "@/components/ui/PipelineVisualizer";
import PipelineCrossSection from "@/components/ui/PipelineCrossSection";
import InspectionChecklist from "@/components/ui/InspectionChecklist";
import ResidentialVsCommercial from "@/components/ui/ResidentialVsCommercial";
import ImageHotspots from "@/components/ui/ImageHotspots";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import SouthIndiaMap from "@/components/ui/SouthIndiaMap";
import SafetyJourney from "@/components/ui/SafetyJourney";
import TrussVisualizer from "@/components/ui/TrussVisualizer";
import TrussBuildSequence from "@/components/ui/TrussBuildSequence";
import IsoCertSection from "@/components/sections/IsoCertSection";
import CeoMessageSection from "@/components/sections/CeoMessageSection";
import TimelineSection from "@/components/sections/TimelineSection";
import ProjectGallery from "@/components/ui/ProjectGallery";
import FaqSection from "@/components/ui/FaqSection";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <HeroSection />

      <SignaturePipelineLine label="IDART TRANSMISSION GRID" metric="SOUTH INDIA OPERATIONAL CORRIDOR" />

      <ScaleSection />

      <ServicesOverview />

      <SignaturePipelineLine label="ENGINEERING FLOW SIMULATION" metric="IS 6044 / BS EN 1057" />

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <PipelineVisualizer />
          <PipelineCrossSection />
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResidentialVsCommercial />
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InspectionChecklist />
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ImageHotspots />
          <BeforeAfterSlider />
        </div>
      </section>

      <SignaturePipelineLine label="GEOGRAPHIC DISTRIBUTION" metric="457+ VERIFIED BRANCHES" />

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SouthIndiaMap />
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SafetyJourney />
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <TrussVisualizer />
          <TrussBuildSequence />
        </div>
      </section>

      <IsoCertSection />

      <CeoMessageSection />

      <TimelineSection />

      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGallery />
        </div>
      </section>

      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FaqSection />
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
