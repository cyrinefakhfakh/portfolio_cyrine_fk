"use client";

import { useState, useEffect } from "react";
import { Terminal, Compass, Sparkles, FileDown, Volume2, VolumeX, Menu, X, Briefcase, Brain, Cpu } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound, isSoundEnabled, setSoundEnabled } from "@/utils/audio";

interface NavbarProps {
  onOpenAskAI?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Navbar({ onOpenAskAI, onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundActive, setSoundActive] = useState(false);

  useEffect(() => {
    setSoundActive(isSoundEnabled());

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const next = !soundActive;
    setSoundEnabled(next);
    setSoundActive(next);
    if (next) playSound("success");
  };

  const navLinks = [
    { label: "Universe", href: "#project-universe" },
    { label: "Experience", href: "#experience-timeline" },
    { label: "Architecture", href: "#data-architecture" },
    { label: "AI Research", href: "#research-corner" },
    { label: "Skills Radar", href: "#skills-radar" },
    { label: "About", href: "#about-me" },
    { label: "Contact", href: "#contact-section" },
  ];

  const handleNavClick = (href: string) => {
    playSound("click");
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060913]/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-lg shadow-black/40 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              playSound("click");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-purple-500/20 border border-cyan-400/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-300">
              <Cpu className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition duration-300" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold tracking-wider text-base text-slate-100 group-hover:text-cyan-300 transition">
                  CYRINE<span className="text-cyan-400 font-extrabold">.AI</span>
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono tracking-widest bg-cyan-950/80 text-cyan-400 border border-cyan-500/30">
                  LAB
                </span>
              </div>
              <span className="text-[10px] font-mono tracking-tight text-slate-400 hidden sm:block">
                Paris-Dauphine PSL · AIDA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-slate-800/60 rounded-full transition duration-150"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Recruiter Quick Link */}
            <button
              onClick={() => handleNavClick("#recruiter-pitch")}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-medium transition"
              title="60-Second Recruiter Fast-Track"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>PFE Feb 2027</span>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-300 hover:bg-slate-800/60 border border-transparent hover:border-slate-700 transition"
              title={soundActive ? "Mute Procedural Sound" : "Enable Sound Effects"}
            >
              {soundActive ? <Volume2 className="w-4 h-4 text-emerald-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                if (onOpenCommandPalette) onOpenCommandPalette();
                playSound("click");
              }}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/60 text-xs font-mono transition"
              title="Press Ctrl+K or Cmd+K"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>⌘K</span>
            </button>

            {/* Ask AI Button */}
            {onOpenAskAI && (
              <button
                onClick={() => {
                  onOpenAskAI();
                  playSound("open");
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/15 to-indigo-500/15 hover:from-cyan-500/30 hover:to-indigo-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-medium shadow-sm transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span className="hidden sm:inline">Ask Lab</span>
              </button>
            )}

            {/* CV Download CTA */}
            <a
              href="/CV_Cyrine_Fakhfakh_2027.pdf"
              download="CV_Cyrine_Fakhfakh_2027.pdf"
              onClick={() => playSound("click")}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#060913] text-xs font-semibold shadow-md shadow-cyan-500/25 hover:shadow-cyan-400/40 transition duration-200"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                playSound("click");
              }}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060913]/95 backdrop-blur-2xl border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick("#recruiter-pitch")}
              className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-medium"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Recruiter Fast-Track (60s)</span>
              </span>
              <span>Feb 2027</span>
            </button>

            <a
              href="/CV_Cyrine_Fakhfakh_2027.pdf"
              download="CV_Cyrine_Fakhfakh_2027.pdf"
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-500 text-[#060913] text-xs font-bold"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
