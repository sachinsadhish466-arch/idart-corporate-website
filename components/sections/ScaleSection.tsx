import React from "react";
import StatsCounter from "../ui/StatsCounter";
import SectionHeading from "../ui/SectionHeading";
import { Building2, Users, Briefcase, Calendar, MapPin, Network } from "lucide-react";

export default function ScaleSection() {
  return (
    <section className="py-20 bg-slate-950/70 relative border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Enterprise Magnitude"
          title="Scale That Powers Confidence"
          subtitle="Operating across South India with deep technical infrastructure, trained field manpower, and thousands of partner agencies."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <StatsCounter
            end={457}
            suffix="+"
            label="Current Running Branches"
            sublabel="Direct operational centers throughout Tamil Nadu, Kerala, AP, and Telangana"
            icon={<Building2 className="w-6 h-6 text-orange-400" />}
          />

          <StatsCounter
            end={482}
            suffix="+"
            label="Qualified Staff & Engineers"
            sublabel="Certified field officers, safety inspectors, and technical engineers"
            icon={<Users className="w-6 h-6 text-blue-400" />}
          />

          <StatsCounter
            end={3687}
            suffix="+"
            label="Distributors Served"
            sublabel="Trusted by LPG distribution agencies across private and OMC networks"
            icon={<Briefcase className="w-6 h-6 text-emerald-400" />}
          />

          <StatsCounter
            end={17}
            suffix="+ Years"
            label="Years of Experience"
            sublabel="Unbroken track record of safety excellence since our founding in 2009"
            icon={<Calendar className="w-6 h-6 text-amber-400" />}
          />

          <StatsCounter
            end={4}
            suffix=" Key Hubs"
            label="Regional Offices"
            sublabel="Dedicated administration & dispatch in Coimbatore, Chittoor, and hubs"
            icon={<MapPin className="w-6 h-6 text-purple-400" />}
          />

          <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-950/40 via-slate-900 to-slate-950 border border-orange-500/30 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-400 mb-4 border border-orange-500/20">
                <Network className="w-6 h-6" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                South India
              </div>
              <div className="text-base font-semibold text-orange-400 mt-1">
                Wide Service Network
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Covering Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Puducherry with active expansion into Karnataka, Maharashtra, Odisha, and MP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
