"use client";

import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck, ArrowRight, PhoneCall, Award, MapPin } from "lucide-react";
import EnterpriseImage from "../ui/EnterpriseImage";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 lg:py-24 bg-gradient-to-b from-slate-950 via-[#071324] to-[#060D17]">
      {/* Background Animated Pipeline Flow Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6600" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M -100 200 Q 300 100, 700 400 T 1500 250"
            fill="none"
            stroke="url(#pipeGrad)"
            strokeWidth="2.5"
            strokeDasharray="12 8"
            className="pipeline-dash"
          />
          <path
            d="M 100 600 Q 500 350, 900 650 T 1600 400"
            fill="none"
            stroke="#ff6600"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="pipeline-dash opacity-40"
          />
        </svg>
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Top Enterprise Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                South India's Trusted Safety Enterprise
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 bg-slate-900/80 border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                ISO 9001:2015 Certified
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] uppercase">
              WE BRING <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500">FLAMES</span>
              <br />
              TO EVERY HOME
              <br />
              <span className="text-slate-200">ACROSS SOUTH INDIA</span>
            </h1>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
              Safety, service and technology powering LPG consumers, distributors and businesses across South India with certified mandatory inspection, precision copper gas pipelines, roof trusses, and financial support.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/mandatory-inspection"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-orange-600/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm uppercase tracking-wider border border-slate-700 hover:border-slate-600 transition-all hover:scale-[1.02]"
              >
                <PhoneCall className="w-4 h-4 text-orange-400" />
                <span>Contact Us</span>
              </Link>
            </div>

            {/* Micro Highlights Pill Row */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="text-lg sm:text-2xl font-black text-white block">457+</span>
                <span className="text-[11px] text-slate-400 font-medium">Running Branches</span>
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-black text-orange-400 block">3,687+</span>
                <span className="text-[11px] text-slate-400 font-medium">Distributors</span>
              </div>
              <div>
                <span className="text-lg sm:text-2xl font-black text-white block">17+ Yrs</span>
                <span className="text-[11px] text-slate-400 font-medium">Service Legacy</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Card */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <EnterpriseImage
                type="hero"
                alt="IDART LPG Safety and Energy Engineering"
                className="h-[420px] sm:h-[480px] w-full"
              />

              {/* Floating Technical Element: South India Regional Footprint */}
              <div className="absolute -top-4 -left-4 sm:-left-6 p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      South India Hub
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      Coimbatore Head Office
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Technical Element: Electronic Leak Detection */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 p-4 rounded-2xl bg-slate-900/95 border border-slate-700/80 shadow-2xl backdrop-blur-xl animate-float [animation-delay:2s]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Digital Compliance
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block">
                      482+ Field Engineers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
