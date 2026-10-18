# CYRINE AI LAB — Immersive AI & Big Data Portfolio

> **"Turning Data Into Intelligence."**  
> Official portfolio website of **Cyrine Fakhfakh**, Master in Artificial Intelligence, Data & Agentic Systems (AIDA) at **Université Paris-Dauphine PSL**.

---

## 🌟 Overview & Signature Features

CYRINE AI LAB is designed as an advanced digital laboratory blending high-aesthetic modern UI with deep technical credibility:

- **🪐 Interactive Project Universe**: An interactive 2D orbital constellation with physics-like hover effects, pulse trails, and category filtering, alongside an accessible high-density matrix view.
- **⚡ GenBI Text-to-SQL Simulator**: Interactive playground demonstrating natural-language query ingestion, Model Context Protocol (MCP) schema grounding, and SQL synthesis.
- **🔬 Cytological Radar Simulator**: Clinical biopsy diagnostic interface calculating real-time malignancy probabilities on an SVG radar chart, linked to the verified video demonstration.
- **🏢 Enterprise Data Architecture Flow**: Interactive multi-tier data flow (Data Sources → ETL & Staging → SQL Server Kimball DWH → Deep Learning → Power BI & GenBI).
- **⏱️ 60-Second Recruiter Fast-Track**: Executive digest optimized for engineering managers and technical recruiters evaluating candidates for **6-Month PFE Internships (Feb 2027)**.
- **📖 AI Research Notebook**: Formal explorations in Explainable AI (SHAP, LIME, Grad-CAM), Agentic Systems (MCP), and Non-Stationary Time Series Forecasting.
- **💬 "Ask the Lab" AI Guide**: Intelligent client-side assistant grounded strictly in verified portfolio facts—runs 100% locally with zero paid API keys needed.
- **⌨️ Command Palette (`Ctrl/Cmd + K`)**: Instant keyboard navigation between sections, projects, and lab actions.
- **🔊 Procedural Audio Synthesizer**: Subtle sci-fi sound design powered by the native Web Audio API (toggleable and muted by default).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (Strict Typing)
- **Styling**: Tailwind CSS v4 & Vanilla CSS Glassmorphism
- **Icons**: Lucide React & Custom SVG Brand Icons
- **Animation & Canvas**: Native HTML5 Canvas (Neural Networks & Orbitals)
- **Audio**: Web Audio API Procedural Synthesizer
- **Assets**: Embedded local PDF CV, stage attestations, video demo, and high-res photography

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v20.18.0 or higher
- **npm**: v10.0.0 or higher

### Installation

