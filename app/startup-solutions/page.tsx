import type { Metadata } from "next";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import EnterpriseImage from "@/components/ui/EnterpriseImage";
import StatsCounter from "@/components/ui/StatsCounter";
import CtaBanner from "@/components/sections/CtaBanner";
import { TrendingUp, Landmark, ShieldCheck, CheckCircle2, ArrowRight, DollarSign, Building2, Users } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Startup Solutions & Business Loans | AGTRS IDART PRIVATE LIMITED",
  description:
    "Structured financial assistance, subsidy funding, and business loans for emerging startups and expanding enterprises in partnership with leading centralized banks.",
};

export default function StartupSolutionsPage() {
  const financialServices = [
    {
      title: "Government Subsidy Loans",
      desc: "Guidance on government subsidy schemes including PMEGP, MSME capital investment subsidies, and state industrial interest subsidies.",
      features: ["Maximized subsidy entitlement", "Comprehensive project report preparation", "Direct liaison with nodal agencies"]
    },
    {
      title: "Structured Business Loans",
      desc: "Term loans and working capital credit facilities engineered for machinery procurement, commercial facility expansion, and inventory scaling.",
      features: ["Competitive centralized bank interest rates", "Flexible collateral and tenure options", "Dedicated relationship manager"]
    },
    {
      title: "Unsecured Business Loans",
      desc: "Fast-track unsecured capital solutions designed for high-growth enterprises needing immediate liquidity without physical asset mortgage.",
      features: ["Zero collateral requirements", "Streamlined credit assessment", "Rapid disbursement cycle"]
    }
  ];

  const fundingJourney = [
    { step: 1, title: "Understand Your Requirement", desc: "Detailed consultation evaluating your business model, cash flows, and capital requirements." },
    { step: 2, title: "Eligibility Assessment", desc: "Evaluating financial statements, credit health, and matching against suitable banking schemes." },
    { step: 3, title: "Documentation", desc: "Preparation of detailed project reports (DPR), CMA data, statutory compliance, and loan paperwork." },
    { step: 4, title: "Application Processing", desc: "Direct submission to partner centralized banks with dedicated corporate liaison oversight." },
    { step: 5, title: "Sanction & Approval", desc: "Verification, credit sanction committee approval, and prompt issuance of the loan sanction letter." },
    { step: 6, title: "Fund Disbursal", desc: "Swift transfer of capital directly into your company's designated account for seamless growth execution." }
  ];

  const partnerBanks = [
    "State Bank of India",
    "Canara Bank",
    "Bank of Baroda",
    "Punjab National Bank",
    "Indian Bank",
    "Union Bank of India",
    "Central Bank of India",
    "Indian Overseas Bank"
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a1e1e] to-[#060D17] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                <TrendingUp className="w-4 h-4" />
                <span>Enterprise Capital Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
                STARTUP <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500">
                  SOLUTIONS
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
                Funding and financial solutions designed to help businesses move from ideas to growth. IDART Startup Solutions provides structured financial assistance for startups and growing businesses through streamlined loan processing and financial guidance.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <Landmark className="w-4 h-4 text-emerald-400" />
                  Leading Centralized Bank Partners
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3.5 py-2 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-4 h-4 text-teal-400" />
                  Government Subsidy Guidance
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <EnterpriseImage
                type="finance"
                alt="IDART Startup Financial Solutions and Bank Capital"
                className="h-[420px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Verified Statistics Grid */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCounter
              end={1872}
              suffix="+"
              label="Successful Loans Facilitated"
              sublabel="Disbursed capital driving grassroots innovation and industrial expansion"
              icon={<TrendingUp className="w-6 h-6 text-emerald-400" />}
            />
            <StatsCounter
              end={2000}
              suffix="+"
              label="Happy Corporate Clients"
              sublabel="Enterprises empowered across manufacturing, services, and trade"
              icon={<Users className="w-6 h-6 text-teal-400" />}
            />
            <StatsCounter
              end={17}
              suffix="+ Yrs"
              label="Financial & Industry Legacy"
              sublabel="Unbroken advisory credibility backed by corporate governance"
              icon={<Landmark className="w-6 h-6 text-amber-400" />}
            />
            <StatsCounter
              end={1200}
              suffix="+"
              label="Energetic Group Employees"
              sublabel="Dedicated ecosystem supporting end-to-end client success"
              icon={<Building2 className="w-6 h-6 text-blue-400" />}
            />
          </div>
        </div>
      </section>

      {/* Financial Offerings (Subsidy, Business Loan, Unsecured Loan) */}
      <section className="py-24 bg-[#071324]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Funding Vehicles"
            title="Tailored Loan Formats"
            subtitle="Custom financing structures matched to your exact business lifecycle and cash flow profile."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {financialServices.map((serv, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit mb-5 border border-emerald-500/20 group-hover:scale-110 transition-transform">
                    <DollarSign className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {serv.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {serv.desc}
                  </p>

                  <ul className="mt-6 pt-6 border-t border-slate-800/80 space-y-2.5">
                    {serv.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Check Eligibility</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Funding Journey */}
      <section className="py-24 bg-slate-950 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Process"
            title="Your Funding Journey: 6 Seamless Steps"
            subtitle="Transparent progression from requirement discovery to institutional disbursement."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fundingJourney.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/40 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 font-black text-sm flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    0{step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Step {step.step}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {step.title}
                </h4>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnered with Leading Centralized Banks */}
      <section className="py-20 bg-[#060D17] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div>
            <span className="text-xs uppercase font-bold text-emerald-400 tracking-wider">
              Financial Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              We Are Partnered With Leading Centralized Banks
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
              Our financial desk works in direct coordination with leading public and scheduled commercial banking institutions to ensure competitive interest rates and seamless sanction approvals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {partnerBanks.map((bank, bIdx) => (
              <div
                key={bIdx}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center justify-center gap-2 hover:border-emerald-500/40 hover:text-white transition-colors"
              >
                <Landmark className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{bank}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <CtaBanner
        title="Ready to Secure Growth Funding For Your Enterprise?"
        subtitle="Speak with an IDART financial solutions advisor for a free preliminary eligibility review."
        primaryBtnText="Apply for Business Loan"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
