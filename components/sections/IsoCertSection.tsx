import React from "react";
import SectionHeading from "../ui/SectionHeading";
import { Award, ShieldCheck, CheckCircle2, FileCheck2, Scale } from "lucide-react";
import EnterpriseImage from "../ui/EnterpriseImage";

export default function IsoCertSection() {
  return (
    <section className="py-24 bg-slate-950/80 relative overflow-hidden" id="iso-certification">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="International Accreditation"
          title="Quality Built Into Every Process"
          subtitle="Our ISO 9001:2015 certified Quality Management System underpins every field inspection, copper installation, and safety campaign."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Certificate Badge Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border-2 border-amber-500/40 shadow-2xl relative group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">ISO 9001:2015</h3>
                    <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                      Quality Management System
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                  Certified
                </span>
              </div>

              <div className="mt-6 space-y-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-bold block">Accreditation Identity</span>
                  <span className="text-base font-mono font-bold text-white mt-1 block">
                    IAF - 22IQLU17
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-bold block">IAF Service Codes</span>
                  <div className="flex items-center gap-2 mt-2">
                    {["Code 34", "Code 36", "Code 29"].map((code) => (
                      <span key={code} className="px-2.5 py-1 rounded-lg bg-slate-900 text-amber-300 font-mono font-bold text-xs border border-slate-700">
                        {code}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 text-xs uppercase font-bold block mb-1">Audited Scope</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    “Providing inspection services and conducting consumer safety awareness programs & import and trading of fire extinguishers.”
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>AGTRS IDART PRIVATE LIMITED</span>
                <span className="text-amber-400 font-semibold">Strict Regulatory Audit</span>
              </div>
            </div>
          </div>

          {/* Compliance & Quality Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-orange-400 font-bold text-base">
                <ShieldCheck className="w-5 h-5 shrink-0" />
                <span>Standardized Operating Procedures (SOPs)</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Every field technician operates under calibrated procedural guidelines matching Oil Marketing Company (OMC) standards and Bureau of Indian Standards (BIS) specifications.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-blue-400 font-bold text-base">
                <FileCheck2 className="w-5 h-5 shrink-0" />
                <span>Traceable Digital Certification Records</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                No manual paper slips. Each mandatory inspection and pipeline pressure test generates an immutable digital inspection certificate stored securely in the IDART cloud infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3 text-emerald-400 font-bold text-base">
                <Scale className="w-5 h-5 shrink-0" />
                <span>Statutory & Corporate Governance</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Registered under the Ministry of Corporate Affairs (CIN: U01100TZ2017PTC029601), GST compliant, MSME verified, and verified internationally through D-U-N-S: 772076483.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
