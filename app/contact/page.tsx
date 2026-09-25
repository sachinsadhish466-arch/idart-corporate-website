"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY_INFO } from "@/data/company";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, Building2, Award } from "lucide-react";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "LPG Mandatory Inspection",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a182e] to-[#060D17] border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Connect With IDART</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            LET'S BUILD A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              SAFER FUTURE TOGETHER
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Reach out to our corporate headquarters in Coimbatore, our regional administration centers in Tamil Nadu and Andhra Pradesh, or dispatch our safety engineers for on-site assistance.
          </p>
        </div>
      </section>

      {/* Main Contact Grid (Offices + Interactive Contact Form) */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Corporate & Regional Offices Details */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
                  Corporate Locations
                </span>
                <h2 className="text-3xl font-extrabold text-white mt-1">
                  Our Administrative Hubs
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  Headquartered in Coimbatore with regional operational command centers across South India.
                </p>
              </div>

              {/* Office 1: Corporate Head Office Coimbatore */}
              <div className="p-6 rounded-3xl bg-slate-900 border-2 border-orange-500/40 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-orange-500 text-white">
                    Head Office
                  </span>
                  <span className="text-xs text-slate-400">Coimbatore, Tamil Nadu</span>
                </div>

                <h3 className="text-xl font-bold text-white">
                  Corporate Head Office
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <p>SF No - 350, AGTRS IDART Building,</p>
                      <p>Maruthamalai Main Road, Mullai Nagar,</p>
                      <p>Coimbatore, Tamil Nadu, India - 641041</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="font-mono font-semibold text-white">0422 - 4369081</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="text-slate-300 font-mono">info@idartpvtltd.in</span>
                  </div>
                </div>
              </div>

              {/* Office 2: Tamil Nadu Regional Office Vadavalli */}
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-orange-400 border border-slate-700">
                    Regional Office
                  </span>
                  <span className="text-xs text-slate-400">Vadavalli, Coimbatore</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  Tamil Nadu Regional Office
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <p>No 22, Kalidass Nagar, 2nd Cross Street,</p>
                      <p>Vadavalli, Coimbatore,</p>
                      <p>Tamil Nadu, India - 641041</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Phone className="w-5 h-5 text-orange-400 shrink-0" />
                    <span className="font-mono font-semibold text-white">+91 8248012319</span>
                  </div>
                </div>
              </div>

              {/* Office 3: Andhra Pradesh Regional Office Chittoor */}
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-800 text-blue-400 border border-slate-700">
                    Regional Office
                  </span>
                  <span className="text-xs text-slate-400">Chittoor, Andhra Pradesh</span>
                </div>

                <h3 className="text-lg font-bold text-white">
                  Andhra Pradesh Regional Office
                </h3>

                <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p>No 4/2044 - Vellore Road, Opp. NPS Women's College,</p>
                      <p>Greamspet, Chittoor,</p>
                      <p>Andhra Pradesh, India - 517002</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-1">
                    <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                    <span className="font-mono font-semibold text-white">+91 97904 47005</span>
                  </div>
                </div>
              </div>

              {/* Corporate Registrations Bar */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">CIN</span>
                  <div className="font-mono text-slate-200 mt-0.5">{COMPANY_INFO.compliance.cin}</div>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">GST</span>
                  <div className="font-mono text-slate-200 mt-0.5">{COMPANY_INFO.compliance.gst}</div>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">MSME-TN</span>
                  <div className="font-mono text-slate-200 mt-0.5">{COMPANY_INFO.compliance.msme}</div>
                </div>
                <div>
                  <span className="text-slate-500 uppercase font-bold text-[10px]">D-U-N-S</span>
                  <div className="font-mono text-slate-200 mt-0.5">{COMPANY_INFO.compliance.duns}</div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Send Enquiry Form */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative">
                <div className="mb-6">
                  <span className="text-xs uppercase font-bold text-orange-400 tracking-wider">
                    Quick Service Inquiry
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    Send Us an Official Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Our team will route your inquiry to the appropriate engineering or regional desk.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Enquiry Dispatched!</h4>
                    <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong>{formData.name}</strong>. Your requirement for <strong>{formData.service}</strong> has been logged. An IDART representative will contact you via {formData.phone} or {formData.email} within 2 hours.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-400 font-semibold uppercase mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. S. Gowtham / Distributor Manager"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-slate-400 font-semibold uppercase mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-slate-400 font-semibold uppercase mb-1">
                          Mobile Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98402 12345"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-400 font-semibold uppercase mb-1">
                        Service of Interest *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
                      >
                        <option value="LPG Mandatory Inspection">LPG Mandatory Inspection</option>
                        <option value="LPG Gas Pipeline Installation">LPG Gas Pipeline Installation</option>
                        <option value="Startup Financial Solutions">Startup Financial Solutions</option>
                        <option value="Roof Truss Solutions">Roof Truss Solutions</option>
                        <option value="Fire & Safety Services">Fire & Safety Services</option>
                        <option value="Consumer Safety Awareness">Consumer Safety Awareness</option>
                        <option value="Distributor Support Services">Distributor Support Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-400 font-semibold uppercase mb-1">
                        Your Detailed Message / Requirement *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your premise, number of connections, or inquiry details..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-orange-600/30 hover:scale-[1.01]"
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
