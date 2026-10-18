"use client";

import { useState } from "react";
import { Terminal, Calendar, MapPin, CheckCircle2, FileText, ExternalLink, ChevronRight, Layers, ShieldCheck, ArrowRight, Eye, X } from "lucide-react";
import { PORTFOLIO_DATA, Experience } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function ExperienceTimeline() {
  const [selectedExp, setSelectedExp] = useState<Experience>(PORTFOLIO_DATA.experiences[0]);
  const [activeProofModal, setActiveProofModal] = useState<{ url: string; name: string; type: 'pdf' | 'image' } | null>(null);

  return (
    <section id="experience-timeline" className="py-20 relative lab-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>VERIFIED PROFESSIONAL TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience & Internships
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Hands-on technical contributions in generative AI platforms, enterprise data warehousing, and mission-critical IT infrastructure.
          </p>
        </div>

        {/* Interactive Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Interactive Timeline Selector */}
          <div className="lg:col-span-5 space-y-3">
            {PORTFOLIO_DATA.experiences.map((exp) => {
              const isSelected = selectedExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    playSound("click");
                    setSelectedExp(exp);
                  }}
                  className={`p-5 rounded-3xl cursor-pointer transition-all duration-300 border ${
                    isSelected
                      ? "bg-slate-900/90 border-cyan-500/50 shadow-xl shadow-cyan-950/30 -translate-y-0.5"
                      : "bg-slate-950/50 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                          {exp.type}
                        </span>
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-slate-500" />
                          <span>{exp.period}</span>
                        </span>
                      </div>
                      <h3 className={`text-lg font-bold transition ${isSelected ? "text-cyan-300" : "text-white"}`}>
                        {exp.company}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {exp.role}
                      </p>
                    </div>

                    <div className={`p-2 rounded-xl transition ${isSelected ? "bg-cyan-500 text-slate-950" : "bg-slate-800/60 text-slate-400"}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Highlights pills */}
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800/60">
                    {exp.highlightConcepts.slice(0, 3).map((concept) => (
                      <span
                        key={concept}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/50"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Dossier Panel */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Experience</span>
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{selectedExp.location}</span>
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedExp.role} @ <span className="text-cyan-400">{selectedExp.company}</span>
                </h3>
              </div>

              {selectedExp.verificationDoc && (
                <button
                  onClick={() => {
                    playSound("open");
                    setActiveProofModal(selectedExp.verificationDoc || null);
                  }}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition shrink-0"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Attestation Proof</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </button>
              )}
            </div>

            {/* Summary */}
            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedExp.summary}
            </p>

            {/* Architecture Flow Pipeline */}
            {selectedExp.architectureFlow && (
              <div className="space-y-3 p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/20">
                <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{selectedExp.architectureFlow.title}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                  {selectedExp.architectureFlow.nodes.map((node, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-lg bg-slate-950 text-slate-200 border border-slate-700/80">
                        {node}
                      </span>
                      {idx < (selectedExp.architectureFlow?.nodes.length || 0) - 1 && (
                        <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Verified Achievements List */}
            <div className="space-y-3">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Key Technical Contributions & Tasks
              </div>
              <ul className="space-y-2.5">
                {selectedExp.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-[10px] font-mono shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Applied Technologies
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedExp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Verification Document Modal */}
        {activeProofModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
            <div className="relative w-full max-w-3xl bg-[#090e1d] border border-cyan-500/40 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="font-bold text-white text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span>{activeProofModal.name}</span>
                </div>
                <button
                  onClick={() => setActiveProofModal(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden bg-slate-950 max-h-[70vh] flex items-center justify-center border border-slate-800">
                {activeProofModal.type === 'pdf' ? (
                  <iframe
                    src={activeProofModal.url}
                    className="w-full h-[65vh] border-0"
                    title={activeProofModal.name}
                  />
                ) : (
                  <img
                    src={activeProofModal.url}
                    alt={activeProofModal.name}
                    className="max-h-[65vh] w-auto object-contain"
                  />
                )}
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <a
                  href={activeProofModal.url}
                  download
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs"
                >
                  Download Original Document
                </a>
                <button
                  onClick={() => setActiveProofModal(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
