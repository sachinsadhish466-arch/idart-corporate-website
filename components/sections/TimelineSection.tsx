import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { TIMELINE_MILESTONES } from "../../data/timeline";
import { Calendar, CheckCircle2 } from "lucide-react";

export default function TimelineSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 via-[#071324] to-slate-950 relative overflow-hidden" id="timeline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Growth & Legacy"
          title="The IDART Journey: 2009 — 2026"
          subtitle="From a dedicated six-member field team in Coimbatore to a prominent South Indian safety and engineering enterprise."
          align="center"
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Center Spine Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-500 via-amber-500 to-blue-500" />

          <div className="space-y-12">
            {TIMELINE_MILESTONES.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={event.year}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? "sm:flex-row-reverse" : ""
                  } gap-8`}
                >
                  {/* Center Node Indicator */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-orange-500 text-orange-400 z-10 shadow-lg shadow-orange-500/30">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 px-2 sm:px-6">
                    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 group shadow-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">
                          {event.year}
                        </span>
                        {event.stat && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/10 text-orange-400 border border-orange-500/20">
                            {event.stat}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                        {event.title}
                      </h3>

                      <div className="text-xs text-orange-400/90 font-medium mb-2">
                        {event.subtitle}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
