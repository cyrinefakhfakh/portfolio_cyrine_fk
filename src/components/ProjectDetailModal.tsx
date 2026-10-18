"use client";

import { useEffect, useState } from "react";
import { X, ExternalLink, CheckCircle2, AlertTriangle, ArrowRight, Layers, Sparkles, Activity, Play } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Project } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenLiveSimulator?: (simulatorType: 'genbi' | 'cancer' | 'crypto') => void;
}

export default function ProjectDetailModal({ project, onClose, onOpenLiveSimulator }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'challenges' | 'media'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const handleTabChange = (tab: 'overview' | 'architecture' | 'challenges' | 'media') => {
    playSound("click");
    setActiveTab(tab);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#090e1d] border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/60 overflow-hidden flex flex-col my-auto">
        {/* Top Header Bar */}
        <div className="relative px-6 py-5 border-b border-slate-800 bg-slate-900/70 flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                style={{
                  backgroundColor: `${project.glowColor}20`,
                  color: project.glowColor,
                  border: `1px solid ${project.glowColor}40`,
                }}
              >
                {project.category}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/60">
                Status: {project.status}
              </span>
              {project.verifiedMetrics && project.verifiedMetrics.length > 0 && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Verified Metrics
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              {project.title}
            </h3>
            <p className="text-sm text-cyan-300/90 font-medium">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={() => {
              playSound("click");
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition shrink-0"
            title="Close modal (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 py-2 border-b border-slate-800 bg-[#070b16] overflow-x-auto">
          <button
            onClick={() => handleTabChange('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'overview'
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Project Overview
          </button>
          <button
            onClick={() => handleTabChange('architecture')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'architecture'
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Technical Architecture
          </button>
          <button
            onClick={() => handleTabChange('challenges')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
              activeTab === 'challenges'
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Challenges & Solutions
          </button>
          {project.media && (
            <button
              onClick={() => handleTabChange('media')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition flex items-center gap-1.5 ${
                activeTab === 'media'
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {project.media.type === 'video' ? <Play className="w-3 h-3 text-cyan-400" /> : <Layers className="w-3 h-3 text-cyan-400" />}
              <span>Media & Demo</span>
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Problem & Objectives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Core Objectives</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1 shrink-0" />
                        <span>{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cyrine's Actual Contribution */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/30 to-cyan-950/20 border border-cyan-500/20 space-y-3">
                <div className="text-xs uppercase font-mono tracking-wider text-cyan-300 font-semibold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Cyrine's Actual Contribution</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  {project.actualContribution.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Metrics */}
              {project.verifiedMetrics && project.verifiedMetrics.length > 0 && (
                <div className="space-y-3">
                  <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                    Verified Evaluation Metrics
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {project.verifiedMetrics.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-emerald-500/30 space-y-1">
                        <div className="text-xs text-slate-400">{m.label}</div>
                        <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">{m.value}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">{m.context}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Technologies & Frameworks
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-xl text-xs font-mono bg-slate-800/80 text-cyan-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Takeaways */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-2">
                <div className="text-xs uppercase font-mono tracking-wider text-indigo-400">
                  Key Engineering Takeaways
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {project.keyTakeaways.map((takeaway, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyan-400" />
                  <span>{project.architecture.title}</span>
                </h4>
                <p className="text-xs font-mono text-slate-400 bg-slate-900/70 p-3 rounded-xl border border-slate-800">
                  {project.architecture.description}
                </p>
              </div>

              {/* Step-by-Step Flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {project.architecture.steps.map((step, idx) => (
                  <div key={idx} className="relative p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/20 space-y-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                          Step 0{idx + 1}
                        </span>
                        <Activity className="w-3.5 h-3.5 text-cyan-400/60" />
                      </div>
                      <div className="font-bold text-sm text-white">{step.name}</div>
                      <div className="text-xs font-mono text-cyan-300 mt-1">{step.tech}</div>
                    </div>
                    <div className="text-xs text-slate-400 mt-3 border-t border-slate-800/80 pt-2">
                      {step.detail}
                    </div>
                  </div>
                ))}
              </div>

              {/* Implementation Steps */}
              <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                  Implementation Workflow
                </div>
                <div className="space-y-2">
                  {project.implementationSteps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs text-slate-300">
                      <span className="font-mono text-cyan-400 font-bold">[{i + 1}]</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB: CHALLENGES & SOLUTIONS */}
          {activeTab === 'challenges' && (
            <div className="space-y-4">
              <div className="text-xs uppercase font-mono tracking-wider text-slate-400">
                Technical Roadblocks & Engineering Fixes
              </div>
              <div className="space-y-3">
                {project.challengesAndSolutions.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
                    <div className="flex items-start gap-2.5">
                      <span className="px-2 py-0.5 rounded bg-red-950/80 text-red-400 border border-red-500/30 text-[10px] font-mono uppercase shrink-0 mt-0.5">
                        Challenge
                      </span>
                      <p className="text-xs sm:text-sm font-medium text-slate-200">
                        {item.challenge}
                      </p>
                    </div>

                    <div className="flex items-start gap-2.5 pl-4 border-l-2 border-emerald-500/50">
                      <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono uppercase shrink-0 mt-0.5">
                        Engineered Solution
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {project.futureImprovements.length > 0 && (
                <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 space-y-2">
                  <div className="text-xs uppercase font-mono tracking-wider text-indigo-300">
                    Future Roadmap & Next Iteration
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {project.futureImprovements.map((imp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400">→</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* TAB: MEDIA & DEMO */}
          {activeTab === 'media' && project.media && (
            <div className="space-y-4">
              <div className="p-2 rounded-2xl bg-black border border-slate-800 overflow-hidden">
                {project.media.type === 'video' ? (
                  <video
                    src={project.media.url}
                    controls
                    className="w-full rounded-xl max-h-[420px] object-contain bg-black"
                  />
                ) : (
                  <img
                    src={project.media.url}
                    alt={project.title}
                    className="w-full rounded-xl max-h-[420px] object-contain bg-slate-950"
                  />
                )}
              </div>
              <p className="text-xs text-slate-400 italic text-center">
                {project.media.caption}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 py-4 border-t border-slate-800 bg-[#070b16] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.id === "genbi-platform" && onOpenLiveSimulator && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLiveSimulator('genbi');
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>Launch GenBI Interactive Simulator</span>
              </button>
            )}
            {project.id === "breast-cancer-ai" && onOpenLiveSimulator && (
              <button
                onClick={() => {
                  onClose();
                  onOpenLiveSimulator('cancer');
                }}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold transition"
              >
                <Activity className="w-3.5 h-3.5 text-rose-400" />
                <span>Launch Cytology Radar Simulator</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound("click")}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            )}

            <button
              onClick={() => {
                playSound("click");
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold transition"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
