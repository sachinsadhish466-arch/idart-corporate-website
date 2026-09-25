"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ShieldCheck, RefreshCw } from "lucide-react";

interface ChecklistItem {
  id: number;
  label: string;
  category: "Cylinder" | "Hose" | "Regulator" | "Burner" | "Kitchen Safety";
  critical: boolean;
  explanation: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: 1,
    label: "Cylinder placed upright at floor level in a naturally ventilated area",
    category: "Cylinder",
    critical: true,
    explanation: "LPG is heavier than air. Cylinders must never be kept inside closed cupboards without bottom vents."
  },
  {
    id: 2,
    label: "Suraksha orange wire-braided hose within 5-year expiry date with zero cracks",
    category: "Hose",
    critical: true,
    explanation: "Ordinary green/rubber hoses crack easily and are vulnerable to rodent gnawing. Use BIS-approved Suraksha hoses only."
  },
  {
    id: 3,
    label: "Pressure regulator O-ring rubber seal intact with zero neck wobble",
    category: "Regulator",
    critical: true,
    explanation: "A missing or deformed internal rubber O-ring is the #1 cause of neck leakages during cylinder swaps."
  },
  {
    id: 4,
    label: "Electronic leak detector scan confirms 0 ppm combustible hydrocarbon vapors",
    category: "Cylinder",
    critical: true,
    explanation: "Our technicians use calibrated digital sensors capable of detecting micro-leaks before scent is detectable."
  },
  {
    id: 5,
    label: "Hot plate gas stove burners emit uniform blue flame without yellow soot",
    category: "Burner",
    critical: false,
    explanation: "Yellow flame signifies incomplete combustion, wasted gas, and hazardous carbon monoxide generation."
  },
  {
    id: 6,
    label: "Minimum 1-meter safe distance between cylinder and electrical switches/sockets",
    category: "Kitchen Safety",
    critical: true,
    explanation: "Electrical sparks from mixer-grinders, refrigerators, or switchboards can trigger ignition if vapor accumulates."
  },
  {
    id: 7,
    label: "Safety cap nylon cord attached to cylinder neck for rapid capping during leaks",
    category: "Cylinder",
    critical: false,
    explanation: "In case of valve leakage, snapping the safety cap tightly seals the cylinder orifice instantly."
  },
  {
    id: 8,
    label: "Homemaker and family members educated on emergency shut-off sequence",
    category: "Kitchen Safety",
    critical: false,
    explanation: "Consumer awareness ensures family members do not operate electrical switches in the event of gas odor."
  }
];

export default function InspectionChecklist() {
  const [checkedIds, setCheckedIds] = useState<number[]>([1, 2, 3, 5]);

  const toggleCheck = (id: number) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetAll = () => setCheckedIds([]);
  const selectAll = () => setCheckedIds(CHECKLIST_ITEMS.map((item) => item.id));

  const scorePercentage = Math.round((checkedIds.length / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl relative">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
            Standard Operating Procedure
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            Interactive Domestic LPG Safety Checklist
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Test your household compliance against the 8-point IDART inspection protocol.
          </p>
        </div>

        {/* Score Pill */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="text-right">
            <div className="text-[11px] text-slate-400 uppercase font-semibold">Household Safety Score</div>
            <div className="text-xl font-black text-white">
              {scorePercentage}% <span className="text-xs font-normal text-slate-400">({checkedIds.length}/8 Passed)</span>
            </div>
          </div>
          <div className={`p-2.5 rounded-xl ${scorePercentage >= 80 ? "bg-emerald-500/20 text-emerald-400" : scorePercentage >= 50 ? "bg-amber-500/20 text-amber-400" : "bg-red-500/20 text-red-400"}`}>
            <ShieldCheck className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-between mt-6 text-xs text-slate-400">
        <span>Click on any item to verify inspection compliance:</span>
        <div className="flex items-center gap-2">
          <button
            onClick={selectAll}
            className="hover:text-orange-400 font-medium transition-colors"
          >
            Check All
          </button>
          <span>•</span>
          <button
            onClick={resetAll}
            className="hover:text-orange-400 font-medium transition-colors flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" /> Reset
          </button>
        </div>
      </div>

      {/* Checklist Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                isChecked
                  ? "bg-slate-800/80 border-orange-500/50 shadow-md shadow-orange-500/5"
                  : "bg-slate-950/60 border-slate-800 hover:border-slate-700"
              }`}
            >
              <div className="pt-0.5 shrink-0">
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center transition-colors ${
                    isChecked
                      ? "bg-orange-500 text-white"
                      : "border border-slate-700 bg-slate-900"
                  }`}
                >
                  {isChecked && <CheckCircle2 className="w-4 h-4" />}
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    {item.category}
                  </span>
                  {item.critical && (
                    <span className="text-[10px] font-semibold text-red-400 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> Mandatory
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mt-2 leading-snug">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
