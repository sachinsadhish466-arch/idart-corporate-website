"use client";

import React, { useState } from "react";
import { Info, Gauge, ShieldCheck, Flame, Layers } from "lucide-react";

interface ComponentDetail {
  id: string;
  name: string;
  spec: string;
  desc: string;
  safetyRule: string;
}

const DETAILS: Record<string, ComponentDetail> = {
  pipe: {
    id: "pipe",
    name: "Outer Seamless Copper Pipe",
    spec: "Cu-DHP Heavy Gauge (BS EN 1057)",
    desc: "Seamless phosphor-deoxidized copper tubing with smooth internal bore, preventing friction loss and sulfur corrosion.",
    safetyRule: "Wall thickness rated to handle up to 25 bar burst pressure. 100% spark-free."
  },
  gas: {
    id: "gas",
    name: "LPG Vapor Stream",
    spec: "Propane/Butane Mix @ 2.8 kPa",
    desc: "Controlled low-pressure gas vapor moving smoothly to consumption points with ethyl mercaptan odorant added for safety.",
    safetyRule: "Maintained within laminar flow velocity under 15 m/s to prevent static buildup."
  },
  joint: {
    id: "joint",
    name: "Silver Brazed Capillary Joint",
    spec: "43% Silver Solder (CuP / Ag alloy)",
    desc: "Capillary fitting brazed at temperatures exceeding 650°C, forming a molecular bond stronger than the copper tube itself.",
    safetyRule: "No soft lead solder permitted under Indian gas safety standards. Zero joint leakage."
  },
  valve: {
    id: "valve",
    name: "Quarter-Turn Isolating Ball Valve",
    spec: "Forged Brass PN 25 / EN 331",
    desc: "Hard chrome-plated brass ball valve with PTFE seals, enabling 90-degree instant mechanical line isolation.",
    safetyRule: "Blow-out proof stem design with clear open/close lever indicator."
  },
  connector: {
    id: "connector",
    name: "Heavy-Duty Compression Flare Connector",
    spec: "Precision Machined Brass 45° SAE Flare",
    desc: "Metal-to-metal precision conical flare connection providing extreme leak tightness without thread tape deterioration.",
    safetyRule: "Tested with pneumatic bubbles and electronic combustible hydrocarbon sniffer."
  }
};

export default function PipelineCrossSection() {
  const [activeItem, setActiveItem] = useState<string>("pipe");
  const detail = DETAILS[activeItem] || DETAILS.pipe;

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              TECHNICAL CROSS-SECTION DIAGRAM
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Engineered Copper Pipeline Interior
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Hover or tap components to inspect material metallurgy, brazing, and fluid dynamics.
          </p>
        </div>

        <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
          SCALE: 1:1 SCHEMATIC
        </span>
      </div>

      <div className="py-6 flex items-center justify-center">
        <svg
          viewBox="0 0 700 240"
          className="w-full max-w-[700px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="copperWall" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C2410C" />
              <stop offset="30%" stopColor="#EA580C" />
              <stop offset="70%" stopColor="#FB923C" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>

            <linearGradient id="gasStream" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFF7ED" />
              <stop offset="50%" stopColor="#FFEDD5" />
              <stop offset="100%" stopColor="#FFF7ED" />
            </linearGradient>

            <linearGradient id="brassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#CA8A04" />
              <stop offset="50%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#A16207" />
            </linearGradient>
          </defs>

          <rect
            x="40"
            y="40"
            width="620"
            height="25"
            fill="url(#copperWall)"
            rx="3"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setActiveItem("pipe")}
            onClick={() => setActiveItem("pipe")}
          />

          <rect
            x="40"
            y="145"
            width="620"
            height="25"
            fill="url(#copperWall)"
            rx="3"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setActiveItem("pipe")}
            onClick={() => setActiveItem("pipe")}
          />

          <rect
            x="40"
            y="65"
            width="620"
            height="80"
            fill="url(#gasStream)"
            className="cursor-pointer hover:opacity-90 transition-opacity"
            onMouseEnter={() => setActiveItem("gas")}
            onClick={() => setActiveItem("gas")}
          />

          <g opacity="0.6">
            <line x1="60" y1="85" x2="640" y2="85" stroke="#F97316" strokeWidth="2" strokeDasharray="8 6" className="animate-pipeline-flow-fast" />
            <line x1="80" y1="105" x2="620" y2="105" stroke="#EA580C" strokeWidth="3" strokeDasharray="12 8" className="animate-pipeline-flow" />
            <line x1="50" y1="125" x2="630" y2="125" stroke="#F97316" strokeWidth="2" strokeDasharray="10 6" className="animate-pipeline-flow-fast" />
          </g>

          <g fill="#EA580C" opacity="0.8">
            <polygon points="200,105 185,98 185,112" />
            <polygon points="360,105 345,98 345,112" />
            <polygon points="520,105 505,98 505,112" />
          </g>

          <g className="cursor-pointer" onMouseEnter={() => setActiveItem("joint")} onClick={() => setActiveItem("joint")}>
            <rect x="270" y="32" width="22" height="146" fill="#94A3B8" stroke="#475569" strokeWidth="2" rx="4" />
            <circle cx="281" cy="40" r="3" fill="#E2E8F0" />
            <circle cx="281" cy="170" r="3" fill="#E2E8F0" />
            <text x="250" y="20" fill="#475569" fontSize="10" fontWeight="700">Silver Brazed Joint</text>
          </g>

          <g className="cursor-pointer" onMouseEnter={() => setActiveItem("valve")} onClick={() => setActiveItem("valve")}>
            <rect x="445" y="25" width="40" height="160" fill="url(#brassGrad)" stroke="#713F12" strokeWidth="2" rx="4" />
            <rect x="435" y="5" width="60" height="14" fill="#DC2626" rx="3" stroke="#991B1B" strokeWidth="1.5" />
            <text x="442" y="15" fill="#FFFFFF" fontSize="8" fontWeight="800">SHUTOFF</text>
            <text x="435" y="205" fill="#854D0E" fontSize="10" fontWeight="700">Control Valve</text>
          </g>

          <g className="cursor-pointer" onMouseEnter={() => setActiveItem("connector")} onClick={() => setActiveItem("connector")}>
            <rect x="635" y="35" width="28" height="140" fill="url(#brassGrad)" stroke="#713F12" strokeWidth="2" rx="3" />
            <text x="590" y="225" fill="#854D0E" fontSize="10" fontWeight="700">Flare Connector</text>
          </g>

          <g stroke="#94A3B8" strokeWidth="1" strokeDasharray="2 2">
            <line x1="40" y1="185" x2="40" y2="200" />
            <line x1="660" y1="185" x2="660" y2="200" />
            <line x1="40" y1="195" x2="660" y2="195" />
          </g>
          <text x="310" y="208" fill="#64748B" fontSize="9" fontWeight="600">Continuous Seamless Run</text>
        </svg>
      </div>

      <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/80">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-orange-600 font-bold">
              ACTIVE SELECTION
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              {detail.name}
            </h4>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white border border-slate-200 text-slate-700">
            {detail.spec}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 text-xs">
          <div>
            <span className="font-semibold text-slate-700 block mb-1">Functional Description:</span>
            <p className="text-slate-600 leading-relaxed">{detail.desc}</p>
          </div>
          <div>
            <span className="font-semibold text-orange-700 block mb-1">Safety & Engineering Mandate:</span>
            <p className="text-slate-600 leading-relaxed">{detail.safetyRule}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
