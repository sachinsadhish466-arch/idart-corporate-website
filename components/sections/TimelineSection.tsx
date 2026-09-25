"use client";

import React, { useState } from "react";
import { Calendar, Award, Building2, Flame, Smartphone, Globe2, CheckCircle2 } from "lucide-react";

interface Milestone {
  year: string;
  title: string;
  badge: string;
  desc: string;
  icon: any;
  stat: string;
}

const MILESTONES: Milestone[] = [
  {
    year: "2009",
    title: "Enterprise Founded in Coimbatore",
    badge: "Genesis",
    desc: "Commenced operations in Mullai Nagar, Coimbatore, pioneering certified residential LPG stove inspections and safe cylinder connections.",
    icon: Flame,
    stat: "1st Service Hub"
  },
  {
    year: "2012",
    title: "South India Network Expansion",
    badge: "Regional Footprint",
    desc: "Expanded across Western Tamil Nadu into Kerala border corridors, partnering with leading state LPG distributor networks.",
    icon: Globe2,
    stat: "50+ Branches"
  },
  {
    year: "2017",
    title: "Incorporated as Private Limited",
    badge: "Corporate Evolution",
    desc: "Formally incorporated as AGTRS IDART PRIVATE LIMITED under the Ministry of Corporate Affairs, structuring corporate governance.",
    icon: Building2,
    stat: "Pvt Ltd Status"
  },
  {
    year: "2018",
    title: "Digital Telemetry & Mobile ERP",
    badge: "Tech Transformation",
    desc: "Launched proprietary mobile inspection suites enabling GPS-stamped photo auditing, instant barcode seals, and customer SMS certificates.",
    icon: Smartphone,
    stat: "100% Digital Audits"
  },
  {
    year: "2019",
    title: "ISO 9001:2015 Accreditation",
    badge: "Quality Benchmark",
    desc: "Secured international quality management accreditation, standardizing gas pipeline brazing and leak diagnostic procedures.",
    icon: Award,
    stat: "ISO Certified"
  },
  {
    year: "2026",
    title: "Expanded Enterprise Scale",
    badge: "Market Leadership",
    desc: "Operating 457+ verified branches with 482+ certified workforce, serving 3,687+ distributor networks across Tamil Nadu, Kerala, AP, and Telangana.",
    icon: CheckCircle2,
    stat: "457+ Branches"
  }
];

export default function TimelineSection() {
  const [activeYear, setActiveYear] = useState<string>("2026");
  const selected = MILESTONES.find(m => m.year === activeYear) || MILESTONES[5];

  return (
    <section className="py-20 bg-white border-b border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-orange-50 text-orange-700 border border-orange-200 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            17-YEAR HERITAGE
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            COMPANY GROWTH & MILESTONES (2009 — 2026)
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            From our founding in Coimbatore to an enterprise network spanning 457+ verified centers across South India.
          </p>
        </div>

        <div className="relative py-8 overflow-x-auto">
          <div className="min-w-[700px] relative">
            <div className="absolute top-[28px] left-[5%] right-[5%] h-1 bg-slate-100 rounded-full z-0" />

            <div className="relative z-10 grid grid-cols-6 gap-2">
              {MILESTONES.map((m) => {
                const isSelected = m.year === activeYear;

                return (
                  <button
                    key={m.year}
                    onClick={() => setActiveYear(m.year)}
                    className="flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-black text-sm transition-all duration-300 ${
                        isSelected
                          ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30 scale-110 ring-4 ring-orange-100"
                          : "bg-white text-slate-700 border-2 border-slate-200 hover:border-orange-300"
                      }`}
                    >
                      {m.year}
                    </div>
                    <span className={`text-xs font-bold mt-3 transition-colors ${
                      isSelected ? "text-orange-600" : "text-slate-500"
                    }`}>
                      {m.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-500 text-white">
                YEAR {selected.year}
              </span>
              <span className="text-xs font-bold text-slate-500">
                {selected.badge}
              </span>
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {selected.title}
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {selected.desc}
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-xl bg-white border border-slate-200 text-center min-w-[140px]">
            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold block mb-1">
              Network Metric
            </span>
            <span className="text-sm font-black text-orange-600">
              {selected.stat}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
