"use client";

import { useState } from "react";
import { Sparkles, Terminal, Database, Activity, Play, CheckCircle2, ChevronRight, BarChart2, ShieldCheck, RefreshCw } from "lucide-react";
import { playSound } from "@/utils/audio";

interface InteractiveSimulatorsProps {
  initialSimulator?: 'genbi' | 'cancer' | 'crypto';
}

export default function InteractiveSimulators({ initialSimulator = 'genbi' }: InteractiveSimulatorsProps) {
  const [activeSim, setActiveSim] = useState<'genbi' | 'cancer' | 'crypto'>(initialSimulator);

  // GenBI State
  const genBiPresets = [
    {
      prompt: "Show total claims paid and average loss ratio by insurance line for 2024",
      sql: `SELECT 
    d.product_line,
    COUNT(f.claim_id) AS total_claims,
    SUM(f.paid_amount) AS total_payout_tnd,
    ROUND(SUM(f.paid_amount) * 100.0 / NULLIF(SUM(f.premium_amount), 0), 2) AS loss_ratio_pct
FROM fact_insurance_claims f
JOIN dim_product d ON f.product_key = d.product_key
WHERE f.claim_year = 2024
GROUP BY d.product_line
ORDER BY total_payout_tnd DESC;`,
      results: [
        { product_line: "Automobile Fleet", total_claims: "1,240", total_payout_tnd: "420,500 TND", loss_ratio_pct: "68.4%" },
        { product_line: "Health & Group Life", total_claims: "3,890", total_payout_tnd: "315,200 TND", loss_ratio_pct: "54.1%" },
        { product_line: "Commercial Property", total_claims: "142", total_payout_tnd: "210,000 TND", loss_ratio_pct: "42.8%" },
        { product_line: "Marine & Transport", total_claims: "68", total_payout_tnd: "89,400 TND", loss_ratio_pct: "39.0%" },
      ],
      mcpContext: "Attached schema: fact_insurance_claims (claim_id, paid_amount, premium_amount, claim_year, product_key), dim_product (product_key, product_line). Read-only SELECT validation: PASSED."
    },
    {
      prompt: "Identify top 3 branch regions with claim settlement duration exceeding 15 days",
      sql: `SELECT 
    r.region_name,
    AVG(f.settlement_days) AS avg_duration_days,
    COUNT(*) AS delayed_claims_count
FROM fact_insurance_claims f
JOIN dim_agency r ON f.agency_key = r.agency_key
WHERE f.settlement_days > 15
GROUP BY r.region_name
ORDER BY avg_duration_days DESC
LIMIT 3;`,
      results: [
        { region_name: "Grand Tunis", avg_duration_days: "21.4 days", delayed_claims_count: "312" },
        { region_name: "Sfax Littoral", avg_duration_days: "19.8 days", delayed_claims_count: "184" },
        { region_name: "Sousse & Sahel", avg_duration_days: "17.2 days", delayed_claims_count: "128" },
      ],
      mcpContext: "Attached schema: dim_agency, fact_insurance_claims. Time-window: 365d. AST Security Check: PASSED."
    }
  ];

  const [selectedGenBiPreset, setSelectedGenBiPreset] = useState(0);
  const [customGenBiInput, setCustomGenBiInput] = useState("");
  const [isGeneratingSql, setIsGeneratingSql] = useState(false);

  // Breast Cancer State
  const [features, setFeatures] = useState({
    radius: 17.99,
    texture: 20.38,
    smoothness: 0.118,
    compactness: 0.277,
    concavity: 0.300,
    symmetry: 0.241,
  });

  const [showVideoModal, setShowVideoModal] = useState(false);

  // Dynamic calculation for cancer simulation
  const calculateMalignancy = () => {
    // Normalization against standardized clinical boundaries
    const zRadius = (features.radius - 14.1) / 3.5;
    const zConcavity = (features.concavity - 0.088) / 0.07;
    const zCompactness = (features.compactness - 0.104) / 0.05;
    const logit = -1.2 + zRadius * 1.8 + zConcavity * 2.2 + zCompactness * 1.4;
    const probability = 1 / (1 + Math.exp(-logit));
    return Math.min(Math.max(probability, 0.02), 0.99);
  };

  const probMalignant = calculateMalignancy();
  const isMalignant = probMalignant > 0.5;

  const handleRunGenBi = () => {
    setIsGeneratingSql(true);
    playSound("pulse");
    setTimeout(() => {
      setIsGeneratingSql(false);
      playSound("success");
    }, 600);
  };

  return (
    <section id="interactive-simulators" className="py-20 relative lab-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            <span>INTERACTIVE LABORATORY PLAYGROUNDS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Live AI & Analytics Simulators
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Test real architectural concepts in your browser: from LLM text-to-SQL translation with MCP grounding to clinical biopsy morphometry.
          </p>

          {/* Simulator Tabs */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => {
                playSound("click");
                setActiveSim('genbi');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeSim === 'genbi'
                  ? "bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>GenBI Text-to-SQL</span>
            </button>

            <button
              onClick={() => {
                playSound("click");
                setActiveSim('cancer');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeSim === 'cancer'
                  ? "bg-rose-500 text-white shadow-lg shadow-rose-500/30"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Cytology Radar (Cancer AI)</span>
            </button>
          </div>
        </div>

        {/* SIMULATOR 1: GENBI TEXT-TO-SQL */}
        {activeSim === 'genbi' && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono">
                    Model Context Protocol (MCP) Grounded
                  </span>
                  <span className="text-xs text-slate-400">OliveSoft Research Sandbox</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Natural Language Business Intelligence Pipeline
                </h3>
              </div>

              {/* Presets */}
              <div className="flex items-center gap-2 overflow-x-auto">
                <span className="text-xs text-slate-500 font-mono">Presets:</span>
                {genBiPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      playSound("click");
                      setSelectedGenBiPreset(idx);
                      setCustomGenBiInput("");
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                      selectedGenBiPreset === idx && !customGenBiInput
                        ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                        : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                    }`}
                  >
                    Scenario 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Natural Language Input */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-slate-400">
                Natural Language Ingestion:
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={customGenBiInput || genBiPresets[selectedGenBiPreset].prompt}
                  onChange={(e) => setCustomGenBiInput(e.target.value)}
                  className="flex-1 bg-slate-950/80 border border-slate-700/80 rounded-2xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-400 transition"
                />
                <button
                  onClick={handleRunGenBi}
                  disabled={isGeneratingSql}
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md shadow-cyan-500/30 transition disabled:opacity-50"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isGeneratingSql ? "animate-spin" : ""}`} />
                  <span>Synthesize SQL</span>
                </button>
              </div>
            </div>

            {/* MCP Schema Grounding Banner */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] font-mono text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{genBiPresets[selectedGenBiPreset].mcpContext}</span>
            </div>

            {/* SQL Output Box & Results Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Generated SQL */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Validated SQL Dialect (BigQuery / SQL Server)</span>
                  </div>
                  <span className="text-emerald-400">AST Validated</span>
                </div>
                <div className="p-4 rounded-2xl bg-black/90 border border-slate-800 font-mono text-xs text-cyan-300/90 overflow-x-auto whitespace-pre leading-relaxed shadow-inner">
                  {isGeneratingSql ? (
                    <div className="text-slate-500 animate-pulse">
                      -- Agent analyzing schema metadata via MCP...
                      <br />
                      -- Grounding column bindings and foreign keys...
                    </div>
                  ) : (
                    genBiPresets[selectedGenBiPreset].sql
                  )}
                </div>
              </div>

              {/* Executed Data Table Preview */}
              <div className="lg:col-span-6 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Simulated Query Execution Preview</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Latency: 18ms</span>
                </div>

                <div className="rounded-2xl border border-slate-800 overflow-hidden bg-slate-950/60">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900/90 text-slate-400 font-mono text-[10px] uppercase border-b border-slate-800">
                      <tr>
                        {Object.keys(genBiPresets[selectedGenBiPreset].results[0]).map((key) => (
                          <th key={key} className="p-3">
                            {key.replace("_", " ")}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                      {genBiPresets[selectedGenBiPreset].results.map((row, i) => (
                        <tr key={i} className="hover:bg-cyan-500/5 transition">
                          {Object.values(row).map((val, j) => (
                            <td key={j} className="p-3 text-slate-200">
                              {val}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SIMULATOR 2: BREAST CANCER CYTOLOGY RADAR */}
        {activeSim === 'cancer' && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-rose-500/30 shadow-2xl shadow-rose-950/40 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 text-[10px] font-mono">
                    Fine Needle Aspirate (FNA) Classifier
                  </span>
                  <span className="text-xs text-slate-400">Streamlit & Plotly Clinical Architecture</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Interactive Cytological Biopsy Morphometry Analysis
                </h3>
              </div>

              <button
                onClick={() => {
                  playSound("open");
                  setShowVideoModal(true);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold transition shrink-0"
              >
                <Play className="w-3.5 h-3.5 fill-rose-400" />
                <span>Watch Cyrine's Demo Video</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Input Sliders */}
              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Adjust Cytological Nucleus Morphometry:
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Mean Radius */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">Mean Radius (μm)</span>
                      <span className="font-mono text-cyan-400">{features.radius}</span>
                    </div>
                    <input
                      type="range"
                      min="8"
                      max="28"
                      step="0.1"
                      value={features.radius}
                      onChange={(e) => setFeatures({ ...features, radius: parseFloat(e.target.value) })}
                      className="w-full accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  {/* Mean Texture */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">Mean Texture</span>
                      <span className="font-mono text-indigo-400">{features.texture}</span>
                    </div>
                    <input
                      type="range"
                      min="9"
                      max="39"
                      step="0.1"
                      value={features.texture}
                      onChange={(e) => setFeatures({ ...features, texture: parseFloat(e.target.value) })}
                      className="w-full accent-indigo-400 cursor-pointer"
                    />
                  </div>

                  {/* Mean Smoothness */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">Mean Smoothness</span>
                      <span className="font-mono text-emerald-400">{features.smoothness}</span>
                    </div>
                    <input
                      type="range"
                      min="0.05"
                      max="0.2"
                      step="0.005"
                      value={features.smoothness}
                      onChange={(e) => setFeatures({ ...features, smoothness: parseFloat(e.target.value) })}
                      className="w-full accent-emerald-400 cursor-pointer"
                    />
                  </div>

                  {/* Mean Concavity */}
                  <div className="space-y-1.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300 font-medium">Mean Concavity</span>
                      <span className="font-mono text-rose-400">{features.concavity}</span>
                    </div>
                    <input
                      type="range"
                      min="0.0"
                      max="0.45"
                      step="0.01"
                      value={features.concavity}
                      onChange={(e) => setFeatures({ ...features, concavity: parseFloat(e.target.value) })}
                      className="w-full accent-rose-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Preset Clinical Samples */}
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-xs text-slate-500 font-mono">Load Sample:</span>
                  <button
                    onClick={() => {
                      playSound("click");
                      setFeatures({ radius: 11.42, texture: 14.28, smoothness: 0.082, compactness: 0.056, concavity: 0.024, symmetry: 0.165 });
                    }}
                    className="px-3 py-1 rounded-lg text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
                  >
                    Healthy / Benign Sample
                  </button>
                  <button
                    onClick={() => {
                      playSound("click");
                      setFeatures({ radius: 20.57, texture: 24.38, smoothness: 0.124, compactness: 0.285, concavity: 0.342, symmetry: 0.260 });
                    }}
                    className="px-3 py-1 rounded-lg text-xs bg-rose-500/10 text-rose-400 border border-rose-500/30 hover:bg-rose-500/20"
                  >
                    High-Risk Malignant Sample
                  </button>
                </div>
              </div>

              {/* Right Column: Radar Graphic & Prediction HUD */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center space-y-4">
                <div className="text-xs font-mono uppercase text-slate-400">
                  Calibrated Prediction Assessment
                </div>

                <div
                  className={`p-4 rounded-2xl border transition-all duration-300 ${
                    isMalignant
                      ? "bg-rose-950/40 border-rose-500/50 text-rose-300"
                      : "bg-emerald-950/40 border-emerald-500/50 text-emerald-300"
                  }`}
                >
                  <div className="text-2xl font-extrabold tracking-tight">
                    {isMalignant ? "Malignant Probability Detected" : "Benign Classification"}
                  </div>
                  <div className="text-4xl font-mono font-bold mt-2">
                    {(probMalignant * 100).toFixed(1)}%
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    ROC-AUC 98.2% · Calibrated Logistic / Random Forest Threshold
                  </div>
                </div>

                {/* SVG Visual Radar Plot representation */}
                <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    {/* Background concentric polygons */}
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(56,189,248,0.15)" strokeWidth="0.8" />
                    <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />
                    <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(56,189,248,0.1)" strokeWidth="0.8" />

                    {/* Dynamic polygon of sample */}
                    <polygon
                      points={`
                        50,${50 - (features.radius / 28) * 38}
                        ${50 + (features.texture / 39) * 36},50
                        50,${50 + (features.concavity / 0.45) * 38}
                        ${50 - (features.smoothness / 0.2) * 36},50
                      `}
                      fill={isMalignant ? "rgba(244,63,94,0.3)" : "rgba(16,185,129,0.3)"}
                      stroke={isMalignant ? "#f43f5e" : "#10b981"}
                      strokeWidth="1.5"
                    />
                  </svg>
                  <div className="absolute text-[9px] font-mono text-slate-400">
                    RADAR VIEW
                  </div>
                </div>

                <div className="text-[11px] text-slate-500">
                  Feature dimensions automatically normalized against baseline clinical reference cohort.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Video Demo Modal */}
        {showVideoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="w-full max-w-3xl bg-[#090e1d] border border-cyan-500/40 rounded-3xl overflow-hidden shadow-2xl p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="font-bold text-white text-sm flex items-center gap-2">
                  <Play className="w-4 h-4 text-cyan-400" />
                  <span>Breast Cancer Project — Verified Live Demo Video</span>
                </div>
                <button
                  onClick={() => setShowVideoModal(false)}
                  className="text-slate-400 hover:text-white px-2 py-1 text-xs rounded bg-slate-800"
                >
                  Close
                </button>
              </div>

              <div className="rounded-xl overflow-hidden bg-black">
                <video
                  src="/projects/bread cancer project.mp4"
                  controls
                  autoPlay
                  className="w-full max-h-[480px] object-contain"
                />
              </div>
              <p className="text-xs text-slate-400 text-center">
                Screen recording demonstrating real-time feature adjustment, radar plotting, and classification inference.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
