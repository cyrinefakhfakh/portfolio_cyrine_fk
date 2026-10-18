"use client";

import { ArrowUp, Cpu, Mail, Heart } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "./BrandIcons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function Footer() {
  const scrollToTop = () => {
    playSound("click");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#04060c] py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold tracking-wider text-white">
                CYRINE<span className="text-cyan-400">.AI</span> LAB
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Université Paris-Dauphine PSL · Master AIDA
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("click")}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound("click")}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 transition"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PORTFOLIO_DATA.profile.contact.email}`}
              onClick={() => playSound("click")}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/40 transition"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs text-slate-400 hover:text-white transition"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026–2027 Cyrine Fakhfakh. Built for CYRINE AI LAB.
          </div>
          <div className="flex items-center gap-2">
            <span>Engineered with Next.js & TypeScript</span>
            <span>·</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available Feb 2027</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
