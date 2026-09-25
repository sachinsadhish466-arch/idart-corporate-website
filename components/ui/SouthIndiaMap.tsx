"use client";

import React, { useState } from "react";
import { BRANCH_DATA } from "../../data/branches";
import { MapPin, Phone, Mail, Navigation, Search, CheckCircle2, Globe2, Building2, ShieldCheck, ArrowRight } from "lucide-react";

interface RegionInfo {
  id: string;
  name: string;
  status: "Operational" | "Expansion";
  branchesVerified: number;
  hubCity: string;
  districts: string[];
  services: string[];
  color: string;
}

const REGIONS: RegionInfo[] = [
  {
    id: "tamil-nadu",
    name: "Tamil Nadu",
    status: "Operational",
    branchesVerified: 284,
    hubCity: "Coimbatore (HQ) / Chennai",
    districts: ["Coimbatore", "Chennai", "Madurai", "Tiruchirappalli", "Salem", "Tirupur", "Erode", "Dindigul", "Vellore", "Tirunelveli"],
    services: ["LPG Mandatory Inspection", "Copper Pipeline Grid", "Turnkey Kitchen Manifolds", "Industrial Roof Truss", "24/7 Leak Response"],
    color: "#FF6600"
  },
  {
    id: "kerala",
    name: "Kerala",
    status: "Operational",
    branchesVerified: 96,
    hubCity: "Kochi / Palakkad / Trivandrum",
    districts: ["Ernakulam", "Palakkad", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
    services: ["Reticulated LPG Systems", "Safety Certification", "Commercial Kitchens", "Roofing Solutions"],
    color: "#2563EB"
  },
  {
    id: "andhra-pradesh",
    name: "Andhra Pradesh",
    status: "Operational",
    branchesVerified: 48,
    hubCity: "Visakhapatnam / Vijayawada",
    districts: ["Visakhapatnam", "Krishna (Vijayawada)", "Guntur", "Tirupati", "Chittoor", "Kurnool"],
    services: ["Commercial Gas Pipeline", "Safety Auditing", "Industrial Manifold Engineering"],
    color: "#059669"
  },
  {
    id: "telangana",
    name: "Telangana",
    status: "Operational",
    branchesVerified: 22,
    hubCity: "Hyderabad",
    districts: ["Hyderabad", "Ranga Reddy", "Medchal-Malkajgiri", "Warangal"],
    services: ["Commercial Kitchen Piping", "High-Pressure LPG Manifolds", "Distributor Safety Network"],
    color: "#7C3AED"
  },
  {
    id: "puducherry",
    name: "Puducherry",
    status: "Operational",
    branchesVerified: 7,
    hubCity: "Puducherry City",
    districts: ["Puducherry", "Karaikal"],
    services: ["Home Inspection", "Commercial Gas Pipeline", "Safety Certification"],
    color: "#EA580C"
  },
  {
    id: "karnataka",
    name: "Karnataka",
    status: "Expansion",
    branchesVerified: 0,
    hubCity: "Bengaluru (Corridor Hub)",
    districts: ["Bengaluru Urban", "Mysuru", "Mangaluru", "Hubballi"],
    services: ["Pipeline Infrastructure Pre-Deployment", "Corporate Partnerships"],
    color: "#64748B"
  },
  {
    id: "maharashtra",
    name: "Maharashtra",
    status: "Expansion",
    branchesVerified: 0,
    hubCity: "Pune / Mumbai",
    districts: ["Pune Industrial Belt", "Mumbai Metropolitan"],
    services: ["Industrial Gas Solutions Setup", "Regional Distributor Alliances"],
    color: "#64748B"
  },
  {
    id: "madhya-pradesh",
    name: "Madhya Pradesh",
    status: "Expansion",
    branchesVerified: 0,
    hubCity: "Indore / Bhopal",
    districts: ["Indore", "Bhopal"],
    services: ["Industrial Pipeline Planning"],
    color: "#64748B"
  },
  {
    id: "odisha",
    name: "Odisha",
    status: "Expansion",
    branchesVerified: 0,
    hubCity: "Bhubaneswar",
    districts: ["Bhubaneswar", "Cuttack"],
    services: ["Coastal Industrial Expansion Survey"],
    color: "#64748B"
  }
];

export default function SouthIndiaMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionInfo>(REGIONS[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<"Operational" | "Expansion">("Operational");

  const filteredBranches = BRANCH_DATA.filter((branch) => {
    const matchesSearch =
      branch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
      branch.state.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
      {/* Top Header & Search Bar */}
      <div className="p-6 border-b border-slate-100 bg-slate-50/60">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
                GEOGRAPHIC INFRASTRUCTURE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              South India Operational Network & Expansion Corridors
            </h3>
            <p className="text-sm text-slate-500 mt-0.5">
              Verified operational centers in Tamil Nadu, Kerala, Andhra Pradesh, Telangana & Puducherry.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Status Filter Toggle */}
            <div className="inline-flex rounded-lg border border-slate-200 p-1 bg-white">
              <button
                onClick={() => setActiveTab("Operational")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  activeTab === "Operational"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Active Hubs (5)
              </button>
              <button
                onClick={() => setActiveTab("Expansion")}
                className={`px-3 py-1.5 rounded-md text-xs font-bold transition-colors ${
                  activeTab === "Expansion"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Expansion Corridors (4)
              </button>
            </div>

            {/* Quick Search */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search city, district, branch..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left) + Region/Branch Details (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
        {/* Left Column: Interactive Map Graphic */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-50/50 via-white to-orange-50/20 min-h-[460px]">
          {/* Engineering Coordinate Watermark */}
          <div className="absolute top-4 left-4 text-[10px] font-mono text-slate-400">
            [GRID-REF: SOUTH-IN-REG-V26] • 08°04'N to 19°54'N
          </div>

          {/* SVG Map Illustration of South India */}
          <svg className="w-full max-w-[480px] h-auto" viewBox="0 0 500 520" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="activeStateGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF7ED" />
                <stop offset="100%" stopColor="#FED7AA" />
              </linearGradient>
            </defs>

            {/* Expansion State Background Shapes */}
            {/* Maharashtra */}
            <path
              d="M 120 70 L 260 60 L 290 130 L 160 160 Z"
              fill="#F8FAFC"
              stroke="#E2E8F0"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="cursor-pointer hover:fill-slate-100 transition-colors"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "maharashtra")!)}
            />
            <text x="180" y="110" fill="#94A3B8" fontSize="11" fontWeight="600">Maharashtra (Exp)</text>

            {/* Telangana */}
            <path
              d="M 230 140 L 340 130 L 350 220 L 250 230 Z"
              fill={selectedRegion.id === "telangana" ? "#EDE9FE" : "#F8FAFC"}
              stroke={selectedRegion.id === "telangana" ? "#7C3AED" : "#CBD5E1"}
              strokeWidth="2"
              className="cursor-pointer transition-all"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "telangana")!)}
            />
            <text x="260" y="180" fill="#475569" fontSize="12" fontWeight="700">Telangana</text>

            {/* Andhra Pradesh */}
            <path
              d="M 270 230 L 390 190 L 440 280 L 340 340 L 260 280 Z"
              fill={selectedRegion.id === "andhra-pradesh" ? "#ECFDF5" : "#F8FAFC"}
              stroke={selectedRegion.id === "andhra-pradesh" ? "#059669" : "#CBD5E1"}
              strokeWidth="2"
              className="cursor-pointer transition-all"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "andhra-pradesh")!)}
            />
            <text x="320" y="270" fill="#334155" fontSize="12" fontWeight="700">Andhra Pradesh</text>

            {/* Karnataka */}
            <path
              d="M 150 170 L 240 180 L 230 330 L 140 310 Z"
              fill={selectedRegion.id === "karnataka" ? "#F1F5F9" : "#F8FAFC"}
              stroke={selectedRegion.id === "karnataka" ? "#64748B" : "#E2E8F0"}
              strokeWidth="1.5"
              strokeDasharray="4 3"
              className="cursor-pointer transition-all"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "karnataka")!)}
            />
            <text x="160" y="250" fill="#94A3B8" fontSize="11" fontWeight="600">Karnataka (Exp)</text>

            {/* Kerala */}
            <path
              d="M 170 340 L 205 340 L 220 480 L 195 490 Z"
              fill={selectedRegion.id === "kerala" ? "#EFF6FF" : "#F8FAFC"}
              stroke={selectedRegion.id === "kerala" ? "#2563EB" : "#CBD5E1"}
              strokeWidth="2"
              className="cursor-pointer transition-all"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "kerala")!)}
            />
            <text x="140" y="420" fill="#1D4ED8" fontSize="12" fontWeight="700">Kerala</text>

            {/* Tamil Nadu (Core Operational Heart) */}
            <path
              d="M 215 330 L 320 330 L 330 420 L 270 500 L 210 440 Z"
              fill={selectedRegion.id === "tamil-nadu" ? "url(#activeStateGrad)" : "#FFF7ED"}
              stroke={selectedRegion.id === "tamil-nadu" ? "#FF6600" : "#FB923C"}
              strokeWidth="2.5"
              className="cursor-pointer transition-all"
              onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "tamil-nadu")!)}
            />
            <text x="240" y="390" fill="#C2410C" fontSize="14" fontWeight="800">TAMIL NADU</text>
            <text x="250" y="408" fill="#FF6600" fontSize="10" fontWeight="700">(284+ Branches)</text>

            {/* Puducherry Dot */}
            <circle cx="325" cy="370" r="5" fill="#FF6600" className="cursor-pointer" onClick={() => setSelectedRegion(REGIONS.find(r => r.id === "puducherry")!)} />
            <text x="335" y="373" fill="#FF6600" fontSize="10" fontWeight="700">Puducherry</text>

            {/* Animated Transmission Flow Lines (Coimbatore -> Chennai -> Madurai -> Tiruchirappalli -> Kerala -> Andhra) */}
            <path
              d="M 225 390 L 310 340 L 270 380 L 250 440 L 200 420 L 310 260"
              fill="none"
              stroke="#FF6600"
              strokeWidth="2"
              strokeDasharray="6 4"
              className="animate-pipeline-flow opacity-70"
            />

            {/* City Network Hub Nodes */}
            <g transform="translate(225, 390)" className="cursor-pointer">
              <circle r="12" fill="#FF6600" opacity="0.2" className="animate-ping" />
              <circle r="6" fill="#FF6600" />
              <circle r="2.5" fill="#FFFFFF" />
              <text x="8" y="4" fill="#0F172A" fontSize="11" fontWeight="800">Coimbatore (HQ)</text>
            </g>

            <g transform="translate(310, 340)" className="cursor-pointer">
              <circle r="5" fill="#FF6600" />
              <circle r="2" fill="#FFFFFF" />
              <text x="8" y="4" fill="#334155" fontSize="10" fontWeight="700">Chennai</text>
            </g>

            <g transform="translate(250, 440)" className="cursor-pointer">
              <circle r="4.5" fill="#FF6600" />
              <text x="7" y="3" fill="#334155" fontSize="10" fontWeight="600">Madurai</text>
            </g>

            <g transform="translate(270, 380)" className="cursor-pointer">
              <circle r="4.5" fill="#FF6600" />
              <text x="7" y="3" fill="#334155" fontSize="10" fontWeight="600">Tiruchirappalli</text>
            </g>

            <g transform="translate(200, 420)" className="cursor-pointer">
              <circle r="5" fill="#2563EB" />
              <circle r="2" fill="#FFFFFF" />
              <text x="-65" y="4" fill="#1E40AF" fontSize="10" fontWeight="700">Kochi / Palakkad</text>
            </g>

            <g transform="translate(280, 190)" className="cursor-pointer">
              <circle r="5" fill="#7C3AED" />
              <circle r="2" fill="#FFFFFF" />
              <text x="8" y="4" fill="#5B21B6" fontSize="10" fontWeight="700">Hyderabad</text>
            </g>

            <g transform="translate(360, 240)" className="cursor-pointer">
              <circle r="5" fill="#059669" />
              <circle r="2" fill="#FFFFFF" />
              <text x="8" y="4" fill="#047857" fontSize="10" fontWeight="700">Visakhapatnam</text>
            </g>
          </svg>

          {/* Quick Legend underneath */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-xs font-medium text-slate-500">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              <span>HQ & Core Operational</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span>Active Regional Hub</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-slate-300 border border-slate-400" />
              <span>Expansion Corridor</span>
            </div>
          </div>
        </div>

        {/* Right Column: Region Insight & Branch Directory */}
        <div className="lg:col-span-5 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <span
                  className={`inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1 ${
                    selectedRegion.status === "Operational"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {selectedRegion.status === "Operational" ? "Active Operational Grid" : "Strategic Expansion"}
                </span>
                <h4 className="text-2xl font-black text-slate-900">
                  {selectedRegion.name}
                </h4>
              </div>

              {selectedRegion.status === "Operational" && (
                <div className="text-right">
                  <div className="text-2xl font-black text-orange-600">
                    {selectedRegion.branchesVerified}+
                  </div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Verified Branches
                  </div>
                </div>
              )}
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div>
                <span className="font-semibold text-slate-700 block mb-1">Key Operational Hubs:</span>
                <p className="text-slate-600">{selectedRegion.hubCity}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-700 block mb-1">Districts Covered:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedRegion.districts.map((d, i) => (
                    <span key={i} className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-[11px]">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-semibold text-slate-700 block mb-1">Service Capabilities:</span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {selectedRegion.services.map((s, i) => (
                    <li key={i} className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center justify-between">
                <span>Verified Facilities</span>
                <span className="text-[10px] font-mono text-slate-400">Showing {filteredBranches.length} locations</span>
              </h5>

              <div className="max-h-[180px] overflow-y-auto space-y-2 pr-1">
                {filteredBranches.slice(0, 4).map((b) => (
                  <div key={b.id} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50/70 hover:bg-orange-50/40 hover:border-orange-200 transition-colors">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-xs font-bold text-slate-900">{b.name}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-orange-500" />
                          <span>{b.city}, {b.district} ({b.state})</span>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200">
                        {b.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Emergency assistance available across all active sectors.
            </span>
            <a
              href="/branches"
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-600 text-white rounded-lg text-xs font-bold hover:bg-orange-700 transition-colors"
            >
              <span>All Branches</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
