"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown, Flame, Shield, ArrowRight } from "lucide-react";
import { MAIN_NAV_ITEMS, LANGUAGES } from "../../data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-slate-950/60 backdrop-blur-md border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-lg shadow-orange-500/25 group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 animate-pulse" />
              <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-slate-950 border border-orange-400">
                <Shield className="w-3 h-3 text-orange-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-wider text-white">
                  IDART
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-400 border border-orange-500/30">
                  ISO 9001
                </span>
              </div>
              <p className="text-[10px] font-medium tracking-tight text-slate-400 uppercase">
                AGTRS IDART PRIVATE LIMITED
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all relative ${
                    isActive
                      ? "text-orange-400 bg-orange-500/10 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="ml-1 px-1.5 py-0.2 text-[9px] font-bold rounded bg-orange-500 text-white">
                      {item.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
                aria-expanded={isLangOpen}
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-orange-400" />
                <span>{selectedLang.label}</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-44 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                  <div className="px-3 py-1.5 text-[10px] uppercase font-bold tracking-wider text-slate-400 border-b border-slate-800">
                    Select Language
                  </div>
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between transition-colors ${
                        selectedLang.code === lang.code
                          ? "bg-orange-500/20 text-orange-400 font-bold"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`}
                    >
                      <span>{lang.label}</span>
                      <span className="text-[11px] text-slate-400">{lang.nativeName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* "Get Started" CTA Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-slate-950/98 border-b border-slate-800 px-4 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {LANGUAGES.slice(0, 4).map((lang) => (
              <button
                key={lang.code}
                onClick={() => setSelectedLang(lang)}
                className={`py-2 px-3 rounded-lg text-xs font-medium text-left border ${
                  selectedLang.code === lang.code
                    ? "bg-orange-500/20 border-orange-500/50 text-orange-400"
                    : "bg-slate-900 border-slate-800 text-slate-300"
                }`}
              >
                {lang.label} ({lang.nativeName})
              </button>
            ))}
          </div>

          <div className="flex flex-col space-y-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                      : "text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-orange-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-orange-500 text-white font-bold text-sm uppercase tracking-wider"
            >
              <span>Get Started / Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
