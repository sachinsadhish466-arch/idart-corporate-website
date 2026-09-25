"use client";

import React, { useState } from "react";
import { Bell, ArrowRight, Award, Gift, CheckCircle2 } from "lucide-react";
import Modal from "../ui/Modal";

export default function AnnouncementBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="relative z-40 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white px-4 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/30 text-amber-200 font-bold uppercase tracking-wider text-[11px] shrink-0 border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-300" />
              </span>
              OFFICIAL ANNOUNCEMENT
            </span>
            <p className="font-semibold tracking-wide truncate text-white">
              BIG FREEDOM OFFER — WINNERS ANNOUNCEMENT & REWARD DISPATCH
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-xs bg-white text-orange-700 hover:bg-slate-100 px-3.5 py-1 rounded-full transition-all shrink-0 shadow-sm"
          >
            <span>View Announcement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Official Announcement Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="BIG FREEDOM OFFER 2025–2026"
        subtitle="Winners Announcement & Reward Dispatch Notice"
        maxWidth="xl"
      >
        <div className="space-y-6 text-slate-300 text-sm">
          <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/30 flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-orange-500/20 text-orange-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">Celebration of Safety Excellence</h4>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                AGTRS IDART PRIVATE LIMITED is proud to announce the conclusion of the Big Freedom Offer campaign, recognizing consumers and distributor partners across Tamil Nadu, Kerala, Andhra Pradesh, Telangana, and Puducherry.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h5 className="font-semibold text-white flex items-center gap-2 text-xs uppercase tracking-wider">
              <Gift className="w-4 h-4 text-orange-400" /> Key Dispatch Milestones
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400">Total Valid Participants</div>
                <div className="text-lg font-bold text-white mt-0.5">142,800+ Households</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-xs text-slate-400">Distributors Awarded</div>
                <div className="text-lg font-bold text-white mt-0.5">380+ Partner Agencies</div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider">Reward Dispatch Protocol</h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Selected winners have been notified via registered SMS and official letter.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Physical reward consignments are being dispatched through verified courier logistics.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>For verification queries, contact your nearest IDART regional office or email info@idartpvtltd.in.</span>
              </li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-800 text-center">
            <button
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
            >
              Close Announcement
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
