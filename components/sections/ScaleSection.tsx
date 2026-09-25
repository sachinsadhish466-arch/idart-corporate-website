"use client";

import React, { useEffect, useState, useRef } from "react";
import { Building2, Users, Flame, Calendar, ShieldCheck } from "lucide-react";

interface StatItem {
  id: string;
  target: number;
  suffix: string;
  label: string;
  sub: string;
  icon: any;
}

const STATS: StatItem[] = [
  {
    id: "branches",
    target: 457,
    suffix: "+",
    label: "Active Branches",
    sub: "Operational centers across South India",
    icon: Building2
  },
  {
    id: "workforce",
    target: 482,
    suffix: "+",
    label: "Staff & Workforce",
    sub: "Certified field engineers & technicians",
    icon: Users
  },
  {
    id: "distributors",
    target: 3687,
    suffix: "+",
    label: "Distributor Network",
    sub: "LPG distribution partners served",
    icon: Flame
  },
  {
    id: "years",
    target: 17,
    suffix: "+",
    label: "Years of Heritage",
    sub: "Continuous operational excellence (2009-2026)",
    icon: Calendar
  }
];

export default function ScaleSection() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          STATS.forEach((stat, index) => {
            const duration = 1600;
            const steps = 40;
            const stepTime = duration / steps;
            const increment = stat.target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                current = stat.target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
                className="relative bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-400">
                      METRIC 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                    {hasAnimated ? counts[idx] : 0}
                    <span className="text-orange-600">{stat.suffix}</span>
                  </div>

                  <div className="w-12 h-1 bg-orange-500 rounded-full mt-2 mb-2 group-hover:w-20 transition-all duration-300" />

                  <h4 className="text-sm font-bold text-slate-800">
                    {stat.label}
                  </h4>
                </div>

                <p className="text-xs text-slate-500 mt-1 leading-snug">
                  {stat.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
