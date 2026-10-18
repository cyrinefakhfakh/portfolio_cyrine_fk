"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles, FileDown, Compass, Database, Brain, Cpu, BarChart2, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);

  // Rotate "Currently exploring" topics
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTopicIndex((prev) => (prev + 1) % PORTFOLIO_DATA.profile.currentExploration.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Neural Network and Data Universe Canvas Simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // Primary domain hubs
    const hubs = [
      { name: "Generative AI", x: width * 0.35, y: height * 0.3, color: "#38bdf8", radius: 28, angle: 0, speed: 0.008 },
      { name: "Machine Learning", x: width * 0.65, y: height * 0.35, color: "#818cf8", radius: 26, angle: 1.5, speed: 0.006 },
      { name: "Data Engineering", x: width * 0.4, y: height * 0.7, color: "#10b981", radius: 25, angle: 3.1, speed: 0.007 },
      { name: "Business Intelligence", x: width * 0.7, y: height * 0.65, color: "#f59e0b", radius: 24, angle: 4.5, speed: 0.005 },
    ];

    // Floating data particles
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }

    const particles: Particle[] = [];
    const particleCount = 45;
    const colors = ["#38bdf8", "#818cf8", "#22d3ee", "#a78bfa", "#34d399"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    let mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;

      // Update and draw orbital hubs
      hubs.forEach((hub, idx) => {
        hub.angle += hub.speed;
        const orbitRadiusX = width * 0.25 + (idx % 2) * 30;
        const orbitRadiusY = height * 0.22 + ((idx + 1) % 2) * 20;

        hub.x = centerX + Math.cos(hub.angle + (idx * Math.PI) / 2) * orbitRadiusX;
        hub.y = centerY + Math.sin(hub.angle + (idx * Math.PI) / 2) * orbitRadiusY;

        // Subtle attraction to mouse if nearby
        if (mouse.active) {
          const dx = mouse.x - hub.x;
          const dy = mouse.y - hub.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            hub.x += dx * 0.03;
            hub.y += dy * 0.03;
          }
        }

        // Draw connections between hubs
        hubs.forEach((otherHub, otherIdx) => {
          if (otherIdx > idx) {
            ctx.beginPath();
            ctx.moveTo(hub.x, hub.y);
            ctx.lineTo(otherHub.x, otherHub.y);
            ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
            ctx.lineWidth = 1;
            ctx.stroke();

            // Animated pulse packets traveling along the link
            const pulseProgress = (time * 0.4 + (idx + otherIdx)) % 1;
            const px = hub.x + (otherHub.x - hub.x) * pulseProgress;
            const py = hub.y + (otherHub.y - hub.y) * pulseProgress;
            ctx.beginPath();
            ctx.arc(px, py, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = hub.color;
            ctx.shadowBlur = 8;
            ctx.shadowColor = hub.color;
            ctx.fill();
            ctx.shadowBlur = 0;
          }
        });

        // Hub outer aura
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius + 8 + Math.sin(time * 2 + idx) * 3, 0, Math.PI * 2);
        ctx.fillStyle = `${hub.color}10`;
        ctx.fill();

        // Hub border
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${hub.color}80`;
        ctx.lineWidth = 1.5;
        ctx.fillStyle = "rgba(11, 17, 34, 0.85)";
        ctx.fill();
        ctx.stroke();

        // Hub core dot
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = hub.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = hub.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = "#e2e8f0";
        ctx.font = "11px -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(hub.name, hub.x, hub.y + hub.radius + 15);
      });

      // Update & render particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Connect particles near hubs
        hubs.forEach((hub) => {
          const dx = hub.x - p.x;
          const dy = hub.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(hub.x, hub.y);
            ctx.strokeStyle = `${p.color}${Math.floor((1 - dist / 100) * 40).toString(16).padStart(2, "0")}`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        });

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToUniverse = () => {
    playSound("click");
    const el = document.getElementById("project-universe");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden lab-grid-bg">
      {/* Radial Atmospheric Background Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Text & Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono tracking-wider uppercase text-cyan-300 font-semibold">
                {PORTFOLIO_DATA.profile.identityLabel}
              </span>
            </div>

            {/* Main Wordmark & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-400">
                  CYRINE AI LAB
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 leading-tight">
                {PORTFOLIO_DATA.profile.headline}
              </h2>
            </div>

            {/* Supporting Pitch */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {PORTFOLIO_DATA.profile.subheadline} Currently in Master AIDA at{" "}
              <span className="text-white font-semibold underline decoration-cyan-400/50 underline-offset-4">
                Université Paris-Dauphine PSL
              </span>
              , specializing in predictive modeling, Generative AI (Model Context Protocol & text-to-SQL), and cloud data architectures.
            </p>

            {/* Currently Exploring Live Feed */}
            <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex items-center gap-3 max-w-xl">
              <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
                <Sparkles className="w-4 h-4 animate-spin-slow" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-500">
                  Currently Exploring in Lab
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-200 truncate transition-all duration-300">
                  {PORTFOLIO_DATA.profile.currentExploration[currentTopicIndex]}
                </div>
              </div>
              <span className="text-[10px] font-mono text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30">
                LIVE
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToUniverse}
                className="group flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                <span>Explore Project Universe</span>
              </button>

              <a
                href="/CV_Cyrine_Fakhfakh_2027.pdf"
                download="CV_Cyrine_Fakhfakh_2027.pdf"
                onClick={() => playSound("click")}
                className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 hover:border-cyan-500/50 font-medium text-sm transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#recruiter-pitch"
                onClick={() => playSound("click")}
                className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Recruiter 60s Fast-Track</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80 max-w-xl">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-cyan-400 font-mono">9+</div>
                <div className="text-[11px] text-slate-400">Technical Repos</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-indigo-400 font-mono">3</div>
                <div className="text-[11px] text-slate-400">Key Experiences</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-emerald-400 font-mono">10+</div>
                <div className="text-[11px] text-slate-400">Certifications</div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl sm:text-2xl font-extrabold text-amber-400 font-mono">2027</div>
                <div className="text-[11px] text-slate-400">PFE Available</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Neural Universe Canvas */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full aspect-square max-w-lg rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 p-2 shadow-2xl shadow-cyan-950/40">
              {/* Scanline effect */}
              <div className="scanline pointer-events-none" />

              {/* Lab Canvas */}
              <canvas
                ref={canvasRef}
                className="w-full h-full block cursor-crosshair rounded-2xl bg-[#070b16]/90"
              />

              {/* Interactive HUD badge */}
              <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded-lg bg-black/60 border border-slate-800 text-[10px] font-mono text-cyan-400">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>INTERACTIVE LAB NODE GRAPH</span>
              </div>

              <div className="absolute bottom-4 right-4 pointer-events-none text-[10px] font-mono text-slate-500 bg-black/60 px-2 py-0.5 rounded border border-slate-800">
                Hover to perturb nodes
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-12 flex flex-col items-center justify-center">
          <button
            onClick={scrollToUniverse}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition group cursor-pointer"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest group-hover:text-cyan-300">
              Explore The Project Universe
            </span>
            <div className="w-8 h-8 rounded-full border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition">
              <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 animate-bounce" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