```bash
# 1. Clone or navigate to the portfolio directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build optimized static and server bundle
npm run build

# Start production server
npm run start
```

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   ├── CV_Cyrine_Fakhfakh_2027.pdf          # Official PDF Resume
│   ├── LAGID_Attestation_de_stage_PFE.pdf   # PFE Stage Attestation
│   ├── portrait-transparent.png             # Studio cutout portrait
│   ├── portrait-full.png                    # Full courtyard portrait
│   ├── projects/
│   │   ├── amana takaful platform.jpeg      # Platform screenshot
│   │   ├── attestation stage telecom.jpeg   # IT stage attestation
│   │   └── bread cancer project.mp4         # Video demo of Cancer AI
│   └── certificats/                         # Verified certificates
├── src/
│   ├── app/
│   │   ├── globals.css                      # Design tokens, grid, glow styles
│   │   ├── layout.tsx                       # SEO, OpenGraph, JSON-LD meta
│   │   └── page.tsx                         # Master page component assembly
│   ├── components/
│   │   ├── Navbar.tsx                       # Header with audio & PFE beacon
│   │   ├── HeroSection.tsx                  # Entrance + Neural Node Canvas
│   │   ├── RecruiterFastTrack.tsx           # 60-second candidate pitch
│   │   ├── ProjectUniverse.tsx              # Constellation & Grid universe
│   │   ├── ProjectDetailModal.tsx           # Deep architecture & media modal
│   │   ├── InteractiveSimulators.tsx        # GenBI SQL & Cytology simulators
│   │   ├── ExperienceTimeline.tsx           # OliveSoft, Amana Takaful, Telecom
│   │   ├── DataArchitectureFlow.tsx         # Enterprise DWH pipeline diagram
│   │   ├── ResearchCorner.tsx               # XAI notebook & literature
│   │   ├── SkillsRadar.tsx                  # Domain matrix with project linking
│   │   ├── CertificationsGallery.tsx        # Credly, HackerRank, 365 Data Science
│   │   ├── AboutSection.tsx                 # Authentic bio & photo switcher
│   │   ├── ContactSection.tsx               # Functional email composer
│   │   ├── CommandPalette.tsx               # Ctrl+K keyboard shortcut palette
│   │   ├── InteractiveAIGuide.tsx           # "Ask the Lab" factual assistant
│   │   ├── CustomCursor.tsx                 # Desktop particle tracking
│   │   └── Footer.tsx                       # Bottom branding & metadata
│   ├── data/
│   │   └── portfolioData.ts                 # Single source of truth for all data
│   └── utils/
│       └── audio.ts                         # Web Audio API sound generator
├── .env.example                             # Environment template
└── package.json
```

---

## ⚙️ Customization Guide: Single Source of Truth

All textual content, projects, metrics, and links are managed centrally in:
👉 `src/data/portfolioData.ts`

### 1. Adding or Editing a Project
Add a new object to `PORTFOLIO_DATA.projects`:
```typescript
{
  id: "your-project-id",
  title: "Project Title",
  category: "Generative AI & LLMs", // Or "Machine Learning & Deep Learning", etc.
  status: "Completed",
  tagline: "Short one-sentence summary",
  description: "Detailed description",
  problemStatement: "Problem description",
  objectives: ["Objective 1", "Objective 2"],
  actualContribution: ["Your exact role and code written"],
  architecture: {
    title: "Pipeline Title",
    description: "Flow description",
    steps: [{ name: "Step Name", tech: "Tool", detail: "Details" }]
  },
  technologies: ["Python", "FastAPI"],
  implementationSteps: ["Step 1", "Step 2"],
  challengesAndSolutions: [{ challenge: "Issue", solution: "Fix" }],
  verifiedMetrics: [{ label: "Accuracy", value: "98%", context: "Validation set" }],
  githubUrl: "https://github.com/cyrinefakhfakh/repo-name",
  keyTakeaways: ["Lesson learned"],
  futureImprovements: ["Next step"],
  featured: true,
  orbitRadius: 200,
  orbitSpeed: 0.005,
  nodeSize: 20,
  glowColor: "#38bdf8"
}
```

### 2. Updating Contact Information or Availability
Modify `PORTFOLIO_DATA.profile`:
- Update `email`, `phone`, `linkedin`, `github`.
- Adjust `statusBadge.label` when your PFE status changes.

### 3. Replacing Media Files
- **CV**: Replace `public/CV_Cyrine_Fakhfakh_2027.pdf` with any updated resume.
- **Portrait**: Replace `public/portrait-transparent.png` or `public/portrait-full.png`.
- **Project Demos**: Add videos or screenshots to `public/projects/` and reference them in `project.media`.

---

## 🌐 Deployment to Vercel

The portfolio is pre-configured for one-click deployment on **Vercel**:

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: CYRINE AI LAB portfolio"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**.

---

## 📋 Content Verification Checklist

- [x] All 9+ real projects linked to their official GitHub repositories.
- [x] Paris-Dauphine PSL Master AIDA & ISAMM academic credentials verified.
- [x] OliveSoft GenBI platform, Model Context Protocol (MCP), and FastAPI work documented.
- [x] Amana Takaful Insurance PFE project with verified attestation document & platform screenshot.
- [x] Tunisie Telecom IT infrastructure internship with attestation document.
- [x] Breast cancer AI diagnostic tool with embedded video demo and interactive morphometry radar.
- [x] Google Cloud Vertex AI, HackerRank, 365 Data Science certifications linked.
- [x] Contact email (`cyrine.fakhfakh@dauphine.eu`) and phone (`+216 24 414 028`) connected.
- [x] Zero broken links or fake dummy forms.
#   p o r t f o l i o _ c y r i n e _ f k  
 