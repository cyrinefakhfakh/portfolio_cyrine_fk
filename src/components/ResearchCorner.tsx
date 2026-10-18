"use client";

import { useState } from "react";
import { Sparkles, BookOpen, ExternalLink, ArrowRight, CheckCircle2, FlaskConical, AlertCircle, Bookmark } from "lucide-react";
import { PORTFOLIO_DATA, ResearchItem } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function ResearchCorner() {
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem>(
    PORTFOLIO_DATA.researchItems.find((r) => r.featuredConcept) || PORTFOLIO_DATA.researchItems[0]
  );

  return (
    <section id="research-corner" className="py-20 relative lab-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-mono text-purple-400">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>SCIENTIFIC LAB NOTEBOOK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            The AI Research Corner
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Applied research explorations at the intersection of Explainable AI (XAI), Agentic Tool Calling (MCP), and Ethical Healthcare Diagnostics.
          </p>
        </div>

        {/* Featured Research Concept: "Making AI Understandable" */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-slate-950/60 border border-purple-500/30 shadow-2xl shadow-purple-950/30 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-500/20 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-purple-500/20 text-purple-300 border border-purple-500/40 font-semibold">
                FEATURED CONCEPT
              </span>
              <span className="text-xs text-slate-400 font-mono">
                XAI in High-Stakes Medicine & Finance
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Bookmark className="w-3.5 h-3.5" />
              <span>Lab Notebook Entry #2026-XAI</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                "Making AI Understandable: Explainable AI (XAI) in High-Stakes Domains"
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Modern deep networks and gradient-boosted ensembles achieve remarkable accuracy, yet act as impenetrable "black boxes". In healthcare (e.g., cytological oncology diagnostics) and finance (e.g., underwriting and fraud scoring), predictions without human-interpretable feature attributions cannot be verified by practitioners or regulatory bodies.
              </p>

              {/* Research Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-cyan-400 font-bold">SHAP Values</div>
                  <p className="text-[11px] text-slate-400">
                    Game-theoretic Shapley values computing marginal feature contributions for local explanations.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-purple-400 font-bold">LIME Surrogates</div>
                  <p className="text-[11px] text-slate-400">
                    Locally interpretable surrogate linear models approximating decision boundaries near the sample point.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <div className="text-xs font-mono text-rose-400 font-bold">Grad-CAM</div>
                  <p className="text-[11px] text-slate-400">
                    Gradient-weighted visual heatmaps highlighting salient pixel activations in convolutional layers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-black/60 border border-purple-500/30 space-y-3 font-mono text-xs">
              <div className="text-[11px] uppercase tracking-wider text-purple-300 font-bold border-b border-slate-800 pb-2">
                Ethical Grounding Notice
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Research prototypes in the Cyrine AI Lab are designed to evaluate methodological transparency and assist clinician reasoning. They are rigorously marked as research prototypes rather than validated clinical medical devices.
              </p>
              <div className="flex items-center gap-2 text-[10px] text-emerald-400 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified with Peer-Reviewed Literature</span>
              </div>
            </div>
          </div>
        </div>

        {/* Research Items Selector & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Research Index */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-1">
              Active Research Themes
            </div>
            {PORTFOLIO_DATA.researchItems.map((item) => {
              const isSelected = selectedResearch.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    playSound("click");
                    setSelectedResearch(item);
                  }}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-200 border space-y-2 ${
                    isSelected
                      ? "bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/30 -translate-y-0.5"
                      : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {item.category}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        item.status === 'Ongoing Experiment'
                          ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                          : item.status === 'Validated Prototype'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                          : 'bg-indigo-950 text-indigo-400 border border-indigo-500/30'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <h4 className={`text-sm font-bold transition ${isSelected ? "text-cyan-300" : "text-white"}`}>
                    {item.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Research Dossier */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl glass-panel border border-slate-800 space-y-6">
            <div className="space-y-1 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-cyan-400">{selectedResearch.category}</span>
                <span className="text-slate-600">·</span>
                <span className="text-xs font-mono text-slate-400">Status: {selectedResearch.status}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedResearch.title}
              </h3>
            </div>

            {/* Research Question */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
              <div className="text-xs font-mono uppercase text-cyan-400 font-bold">
                Research Question
              </div>
              <p className="text-sm font-medium text-slate-200 italic">
                "{selectedResearch.researchQuestion}"
              </p>
            </div>

            {/* Why it Matters */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400">
                Significance & Industrial Impact
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedResearch.whyItMatters}
              </p>
            </div>

            {/* Methods Explored */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase text-slate-400">
                Methodologies & Formulations Explored
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {selectedResearch.methodsExplored.map((method, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{method}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current Progress & Next Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-amber-400">Current Lab Progress</div>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedResearch.currentProgress}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                <div className="text-xs font-mono uppercase text-indigo-400">Next Steps & Extensions</div>
                <p className="text-xs text-slate-300 leading-relaxed">{selectedResearch.nextSteps}</p>
              </div>
            </div>

            {/* References */}
            {selectedResearch.references.length > 0 && (
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <div className="text-xs font-mono uppercase text-slate-500">Key Scientific References</div>
                <ul className="space-y-1 text-xs font-mono text-slate-400">
                  {selectedResearch.references.map((ref, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
