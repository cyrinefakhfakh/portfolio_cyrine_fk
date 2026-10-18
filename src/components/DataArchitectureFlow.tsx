"use client";

import { useState } from "react";
import { Layers, Database, ArrowRight, Cpu, BarChart2, ShieldCheck, Activity, Sparkles, Server } from "lucide-react";
import { playSound } from "@/utils/audio";

export default function DataArchitectureFlow() {
  const [activeStageIndex, setActiveStageIndex] = useState(2);

  const stages = [
    {
      id: "sources",
      name: "01. Data Sources",
      category: "Ingestion Tier",
      icon: Server,
      tech: "OLTP DBs · CSVs · External APIs",
      status: "Production Implemented",
      summary: "Heterogeneous transactional insurance policies, claim records, vehicle registries, and client interaction logs.",
      details: [
        "Relational OLTP policy schemas with normalized entity-relationship structures.",
        "Semi-structured claim reports, surveyor assessment notes, and incident attachments.",
        "CDC (Change Data Capture) logs tracking premium adjustments and status updates."
      ]
    },
    {
      id: "etl",
      name: "02. ETL & Staging",
      category: "Integration Tier",
      icon: Activity,
      tech: "Python · SSIS · Data Pipelines",
      status: "Production Implemented",
      summary: "Automated extraction, anomaly scrubbing, deduplication, surrogate key assignment, and staging transformations.",
      details: [
        "Data validation checking nulls, foreign key orphan checks, and outlier filter rules.",
        "Slowly Changing Dimensions (SCD Type 2) tracking policyholder address and risk status over time.",
        "Automated batch pipeline loading staging zones prior to star schema distribution."
      ]
    },
    {
      id: "warehouse",
      name: "03. SQL Server DWH",
      category: "Storage Tier",
      icon: Database,
      tech: "SQL Server · Star Schema · Kimball",
      status: "Production Implemented",
      summary: "Dimensional model with central Fact Tables (Claims, Premiums, Policies) connected to conformed Dimensions.",
      details: [
        "Fact Tables: Fact_Claims, Fact_Premiums, Fact_Policies with granular transaction keys.",
        "Conformed Dimensions: Dim_Time, Dim_Product, Dim_Agency, Dim_Client, Dim_Coverage.",
        "Aggregated indexed views providing sub-second analytical aggregations for BI consumption."
      ]
    },
    {
      id: "ml",
      name: "04. Deep Learning / ML",
      category: "Inference Tier",
      icon: Cpu,
      tech: "PyTorch · Scikit-learn · XGBoost",
      status: "Production Implemented",
      summary: "Predictive neural networks forecasting claim settlement costs, loss ratios, and identifying high-risk claim vectors.",
      details: [
        "Deep Learning regression model anticipating settlement timeline and liability payouts.",
        "Hyperparameter optimization via Optuna with stratified K-fold cross-validation.",
        "Model serialization and automated batch inference updating predicted risk scores in the DWH."
      ]
    },
    {
      id: "delivery",
      name: "05. Power BI & GenBI",
      category: "Analytics Tier",
      icon: BarChart2,
      tech: "Power BI · DAX · GenBI Assistant",
      status: "Production Implemented",
      summary: "Interactive executive dashboards displaying loss ratios, claims progression, and natural-language query assistant.",
      details: [
        "Executive Power BI dashboards with DAX measures: Loss Ratio %, Combined Ratio, Gross Written Premiums.",
        "Row-level security granting department-specific access to claims and branch metrics.",
        "Integration with GenBI assistant for conversational querying and ad-hoc insight extraction."
      ]
    }
  ];

  return (
    <section id="data-architecture" className="py-20 relative lab-grid-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK DATA ENGINEERING & AI PIPELINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Enterprise Data Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            The end-to-end architectural paradigm developed for enterprise analytics: from raw transactional ingestion to deep learning inference and business intelligence.
          </p>
        </div>

        {/* Interactive Pipeline Diagram */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-cyan-500/30 shadow-2xl shadow-cyan-950/40 space-y-8">
          {/* Animated Node Flow Bar */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStageIndex === idx;
              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    playSound("click");
                    setActiveStageIndex(idx);
                  }}
                  className={`relative p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? "bg-slate-900 border-cyan-400 shadow-lg shadow-cyan-500/20 -translate-y-1"
                      : "bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase">
                      Tier 0{idx + 1}
                    </span>
                    <Icon className={`w-4 h-4 transition ${isSelected ? "text-cyan-400 scale-110" : "text-slate-500"}`} />
                  </div>

                  <div>
                    <h4 className={`text-sm font-bold transition ${isSelected ? "text-white" : "text-slate-300"}`}>
                      {stage.name}
                    </h4>
                    <p className="text-[11px] font-mono text-slate-400 truncate mt-0.5">
                      {stage.tech}
                    </p>
                  </div>

                  {/* Pulsing selection marker */}
                  {isSelected && (
                    <div className="w-full h-1 bg-cyan-400 rounded-full animate-pulse" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                  {stages[activeStageIndex].category}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{stages[activeStageIndex].status}</span>
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {stages[activeStageIndex].name}: {stages[activeStageIndex].tech}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {stages[activeStageIndex].summary}
              </p>

              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Architectural Specifications & Logic:
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {stages[activeStageIndex].details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Architectural Schema Box */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
                <span className="text-[10px] text-cyan-400 uppercase font-bold">Data Flow Contract</span>
                <span>Latency SLA: &lt;50ms</span>
              </div>

              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Input Stream:</span>
                  <span className="text-cyan-300">Normalized Transactions / Kafka</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Target Schema:</span>
                  <span className="text-indigo-300">Star-Schema (Kimball DW)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Security Gate:</span>
                  <span className="text-emerald-400">OAuth 2.0 PKCE & Masked PII</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Inference Hook:</span>
                  <span className="text-amber-400">Deep Learning Prediction Daemon</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/60 border border-slate-800/80 text-[11px] text-slate-400">
                Data flows continuously through automated staging with strict type validation, ensuring models ingest clean, drift-free feature sets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
