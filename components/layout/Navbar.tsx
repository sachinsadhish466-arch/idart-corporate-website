"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Flame, Shield, ArrowRight, PhoneCall } from "lucide-react";
import { MAIN_NAV_ITEMS } from "../../data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Flame className="w-5 h-5 animate-pulse" />
              <div className="absolute -bottom-1 -right-1 p-0.5 rounded-full bg-white border border-orange-200">
                <Shield className="w-3 h-3 text-orange-600" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wider text-slate-900">
                  i-DART<span className="text-orange-600">.</span>
                </span>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200 hidden sm:inline-block">
                  ISO 9001
                </span>
              </div>
              <p className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-semibold hidden md:block">
                AGTRS IDART PRIVATE LIMITED
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                    isActive
                      ? "text-orange-600 bg-orange-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+918248012319"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-orange-600 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>Helpline</span>
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 transition-colors shadow-sm"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-100 space-y-1">
            {MAIN_NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <Link
                href="/mandatory-inspection"
                className="flex-1 py-2.5 text-center text-xs font-bold bg-orange-600 text-white rounded-lg"
              >
                Book Inspection
              </Link>
              <Link
                href="/contact"
                className="flex-1 py-2.5 text-center text-xs font-bold bg-slate-100 text-slate-800 rounded-lg"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
