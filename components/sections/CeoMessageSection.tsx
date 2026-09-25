import React from "react";
import { Quote, Award, ShieldCheck, CheckCircle2 } from "lucide-react";
import EnterpriseImage from "../ui/EnterpriseImage";

export default function CeoMessageSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#060D17] to-slate-950 relative overflow-hidden border-t border-slate-900">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-950 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* CEO Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="relative">
                <EnterpriseImage
                  type="ceo"
                  alt="S. Gowtham Kumar, CEO AGTRS IDART PRIVATE LIMITED"
                  className="w-64 h-72 sm:w-72 sm:h-80"
                />
                <div className="absolute -bottom-4 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Chief Executive Officer
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-black text-white tracking-wide">
                  S. Gowtham Kumar
                </h3>
                <p className="text-xs uppercase font-semibold text-orange-400 mt-1">
                  AGTRS IDART PRIVATE LIMITED
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Coimbatore, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* CEO Message Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Perspective</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Leadership With Purpose
              </h2>

              <div className="relative pl-6 border-l-2 border-orange-500/60 space-y-4">
                <Quote className="w-8 h-8 text-orange-500/30 absolute -top-4 -left-3 rotate-180" />
                
                <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed italic">
                  “At IDART, our ambition is simple — to build an organization where safety, service quality, technology and people come together to create lasting value.”
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  “Every service we deliver represents a responsibility toward our customers, partners and communities. Whether it is an annual mandatory inspection in a rural kitchen, a high-pressure copper pipeline in a hospital, or capital assistance for an emerging enterprise, our benchmark remains absolute excellence.”
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  “We are committed to building IDART into a trusted and respected leader in India's safety and service ecosystem.”
                </p>
              </div>

              {/* Signature Block */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-800">
                <div>
                  <div className="font-serif text-2xl font-bold text-orange-400 italic">
                    S. Gowtham Kumar
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    CEO, AGTRS IDART PRIVATE LIMITED
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 bg-slate-950 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>17+ Years Industry Legacy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
