"use client";

import React, { useState } from "react";
import { Users, Briefcase, MessageSquare, Send, X, Shield, Lock, Phone } from "lucide-react";
import Modal from "../ui/Modal";

export default function FloatingActionButtons() {
  const [activeModal, setActiveModal] = useState<"employee" | "distributor" | "chat" | null>(null);

  // Chat message simulation state
  const [chatMessages, setChatMessages] = useState([
    { sender: "idart", text: "Welcome to IDART Corporate Assistance. How can we help you today with LPG Inspection, Pipeline Installation, or Financial Solutions?" }
  ]);
  const [inputMsg, setInputMsg] = useState("");

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setChatMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputMsg("");
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "idart",
          text: "Thank you for reaching out. An IDART customer safety officer or service coordinator will connect with your inquiry shortly. You can also call our Coimbatore HQ at 0422 - 4369081."
        }
      ]);
    }, 800);
  };

  return (
    <>
      {/* Floating Buttons Stack */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        {/* Employees Floating Button */}
        <div className="relative group flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold whitespace-nowrap shadow-xl">
            Staff & Field Officer Portal
          </span>
          <button
            onClick={() => setActiveModal("employee")}
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group-hover:bg-slate-800"
            aria-label="Employees Portal"
          >
            <Users className="w-5 h-5 text-orange-400" />
          </button>
        </div>

        {/* Distributors Floating Button */}
        <div className="relative group flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold whitespace-nowrap shadow-xl">
            3687+ Distributor Partner Desk
          </span>
          <button
            onClick={() => setActiveModal("distributor")}
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 hover:border-orange-500 text-slate-200 hover:text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 group-hover:bg-slate-800"
            aria-label="Distributors Portal"
          >
            <Briefcase className="w-5 h-5 text-blue-400" />
          </button>
        </div>

        {/* Live Chat Floating Button */}
        <div className="relative group flex items-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none absolute right-14 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-semibold whitespace-nowrap shadow-xl">
            Live Support & Emergency
          </span>
          <button
            onClick={() => setActiveModal("chat")}
            className="w-13 h-13 rounded-full bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white flex items-center justify-center shadow-2xl shadow-orange-600/40 transition-all transform hover:scale-110 active:scale-95 animate-pulse-glow"
            aria-label="IDART Chat Assistant"
          >
            <MessageSquare className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Employee Login Modal */}
      <Modal
        isOpen={activeModal === "employee"}
        onClose={() => setActiveModal(null)}
        title="IDART Field & Staff Login"
        subtitle="Authorized AGTRS IDART Employee Portal"
        maxWidth="md"
      >
        <div className="space-y-4 text-sm text-slate-300">
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs flex items-center gap-2 text-orange-300">
            <Lock className="w-4 h-4 text-orange-400 shrink-0" />
            <span>Dedicated gateway for 482+ qualified field safety engineers and staff.</span>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Verification code sent to your registered field mobile device."); setActiveModal(null); }} className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Employee Code / Field ID
              </label>
              <input
                type="text"
                placeholder="e.g. IDART-FLD-458"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                Security Password / OTP
              </label>
              <input
                type="password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/20"
            >
              Access Field Console
            </button>
          </form>
        </div>
      </Modal>

      {/* Distributor Portal Modal */}
      <Modal
        isOpen={activeModal === "distributor"}
        onClose={() => setActiveModal(null)}
        title="Distributor Partner Support Desk"
        subtitle="Serving 3,687+ LPG Distributors Across South India"
        maxWidth="lg"
      >
        <div className="space-y-5 text-sm text-slate-300">
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Distributor Hotline</span>
              <div className="text-sm font-bold text-white mt-1">0422 - 4369081</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs text-slate-400">Emergency Support</span>
              <div className="text-sm font-bold text-orange-400 mt-1">+91 8248012319</div>
            </div>
          </div>

          <div className="space-y-2">
            <h5 className="font-semibold text-white text-xs uppercase tracking-wider">Distributor Portal Services</h5>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
              <li>Request cyclical mandatory inspection batches for consumer cylinders</li>
              <li>Download consumer digital safety compliance certificates</li>
              <li>Order Suraksha rubber hoses, regulators, and brass manifold fittings</li>
              <li>Schedule technical technician escalation for complex pipeline leak checks</li>
            </ul>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); alert("Your distributor service request has been logged. An area manager will call you within 15 minutes."); setActiveModal(null); }} className="space-y-3 pt-2">
            <input
              type="text"
              placeholder="Distributor Agency Name & Consumer ID"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
            />
            <input
              type="tel"
              placeholder="Registered Mobile Number"
              required
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm"
            />
            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Submit Distributor Service Request
            </button>
          </form>
        </div>
      </Modal>

      {/* Live Chat Modal */}
      <Modal
        isOpen={activeModal === "chat"}
        onClose={() => setActiveModal(null)}
        title="IDART Live Assistance"
        subtitle="Safety, Pipeline & Corporate Inquiry"
        maxWidth="md"
      >
        <div className="flex flex-col h-[380px]">
          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto space-y-3 p-2">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-orange-500 text-white rounded-br-none"
                      : "bg-slate-950 border border-slate-800 text-slate-200 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSendChat} className="mt-3 pt-3 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask about inspection, pipeline, or branches..."
              className="flex-1 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}
