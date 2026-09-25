import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import ScaleSection from "@/components/sections/ScaleSection";
import ServicesOverview from "@/components/sections/ServicesOverview";
import IsoCertSection from "@/components/sections/IsoCertSection";
import CeoMessageSection from "@/components/sections/CeoMessageSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CtaBanner from "@/components/sections/CtaBanner";
import SouthIndiaMap from "@/components/ui/SouthIndiaMap";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Cinematic Hero Section */}
      <HeroSection />

      {/* 2. Company Scale & Statistics Section */}
      <ScaleSection />

      {/* 3. What We Offer (Core Business Areas) */}
      <ServicesOverview />

      {/* 4. South India Geographic Network Map */}
      <section className="py-24 bg-[#071324] relative overflow-hidden border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Geographic Infrastructure"
            title="South India Service Footprint"
            subtitle="Explore our active branch networks in Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Puducherry, and strategic expansion corridors."
            align="center"
          />
          <SouthIndiaMap />
        </div>
      </section>

      {/* 5. ISO 9001:2015 Quality & Compliance */}
      <IsoCertSection />

      {/* 6. CEO Executive Message */}
      <CeoMessageSection />

      {/* 7. Growth Timeline (2009 - 2026) */}
      <TimelineSection />

      {/* 8. Conversion Call to Action */}
      <CtaBanner />
    </div>
  );
}
