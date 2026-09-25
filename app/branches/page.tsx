"use client";

import React, { useState, useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import SouthIndiaMap from "@/components/ui/SouthIndiaMap";
import { BRANCH_DATA, STATES_LIST, Branch } from "@/data/branches";
import { Search, MapPin, Phone, Mail, Building2, Users, Filter, ChevronRight } from "lucide-react";

export default function BranchesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedState, setSelectedState] = useState("All States");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Extract unique districts based on selected state
  const availableDistricts = useMemo(() => {
    const relevantBranches =
      selectedState === "All States"
        ? BRANCH_DATA
        : BRANCH_DATA.filter((b) => b.state === selectedState);
    const districts = Array.from(new Set(relevantBranches.map((b) => b.district))).sort();
    return ["All Districts", ...districts];
  }, [selectedState]);

  // Filter branches
  const filteredBranches = useMemo(() => {
    return BRANCH_DATA.filter((branch) => {
      const matchesSearch =
        searchQuery === "" ||
        branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        branch.address.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = selectedState === "All States" || branch.state === selectedState;
      const matchesDistrict = selectedDistrict === "All Districts" || branch.district === selectedDistrict;

      return matchesSearch && matchesState && matchesDistrict;
    });
  }, [searchQuery, selectedState, selectedDistrict]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage) || 1;
  const paginatedBranches = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredBranches.slice(start, start + itemsPerPage);
  }, [filteredBranches, currentPage]);

  const handleStateChange = (state: string) => {
    setSelectedState(state);
    setSelectedDistrict("All Districts");
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a182e] to-[#060D17] border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-6">
            <Building2 className="w-4 h-4" />
            <span>457+ Running Branches</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            BRANCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">LOCATOR</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Locate IDART corporate, regional, and district operational centers across South India. Search by city, district, or state filter.
          </p>
        </div>
      </section>

      {/* Search & Filter Toolbar */}
      <section className="py-12 bg-slate-950 border-b border-slate-900 sticky top-[72px] z-30 backdrop-blur-xl bg-slate-950/95 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search branch name, city, district, or address..."
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-orange-500"
              />
            </div>

            {/* State Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedState}
                onChange={(e) => handleStateChange(e.target.value)}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                {STATES_LIST.map((state) => (
                  <option key={state} value={state} className="bg-slate-900 text-white">
                    {state}
                  </option>
                ))}
              </select>
            </div>

            {/* District Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedDistrict}
                onChange={(e) => {
                  setSelectedDistrict(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-4 py-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 text-sm focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                {availableDistricts.map((dist) => (
                  <option key={dist} value={dist} className="bg-slate-900 text-white">
                    {dist}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>
              Showing <strong>{filteredBranches.length}</strong> centers matching your filters
            </span>
            {(searchQuery || selectedState !== "All States" || selectedDistrict !== "All Districts") && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedState("All States");
                  setSelectedDistrict("All Districts");
                  setCurrentPage(1);
                }}
                className="text-orange-400 hover:text-orange-300 font-semibold"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Branch Cards Directory Grid */}
      <section className="py-20 bg-[#060D17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {paginatedBranches.length === 0 ? (
            <div className="text-center py-16 p-8 rounded-3xl bg-slate-900 border border-slate-800">
              <Building2 className="w-12 h-12 text-slate-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">No Branches Found</h3>
              <p className="text-xs text-slate-400 mt-2">
                Try searching for a different city or clearing your state and district filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedBranches.map((branch) => (
                <div
                  key={branch.id}
                  className="p-6 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-orange-400 border border-slate-700">
                        {branch.state}
                      </span>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                          branch.type === "Headquarters"
                            ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                            : branch.type === "Regional Office"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-slate-800/80 text-slate-300"
                        }`}
                      >
                        {branch.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {branch.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-400 mt-0.5">
                        {branch.city}, {branch.district} District
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{branch.address}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="font-mono text-slate-200">{branch.phone}</span>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                        <span className="text-slate-400 truncate">{branch.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Users className="w-3.5 h-3.5 text-blue-400" />
                      <span>{branch.techniciansCount} Field Officers</span>
                    </span>

                    <a
                      href={`tel:${branch.phone.replace(/[^0-9+]/g, "")}`}
                      className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1"
                    >
                      <span>Call Hub</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
              >
                Previous
              </button>

              <span className="px-4 py-2 text-xs text-slate-400 font-medium">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Map Visualizer */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Network Topology"
            title="Interactive South India Map"
            subtitle="View interconnected operational hubs across Tamil Nadu, Kerala, Andhra Pradesh, Telangana, and Puducherry."
            align="center"
          />
          <SouthIndiaMap />
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Can't Find Your Town or Taluk?"
        subtitle="IDART services 457+ branches and mobile technician dispatch routes covering all surrounding taluks across South India."
        primaryBtnText="Contact Regional Desk"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
