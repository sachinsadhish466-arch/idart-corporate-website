"use client";

import React, { useState, useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CtaBanner from "@/components/sections/CtaBanner";
import SouthIndiaMap from "@/components/ui/SouthIndiaMap";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
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

      const matchesState =
        selectedState === "All States" || branch.state === selectedState;

      const matchesDistrict =
        selectedDistrict === "All Districts" || branch.district === selectedDistrict;

      return matchesSearch && matchesState && matchesDistrict;
    });
  }, [searchQuery, selectedState, selectedDistrict]);

  // Paginated branches
  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);
  const currentBranches = filteredBranches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-center overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-6">
            <Building2 className="w-4 h-4 text-orange-600" />
            <span>457+ Running Branches</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            BRANCH <span className="text-orange-600">LOCATOR</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Locate IDART corporate, regional, and district operational centers across South India. Search by city, district, or state filter.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="GEOGRAPHIC ROUTING" metric="COIMBATORE HQ • 5 CORE STATES" />

      {/* Search & Filter Toolbar */}
      <section className="py-8 bg-white/95 border-b border-slate-200 sticky top-[72px] z-30 backdrop-blur-xl shadow-sm">
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
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
              />
            </div>

            {/* State Filter */}
            <div className="md:col-span-3">
              <select
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedDistrict("All Districts");
                  setCurrentPage(1);
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
              >
                {STATES_LIST.map((state) => (
                  <option key={state} value={state}>
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
                disabled={availableDistricts.length <= 1}
                className="w-full py-3 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner disabled:opacity-50"
              >
                {availableDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white border-b border-slate-100 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <span className="text-sm font-semibold text-slate-500">
              Showing <span className="text-slate-900 font-bold">{filteredBranches.length}</span> verified branch locations
            </span>
            {(selectedState !== "All States" || selectedDistrict !== "All Districts" || searchQuery !== "") && (
              <button
                onClick={() => {
                  setSelectedState("All States");
                  setSelectedDistrict("All Districts");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-semibold text-orange-600 hover:text-orange-700 transition-colors"
              >
                Clear all filters
              </button>
            )}
          </div>

          {filteredBranches.length === 0 ? (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-200">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No branches found</h3>
              <p className="text-sm text-slate-500 mt-1 max-w-sm mx-auto">
                Try clearing your search terms or selecting another state or district.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentBranches.map((branch) => (
                <div
                  key={branch.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200">
                        {branch.state}
                      </span>
                      {branch.type === "Headquarters" && (
                        <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                          Corporate HQ
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                      {branch.name}
                    </h3>

                    <div className="mt-4 space-y-2.5 text-xs text-slate-600">
                      <div className="flex items-start gap-2.5">
                        <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{branch.address}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`tel:${branch.phone}`} className="hover:text-orange-600 font-medium transition-colors">
                          {branch.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                        <a href={`mailto:${branch.email}`} className="hover:text-orange-600 transition-colors">
                          {branch.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">District: <strong className="text-slate-800">{branch.district}</strong></span>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(branch.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-orange-600 font-bold hover:underline"
                    >
                      <span>Map View</span>
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
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-colors ${
                    currentPage === page
                      ? "bg-orange-600 text-white shadow-sm"
                      : "border border-slate-200 text-slate-700 bg-white hover:bg-slate-50"
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Regional Map Overview */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Network Geography"
            title="South India Operations Map"
            subtitle="Click on any highlighted state to review branch density and regional servicing capacities."
            align="center"
          />
          <SouthIndiaMap />
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Need Technical Assistance or Inspection Dispatch?"
        subtitle="Contact your closest regional cluster branch or connect with our Coimbatore central desk."
      />
    </div>
  );
}
