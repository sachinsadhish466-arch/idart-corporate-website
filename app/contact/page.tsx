"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
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
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-center overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-6">
            <Building2 className="w-4 h-4 text-orange-600" />
            <span>Coimbatore Corporate Headquarters & Regional Hubs</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            CONNECT WITH <span className="text-orange-600">IDART</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Reach our central corporate desk in Coimbatore, book commercial LPG pipeline surveys, or coordinate with our regional branch managers across South India.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="DISPATCH & TELEMETRY DESK" metric="MONDAY – SATURDAY • 9:30 AM – 6:30 PM IST" />

      {/* Main Contact Grid */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                <h2 className="text-xl font-bold text-slate-900 pb-4 border-b border-slate-100">
                  Head Office Address
                </h2>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">AGTRS IDART PRIVATE LIMITED</h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {COMPANY_INFO.headOffice.address.join(", ")}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Helpline Phone</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      <a href={`tel:${COMPANY_INFO.headOffice.phone}`} className="hover:text-orange-600 font-semibold transition-colors">
                        {COMPANY_INFO.headOffice.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Official Email</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      <a href={`mailto:${COMPANY_INFO.headOffice.email}`} className="hover:text-orange-600 font-semibold transition-colors">
                        {COMPANY_INFO.headOffice.email}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-200 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Working Hours</h3>
                    <p className="mt-1 text-xs text-slate-600">
                      Monday - Saturday: 9:30 AM - 6:30 PM IST
                    </p>
                  </div>
                </div>
              </div>

              {/* Corporate Credential Card */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span>Corporate Identification</span>
                </div>
                <p>CIN: <strong className="text-slate-800">{COMPANY_INFO.compliance.cin}</strong></p>
                <p>ISO Standard: <strong className="text-slate-800">{COMPANY_INFO.compliance.iso}</strong></p>
                <p>Incorporated: <strong className="text-slate-800">{COMPANY_INFO.incorporatedYear}</strong> (Active since {COMPANY_INFO.foundedYear})</p>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Send an Engineering Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mb-8">
                  Fill in your details below and an IDART customer service or technical manager will respond within 24 business hours.
                </p>

                {formSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                      Thank you for contacting AGTRS IDART PRIVATE LIMITED. Our Coimbatore desk will reach out shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">Service of Interest</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner"
                        >
                          <option value="LPG Mandatory Inspection">LPG Mandatory Safety Inspection</option>
                          <option value="Commercial Pipeline">Commercial Reticulated Gas Pipeline</option>
                          <option value="Roof Truss Structure">Engineered Roof Truss & Shed</option>
                          <option value="Startup Solutions">Commercial Kitchen & Startup Advisory</option>
                          <option value="Distributor Partnership">LPG Distributor Agency Empanelment</option>
                          <option value="Other">General Corporate Inquiry</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">Your Message / Project Scope</label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your facility location, kitchen equipment requirements, or inspection scheduling details..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-orange-500 focus:bg-white transition-all shadow-inner resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Engineering Inquiry</span>
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
