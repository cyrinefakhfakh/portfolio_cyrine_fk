"use client";

import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import CommandPalette from "@/components/CommandPalette";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RecruiterFastTrack from "@/components/RecruiterFastTrack";
import ProjectUniverse from "@/components/ProjectUniverse";
import InteractiveSimulators from "@/components/InteractiveSimulators";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import DataArchitectureFlow from "@/components/DataArchitectureFlow";
import ResearchCorner from "@/components/ResearchCorner";
import SkillsRadar from "@/components/SkillsRadar";
import CertificationsGallery from "@/components/CertificationsGallery";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import InteractiveAIGuide from "@/components/InteractiveAIGuide";
import { Sparkles } from "lucide-react";
import { playSound } from "@/utils/audio";

export default function Home() {
  const [askAiOpen, setAskAiOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleOpenProject = (id: string) => {
    setSelectedProjectId(id);
    const universeEl = document.getElementById("project-universe");
    if (universeEl) {
      universeEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenSimulator = (type: 'genbi' | 'cancer' | 'crypto') => {
    const simEl = document.getElementById("interactive-simulators");
    if (simEl) {
      simEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen bg-[#060913] text-[#f1f5f9] overflow-x-hidden">
      {/* Custom Dynamic Cursor */}
      <CustomCursor />

      {/* Global Command Palette (Ctrl+K / Cmd+K) */}
      <CommandPalette
        onOpenProject={handleOpenProject}
        onOpenAskAI={() => setAskAiOpen(true)}
      />

      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenAskAI={() => setAskAiOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Recruiter Fast-Track (60s Pitch) */}
      <RecruiterFastTrack />

      {/* Signature Interactive Project Universe */}
      <ProjectUniverse
        onOpenLiveSimulator={handleOpenSimulator}
        selectedProjectId={selectedProjectId}
        onClearSelectedProject={() => setSelectedProjectId(null)}
      />

      {/* Interactive AI & Analytics Simulators */}
      <InteractiveSimulators />

      {/* Professional Experience & Internships Timeline */}
      <ExperienceTimeline />

      {/* Enterprise Data Architecture Flow */}
      <DataArchitectureFlow />

      {/* The AI Research Corner */}
      <ResearchCorner />

      {/* Skills Radar & Knowledge Matrix */}
      <SkillsRadar onSelectProject={handleOpenProject} />

      {/* Certifications & Badges */}
      <CertificationsGallery />

      {/* About Me Section */}
      <AboutSection />

      {/* Contact & Opportunity Dispatcher */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating "Ask Lab AI" Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => {
            playSound("open");
            setAskAiOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-xs shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all duration-200 cursor-pointer border border-cyan-300/40"
        >
          <Sparkles className="w-4 h-4 animate-spin-slow text-slate-950" />
          <span>Ask Lab AI</span>
        </button>
      </div>

      {/* Interactive AI Guide Drawer */}
      <InteractiveAIGuide
        isOpen={askAiOpen}
        onClose={() => setAskAiOpen(false)}
        onSelectProject={handleOpenProject}
      />
    </main>
  );
}
