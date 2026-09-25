"use client";

import React, { useState } from "react";
import { Eye, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Pipeline" | "Roof Truss" | "Commercial" | "Safety";
  location: string;
  client: string;
  description: string;
  year: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-pipe-1",
    title: "Multi-Storey Apartment Reticulated Pipeline",
    category: "Pipeline",
    location: "Coimbatore, Tamil Nadu",
    client: "Prestige Heights Residential",
    description: "Concealed copper manifold gas grid serving 180 luxury residential apartments from centralized cylinder banks.",
    year: "2024"
  },
  {
    id: "g-truss-1",
    title: "Industrial Clear-Span Warehouse Truss",
    category: "Roof Truss",
    location: "Kochi, Kerala",
    client: "Logistics Hub Central",
    description: "42-meter column-free Pratt steel truss structure with Galvalume roof sheeting and continuous aerodynamic ridge vents.",
    year: "2025"
  },
  {
    id: "g-comm-1",
    title: "Five-Star Hotel Commercial Gas Manifold",
    category: "Commercial",
    location: "Chennai, Tamil Nadu",
    client: "Grand Heritage Resort",
    description: "Dual 20-cylinder LOT manifold connected with electrical water-bath vaporizers supplying 36 kitchen stations simultaneously.",
    year: "2024"
  },
  {
    id: "g-safe-1",
    title: "Regional Safety Audit & Diagnostic Check",
    category: "Safety",
    location: "Madurai, Tamil Nadu",
    client: "District Distributor Alliance",
    description: "Comprehensive 8-point physical safety audit and electronic hydrocarbon sniffer testing across 1,200 consumer households.",
    year: "2025"
  },
  {
    id: "g-pipe-2",
    title: "Institutional Campus Central Kitchen Piping",
    category: "Pipeline",
    location: "Palakkad, Kerala",
    client: "Engineering College Campus",
    description: "High-pressure underground carbon steel main linked to interior silver-brazed copper sub-manifolds for heavy dining halls.",
    year: "2023"
  },
  {
    id: "g-truss-2",
    title: "Textile Mill Manufacturing Shed Structure",
    category: "Roof Truss",
    location: "Tirupur, Tamil Nadu",
    client: "Export Weaving Mill",
    description: "High-tensile tubular truss fabrication spanning 30,000 sq.ft with natural daylight polycarbonate monitoring panels.",
    year: "2024"
  }
];

export default function ProjectGallery() {
  const [filter, setFilter] = useState<string>("All");
  const [activeModalItem, setActiveModalItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      {/* Header & Filter Pills */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-orange-600 uppercase">
              ENGINEERING PORTFOLIO
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 mt-1">
            Featured Project Gallery
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Executed installations across LPG pipelines, industrial roof trusses, and commercial manifolds.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1.5">
          {["All", "Pipeline", "Roof Truss", "Commercial", "Safety"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                filter === cat
                  ? "bg-slate-900 text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry-Style Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveModalItem(item)}
            className="group relative rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white p-5 hover:shadow-xl hover:border-orange-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase tracking-wider mb-2">
                <span className="text-orange-600">{item.category}</span>
                <span className="text-slate-400">{item.year}</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-500 line-clamp-2 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
              <span className="truncate">{item.location}</span>
              <span className="shrink-0 font-bold text-orange-600 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>View</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700">
              {activeModalItem.category} • {activeModalItem.year}
            </span>

            <h3 className="text-xl font-black text-slate-900 mt-2">
              {activeModalItem.title}
            </h3>

            <div className="space-y-3 mt-4 text-xs">
              <div>
                <span className="font-semibold text-slate-700 block">Client / Project:</span>
                <span className="text-slate-600">{activeModalItem.client}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700 block">Site Location:</span>
                <span className="text-slate-600">{activeModalItem.location}</span>
              </div>
              <div>
                <span className="font-semibold text-slate-700 block">Scope of Engineering:</span>
                <p className="text-slate-600 leading-relaxed mt-0.5">{activeModalItem.description}</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                Ref: {activeModalItem.id}
              </span>
              <button
                onClick={() => setActiveModalItem(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-orange-600 transition-colors"
              >
                Close Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
