"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Flame, Building2, Wrench, ShieldAlert, Sparkles, Leaf, Award, ArrowRight } from "lucide-react";

interface ServiceCard {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  href: string;
  tag: string;
}

const SERVICES: ServiceCard[] = [
  {
    number: "01",
    title: "LPG MANDATORY INSPECTION",
    subtitle: "Statutory Consumer Safety",
    description: "Certified physical and diagnostic safety inspections for residential homes and commercial kitchens under IS 6044 regulations.",
    icon: ShieldCheck,
    href: "/mandatory-inspection",
    tag: "IS 6044 Standards"
  },
  {
    number: "02",
    title: "RETICULATED GAS PIPELINES",
    subtitle: "Concealed Copper Systems",
    description: "Seamless heavy-gauge copper gas grid pipelines for multi-storey apartments, luxury villas, and residential developments.",
    icon: Flame,
    href: "/lpg-pipeline",
    tag: "Zero-Leakage Guarantee"
  },
  {
    number: "03",
    title: "INDUSTRIAL ROOF TRUSSES",
    subtitle: "Clear-Span Steel Structures",
    description: "High-tensile steel structural trusses, warehouse canopies, factory sheds, and heavy industrial roofing solutions.",
    icon: Wrench,
    href: "/roof-truss",
    tag: "High Tensile Steel"
  },
  {
    number: "04",
    title: "COMMERCIAL KITCHEN MANIFOLDS",
    subtitle: "High-BTU Fuel Distribution",
    description: "Turnkey multi-cylinder LOT/VOT manifold installations with water-bath vaporizers for hotels, cloud kitchens, and canteens.",
    icon: Building2,
    href: "/startup-solutions",
    tag: "Vaporizer Equipped"
  },
  {
    number: "05",
    title: "GAS LEAK DETECTION & SHUTOFF",
    subtitle: "Automated Sensor Interlocks",
    description: "Industrial combustible gas detectors tied to solenoid valves, triggering instant automatic fuel isolation during anomalies.",
    icon: ShieldAlert,
    href: "/why-us",
    tag: "Active Interlock"
  },
  {
    number: "06",
    title: "STARTUP & HOTEL KITCHEN PACKAGES",
    subtitle: "Fast-Track Infrastructure",
    description: "Express commercial kitchen gas piping, Detailed Project Reports (DPR), and equipment alignment for restaurant startups.",
    icon: Sparkles,
    href: "/startup-solutions",
    tag: "Turnkey Setup"
  },
  {
    number: "07",
    title: "GREEN LPG & CARBON TRANSITION",
    subtitle: "Clean Fuel Awareness",
    description: "Community workshops and industrial migration programs converting inefficient solid/diesel fuels to clean-burning LPG.",
    icon: Leaf,
    href: "/social-activity",
    tag: "Eco Initiative"
  },
  {
    number: "08",
    title: "ENTERPRISE COMPLIANCE AUDITS",
    subtitle: "Third-Party Certification",
    description: "Full safety dossiers, hydrostatic pressure certificates, and insurance-valid documentation for corporate properties.",
    icon: Award,
    href: "/about",
    tag: "ISO 9001:2015"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            CORE CAPABILITIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            ENGINEERED SERVICES & SAFETY SOLUTIONS
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Professional inspection services, reticulated copper pipelines, and structural engineering built around consumer safety and statutory standards.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.href}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-orange-500 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 group-hover:text-orange-500 transition-colors font-mono">
                      {service.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-50 text-slate-700 group-hover:bg-orange-500 group-hover:text-white flex items-center justify-center transition-colors">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold block mb-1">
                    {service.subtitle}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-50">
                    {service.tag}
                  </span>
                  <span className="text-xs font-bold text-orange-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="absolute top-0 left-6 right-6 h-0.5 bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
