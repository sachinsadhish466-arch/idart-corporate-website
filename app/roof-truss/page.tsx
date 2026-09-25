import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import TrussVisualizer from "@/components/ui/TrussVisualizer";
import CtaBanner from "@/components/sections/CtaBanner";
import { Hammer, ShieldCheck, Layers, Maximize2, CheckCircle2, Building2, Home, Factory, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Roof Truss Solutions | AGTRS IDART PRIVATE LIMITED",
  description:
    "High-tensile structural steel roof truss fabrication and engineering for residential bungalows, commercial halls, industrial warehouses, and custom architectures across South India.",
};

export default function RoofTrussPage() {
  const trussCategories = [
    {
      title: "Residential Roof Truss",
      icon: <Home className="w-6 h-6 text-orange-400" />,
      desc: "Lightweight, architecturally elegant cold-formed steel trusses designed for independent villas, terraces, and tile-roof bungalows.",
      benefits: ["Aesthetic pitch roofs", "Termite & moisture immune", "Fast-track erection in days"]
    },
    {
      title: "Commercial Roof Truss",
      icon: <Building2 className="w-6 h-6 text-blue-400" />,
      desc: "Large column-free clear span trusses for convention halls, multi-cuisine restaurants, schools, and vehicle showrooms.",
      benefits: ["Unobstructed interior vistas", "High acoustic dampening", "Supports suspended lighting & AC ducts"]
    },
    {
      title: "Industrial Roof Structures",
      icon: <Factory className="w-6 h-6 text-amber-400" />,
      desc: "Heavy-duty structural steel portals and Pratt trusses for manufacturing factories, agro-sheds, and high-bay warehouses.",
      benefits: ["Heavy gantry crane compatibility", "High wind gust resilience (180+ km/h)", "Anti-corrosion epoxy coatings"]
    },
    {
      title: "Custom Architectural Solutions",
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      desc: "Curved barrel vaults, space frames, and cantilevered canopies designed to meet unique architectural blueprints.",
      benefits: ["Bespoke CAD & 3D modeling", "Complex organic curves", "Turnkey design & installation"]
    }
  ];

  const installationStages = [
    { stage: 1, title: "Architectural CAD Modeling", desc: "Detailed structural finite element analysis and customized wind load engineering calculations." },
    { stage: 2, title: "Precision Fabrication", desc: "Computerized cutting, drilling, and robotic welding with high-tensile structural steel grades." },
    { stage: 3, title: "Protective Surface Coating", desc: "Multi-stage zinc-phosphate primer, hot-dip galvanization, or marine-grade polyurethane coat." },
    { stage: 4, title: "On-Site Erection & Anchoring", desc: "Rapid crane or boom hoist positioning and high-grade structural torque bolting on reinforced concrete columns." }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a1824] to-[#060D17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                <Hammer className="w-4 h-4" />
                <span>Structural Steel Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
                ROOF TRUSS <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                  SOLUTIONS
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Strong structures. Smart engineering. Long-lasting protection. High-grade structural steel trusses engineered for residential bungalows, commercial warehouses, industrial sheds, and custom architectures across South India.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  Galvanized Steel Protection
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Maximize2 className="w-4 h-4 text-blue-400" />
                  Up to 45m Clear Span
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EnterpriseImage
                type="truss"
                alt="IDART Structural Roof Truss Engineering"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 3D/CAD Truss Visualizer */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TrussVisualizer />
        </div>
      </section>

      {/* 4 Core Categories Grid */}
      <section className="py-24 bg-[#071324] border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Engineering Spectrum"
            title="Structural Solutions Tailored by Sector"
            subtitle="Engineered to withstand heavy monsoons, coastal cyclonic winds, and seismic loads."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trussCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                    {cat.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Turnkey Installation Process */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Turnkey Delivery"
            title="From Blueprint to Final Erection"
            subtitle="Our structural engineers supervise every milestone of the fabrication and installation lifecycle."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {installationStages.map((st) => (
              <div
                key={st.stage}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/30 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-sm border border-orange-500/20 mb-4">
                  0{st.stage}
                </div>
                <h4 className="text-base font-bold text-white">{st.title}</h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Planning a Roof Truss Construction or Renovation?"
        subtitle="Consult our structural design engineers for clear span calculations and material cost estimations."
        primaryBtnText="Request Structural Quote"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
