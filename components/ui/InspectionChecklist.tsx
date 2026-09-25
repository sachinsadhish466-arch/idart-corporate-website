"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, AlertCircle, Home, CheckSquare, Sparkles, PhoneCall, ArrowRight, ShieldAlert } from "lucide-react";

interface InspectionItem {
  id: string;
  name: string;
  category: string;
  standards: string[];
  riskIfIgnored: string;
  iconLabel: string;
}

const ITEMS: InspectionItem[] = [
  {
    id: "cylinder",
    name: "LPG Cylinder Inspection",
    category: "Storage Safety",
    standards: ["Check tare weight match & statutory test date", "Inspect cylinder body for severe denting or deep rust", "Verify cylinder stays strictly upright on stable level floor"],
    riskIfIgnored: "Undetected bottom rust or seal damage can cause liquid LPG pooling.",
    iconLabel: "Cylinder"
  },
  {
    id: "regulator",
    name: "Pressure Regulator & O-Ring",
    category: "Pressure Modulation",
    standards: ["Check rubber O-ring inside cylinder valve for cuts or flattening", "Verify secure locking collar mechanism engagement", "Test pressure relief valve response"],
    riskIfIgnored: "A cracked or missing O-ring is the #1 cause of sudden cylinder neck fires.",
    iconLabel: "Regulator"
  },
  {
    id: "hose",
    name: "Suraksha Reinforced Rubber Hose",
    category: "Conduit Safety",
    standards: ["Check validity date printed on hose (maximum 5-year replacement rule)", "Inspect for hardening, cracking, burns or rodent bite marks", "Ensure hose does not touch hot stove body"],
    riskIfIgnored: "Perished or aged rubber hoses crack when bent, releasing gas under pressure.",
    iconLabel: "Hose"
  },
  {
    id: "stove",
    name: "LPG Gas Stove & Burners",
    category: "Combustion Unit",
    standards: ["Inspect burner holes for carbon clogging or uneven flame spread", "Check gas knobs for smooth rotation and tight OFF locking", "Verify clear blue flame indicating clean combustion"],
    riskIfIgnored: "Yellow smoking flame releases toxic Carbon Monoxide (CO) and wastes fuel.",
    iconLabel: "Stove"
  },
  {
    id: "ventilation",
    name: "Kitchen Ventilation & Airflow",
    category: "Environmental",
    standards: ["Verify low-level ventilation since LPG is twice as heavy as air", "Ensure cylinders are never placed in unventilated basements or pits", "Verify no electric motor or switchboard directly below cylinder"],
    riskIfIgnored: "Leaked LPG settles at floor level; lack of ventilation creates explosive air mix.",
    iconLabel: "Ventilation"
  },
  {
    id: "connections",
    name: "Pipe Joints & Clamps",
    category: "Physical Fittings",
    standards: ["Inspect stainless steel hose clamps at both stove and regulator ends", "Verify silver-brazed copper joints have no hairline stress fractures", "Confirm all wall sleeves are insulated"],
    riskIfIgnored: "Loose or un-clamped hose connections can slip off when cylinder is nudged.",
    iconLabel: "Connections"
  },
  {
    id: "leak",
    name: "Soap Bubble & Sniffer Leak Test",
    category: "Diagnostic Testing",
    standards: ["Apply certified non-corrosive foaming leak-test solution to all joints", "Electronic hydrocarbon gas detector probe test", "Mandatory zero-bubble hold test for minimum 60 seconds"],
    riskIfIgnored: "Never use an open match or lighter to check for gas leaks.",
    iconLabel: "Leak Detection"
  },
  {
    id: "sticker",
    name: "IDART Safety Sticker & Digital Certificate",
    category: "Certification",
    standards: ["Affix tamper-evident holographic inspection seal with date & tech ID", "Issue digital inspection certificate linked to distributor record", "Provide laminated 24/7 emergency response contact card"],
    riskIfIgnored: "Without certified documentation, insurance claims may be denied post-incident.",
    iconLabel: "Safety Sticker"
  }
];

export default function InspectionChecklist() {
  const [checkedIds, setCheckedIds] = useState<string[]>(["cylinder", "regulator", "hose"]);
  const [activeItemId, setActiveItemId] = useState<string>("cylinder");

  const toggleCheck = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setCheckedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const activeItem = ITEMS.find(item => item.id === activeItemId) || ITEMS[0];
  const complianceScore = Math.round((checkedIds.length / ITEMS.length) * 100);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              MANDATORY SAFETY PROTOCOL
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            WHAT DOES AN LPG SAFETY INSPECTION COVER?
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Interactive 8-point physical and diagnostic inspection conducted by certified IDART engineers.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
          <div className="text-right">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase">Readiness Score</div>
            <div className="text-xl font-black text-slate-900">
              <span className={complianceScore === 100 ? "text-emerald-600" : "text-orange-600"}>
                {complianceScore}%
              </span>
              <span className="text-xs text-slate-400 font-normal"> ({checkedIds.length}/8 items)</span>
            </div>
          </div>
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
            complianceScore === 100 ? "bg-emerald-500 text-white" : "bg-orange-500 text-white"
          }`}>
            <ShieldCheck className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6">
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ITEMS.map((item) => {
            const isChecked = checkedIds.includes(item.id);
            const isSelected = activeItemId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => setActiveItemId(item.id)}
                className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                  isSelected
                    ? "bg-orange-50/60 border-orange-500 ring-2 ring-orange-500/20 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50"
                }`}
              >
                <div className="min-w-0">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    {item.category}
                  </div>
                  <h4 className={`text-xs font-bold truncate mt-0.5 ${isSelected ? "text-orange-600" : "text-slate-900"}`}>
                    {item.name}
                  </h4>
                </div>

                <button
                  onClick={(e) => toggleCheck(item.id, e)}
                  title={isChecked ? "Mark unchecked" : "Mark checked"}
                  className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 transition-colors ${
                    isChecked
                      ? "bg-emerald-500 text-white shadow-sm"
                      : "border border-slate-300 text-transparent hover:border-slate-400"
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 fill-white" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-5 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
                AUDIT SPECIFICATION
              </span>
              <h4 className="text-lg font-bold text-slate-900 mt-0.5">
                {activeItem.name}
              </h4>
              <p className="text-xs text-slate-500 mt-1">
                Category: <span className="font-semibold text-slate-700">{activeItem.category}</span>
              </p>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-800 block mb-2">
                Mandatory Inspection Criteria:
              </span>
              <ul className="space-y-2">
                {activeItem.standards.map((std, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-800 mb-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span>Risk If Not Audited:</span>
              </div>
              <p className="text-amber-900/80 leading-relaxed text-[11px]">
                {activeItem.riskIfIgnored}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Bi-annual audits recommended.
            </span>
            <a
              href="/mandatory-inspection"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <span>Book Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
