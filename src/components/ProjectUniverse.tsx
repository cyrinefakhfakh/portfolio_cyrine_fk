"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Compass, Grid, Sparkles, Search, Filter, ArrowUpRight, CheckCircle2, ChevronRight, Layers, Eye } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { PORTFOLIO_DATA, Project } from "@/data/portfolioData";
import { playSound } from "@/utils/audio";
import ProjectDetailModal from "./ProjectDetailModal";

interface ProjectUniverseProps {
  onOpenLiveSimulator?: (simulatorType: 'genbi' | 'cancer' | 'crypto') => void;
  selectedProjectId?: string | null;
  onClearSelectedProject?: () => void;
}

export default function ProjectUniverse({
  onOpenLiveSimulator,
  selectedProjectId,
  onClearSelectedProject,
}: ProjectUniverseProps) {
  const [viewMode, setViewMode] = useState<'universe' | 'grid'>('universe');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'title' | 'category'>('featured');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // If a project is selected externally (e.g. from CommandPalette)
  useEffect(() => {
    if (selectedProjectId) {
      const found = PORTFOLIO_DATA.projects.find((p) => p.id === selectedProjectId);
      if (found) {
        setActiveProject(found);
      }
    }
  }, [selectedProjectId]);

  const categories = [
    'All',
    'Generative AI & LLMs',
    'Machine Learning & Deep Learning',
    'Big Data & Data Engineering',
    'Business Intelligence & Analytics',
    'Research & Experiments',
  ];

  // Filtered and sorted projects
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects
      .filter((project) => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const matchesQuery =
          project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
          project.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        if (sortBy === 'category') return a.category.localeCompare(b.category);
        return 0;
      });
  }, [activeCategory, searchQuery, sortBy]);

  // Universe Canvas Simulation
  useEffect(() => {
    if (viewMode !== 'universe') return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = Math.max(560, (canvas.parentElement?.clientHeight || 600)));

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.max(560, canvas.parentElement.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    const centerX = width / 2;
    const centerY = height / 2;

    // Node state array
    const nodes = filteredProjects.map((p, idx) => ({
      ...p,
      currentAngle: (idx * (Math.PI * 2)) / Math.max(filteredProjects.length, 1),
      currentX: centerX,
      currentY: centerY,
      isHovered: false,
    }));

    let hoveredNode: typeof nodes[0] | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found: typeof nodes[0] | null = null;
      for (const node of nodes) {
        const dist = Math.sqrt((mouseX - node.currentX) ** 2 + (mouseY - node.currentY) ** 2);
        if (dist <= node.nodeSize + 6) {
          found = node;
          break;
        }
      }

      if (found !== hoveredNode) {
        hoveredNode = found;
        if (found) {
          canvas.style.cursor = 'pointer';
          playSound('hover');
        } else {
          canvas.style.cursor = 'default';
        }
      }
    };

    const handleClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      for (const node of nodes) {
        const dist = Math.sqrt((mouseX - node.currentX) ** 2 + (mouseY - node.currentY) ** 2);
        if (dist <= node.nodeSize + 8) {
          playSound('open');
          const fullProj = PORTFOLIO_DATA.projects.find((p) => p.id === node.id);
          if (fullProj) setActiveProject(fullProj);
          break;
        }
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Central Lab Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 32, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(6, 9, 19, 0.9)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Core pulsating glow
      ctx.beginPath();
      ctx.arc(centerX, centerY, 40 + Math.sin(time * 3) * 4, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#38bdf8';
      ctx.font = 'bold 10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CYRINE', centerX, centerY - 2);
      ctx.fillStyle = '#94a3b8';
      ctx.font = '9px monospace';
      ctx.fillText('CORE LAB', centerX, centerY + 10);

      // Orbital Rings
      const uniqueRadii = Array.from(new Set(nodes.map((n) => n.orbitRadius)));
      uniqueRadii.forEach((radius) => {
        // Adjust radius to fit canvas
        const scaledRadius = (radius / 520) * (Math.min(width, height) * 0.42);
        ctx.beginPath();
        ctx.arc(centerX, centerY, scaledRadius, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.07)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 6]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Update and Draw Nodes
      nodes.forEach((node, idx) => {
        node.currentAngle += node.orbitSpeed * 0.5;
        const scaledRadius = (node.orbitRadius / 520) * (Math.min(width, height) * 0.42);

        node.currentX = centerX + Math.cos(node.currentAngle) * scaledRadius;
        node.currentY = centerY + Math.sin(node.currentAngle) * scaledRadius;

        const isHover = hoveredNode?.id === node.id;

        // Line to core
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.currentX, node.currentY);
        ctx.strokeStyle = isHover ? `${node.glowColor}50` : 'rgba(56, 189, 248, 0.08)';
        ctx.lineWidth = isHover ? 1.5 : 0.8;
        ctx.stroke();

        // Traveling pulse packet
        const pulseT = (time * 0.5 + idx * 0.3) % 1;
        const px = centerX + (node.currentX - centerX) * pulseT;
        const py = centerY + (node.currentY - centerY) * pulseT;
        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = node.glowColor;
        ctx.fill();

        // Outer Glow
        ctx.beginPath();
        ctx.arc(
          node.currentX,
          node.currentY,
          node.nodeSize + (isHover ? 10 : 4) + Math.sin(time * 2 + idx) * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `${node.glowColor}${isHover ? '35' : '15'}`;
        ctx.fill();

        // Node Circle
        ctx.beginPath();
        ctx.arc(node.currentX, node.currentY, node.nodeSize + (isHover ? 3 : 0), 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(9, 14, 29, 0.95)';
        ctx.fill();
        ctx.strokeStyle = isHover ? '#ffffff' : node.glowColor;
        ctx.lineWidth = isHover ? 2.5 : 1.5;
        ctx.stroke();

        // Node Inner dot
        ctx.beginPath();
        ctx.arc(node.currentX, node.currentY, 4, 0, Math.PI * 2);
        ctx.fillStyle = node.glowColor;
        ctx.shadowBlur = isHover ? 12 : 6;
        ctx.shadowColor = node.glowColor;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label
        ctx.font = isHover ? 'bold 12px sans-serif' : '11px sans-serif';
        ctx.fillStyle = isHover ? '#38bdf8' : '#e2e8f0';
        ctx.textAlign = 'center';
        ctx.fillText(node.title, node.currentX, node.currentY + node.nodeSize + 14);

        // Subtitle category if hovered
        if (isHover) {
          ctx.font = '10px monospace';
          ctx.fillStyle = '#94a3b8';
          ctx.fillText(node.category, node.currentX, node.currentY + node.nodeSize + 28);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, [viewMode, filteredProjects]);

  return (
    <section id="project-universe" className="py-20 relative lab-grid-fine">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-xs font-mono text-cyan-400">
              <Compass className="w-3.5 h-3.5 animate-spin-slow" />
              <span>SIGNATURE LAB FEATURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Interactive Project Universe
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Explore Cyrine's verified technical projects through an orbital constellation or toggle into a high-density structured matrix.
            </p>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => {
                playSound('click');
                setViewMode('universe');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                viewMode === 'universe'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Constellation View</span>
            </button>

            <button
              onClick={() => {
                playSound('click');
                setViewMode('grid');
              }}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid Matrix</span>
            </button>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playSound('click');
                  setActiveCategory(cat);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition ${
                  activeCategory === cat
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search and Sort */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter stack, title..."
                className="w-full bg-slate-900/80 border border-slate-800 focus:border-cyan-500/40 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none transition"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => {
                playSound('click');
                setSortBy(e.target.value as 'featured' | 'title' | 'category');
              }}
              className="bg-slate-900/80 border border-slate-800 text-slate-300 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:border-cyan-500/40"
            >
              <option value="featured">Sort: Featured</option>
              <option value="title">Sort: Title</option>
              <option value="category">Sort: Category</option>
            </select>
          </div>
        </div>

        {/* VIEW 1: UNIVERSE ORBITAL CANVAS */}
        {viewMode === 'universe' && (
          <div className="relative w-full h-[600px] rounded-3xl overflow-hidden glass-panel border border-cyan-500/20 shadow-2xl shadow-cyan-950/40">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/60 border border-slate-800 text-xs font-mono text-cyan-400">
              <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
              <span>ORBITAL CONSTELLATION · {filteredProjects.length} NODES LOADED</span>
            </div>

            <div className="absolute top-4 right-4 z-10 text-[11px] font-mono text-slate-400 bg-black/60 px-3 py-1 rounded-lg border border-slate-800 hidden sm:block">
              Click any node to open full architectural dossier
            </div>

            <canvas ref={canvasRef} className="w-full h-full block bg-[#060914]" />

            {/* Quick switcher to Grid if user prefers */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={() => {
                  playSound('click');
                  setViewMode('grid');
                }}
                className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-300 text-xs font-medium border border-slate-700/80 shadow-lg transition"
              >
                <span>Prefer card format? Switch to Grid View</span>
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
              </button>
            </div>
          </div>
        )}

        {/* VIEW 2: ACCESSIBLE HIGH-DENSITY GRID */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl glass-panel border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div className="space-y-4">
                  {/* Top Bar with Category Badge & Status */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold"
                      style={{
                        backgroundColor: `${project.glowColor}15`,
                        color: project.glowColor,
                        border: `1px solid ${project.glowColor}30`,
                      }}
                    >
                      {project.category}
                    </span>

                    {project.verifiedMetrics && project.verifiedMetrics.length > 0 && (
                      <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-medium line-clamp-2">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Architecture step snippet */}
                  <div className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 text-[11px] font-mono text-slate-400 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">{project.architecture.title}</span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-5 mt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => {
                      playSound('open');
                      setActiveProject(project);
                    }}
                    className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Dossier</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => playSound('click')}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-slate-900/30 rounded-3xl border border-slate-800 p-8 space-y-3">
            <Compass className="w-8 h-8 text-slate-600 mx-auto" />
            <div className="text-base font-semibold text-slate-300">No projects match your filter</div>
            <p className="text-xs text-slate-500">Try clearing your search query or switching categories.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-xs font-semibold border border-cyan-500/30 hover:bg-cyan-500/30 transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <ProjectDetailModal
          project={activeProject}
          onClose={() => {
            setActiveProject(null);
            if (onClearSelectedProject) onClearSelectedProject();
          }}
          onOpenLiveSimulator={onOpenLiveSimulator}
        />
      )}
    </section>
  );
}
