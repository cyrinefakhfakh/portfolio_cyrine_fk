"use client";

import { useState, useRef, useEffect } from "react";
import { Sparkles, Send, X, Bot, User, CornerDownLeft, RefreshCcw, ShieldCheck, Terminal, Compass, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: {
    type: 'project' | 'section';
    targetId: string;
    label: string;
  };
}

interface InteractiveAIGuideProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject?: (projectId: string) => void;
}

export default function InteractiveAIGuide({ isOpen, onClose, onSelectProject }: InteractiveAIGuideProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-1",
      sender: "assistant",
      text: "Hello! I am Cyrine's Lab AI Guide. You can ask me anything about her Master's studies at Paris-Dauphine PSL, her internships at OliveSoft, Amana Takaful, and Tunisie Telecom, or her technical projects and availability for a 2027 PFE internship.",
      timestamp: "Now",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sampleQuestions = [
    "What did she build at OliveSoft?",
    "Explain her insurance data architecture",
    "Which projects use Generative AI?",
    "Is she available for a PFE internship?",
    "Tell me about the Breast Cancer AI tool",
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  if (!isOpen) return null;

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    playSound("click");

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: "Now",
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Knowledge Retrieval Engine (Client-side, zero external API keys needed)
    setTimeout(() => {
      const lower = query.toLowerCase();
      let bestMatch = PORTFOLIO_DATA.aiGuideKnowledgeBase[0];
      let maxScore = 0;

      for (const item of PORTFOLIO_DATA.aiGuideKnowledgeBase) {
        let score = 0;
        for (const kw of item.keywords) {
          if (lower.includes(kw)) score += 2;
        }
        if (score > maxScore) {
          maxScore = score;
          bestMatch = item;
        }
      }

      let responseText = bestMatch.answer;
      let action: Message['suggestedAction'] = undefined;

      if (lower.includes("olivesoft") || lower.includes("genbi")) {
        action = { type: 'project', targetId: 'genbi-platform', label: 'Open GenBI Dossier' };
      } else if (lower.includes("breast") || lower.includes("cancer")) {
        action = { type: 'project', targetId: 'breast-cancer-ai', label: 'Open Cancer Diagnostic Dossier' };
      } else if (lower.includes("crypto") || lower.includes("lstm")) {
        action = { type: 'project', targetId: 'crypto-tracker', label: 'Open Crypto Forecaster' };
      } else if (lower.includes("amana") || lower.includes("insurance")) {
        action = { type: 'project', targetId: 'amana-takaful-platform', label: 'Open Insurance DWH Dossier' };
      } else if (lower.includes("internship") || lower.includes("pfe") || lower.includes("hire")) {
        action = { type: 'section', targetId: 'recruiter-pitch', label: 'Go to Recruiter 60s Fast-Track' };
      }

      if (maxScore === 0) {
        responseText = `Cyrine's portfolio covers Generative AI (GenBI, MCP, text-to-SQL), Machine Learning (Scikit-learn, XGBoost, LSTM), Data Engineering (SQL Server, BigQuery, Databricks), and IT infrastructure. Would you like to explore her OliveSoft internship or the interactive Project Universe?`;
      }

      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "assistant",
        text: responseText,
        timestamp: "Now",
        suggestedAction: action,
      };

      setIsTyping(false);
      setMessages((prev) => [...prev, botMsg]);
      playSound("success");
    }, 450);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] bg-[#090e1d]/95 backdrop-blur-2xl border-l border-cyan-500/30 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
      {/* Drawer Header */}
      <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-sm text-white">Ask the Lab AI</h3>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                VERIFIED KB
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400">
              Zero-latency local engine · Grounded in portfolio facts
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            playSound("click");
            onClose();
          }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Suggested Questions Chips */}
      <div className="px-4 py-2 border-b border-slate-800/80 bg-slate-950/60 overflow-x-auto flex items-center gap-2 scrollbar-none">
        <span className="text-[10px] font-mono text-slate-500 shrink-0">Ask:</span>
        {sampleQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSend(q)}
            className="px-2.5 py-1 rounded-full text-[11px] bg-slate-900 hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-300 border border-slate-800 whitespace-nowrap transition shrink-0"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-2.5 ${
              msg.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-slate-950 font-bold"
                  : "bg-slate-800 text-cyan-400 border border-cyan-500/30"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>

            <div
              className={`p-3.5 rounded-2xl max-w-[85%] text-xs leading-relaxed space-y-2 ${
                msg.sender === "user"
                  ? "bg-cyan-500 text-slate-950 font-medium rounded-tr-none"
                  : "bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm"
              }`}
            >
              <p>{msg.text}</p>

              {msg.suggestedAction && (
                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => {
                      playSound("open");
                      if (msg.suggestedAction?.type === 'project' && onSelectProject) {
                        onSelectProject(msg.suggestedAction.targetId);
                        onClose();
                      } else if (msg.suggestedAction?.type === 'section') {
                        const el = document.getElementById(msg.suggestedAction.targetId);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth' });
                          onClose();
                        }
                      }
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-semibold transition"
                  >
                    <Compass className="w-3.5 h-3.5" />
                    <span>{msg.suggestedAction.label}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400 italic font-mono pl-9">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Scanning verified knowledge base...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="p-4 border-t border-slate-800 bg-slate-900/90">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="relative flex items-center"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, skills, or PFE availability..."
            className="w-full bg-slate-950/80 border border-slate-700 rounded-2xl pl-4 pr-12 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="absolute right-2 p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 text-slate-950 transition cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
        <div className="text-[10px] font-mono text-slate-500 text-center mt-2">
          Strict facts only · No external API key required
        </div>
      </div>
    </div>
  );
}
