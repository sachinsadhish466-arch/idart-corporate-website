"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import Modal from "@/components/ui/Modal";
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
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a1e1a] to-[#060D17] border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-6">
            <HeartHandshake className="w-4 h-4" />
            <span>Corporate Social Responsibility (CSR)</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            COMMUNITY & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">SAFETY CSR</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Protecting families, educating youth, and advancing consumer awareness. IDART actively reinvests resources to foster fire prevention and energy safety literacy across South India.
          </p>
        </div>
      </section>

      {/* 5 Core Social Pillars */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Social Commitments"
            title="Our 5 Pillars of Responsibility"
            subtitle="Engaging citizens, schools, homemakers, and employees to foster a safer culture."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: "Consumer Safety Awareness", desc: "Live kitchen safety clinics and door-to-door demonstrations across rural and urban clusters.", icon: <ShieldCheck className="w-5 h-5 text-orange-400" /> },
              { title: "Community Programs", desc: "Free domestic gas stove servicing and subsidized rubber hose replacements for vulnerable families.", icon: <Users className="w-5 h-5 text-emerald-400" /> },
              { title: "Employee Engagement", desc: "Refresher camps, technical skills academies, and comprehensive health welfare for field personnel.", icon: <HeartHandshake className="w-5 h-5 text-blue-400" /> },
              { title: "Environmental Responsibility", desc: "Promoting efficient burner maintenance to reduce fuel wastage, carbon footprint, and soot emissions.", icon: <Flame className="w-5 h-5 text-amber-400" /> },
              { title: "Fire Safety Campaigns", desc: "Free fire extinguisher installations and evacuation drills in schools, temples, and crowded bazaars.", icon: <Award className="w-5 h-5 text-purple-400" /> }
            ].map((pillar, pIdx) => (
              <div
                key={pIdx}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-800 w-fit mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSR Masonry Gallery & Category Filter */}
      <section className="py-24 bg-[#071324]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
                Photo & Event Archive
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Recent Social Initiatives
              </h3>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredInitiatives.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer group flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-4">
                  <div className="relative h-48 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                    <EnterpriseImage
                      type="community"
                      alt={item.title}
                      className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md">
                        <Eye className="w-3.5 h-3.5 text-emerald-400" />
                        View Story
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="font-semibold text-emerald-400 uppercase tracking-wider">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {item.date}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 text-slate-400 truncate max-w-[60%]">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                  <span className="font-bold text-emerald-400 shrink-0">
                    {item.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Modal
        isOpen={activeItem !== null}
        onClose={() => setActiveItem(null)}
        title={activeItem?.title || "CSR Initiative"}
        subtitle={activeItem?.location}
        maxWidth="lg"
      >
        {activeItem && (
          <div className="space-y-4 text-sm text-slate-300">
            <div className="h-60 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
              <EnterpriseImage
                type="community"
                alt={activeItem.title}
                className="w-full h-full"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
              <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-400 font-bold uppercase">
                {activeItem.category}
              </span>
              <span>Conducted: {activeItem.date}</span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed">
              {activeItem.desc}
            </p>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-semibold">Community Impact Outcome</span>
              <span className="text-sm font-bold text-emerald-400">{activeItem.impact}</span>
            </div>
          </div>
        )}
      </Modal>

      {/* Call to action */}
      <CtaBanner
        title="Invite IDART For a Safety Awareness Clinic"
        subtitle="We conduct complimentary fire safety and LPG consumer awareness drives for resident welfare associations, colleges, and civic bodies."
        primaryBtnText="Request Awareness Workshop"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
