"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, FileDown, Send, CheckCircle2, Copy, Sparkles } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "PFE Internship Discussion (Data Science & AI)",
    message: "",
  });

  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.contact.email);
    playSound("success");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSound("success");
    setSubmitted(true);

    // Launch mailto
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.contact.email}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact-section" className="py-20 relative lab-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Mail className="w-3.5 h-3.5" />
            <span>INITIATE LAB COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Actively considering 6-Month End-of-Studies (PFE) Internship offers starting February 2027 in Data Science, Artificial Intelligence, Machine Learning, and Data Engineering.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-slate-400">Official Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition"
                    >
                      {PORTFOLIO_DATA.profile.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Copy email to clipboard"
                >
                  {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-1">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Direct Telephone</div>
                  <div className="text-sm font-bold text-white">
                    {PORTFOLIO_DATA.profile.contact.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link Cards */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href={PORTFOLIO_DATA.profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound("click")}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group space-y-2"
              >
                <LinkedinIcon className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition" />
                <div className="font-bold text-xs text-white group-hover:text-cyan-300">
                  LinkedIn Profile
                </div>
                <div className="text-[10px] font-mono text-slate-500">cyrine-fakhfakh</div>
              </a>

              <a
                href={PORTFOLIO_DATA.profile.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound("click")}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition group space-y-2"
              >
                <GithubIcon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition" />
                <div className="font-bold text-xs text-white group-hover:text-cyan-300">
                  GitHub Profile
                </div>
                <div className="text-[10px] font-mono text-slate-500">cyrinefakhfakh</div>
              </a>
            </div>

            {/* Download CV Banner */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-950/40 to-slate-900 border border-cyan-500/30 space-y-3">
              <div className="text-xs font-mono uppercase text-cyan-400 font-bold">
                Offline Resume Access
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Download the verified bilingual curriculum vitae detailing Master AIDA coursework and full project descriptions.
              </p>
              <a
                href="/CV_Cyrine_Fakhfakh_2027.pdf"
                download="CV_Cyrine_Fakhfakh_2027.pdf"
                onClick={() => playSound("click")}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition shadow-md shadow-cyan-500/25"
              >
                <FileDown className="w-4 h-4" />
                <span>Download CV_Cyrine_Fakhfakh_2027.pdf</span>
              </a>
            </div>
          </div>

          {/* Right Column: Functional Message Dispatcher */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white">Send Direct Message to Cyrine</h3>
              <p className="text-xs text-slate-400">
                Fills out a pre-formatted message dispatching directly to Cyrine's university inbox.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Name / Organization</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marie Laurent (Tech Lead)"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-400">Your Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="m.laurent@company.com"
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-400">Your Message</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Dear Cyrine, we reviewed your work on the GenBI platform and would like to interview you for a 6-month PFE internship starting February 2027..."
                  className="w-full bg-slate-950/80 border border-slate-800 focus:border-cyan-500/50 rounded-xl px-4 py-3 text-xs text-white focus:outline-none transition"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <div className="text-[11px] font-mono text-slate-500">
                  Direct destination: <span className="text-cyan-400">cyrine.fakhfakh@dauphine.eu</span>
                </div>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/30 transition cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via Mail Client</span>
                </button>
              </div>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-xs text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Your email client was triggered with this formatted proposal!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
