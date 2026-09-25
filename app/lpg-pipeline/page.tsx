import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import PipelineVisualizer from "@/components/ui/PipelineVisualizer";
import CtaBanner from "@/components/sections/CtaBanner";
import { PIPELINE_BENEFITS } from "@/data/services";
import { Flame, CheckCircle2, ShieldCheck, Wrench, Building2, Utensils, Hotel, School, Activity } from "lucide-react";

export const metadata: Metadata = {
  title: "LPG Gas Pipeline Installation & Maintenance | AGTRS IDART PRIVATE LIMITED",
  description:
    "24/7 Professional LPG copper gas pipeline design, installation, maintenance & pressure testing for apartments, hotels, restaurants, hospitals, and industries across South India.",
};

export default function LpgPipelinePage() {
  const serviceSectors = [
    { title: "Residential Bungalows", icon: <Building2 className="w-5 h-5 text-orange-400" />, desc: "Clean concealed copper pipeline connecting external cylinder kiosk to multiple kitchen taps." },
    { title: "Gated Apartments & Towers", icon: <Building2 className="w-5 h-5 text-orange-400" />, desc: "Centralized cylinder bank/reticulated LPG gas network with individual prepaid metering." },
    { title: "Hotels & Multi-Cuisine Dining", icon: <Hotel className="w-5 h-5 text-orange-400" />, desc: "High-capacity manifold lines supplying tandoors, Chinese wok ranges, and high-BTU burners." },
    { title: "Restaurants & Cloud Kitchens", icon: <Utensils className="w-5 h-5 text-orange-400" />, desc: "Uninterrupted fuel supply with automated dual cylinder bank changeover manifolds." },
    { title: "Hospitals & Healthcare Facilities", icon: <Activity className="w-5 h-5 text-orange-400" />, desc: "Fail-safe gas pipeline for medical canteens and patient dietary kitchen facilities." },
    { title: "Schools & Educational Campuses", icon: <School className="w-5 h-5 text-orange-400" />, desc: "Certified laboratory gas taps and campus hostel central dining kitchen pipeline." },
    { title: "Scientific Laboratories", icon: <Activity className="w-5 h-5 text-orange-400" />, desc: "Ultra-precise pressure regulation and analytical gas purity delivery." },
    { title: "Industries & Food Processing", icon: <Building2 className="w-5 h-5 text-orange-400" />, desc: "Heavy industrial copper and carbon steel piping compliant with factory inspectorate codes." },
    { title: "Catering & Wedding Mahals", icon: <Utensils className="w-5 h-5 text-orange-400" />, desc: "High-flow gas distribution engineered for concurrent bulk cooking caldrons." }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Cinematic Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0c1a24] to-[#060D17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                <Flame className="w-4 h-4" />
                <span>24/7 Professional Gas Piping</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
                AGTRS IDART <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                  GAS PIPELINE
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                24/7 Professional LPG Pipeline Installation, Maintenance & Repair. We provide professional LPG copper pipeline installation and maintenance services for residential, commercial, institutional and industrial environments across South India.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  ISI / BIS Compliant Copper
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Wrench className="w-4 h-4 text-blue-400" />
                  30% Higher Flow Efficiency
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EnterpriseImage
                type="pipeline"
                alt="IDART High Pressure Copper Gas Pipeline Network"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Pipeline Visualizer Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PipelineVisualizer />
        </div>
      </section>

      {/* 8 Technical Benefits Grid */}
      <section className="py-24 bg-[#071324] border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Superiority"
            title="Why IDART Copper Pipelines?"
            subtitle="Engineered with zero compromises on metallurgical purity, pressure tolerance, or life safety."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PIPELINE_BENEFITS.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 space-y-3 group shadow-xl"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-sm border border-orange-500/20 group-hover:scale-110 transition-transform">
                  0{index + 1}
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-orange-400 transition-colors">
                  {benefit.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Sectors: Residential & Commercial */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Versatile Applications"
            title="Tailored for Every Operational Environment"
            subtitle="Providing precision fuel connectivity to thousands of establishments across South India."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceSectors.map((sector, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/30 transition-all duration-300 space-y-3"
              >
                <div className="p-3 rounded-xl bg-slate-800/80 w-fit">
                  {sector.icon}
                </div>
                <h4 className="text-base font-bold text-white">
                  {sector.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {sector.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Need a Copper Gas Pipeline Installation or Audit?"
        subtitle="Our pipeline engineers provide complimentary on-site structural surveys and isometric design blueprints."
        primaryBtnText="Request Site Survey"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
