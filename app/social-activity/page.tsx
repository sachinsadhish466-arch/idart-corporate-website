"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import Modal from "@/components/ui/Modal";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
import CtaBanner from "@/components/sections/CtaBanner";
import { SOCIAL_INITIATIVES, GALLERY_CATEGORIES, SocialInitiative } from "@/data/social";
import { HeartHandshake, ShieldCheck, Users, Flame, Calendar, MapPin, Eye, Award } from "lucide-react";

export default function SocialActivityPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<SocialInitiative | null>(null);

  const filteredInitiatives =
    selectedCategory === "All"
      ? SOCIAL_INITIATIVES
      : SOCIAL_INITIATIVES.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-center overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 mb-6">
            <HeartHandshake className="w-4 h-4 text-emerald-600" />
            <span>Corporate Social Responsibility (CSR)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            COMMUNITY & <span className="text-emerald-600">ENVIRONMENT</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Beyond business, IDART champions sustainable ecology, green fuel transition, free consumer safety camps, and community welfare initiatives across South India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Award className="w-4 h-4 text-emerald-600" />
              15,000+ Native Trees Planted
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Users className="w-4 h-4 text-blue-600" />
              1,200+ Free Safety Workshops
            </span>
            <span className="flex items-center gap-1.5 bg-slate-50 px-3.5 py-2 rounded-xl border border-slate-200">
              <Flame className="w-4 h-4 text-orange-600" />
              Clean Kitchen Advocacy
            </span>
          </div>
        </div>
      </section>

      <SignaturePipelineLine label="COMMUNITY & ECOLOGY STEWARDSHIP" metric="15,000+ SAPLINGS • 1,200+ CAMPS" />

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[72px] z-20 backdrop-blur-xl shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-16 bg-white border-b border-slate-100 min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInitiatives.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <EnterpriseImage
                      type="community"
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{item.location}</span>
                  </div>
                  <span className="font-bold text-emerald-700 group-hover:underline flex items-center gap-1">
                    <span>View Story</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Item Detail Modal */}
      {activeItem && (
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem.title}
        >
          <div className="space-y-4">
            <div className="h-64 rounded-xl overflow-hidden bg-slate-100">
              <EnterpriseImage
                type="community"
                alt={activeItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-full font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                {activeItem.category}
              </span>
              <span className="px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-700">
                {activeItem.location}
              </span>
              <span className="px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-700">
                {activeItem.date}
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {activeItem.desc}
            </p>
          </div>
        </Modal>
      )}

      {/* Call to action */}
      <CtaBanner
        title="Partner With Us on Community & Safety Initiatives"
        subtitle="We collaborate with educational institutions, community welfare bodies, and environmental trusts."
      />
    </div>
  );
}
