"use client";

import { Award, ExternalLink, CheckCircle2, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function CertificationsGallery() {
  return (
    <section id="certifications-gallery" className="py-20 relative lab-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Award className="w-3.5 h-3.5" />
            <span>EXTERNAL CREDENTIALS & SPECIALIZATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications & Badges
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Verified technical badges and credentials issued by Google Cloud, HackerRank, 365 Data Science, and Great Learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PORTFOLIO_DATA.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-5 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 hover:-translate-y-1"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                    {cert.issuer}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound("click")}
                  className="flex items-center justify-between pt-3 border-t border-slate-800 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verify Credential Online</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
