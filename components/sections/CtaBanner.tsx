import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall, ShieldCheck } from "lucide-react";

interface CtaBannerProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
}

export default function CtaBanner({
  title = "Partner With South India's Most Trusted Safety Organization",
  subtitle = "Whether you need mandatory domestic inspection coverage, a commercial copper gas pipeline installation, or business growth capital, our engineers and advisors are ready to serve.",
  primaryBtnText = "Request Immediate Inspection",
  primaryBtnHref = "/mandatory-inspection",
  secondaryBtnText = "Contact Our Offices",
  secondaryBtnHref = "/contact"
}: CtaBannerProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-r from-slate-950 via-[#0a182e] to-slate-950 border-t border-slate-800">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
          <ShieldCheck className="w-4 h-4" />
          <span>AGTRS IDART PRIVATE LIMITED • 24/7 Response</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href={primaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-orange-600/30 hover:scale-[1.02]"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href={secondaryBtnHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm uppercase tracking-wider border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]"
          >
            <PhoneCall className="w-4 h-4 text-orange-400" />
            <span>{secondaryBtnText}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
