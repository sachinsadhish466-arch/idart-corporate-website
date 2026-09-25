"use client";

import React, { useState } from "react";
import { ShieldCheck, Flame, Building2, TrendingUp, Hammer, Users, Award, MapPin } from "lucide-react";

interface EnterpriseImageProps {
  type: "hero" | "technician" | "cylinder" | "pipeline" | "finance" | "truss" | "ceo" | "factory" | "iso" | "community";
  alt: string;
  className?: string;
  overlayOpacity?: string;
  customSrc?: string;
}

export default function EnterpriseImage({
  type,
  alt,
  className = "",
  overlayOpacity = "bg-slate-950/60",
  customSrc
}: EnterpriseImageProps) {
  const [imgError, setImgError] = useState(false);

  // If a real image path is passed and has not failed, render it
  if (customSrc && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={customSrc}
          alt={alt}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className={`absolute inset-0 ${overlayOpacity} pointer-events-none`} />
      </div>
    );
  }

  // Otherwise, render a high-fidelity SVG cinematic enterprise visual
  return (
    <div className={`relative overflow-hidden rounded-2xl group bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 border border-slate-700/50 shadow-2xl ${className}`}>
      {/* Background Architectural Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`grid-${type}`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-orange-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${type})`} />
      </svg>

      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-all duration-700 pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Domain-Specific Visual Centerpiece */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 text-center">
        {type === "hero" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-600/20 border border-orange-500/30">
              <Flame className="w-14 h-14 text-orange-400 animate-pulse" />
              <div className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase bg-orange-600 text-white rounded-full">
                Safe Flow
              </div>
            </div>
            <div className="max-w-xs mx-auto">
              <p className="text-xs uppercase font-semibold tracking-widest text-orange-400">Engineering & Inspection</p>
              <h4 className="text-lg font-bold text-white mt-1">LPG Energy Network</h4>
              <p className="text-xs text-slate-400 mt-1">High-pressure copper conduits & domestic safety systems</p>
            </div>
          </div>
        )}

        {type === "pipeline" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-amber-600/30 to-slate-800 border border-amber-500/40">
              <Flame className="w-14 h-14 text-amber-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-amber-500/10 text-amber-300 rounded-md border border-amber-500/20">
                BIS & ISI Copper System
              </span>
              <h4 className="text-base font-bold text-white mt-2">Precision Copper Pipeline</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">30% higher flow, helium-tested joint seals</p>
            </div>
          </div>
        )}

        {type === "technician" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-blue-900/30 border border-blue-500/40">
              <ShieldCheck className="w-14 h-14 text-blue-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20">
                482+ Field Engineers
              </span>
              <h4 className="text-base font-bold text-white mt-2">Certified Safety Technician</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Calibrated electronic combustible gas detectors</p>
            </div>
          </div>
        )}

        {type === "truss" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-slate-800 border border-slate-600">
              <Hammer className="w-14 h-14 text-orange-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-orange-500/10 text-orange-300 rounded-md border border-orange-500/20">
                High-Tensile Steel
              </span>
              <h4 className="text-base font-bold text-white mt-2">Engineered Roof Truss</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Weather-proof structural design & CAD precision</p>
            </div>
          </div>
        )}

        {type === "finance" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-emerald-900/30 border border-emerald-500/40">
              <TrendingUp className="w-14 h-14 text-emerald-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-300 rounded-md border border-emerald-500/20">
                1872+ Disbursed Loans
              </span>
              <h4 className="text-base font-bold text-white mt-2">Startup Capital & Subsidies</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Nationalized bank facilitation & advisory</p>
            </div>
          </div>
        )}

        {type === "ceo" && (
          <div className="space-y-4">
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-slate-700 via-slate-600 to-orange-500/30 p-1 mx-auto flex items-center justify-center shadow-inner">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-300" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">S. Gowtham Kumar</h4>
              <p className="text-xs font-medium text-orange-400">Chief Executive Officer</p>
              <p className="text-[11px] text-slate-400 mt-1">AGTRS IDART PRIVATE LIMITED</p>
            </div>
          </div>
        )}

        {type === "iso" && (
          <div className="space-y-3">
            <div className="relative inline-flex items-center justify-center p-4 rounded-full bg-amber-500/20 border border-amber-400/40">
              <Award className="w-12 h-12 text-amber-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-bold uppercase bg-amber-500/20 text-amber-300 rounded border border-amber-500/30">
                ISO 9001:2015
              </span>
              <h4 className="text-base font-bold text-white mt-2">IAF - 22IQLU17</h4>
              <p className="text-xs text-slate-400 mt-1">Quality Management System (Codes 34, 36, 29)</p>
            </div>
          </div>
        )}

        {type === "cylinder" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-orange-950/40 border border-orange-500/40">
              <Flame className="w-14 h-14 text-orange-500" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-orange-500/10 text-orange-300 rounded-md border border-orange-500/20">
                3687+ LPG Distributors
              </span>
              <h4 className="text-base font-bold text-white mt-2">LPG Distribution & Safety</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Suraksha rubber hose & cylinder valve audit</p>
            </div>
          </div>
        )}

        {type === "factory" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-slate-800 border border-slate-600">
              <Building2 className="w-14 h-14 text-blue-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-blue-500/10 text-blue-300 rounded-md border border-blue-500/20">
                Commercial & Industrial
              </span>
              <h4 className="text-base font-bold text-white mt-2">Enterprise Infrastructure</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Hotels, hospitals, canteens & factories</p>
            </div>
          </div>
        )}

        {type === "community" && (
          <div className="space-y-4">
            <div className="relative inline-flex items-center justify-center p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/40">
              <MapPin className="w-14 h-14 text-emerald-400" />
            </div>
            <div>
              <span className="px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase bg-emerald-500/10 text-emerald-300 rounded-md border border-emerald-500/20">
                Community CSR
              </span>
              <h4 className="text-base font-bold text-white mt-2">South Indian Outreach</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">Over 500,000 households educated in safety</p>
            </div>
          </div>
        )}
      </div>

      {/* Decorative Border Highlights */}
      <div className="absolute inset-0 border border-slate-700/60 rounded-2xl pointer-events-none group-hover:border-orange-500/40 transition-colors duration-500" />
    </div>
  );
}
