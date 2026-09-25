"use client";

import React from "react";
import Link from "next/link";
import { Flame, Shield, MapPin, Phone, Mail, Award, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../../data/company";
import { FOOTER_LINKS } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-sm relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-lg shadow-orange-500/20">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-wider text-white">IDART</span>
                <p className="text-[10px] font-semibold tracking-wider text-slate-400 uppercase">
                  AGTRS IDART PRIVATE LIMITED
                </p>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              AGTRS IDART PRIVATE LIMITED is a South Indian enterprise pioneering LPG mandatory inspections, high-pressure copper pipeline installations, structural roof trusses, and financial solutions. Operating across Tamil Nadu, Kerala, Andhra Pradesh, Telangana, Puducherry, and expanding nationally.
            </p>

            {/* ISO 9001:2015 Badge */}
            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Award className="w-4 h-4 text-orange-400" />
                <span>ISO 9001:2015 Certified Organization</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                IAF Accreditation: <strong className="text-slate-200">22IQLU17</strong> (Service Codes 34, 36 & 29). Quality Management System.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                    <span className="text-orange-500">•</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-orange-400 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Regional Corporate Presence */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Corporate Presence
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Corporate Head Office</strong>
                  <span className="text-slate-400">
                    SF No - 350, AGTRS IDART Building, Maruthamalai Main Road, Mullai Nagar, Coimbatore, Tamil Nadu - 641041
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-slate-300">0422 - 4369081 / +91 8248012319</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-slate-300">info@idartpvtltd.in</span>
              </div>
            </div>

            {/* Social Icons Placeholder */}
            <div className="pt-2 flex items-center gap-3">
              {["LinkedIn", "Facebook", "YouTube", "Instagram"].map((platform) => (
                <a
                  key={platform}
                  href={`#${platform.toLowerCase()}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-semibold text-slate-300 hover:text-white hover:border-orange-500/50 hover:bg-slate-800 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Statutory Registrations */}
        <div className="mt-12 pt-8 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">Corporate Identity (CIN)</span>
            <span className="text-xs font-mono font-bold text-slate-200 mt-1 block">
              {COMPANY_INFO.compliance.cin}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">GST Registration</span>
            <span className="text-xs font-mono font-bold text-slate-200 mt-1 block">
              {COMPANY_INFO.compliance.gst}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">MSME Registration</span>
            <span className="text-xs font-mono font-bold text-slate-200 mt-1 block">
              {COMPANY_INFO.compliance.msme}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <span className="text-[10px] uppercase font-bold text-slate-400 block">D-U-N-S Number</span>
            <span className="text-xs font-mono font-bold text-slate-200 mt-1 block">
              {COMPANY_INFO.compliance.duns}
            </span>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 AGTRS IDART PRIVATE LIMITED. All Rights Reserved. CEO: S. Gowtham Kumar</p>
          <div className="flex items-center gap-4">
            <Link href="#privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link href="#terms" className="hover:text-slate-300">Terms & Conditions</Link>
            <span>•</span>
            <Link href="#disclaimer" className="hover:text-slate-300">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
