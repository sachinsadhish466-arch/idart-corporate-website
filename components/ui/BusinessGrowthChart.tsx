"use client";

import React, { useState } from "react";
import { TrendingUp, AlertCircle, Sparkles, Building, Rocket, CheckCircle } from "lucide-react";

interface Milestone {
  stage: string;
  label: string;
  metric: string;
  details: string;
  x: number;
  y: number;
}

const MILESTONES: Milestone[] = [
  {
    stage: "Idea & Feasibility",
    label: "Foundation",
    metric: "Viability Study",
    details: "Market need identification, competitive moat validation, and financial sensitivity modeling.",
    x: 100,
    y: 220
  },
  {
    stage: "Institutional Funding",
    label: "Capitalization",
    metric: "Debt / Grant Sanction",
    details: "MSME subsidized loans, commercial debt syndication, and equipment leasing finalized.",
    x: 220,
    y: 175
  },
  {
    stage: "Commercial Operations",
    label: "Go-to-Market",
    metric: "Revenue Kickoff",
    details: "Machinery commissioning, trial production runs, and customer acquisition campaigns launched.",
    x: 340,
    y: 130
  },
  {
    stage: "Regional Expansion",
    label: "Market Penetration",
    metric: "Multi-Hub Growth",
    details: "Expansion into secondary tier-2/tier-3 cities across South India corridors.",
    x: 460,
    y: 80
  },
  {
    stage: "Enterprise Scaling",
    label: "Market Leader",
    metric: "Sustained Margin",
    details: "Institutional corporate contracts, high-volume supply chains, and digital automated workflows.",
    x: 580,
    y: 35
  }
];

export default function BusinessGrowthChart() {
  const [selectedMilestone, setSelectedMilestone] = useState<Milestone>(MILESTONES[2]);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 uppercase">
              CONCEPTUAL ROADMAP
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Enterprise Growth Trajectory
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Illustrative enterprise maturation curve from seed ideation to scaled market penetration.
          </p>
        </div>

        {/* Disclaimer Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-500 font-mono">
          <AlertCircle className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span>Conceptual Illustration • Not Historical Financials</span>
        </div>
      </div>

      {/* SVG Growth Line Chart */}
      <div className="py-6 flex items-center justify-center">
        <svg
          viewBox="0 0 680 280"
          className="w-full max-w-[680px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="growthArea" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="growthLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <g stroke="#F1F5F9" strokeWidth="1">
            <line x1="60" y1="50" x2="640" y2="50" />
            <line x1="60" y1="110" x2="640" y2="110" />
            <line x1="60" y1="170" x2="640" y2="170" />
            <line x1="60" y1="230" x2="640" y2="230" />
          </g>

          {/* Shaded Area Under Curve */}
          <path
            d="M 100 220 Q 220 200, 340 130 T 580 35 L 580 250 L 100 250 Z"
            fill="url(#growthArea)"
          />

          {/* Main Upward Trajectory Curve */}
          <path
            d="M 100 220 Q 220 200, 340 130 T 580 35"
            fill="none"
            stroke="url(#growthLine)"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* Interactive Milestone Nodes */}
          {MILESTONES.map((m, idx) => {
            const isSelected = selectedMilestone.stage === m.stage;

            return (
              <g
                key={idx}
                className="cursor-pointer"
                onClick={() => setSelectedMilestone(m)}
              >
                {isSelected && (
                  <circle cx={m.x} cy={m.y} r="14" fill="#10B981" opacity="0.2" className="animate-ping" />
                )}
                <circle
                  cx={m.x}
                  cy={m.y}
                  r={isSelected ? "8" : "6"}
                  fill={isSelected ? "#10B981" : "#FFFFFF"}
                  stroke={isSelected ? "#065F46" : "#3B82F6"}
                  strokeWidth="3"
                />
                <text
                  x={m.x}
                  y={m.y + 24}
                  textAnchor="middle"
                  fill="#334155"
                  fontSize="10"
                  fontWeight={isSelected ? "800" : "600"}
                >
                  {m.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Selected Milestone Detail Banner */}
      <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
              {selectedMilestone.label}
            </span>
            <h4 className="text-base font-bold text-slate-900">
              {selectedMilestone.stage}
            </h4>
          </div>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            {selectedMilestone.details}
          </p>
        </div>

        <div className="shrink-0 p-3 rounded-lg bg-white border border-slate-200 text-right">
          <span className="text-[10px] font-mono uppercase text-slate-400 block font-semibold">Milestone Target</span>
          <span className="text-xs font-bold text-emerald-700">{selectedMilestone.metric}</span>
        </div>
      </div>
    </div>
  );
}
