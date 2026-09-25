import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SouthIndiaMap from "@/components/ui/SouthIndiaMap";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
import CtaBanner from "@/components/sections/CtaBanner";
import { ShieldCheck, Award, Building2, Users, Network, Settings, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Why IDART | AGTRS IDART PRIVATE LIMITED",
  description:
    "Discover why 3687+ distributors and millions of consumers choose IDART: 17+ years experience, 457+ running branches, 482+ qualified staff, and ISO 9001:2015 certified operations.",
};

export default function WhyUsPage() {
  const sixReasons = [
    {
      title: "17+ Years of Industry Experience",
      stat: "Since 2009",
      icon: <Award className="w-7 h-7 text-amber-600" />,
      desc: "Founded in 2009 in Coimbatore, our foundational expertise in gas physics, leak containment, and field logistics has evolved over nearly two decades of operational excellence."
    },
    {
      title: "Extensive South India Network",
      stat: "5 Core States + 4 Expansion",
      icon: <Network className="w-7 h-7 text-orange-600" />,
      desc: "Comprehensive operational coverage across Tamil Nadu, Kerala, Andhra Pradesh, Telangana, and Puducherry, with rapidly expanding presence in Karnataka, Maharashtra, Odisha, and MP."
    },
    {
      title: "457+ Active Running Branches",
      stat: "457+ Branches",
      icon: <Building2 className="w-7 h-7 text-blue-600" />,
      desc: "Direct physical presence ensuring swift turnaround times, emergency on-site technician dispatches, and deep localized support for town and taluk clusters."
    },
    {
      title: "3,687+ LPG Distributor Network",
      stat: "3,687+ Agencies",
      icon: <ShieldCheck className="w-7 h-7 text-emerald-600" />,
      desc: "Trusted by thousands of LPG distributors across public and private oil marketing company ecosystems to offload mandatory statutory compliance inspections."
    },
    {
      title: "Qualified Field Workforce",
      stat: "482+ Engineers & Staff",
      icon: <Users className="w-7 h-7 text-purple-600" />,
      desc: "Our on-ground technical personnel are equipped with calibrated electronic combustible gas detectors, standardized uniforms, identity badges, and digital inspection devices."
    },
    {
      title: "Process & Safety Driven Culture",
      stat: "ISO 9001:2015",
      icon: <Settings className="w-7 h-7 text-teal-600" />,
      desc: "IAF - 22IQLU17 accredited quality management with strict adherence to Bureau of Indian Standards (BIS) and oil industry safety directorate guidelines."
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-center overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-6">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>Enterprise Differentiation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            WHY <span className="text-orange-600">IDART?</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            When it comes to LPG safety, high-pressure copper engineering, and business solutions, scale, experience, and procedural discipline matter. Discover the six foundational pillars of our leadership.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="VERIFIED CORPORATE CREDENTIALS" metric="17+ YEARS • ISO 9001:2015" />

      {/* Six Major Reasons Grid */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sixReasons.map((reason, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors">
                      {reason.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200">
                      {reason.stat}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Corporate Metric</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive South India Geographic Network Section */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Geographic Infrastructure"
            title="Interactive Regional Network"
            subtitle="Explore how IDART connects regional offices, branch networks, and distributor clusters across South India."
            align="center"
          />
          <SouthIndiaMap />
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Experience the IDART Difference"
        subtitle="Connect with our Coimbatore corporate headquarters or nearest branch coordinator."
      />
    </div>
  );
}
