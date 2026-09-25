"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, ArrowRight } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is LPG Mandatory Inspection?",
    a: "LPG Mandatory Inspection is a statutory safety audit mandated for domestic and commercial LPG consumers. Certified IDART technicians conduct an 8-point physical and diagnostic inspection covering cylinders, regulators, hoses, stoves, and leak checks to prevent gas hazards.",
    category: "Safety"
  },
  {
    q: "Why is LPG pipeline testing important?",
    a: "Gas pipelines operate under constant pressure. Over time, physical settling, thermal expansion, or vibration can stress joints. Hydrostatic and pneumatic sniffer testing detects micro-leaks before fuel vapor can accumulate to dangerous lower explosive limits (LEL).",
    category: "Pipelines"
  },
  {
    q: "Where does IDART provide services?",
    a: "IDART operates extensively across South India with over 457 verified branches spanning Tamil Nadu, Kerala, Andhra Pradesh, Telangana, and Puducherry, with strategic expansion underway in Karnataka and Maharashtra.",
    category: "Coverage"
  },
  {
    q: "What types of LPG pipeline installations are available?",
    a: "We engineer residential concealed copper grids for independent houses and apartment towers, commercial manifold systems (LOT/VOT) for restaurants and cloud kitchens, and bulk industrial manifolds with vaporizers.",
    category: "Engineering"
  },
  {
    q: "What startup solutions are available?",
    a: "Our startup vertical assists entrepreneurs and hotel founders with turnkey kitchen gas infrastructure, Detailed Project Reports (DPR), equipment financing alignment, and statutory fire clearances.",
    category: "Startup"
  },
  {
    q: "What is roof truss construction?",
    a: "Roof truss construction involves fabricating high-tensile steel triangulated rafters (Pratt, Howe, Fink designs) for warehouses, factories, and marriage halls, offering massive clear spans without obstructive interior columns.",
    category: "Roof Truss"
  },
  {
    q: "How can I contact IDART for services or an emergency?",
    a: "You can reach our corporate headquarters in Coimbatore at 0422 - 4369081 or call our regional safety helpline at +91 8248012319 / +91 9789455319. Emergency gas technicians are on call 24/7.",
    category: "Contact"
  },
  {
    q: "How can I apply for a job or technician role at IDART?",
    a: "Visit our Careers page (/careers) to view active openings across mechanical engineering, field safety inspection, and branch operations, or submit your resume directly via our online application portal.",
    category: "Careers"
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              KNOWLEDGE BASE & SUPPORT
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Frequently Asked Questions
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Clear, authoritative answers regarding safety inspections, pipeline standards, and corporate services.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          8 KEY INQUIRIES
        </span>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-slate-100 pt-4">
        {FAQS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="py-4">
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left group focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                    isOpen ? "bg-orange-500 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-sm font-bold transition-colors ${
                    isOpen ? "text-orange-600" : "text-slate-900 group-hover:text-orange-600"
                  }`}>
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                    isOpen ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="mt-3 pl-11 pr-4 text-xs text-slate-600 leading-relaxed animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Helpline Strip */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-4 rounded-xl">
        <div className="flex items-center gap-2">
          <PhoneCall className="w-4 h-4 text-orange-600" />
          <span className="text-xs font-semibold text-slate-700">Have a specific technical question?</span>
        </div>
        <a
          href="/contact"
          className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700"
        >
          <span>Contact Engineering Support</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
