"use client";

import React, { useState } from "react";
import { MapPin, Building2, Users, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

interface StateNode {
  id: string;
  name: string;
  status: "Active Network" | "Expansion State";
  branchesCount: string;
  distributors: string;
  headquartersOrHub: string;
  color: string;
}

const REGION_DATA: StateNode[] = [
  {
    id: "tn",
    name: "Tamil Nadu",
    status: "Active Network",
    branchesCount: "180+ Branches",
    distributors: "1,450+ Distributors",
    headquartersOrHub: "Coimbatore Corporate HQ & Vadavalli RO",
    color: "#ff6600"
  },
  {
    id: "ap",
    name: "Andhra Pradesh",
    status: "Active Network",
    branchesCount: "95+ Branches",
    distributors: "780+ Distributors",
    headquartersOrHub: "Chittoor Regional Office & Tirupati Hub",
    color: "#ff6600"
  },
  {
    id: "kl",
    name: "Kerala",
    status: "Active Network",
    branchesCount: "85+ Branches",
    distributors: "640+ Distributors",
    headquartersOrHub: "Kochi Marine Hub & Trivandrum Center",
    color: "#ff6600"
  },
  {
    id: "tg",
    name: "Telangana",
    status: "Active Network",
    branchesCount: "60+ Branches",
    distributors: "490+ Distributors",
    headquartersOrHub: "Hyderabad Hitech City & Warangal Hub",
    color: "#ff6600"
  },
  {
    id: "py",
    name: "Puducherry",
    status: "Active Network",
    branchesCount: "12+ Branches",
    distributors: "85+ Distributors",
    headquartersOrHub: "Puducherry Coastal Operations Center",
    color: "#ff6600"
  },
  {
    id: "ka",
    name: "Karnataka",
    status: "Expansion State",
    branchesCount: "15+ Hubs",
    distributors: "140+ Distributors",
    headquartersOrHub: "Bengaluru Tech Corridor & Mysuru Branch",
    color: "#3b82f6"
  },
  {
    id: "mh",
    name: "Maharashtra",
    status: "Expansion State",
    branchesCount: "5+ Hubs",
    distributors: "50+ Distributors",
    headquartersOrHub: "Pune Industrial Node Hub",
    color: "#3b82f6"
  },
  {
    id: "od",
    name: "Odisha",
    status: "Expansion State",
    branchesCount: "3+ Hubs",
    distributors: "30+ Distributors",
    headquartersOrHub: "Bhubaneswar Smart Hub",
    color: "#3b82f6"
  },
  {
    id: "mp",
    name: "Madhya Pradesh",
    status: "Expansion State",
    branchesCount: "2+ Hubs",
    distributors: "22+ Distributors",
    headquartersOrHub: "Indore Central Gateway Node",
    color: "#3b82f6"
  }
];

export default function SouthIndiaMap() {
  const [selectedState, setSelectedState] = useState<StateNode>(REGION_DATA[0]);

  return (
    <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive SVG Map Visualizer */}
        <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[420px] bg-slate-950/60 rounded-2xl border border-slate-800/80 p-6">
          <div className="absolute top-4 left-4 flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
              Active Network
            </span>
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              Expansion Territory
            </span>
          </div>

          {/* SVG Map Layout representing South India geography and network arcs */}
          <svg viewBox="0 0 600 500" className="w-full h-auto max-h-[380px] drop-shadow-2xl">
            <defs>
              <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6600" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting network pipelines between cities */}
            <path d="M 220 370 L 320 350 L 300 270 L 260 210 L 370 190 L 190 290 Z" fill="none" stroke="url(#netGrad)" strokeWidth="1.5" strokeDasharray="4 4" className="pipeline-dash opacity-70" />
            <path d="M 220 370 L 160 410 L 180 470 L 250 450 L 320 350" fill="none" stroke="#ff6600" strokeWidth="2" strokeOpacity="0.5" />
            <path d="M 260 210 L 220 120 L 340 70" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
            <path d="M 370 190 L 460 130" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />

            {/* Coimbatore - Corporate Head Office (Star Node) */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[0])}
            >
              <circle cx="220" cy="370" r="16" fill="#ff6600" fillOpacity="0.25" className="animate-ping" />
              <circle cx="220" cy="370" r="10" fill="#ff6600" filter="url(#glow)" />
              <circle cx="220" cy="370" r="4" fill="#ffffff" />
              <text x="140" y="365" fill="#ffffff" fontSize="12" fontWeight="bold">Coimbatore (HQ)</text>
              <text x="145" y="380" fill="#ff9944" fontSize="10">Corporate Head Office</text>
            </g>

            {/* Chennai Hub */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[0])}
            >
              <circle cx="330" cy="320" r="7" fill="#ff6600" />
              <text x="345" y="325" fill="#e2e8f0" fontSize="11" fontWeight="600">Chennai</text>
            </g>

            {/* Chittoor - Andhra Pradesh Regional Office */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[1])}
            >
              <circle cx="300" cy="270" r="12" fill="#ff6600" fillOpacity="0.3" className="animate-pulse" />
              <circle cx="300" cy="270" r="8" fill="#ff6600" />
              <circle cx="300" cy="270" r="3" fill="#ffffff" />
              <text x="315" y="275" fill="#ffffff" fontSize="11" fontWeight="bold">Chittoor (AP RO)</text>
            </g>

            {/* Vijayawada & Vizag */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[1])}
            >
              <circle cx="370" cy="210" r="7" fill="#ff6600" />
              <text x="385" y="215" fill="#cbd5e1" fontSize="10">Vijayawada</text>
            </g>

            {/* Kochi & Thiruvananthapuram - Kerala */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[2])}
            >
              <circle cx="170" cy="420" r="7" fill="#ff6600" />
              <text x="105" y="425" fill="#e2e8f0" fontSize="11" fontWeight="600">Kochi</text>
              <circle cx="190" cy="470" r="6" fill="#ff6600" />
              <text x="120" y="475" fill="#cbd5e1" fontSize="10">Trivandrum</text>
            </g>

            {/* Hyderabad - Telangana */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[3])}
            >
              <circle cx="260" cy="180" r="8" fill="#ff6600" />
              <text x="275" y="185" fill="#ffffff" fontSize="11" fontWeight="600">Hyderabad</text>
            </g>

            {/* Puducherry */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[4])}
            >
              <circle cx="320" cy="355" r="6" fill="#ff6600" />
              <text x="335" y="360" fill="#cbd5e1" fontSize="10">Puducherry</text>
            </g>

            {/* Bengaluru - Karnataka */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[5])}
            >
              <circle cx="220" cy="280" r="7" fill="#3b82f6" />
              <text x="155" y="285" fill="#93c5fd" fontSize="10">Bengaluru</text>
            </g>

            {/* Pune / Maharashtra */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[6])}
            >
              <circle cx="170" cy="130" r="6" fill="#3b82f6" />
              <text x="120" y="135" fill="#93c5fd" fontSize="10">Pune</text>
            </g>

            {/* Odisha - Bhubaneswar */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[7])}
            >
              <circle cx="460" cy="130" r="6" fill="#3b82f6" />
              <text x="400" y="125" fill="#93c5fd" fontSize="10">Bhubaneswar</text>
            </g>

            {/* Madhya Pradesh - Indore */}
            <g
              className="cursor-pointer transition-transform hover:scale-110"
              onClick={() => setSelectedState(REGION_DATA[8])}
            >
              <circle cx="220" cy="70" r="6" fill="#3b82f6" />
              <text x="175" y="75" fill="#93c5fd" fontSize="10">Indore</text>
            </g>
          </svg>

          <p className="mt-2 text-xs text-slate-400 text-center">
            Click on any city node or choose from the list to view regional infrastructure.
          </p>
        </div>

        {/* State Information Details Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex flex-wrap gap-2">
            {REGION_DATA.map((state) => (
              <button
                key={state.id}
                onClick={() => setSelectedState(state)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedState.id === state.id
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                {state.name}
              </button>
            ))}
          </div>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <span
                  className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                    selectedState.status === "Active Network"
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}
                >
                  {selectedState.status}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedState.name}
                </h3>
              </div>
              <Shield className="w-8 h-8 text-orange-500" />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Building2 className="w-4 h-4 text-orange-400" />
                  Branch Footprint
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  {selectedState.branchesCount}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                  <Users className="w-4 h-4 text-blue-400" />
                  Distributors
                </div>
                <div className="mt-1 text-lg font-bold text-white">
                  {selectedState.distributors}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-xs text-slate-400 uppercase font-semibold">Key Regional Center</div>
                <div className="text-sm font-medium text-slate-200 mt-0.5">
                  {selectedState.headquartersOrHub}
                </div>
              </div>
            </div>

            <Link
              href={`/branches?state=${encodeURIComponent(selectedState.name)}`}
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-semibold text-sm transition-all shadow-lg shadow-orange-600/25"
            >
              <span>Explore {selectedState.name} Branch Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
