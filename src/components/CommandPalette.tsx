"use client";

import { useEffect, useState } from "react";
import { Search, Compass, Terminal, FileDown, Volume2, VolumeX, Sparkles, Briefcase, GraduationCap, Mail, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound, isSoundEnabled, setSoundEnabled } from "@/utils/audio";

interface CommandPaletteProps {
  onOpenProject?: (projectId: string) => void;
  onOpenAskAI?: () => void;
}

export default function CommandPalette({ onOpenProject, onOpenAskAI }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    setSoundActive(isSoundEnabled());

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          const next = !prev;
          if (next) playSound("open");
          return next;
        });
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (elementId: string) => {
    playSound("click");
    setIsOpen(false);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleSoundState = () => {
    const next = !soundActive;
    setSoundEnabled(next);
    setSoundActive(next);
    if (next) playSound("success");
  };

  if (!isOpen) return null;

  const filteredProjects = PORTFOLIO_DATA.projects.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.technologies.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#090e1c] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, project, or skill... (Esc to close)"
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm focus:outline-none"
            autoFocus
          />
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-96 overflow-y-auto p-3 space-y-4">
          {/* Quick Actions */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 pb-1">Navigation & Actions</div>
            <div className="space-y-1">
              <button
                onClick={() => navigateTo("recruiter-pitch")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <Briefcase className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                  <span>Recruiter Fast-Track (60s Pitch)</span>
                </div>
                <span className="text-xs text-emerald-400/80 font-mono">PFE Feb 2027</span>
              </button>

              <button
                onClick={() => navigateTo("project-universe")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                  <span>Interactive Project Universe</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Constellation & Grid</span>
              </button>

              <button
                onClick={() => navigateTo("experience-timeline")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <Terminal className="w-4 h-4 text-indigo-400 group-hover:scale-110 transition" />
                  <span>Professional Experience (OliveSoft, Amana Takaful, TT)</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Timeline & Proofs</span>
              </button>

              <button
                onClick={() => navigateTo("research-corner")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400 group-hover:scale-110 transition" />
                  <span>AI Research Notebook (Explainable AI & MCP)</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">XAI Lab</span>
              </button>

              <button
                onClick={() => navigateTo("skills-radar")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-4 h-4 text-purple-400 group-hover:scale-110 transition" />
                  <span>Skills Radar & Knowledge Matrix</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">Interactive Matrix</span>
              </button>

              <button
                onClick={() => navigateTo("contact-section")}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-400 group-hover:scale-110 transition" />
                  <span>Contact Cyrine Directly</span>
                </div>
                <span className="text-xs text-slate-500 font-mono">cyrine.fakhfakh@dauphine.eu</span>
              </button>
            </div>
          </div>

          {/* Tools & Toggles */}
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 pb-1">Lab Controls</div>
            <div className="space-y-1">
              <a
                href="/CV_Cyrine_Fakhfakh_2027.pdf"
                download="CV_Cyrine_Fakhfakh_2027.pdf"
                onClick={() => { playSound("click"); setIsOpen(false); }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  <FileDown className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                  <span>Download Curriculum Vitae (PDF)</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">Direct Download</span>
              </a>

              <button
                onClick={toggleSoundState}
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
              >
                <div className="flex items-center gap-3">
                  {soundActive ? (
                    <Volume2 className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition" />
                  ) : (
                    <VolumeX className="w-4 h-4 text-slate-400 group-hover:scale-110 transition" />
                  )}
                  <span>Toggle Procedural Audio Effects</span>
                </div>
                <span className={`text-xs font-mono ${soundActive ? "text-emerald-400" : "text-slate-500"}`}>
                  {soundActive ? "ENABLED" : "MUTED"}
                </span>
              </button>

              {onOpenAskAI && (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenAskAI();
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition" />
                    <span>Ask the Lab AI Guide</span>
                  </div>
                  <span className="text-xs text-cyan-400 font-mono">Chat Assistant</span>
                </button>
              )}
            </div>
          </div>

          {/* Filtered Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 px-3 pb-1">
                Matching Projects ({filteredProjects.length})
              </div>
              <div className="space-y-1">
                {filteredProjects.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      playSound("click");
                      setIsOpen(false);
                      if (onOpenProject) {
                        onOpenProject(p.id);
                      } else {
                        navigateTo("project-universe");
                      }
                    }}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm text-slate-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition group"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: p.glowColor }}
                      />
                      <span className="font-medium text-slate-200 group-hover:text-cyan-300">{p.title}</span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">{p.category}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/70 flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span>Navigate with mouse or keyboard</span>
          <div className="flex items-center gap-1.5">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">Ctrl/Cmd + K</span>
            <span>to toggle anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
}
