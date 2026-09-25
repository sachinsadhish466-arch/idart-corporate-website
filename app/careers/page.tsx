"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
import SignaturePipelineLine from "@/components/ui/SignaturePipelineLine";
import CtaBanner from "@/components/sections/CtaBanner";
import { JOB_OPENINGS, CULTURE_PERKS, JobOpening } from "@/data/careers";
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight, UploadCloud, Users, ShieldCheck, Award } from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [appliedJobTitle, setAppliedJobTitle] = useState("");
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  // Form states
  const [applicantName, setApplicantName] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantExperience, setApplicantExperience] = useState("");

  const handleApplyClick = (job: JobOpening) => {
    setSelectedJob(job);
    setAppliedJobTitle(job.title);
    setIsApplyModalOpen(true);
    setApplicationSubmitted(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 text-center overflow-hidden">
        <div className="absolute inset-0 bg-engineering-grid opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-orange-700 border border-orange-200 mb-6">
            <Users className="w-4 h-4 text-orange-600" />
            <span>Join 482+ Energy & Safety Professionals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight uppercase leading-tight">
            BUILD YOUR CAREER WITH <span className="text-orange-600">IDART</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Be part of South India's premier LPG safety inspection, pipeline infrastructure, and engineering enterprise. We value technical integrity, continuous growth, and field excellence.
          </p>
        </div>
      </section>

      <SignaturePipelineLine label="HUMAN CAPITAL EXCELLENCE" metric="482+ VERIFIED STAFF • PAN-SOUTH INDIA RECRUITMENT" />

      {/* Culture & Perks */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Workplace Culture"
            title="Why Build Your Future at IDART?"
            subtitle="We empower our workforce with formal technical certifications, structured field safety equipment, and career advancement."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {CULTURE_PERKS.map((perk, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center font-black text-lg mb-4 border border-orange-200">
                  0{index + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  {perk.title}
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Current Openings"
            title="Explore Active Opportunities"
            subtitle="Apply online for regional field engineering, customer coordination, and corporate technical roles."
            align="center"
          />

          <div className="mt-12 space-y-4 max-w-4xl mx-auto">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-500/40 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-orange-50 text-orange-700 border border-orange-200">
                      {job.department}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700">
                      {job.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {job.experience}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(job)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-orange-600 font-bold text-xs transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isApplyModalOpen && (
        <Modal
          isOpen={isApplyModalOpen}
          onClose={() => setIsApplyModalOpen(false)}
          title={`Apply for ${appliedJobTitle}`}
        >
          {applicationSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900">Application Submitted!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you for applying to AGTRS IDART PRIVATE LIMITED. Our human resources team will review your qualifications and contact you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="Your complete name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="email@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={applicantPhone}
                    onChange={(e) => setApplicantPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Total Experience (Years)</label>
                <input
                  type="text"
                  required
                  value={applicantExperience}
                  onChange={(e) => setApplicantExperience(e.target.value)}
                  placeholder="e.g. 2 Years in Gas Piping / Field Inspection"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-orange-500 focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm mt-2"
              >
                Submit Application
              </button>
            </form>
          )}
        </Modal>
      )}

      {/* Call to action */}
      <CtaBanner
        title="Have Questions About Career Opportunities at IDART?"
        subtitle="Write directly to careers@agtrsidart.com or speak with our Coimbatore human resources team."
      />
    </div>
  );
}
