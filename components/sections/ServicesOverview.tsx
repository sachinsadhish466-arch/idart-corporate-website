import React from "react";
import Link from "next/link";
import { CORE_SERVICES } from "../../data/services";
import SectionHeading from "../ui/SectionHeading";
import { ArrowRight, ShieldCheck, Flame, TrendingUp, Hammer, ShieldAlert, Users, Wrench, Briefcase } from "lucide-react";

export default function ServicesOverview() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-orange-400" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-amber-400" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case "Hammer":
        return <Hammer className="w-6 h-6 text-blue-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-6 h-6 text-red-400" />;
      case "Users":
        return <Users className="w-6 h-6 text-purple-400" />;
      case "Wrench":
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case "Briefcase":
      default:
        return <Briefcase className="w-6 h-6 text-orange-400" />;
    }
  };

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden" id="services">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Integrated Capabilities"
          title="What We Offer"
          subtitle="From mandatory domestic cylinder audits and industrial copper gas piping to structural engineering and enterprise financial solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-orange-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 hover:shadow-orange-500/10"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 group-hover:bg-orange-500/10 group-hover:border-orange-500/30 transition-all">
                    {getIcon(service.icon)}
                  </div>
                  {service.badge && (
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase rounded bg-orange-500/15 text-orange-400 border border-orange-500/25">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Highlights List */}
                <div className="mt-4 pt-4 border-t border-slate-800/80 space-y-1.5">
                  {service.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                      <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/60">
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
