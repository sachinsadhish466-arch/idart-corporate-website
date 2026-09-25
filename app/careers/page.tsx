"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Modal from "@/components/ui/Modal";
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
  const [resumeFileName, setResumeFileName] = useState("");

  const handleOpenApply = (jobTitle: string) => {
    setAppliedJobTitle(jobTitle);
    setSelectedJob(null);
    setApplicationSubmitted(false);
    setIsApplyModalOpen(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFileName(e.target.files[0].name);
    }
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-[#0a182e] to-[#060D17] border-b border-slate-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-6">
            <Users className="w-4 h-4" />
            <span>482+ Strong Professional Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-tight">
            BUILD YOUR CAREER <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
              WITH IDART
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Join one of South India's fastest-growing energy safety, field inspection, and technical engineering organizations. Empowering young professionals, engineers, and digital innovators.
          </p>
        </div>
      </section>

      {/* Workplace Culture & Benefits */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why Join IDART?"
            title="Thrive in a Safety-First, People-Centric Environment"
            subtitle="Under CEO S. Gowtham Kumar's leadership, IDART fosters meritocracy, comprehensive technical training, and pan-South Indian mobility."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_PERKS.map((perk, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-orange-500/40 transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center font-bold text-sm border border-orange-500/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">{perk.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Job Openings Grid */}
      <section className="py-24 bg-[#071324]" id="openings">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Current Openings"
            title="Explore Open Roles"
            subtitle="Find the position that matches your field passion, engineering expertise, or software skills."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {JOB_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {job.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1.5">
                      <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                      <span>{job.location}</span>
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {job.shortDescription}
                  </p>

                  {job.ageRequirement && (
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-xs font-semibold text-orange-300">
                      Requirement: {job.ageRequirement}
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block">
                      Key Competencies
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {job.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-medium text-slate-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-colors"
                  >
                    View Role Details
                  </button>

                  <button
                    onClick={() => handleOpenApply(job.title)}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-orange-500/20"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Details Modal */}
      <Modal
        isOpen={selectedJob !== null}
        onClose={() => setSelectedJob(null)}
        title={selectedJob?.title || "Role Details"}
        subtitle={`${selectedJob?.department} • ${selectedJob?.location}`}
        maxWidth="lg"
      >
        {selectedJob && (
          <div className="space-y-6 text-sm text-slate-300">
            <div className="p-4 rounded-2xl bg-orange-500/10 border border-orange-500/25 flex items-center justify-between text-xs">
              <span>Experience: <strong className="text-white">{selectedJob.experience}</strong></span>
              {selectedJob.ageRequirement && (
                <span>Age Limit: <strong className="text-white">{selectedJob.ageRequirement}</strong></span>
              )}
            </div>

            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">
                Core Responsibilities
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedJob.responsibilities.map((resp, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-2">
                Candidate Qualifications
              </h4>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedJob.qualifications.map((qual, qIdx) => (
                  <li key={qIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <button
                onClick={() => setSelectedJob(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs text-slate-300"
              >
                Close
              </button>
              <button
                onClick={() => handleOpenApply(selectedJob.title)}
                className="px-6 py-2 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider"
              >
                Apply for this Position
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Resume Application Form Modal */}
      <Modal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        title={`Apply for ${appliedJobTitle}`}
        subtitle="AGTRS IDART PRIVATE LIMITED Recruitment Portal"
        maxWidth="md"
      >
        {applicationSubmitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-white">Application Received!</h4>
            <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{applicantName}</strong>. Your profile for the <strong>{appliedJobTitle}</strong> role has been registered with our Human Resources team. We will review your credentials and contact you shortly.
            </p>
            <button
              onClick={() => setIsApplyModalOpen(false)}
              className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmitApplication} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-400 font-semibold uppercase mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-400 font-semibold uppercase mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="ramesh@email.com"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-semibold uppercase mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  value={applicantPhone}
                  onChange={(e) => setApplicantPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold uppercase mb-1">
                Years of Relevant Experience
              </label>
              <select
                value={applicantExperience}
                onChange={(e) => setApplicantExperience(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 text-xs focus:outline-none focus:border-orange-500"
              >
                <option value="Fresher (0 Years)">Fresher (0 Years)</option>
                <option value="1-2 Years">1-2 Years</option>
                <option value="3-5 Years">3-5 Years</option>
                <option value="5+ Years">5+ Years</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-400 font-semibold uppercase mb-1">
                Resume / CV Document *
              </label>
              <div className="p-4 rounded-xl border border-dashed border-slate-700 bg-slate-950/60 text-center relative hover:border-orange-500 transition-colors">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloud className="w-8 h-8 text-orange-400 mx-auto mb-1" />
                <span className="text-xs text-slate-300 font-medium block">
                  {resumeFileName ? resumeFileName : "Click or drag your Resume here (PDF, DOC)"}
                </span>
                <span className="text-[10px] text-slate-500 block mt-0.5">Maximum size 5MB</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-orange-600/20"
              >
                Submit Job Application
              </button>
            </div>
          </form>
        )}
      </Modal>

      {/* Call to action */}
      <CtaBanner
        title="Don't See Your Ideal Role?"
        subtitle="We frequently recruit across field technical roles, pipeline installation, administrative support, and regional operations."
        primaryBtnText="Send Open Application"
        primaryBtnHref="/contact"
      />
    </div>
  );
}
