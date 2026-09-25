import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import IsoCertSection from "@/components/sections/IsoCertSection";
import CeoMessageSection from "@/components/sections/CeoMessageSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CtaBanner from "@/components/sections/CtaBanner";
import { COMPANY_INFO } from "@/data/company";
import { ShieldCheck, Target, Eye, Award, CheckCircle2, MapPin, Building2, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | AGTRS IDART PRIVATE LIMITED",
  description:
    "Learn about IDART's legacy since 2009, ISO 9001:2015 certified operations, mission, vision, leadership, and footprint across South India.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Cinematic Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#071324] to-[#060D17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Company Profile & Legacy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Built on Trust. Driven by Safety.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">
              Powered by People.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            AGTRS IDART PRIVATE LIMITED, widely known as IDART, was established in Coimbatore in 2009 and incorporated as a Private Limited Company in 2017. Evolving into a large-scale service partner supporting LPG distributors, consumers and businesses across South India.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
              <Award className="w-4 h-4 text-amber-400" />
              17+ Years of Experience
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
              <Building2 className="w-4 h-4 text-orange-400" />
              457+ Active Branches
            </span>
            <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
              <Users className="w-4 h-4 text-blue-400" />
              482+ Qualified Staff
            </span>
          </div>
        </div>
      </section>

      {/* Company Profile Narrative & Core Territories */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                <span>The IDART Evolution</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                From a Six-Member Field Team to a South Indian Enterprise
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                “From a six-member field operation to a large South Indian service network, IDART has continuously evolved through process excellence, technical capability and customer-focused service.”
              </p>

              <p className="text-sm text-slate-400 leading-relaxed">
                The organization provides LPG mandatory inspection services, technical field assistance, consumer safety awareness, LPG pipeline solutions and other specialized engineering services to over 3,687+ distributor partners.
              </p>

              {/* Geographic Footprint Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs uppercase font-bold text-orange-400 block mb-2">
                    Primary Operational States
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {COMPANY_INFO.statesServed.map((state) => (
                      <div key={state} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400" />
                        <span>{state}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                  <span className="text-xs uppercase font-bold text-blue-400 block mb-2">
                    Expansion Corridors
                  </span>
                  <div className="space-y-1 text-xs text-slate-300">
                    {COMPANY_INFO.expansionStates.map((state) => (
                      <div key={state} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>{state}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <EnterpriseImage
                type="cylinder"
                alt="IDART Field Operations and Energy Safety"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-900/60 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Strategic Guiding Compass"
            title="Mission & Vision"
            subtitle="Anchored in customer safety, operational efficiency, and community well-being."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-orange-500/40 transition-all space-y-4 group">
              <div className="p-3.5 rounded-2xl bg-orange-500/15 text-orange-400 w-fit border border-orange-500/30 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-base text-slate-300 leading-relaxed">
                “To be a dynamic, flexible and market-responsive organization with customer service at the core of our business.”
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Uncompromising customer safety standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Digital responsiveness and swift field dispatch</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all space-y-4 group">
              <div className="p-3.5 rounded-2xl bg-blue-500/15 text-blue-400 w-fit border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-base text-slate-300 leading-relaxed">
                “To be recognized as a leading service organization in India's fire, safety and consumer service ecosystem while maintaining our commitment to people, culture and the environment.”
              </p>
              <ul className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-900">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Industry leader in pan-India energy inspection</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Sustainable growth supporting green kitchens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO Certification Detail */}
      <IsoCertSection />

      {/* CEO Profile & Message */}
      <CeoMessageSection />

      {/* Company Timeline */}
      <TimelineSection />

      {/* Call to action */}
      <CtaBanner
        title="Ready to Work With an Established Energy Safety Leader?"
        subtitle="Connect with our Coimbatore corporate office or nearest regional operations hub today."
      />
    </div>
  );
}
