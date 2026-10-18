"use client";

import { Briefcase, FileDown, Mail, Phone, MapPin, CheckCircle2, ArrowRight, GraduationCap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function RecruiterFastTrack() {
  const quickBullets = [
    {
      label: "Current Academic Standing",
      value: "Master AIDA (AI, Data & Agentic Systems) at Université Paris-Dauphine PSL (2025–2027) + Licence in Big Data & Analytics from ISAMM (2022–2025)."
    },
    {
      label: "Internship Availability",
      value: "Actively seeking a 6-Month End-of-Studies (PFE) Internship starting February 2027 in Data Science, Artificial Intelligence, Machine Learning, or Data Engineering."
    },
    {
      label: "Proven Industry Work",
      value: "Built a Generative BI platform with LLM agents, text-to-SQL & MCP at OliveSoft; architected end-to-end SQL Server DWH & Deep Learning models at Amana Takaful; configured HA Active Directory & Hyper-V at Tunisie Telecom."
    },
    {
      label: "Core Tooling & Cloud Stack",
      value: "Python, SQL, R, FastAPI, Scikit-learn, XGBoost, PyTorch, Model Context Protocol (MCP), SQL Server, GCP BigQuery, Databricks, Power BI, Streamlit, Docker."
    },
    {
      label: "Mindset & Approach",
      value: "Bridges mathematically grounded algorithms with resilient, scalable data pipelines. Obsessed with model explainability (XAI), verifiable metrics, and pragmatic business ROI."
    }
  ];

  return (
    <section id="recruiter-pitch" className="py-20 relative lab-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Pitch Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl shadow-emerald-950/40 space-y-8 overflow-hidden">
          {/* Top Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>60-SECOND RECRUITER FAST-TRACK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Executive Candidate Summary
              </h2>
            </div>

            {/* Availability Pill */}
            <div className="p-3.5 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-left sm:text-right">
              <div className="text-[10px] font-mono uppercase text-emerald-300">Target Role</div>
              <div className="text-sm font-bold text-white">PFE Internship (6 Months)</div>
              <div className="text-xs font-mono text-emerald-400 mt-0.5">Available: February 2027</div>
            </div>
          </div>

          {/* 5-Bullet Executive Digest */}
          <div className="space-y-4">
            {quickBullets.map((bullet, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <div className="text-xs uppercase font-mono tracking-wider text-emerald-400 font-semibold">
                    {bullet.label}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {bullet.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact & CV Actions */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/CV_Cyrine_Fakhfakh_2027.pdf"
                download="CV_Cyrine_Fakhfakh_2027.pdf"
                onClick={() => playSound("click")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5 transition"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Official CV (PDF)</span>
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.profile.contact.email}?subject=PFE%20Internship%20Opportunity%20-%20Data%20Science%20%26%20AI`}
                onClick={() => playSound("click")}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm border border-slate-700 transition"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email Cyrine Directly</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>Paris / Tunis</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>{PORTFOLIO_DATA.profile.contact.phone}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
