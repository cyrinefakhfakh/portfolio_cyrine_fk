"use client";

import { useState } from "react";
import { User, GraduationCap, Users, Globe, Compass, Sparkles, BookOpen, Heart, Image as ImageIcon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function AboutSection() {
  const [useTransparentPhoto, setUseTransparentPhoto] = useState(true);

  return (
    <section id="about-me" className="py-20 relative lab-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>HUMAN PERSPECTIVE & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Cyrine Fakhfakh
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Curious data scientist, creative technologist, and student leader committed to building reliable, explainable AI solutions.
          </p>
        </div>

        {/* Main Grid: Portrait & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex flex-col items-center space-y-4">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 p-2 group">
              {/* Sci-Fi Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
              <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-400 z-10 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-400 z-10 pointer-events-none" />

              {/* Glowing Background if transparent */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-gradient-to-b from-[#0b1226] to-[#050814] flex items-end justify-center">
                <div className="absolute inset-0 bg-radial from-cyan-500/15 via-purple-500/10 to-transparent" />
                <img
                  src={useTransparentPhoto ? "/portrait-transparent.png" : "/portrait-full.png"}
                  alt="Cyrine Fakhfakh"
                  className="w-full h-full object-cover object-top relative z-0 transition-all duration-500 group-hover:scale-105"
                />

                {/* Status Overlays */}
                <div className="absolute bottom-3 left-3 right-3 z-10 p-3 rounded-xl bg-[#060914]/85 backdrop-blur-md border border-slate-800 text-center space-y-0.5">
                  <div className="text-sm font-bold text-white">Cyrine Fakhfakh</div>
                  <div className="text-[11px] font-mono text-cyan-400">
                    Université Paris-Dauphine PSL · Master AIDA
                  </div>
                </div>
              </div>
            </div>

            {/* Photo mode toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  playSound("click");
                  setUseTransparentPhoto(!useTransparentPhoto);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-cyan-300 transition"
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>Toggle Photo Style ({useTransparentPhoto ? "Studio Cutout" : "Full Backdrop"})</span>
              </button>
            </div>
          </div>

          {/* Bio & Details Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Mission Statement */}
            <div className="p-6 rounded-3xl glass-panel border border-cyan-500/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Turning Data Into Intelligence</span>
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                "I'm Cyrine, a data enthusiast fascinated by the journey from raw information to intelligent decisions. My interests span data engineering, machine learning, business intelligence, and generative AI. I enjoy exploring how technical systems can solve real-world problems and make complex information more accessible."
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether deploying high-availability Active Directory systems, engineering scalable star schemas in SQL Server, or connecting LLM agents to operational databases via the Model Context Protocol (MCP), I prioritize reliability, explainability, and pragmatic user impact.
              </p>
            </div>

            {/* Academic Background */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>Academic Foundation</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.profile.education.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                    <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-500/20">
                      {edu.period}
                    </span>
                    <h4 className="text-sm font-bold text-white">{edu.degree}</h4>
                    <p className="text-xs text-slate-400 font-medium">{edu.institution}</p>
                    <p className="text-[11px] text-slate-500 pt-1 leading-snug">{edu.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Community */}
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-indigo-400" />
                <span>Leadership & Associative Life</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.profile.leadership.map((lead, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
                    <h4 className="text-xs font-bold text-white">{lead.role}</h4>
                    <div className="text-xs font-mono text-indigo-300">{lead.organization}</div>
                    <p className="text-[11px] text-slate-400 leading-snug pt-1">{lead.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-400" />
                <span>Spoken Languages</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.profile.languages.map((lang) => (
                  <div key={lang.name} className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
                    <span className="text-slate-200 font-semibold">{lang.name}: </span>
                    <span className="text-emerald-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
