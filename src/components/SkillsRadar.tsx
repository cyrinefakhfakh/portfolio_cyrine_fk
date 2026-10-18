"use client";

import { useState } from "react";
import { GraduationCap, Code2, BrainCircuit, Sparkles, Database, BarChart3, Server, CheckCircle2, ArrowUpRight, Cpu } from "lucide-react";
import { PORTFOLIO_DATA, SkillCategory } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

interface SkillsRadarProps {
  onSelectProject?: (projectId: string) => void;
}

export default function SkillsRadar({ onSelectProject }: SkillsRadarProps) {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    level: string;
    description: string;
    relatedProjectIds: string[];
    domain: string;
  } | null>({
    name: "Python",
    level: "Core Mastery",
    description: "Primary language for data science, machine learning, backend microservices, and mathematical computing.",
    relatedProjectIds: ["genbi-platform", "breast-cancer-ai", "crypto-tracker", "bank-fraud-detection", "seam-carving", "biceps-tracker-cv", "azure-security-simulator"],
    domain: "Programming & Core Engineering"
  });

  const getIcon = (name: string) => {
    switch (name) {
      case "Code2": return Code2;
      case "BrainCircuit": return BrainCircuit;
      case "Sparkles": return Sparkles;
      case "Database": return Database;
      case "BarChart3": return BarChart3;
      case "Server": return Server;
      default: return Cpu;
    }
  };

  return (
    <section id="skills-radar" className="py-20 relative lab-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>SUBSTANTIATED COMPETENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills & Domains
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            No arbitrary percentage bars. Each capability is grounded in concrete project implementations and enterprise workflows. Select any skill to view associated repositories.
          </p>
        </div>

        {/* Domain Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsData.map((category) => {
            const Icon = getIcon(category.iconName);
            return (
              <div
                key={category.domain}
                className="p-6 rounded-3xl glass-panel border border-slate-800 space-y-4 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">{category.domain}</h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{category.description}</p>
                  </div>
                </div>

                {/* Skills Buttons */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <button
                        key={skill.name}
                        onClick={() => {
                          playSound("click");
                          setSelectedSkill({ ...skill, domain: category.domain });
                        }}
                        className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 border ${
                          isSelected
                            ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/30 scale-105"
                            : "bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800"
                        }`}
                      >
                        {skill.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Skill Inspector & Project Linker */}
        {selectedSkill && (
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/40 shadow-2xl shadow-cyan-950/40 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-cyan-400">{selectedSkill.domain}</span>
                  <span className="text-slate-600">·</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-semibold">
                    {selectedSkill.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span>{selectedSkill.name}</span>
                </h3>
              </div>

              <div className="text-xs font-mono text-slate-400">
                Applied across {selectedSkill.relatedProjectIds.length} verified projects
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              {selectedSkill.description}
            </p>

            {/* Linked Projects */}
            {selectedSkill.relatedProjectIds.length > 0 && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Projects Leveraging {selectedSkill.name}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedSkill.relatedProjectIds.map((projId) => {
                    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === projId);
                    if (!proj) return null;
                    return (
                      <div
                        key={proj.id}
                        onClick={() => {
                          playSound("open");
                          if (onSelectProject) onSelectProject(proj.id);
                        }}
                        className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition group flex items-center justify-between"
                      >
                        <div className="space-y-0.5">
                          <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                            {proj.title}
                          </div>
                          <div className="text-[10px] text-slate-400 font-mono">
                            {proj.category}
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
