"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Lock,
  Sparkles,
  Plane,
  FileCheck,
  Building,
} from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  role: string;
  description: string;
  highlights: string[];
  metrics?: string[];
  technologies: string[];
  repoUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  visualType: "brofesional" | "sikoku" | "terbangin" | "melung";
}

const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "brofesional",
    title: "Brofesional User App",
    subtitle: "Production Edutech Platform & AI Assistant",
    category: "Professional / Flagship",
    period: "March 2025 – Present",
    role: "Frontend Developer (Full-time)",
    description:
      "Edutech platform serving 5,000+ mobile app users via WebView. Engineered real-time SSE AI chatbot 'Brodi', interactive assessment engines, and high-volume API consumption optimizations.",
    highlights: [
      "AI Chatbot 'Brodi' with Server-Sent Events (SSE) streaming & contextual memory",
      "Interactive assessment engine: live quizzes, TOEFL tryouts, drag-and-drop questions",
      "API optimization: pagination & selective response fields eliminating browser freezes",
    ],
    metrics: [
      "5,000+ Mobile WebView Users",
      "~70% API Payload Reduction",
      "Zero Freezes on 1,000+ Records",
    ],
    technologies: [
      "React 17",
      "TypeScript",
      "Material UI v5",
      "Redux Toolkit",
      "ECharts",
      "@dnd-kit",
      "Axios",
      "REST API",
    ],
    isPrivate: true,
    visualType: "brofesional",
  },
  {
    id: "sikoku",
    title: "SIKOKU Psychotest Platform",
    subtitle: "Gamified Psychometric Testing Platform",
    category: "Client Work / Copyright (HKI)",
    period: "2020 – 2022",
    role: "Freelance Frontend Developer",
    description:
      "Online gamified psychometric testing platform for elementary through high school students. Officially awarded Hak Cipta / Copyright (HKI) by the Ministry of Law and Human Rights (Kemenkumham) in June 2022.",
    highlights: [
      "Officially awarded HKI / Copyright (Kemenkumham RI, June 2022)",
      "Interactive gamified test engine supporting multiple question and token formats",
      "Delivered as end-to-end client solution with comprehensive candidate reporting",
    ],
    metrics: ["Official Copyright / HKI Certified"],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST API"],
    repoUrl: "https://github.com/Brahmastabagus/SIKOKU",
    visualType: "sikoku",
  },
  {
    id: "terbangin",
    title: "TerbangIn",
    subtitle: "Flight Ticket Booking Platform",
    category: "Bootcamp Capstone / Binar Academy",
    period: "February 2023 – July 2023",
    role: "Scrum Master & Fullstack Developer",
    description:
      "Comprehensive flight ticket booking platform engineered as the final capstone project at Binar Academy Fullstack Web Development program, achieving a Hard-skill Score of 4.9/5 and Chapter Average of 97.",
    highlights: [
      "Scrum Master leading multi-repository architecture (Frontend web + backend REST API)",
      "Interactive flight search, seat selection, booking workflows, and history tracking",
      "Binar Academy Certified Independent Study (Kampus Merdeka) Capstone Project",
    ],
    metrics: ["Hard-skill Score: 4.9 / 5.0", "Chapter Average: 97"],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "PrimeReact",
      "Vite",
      "Express.js",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/orgs/TerbangIn",
    liveUrl: "https://terbang-in.netlify.app",
    visualType: "terbangin",
  },
  {
    id: "desa-melung",
    title: "Desa Wisata Melung",
    subtitle: "Tourism Information System & Academic Journal",
    category: "S1 Thesis / Research & Development",
    period: "2023 – 2024",
    role: "Researcher & Fullstack Developer",
    description:
      "Fullstack web information portal and published academic research paper: 'Perancangan Sistem Informasi Desa Wisata Berbasis Website dengan Metode RAD, Studi Kasus: Desa Wisata Melung'.",
    highlights: [
      "Published academic research in peer-reviewed scientific journal",
      "Engineered fullstack web architecture with React, Vite, TailwindCSS, and RESTful API",
      "Bachelor's degree capstone project at IT Telkom Purwokerto (GPA 3.95/4.00)",
    ],
    metrics: ["Academic Journal Publication", "GPA 3.95 Honors"],
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/Brahmastabagus/desa-melung",
    visualType: "melung",
  },
];

function ProjectVisualMockup({
  type,
}: {
  type: ProjectItem["visualType"];
}) {
  switch (type) {
    case "brofesional":
      return (
        <div className="w-full h-40 sm:h-48 rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 via-card to-muted/30 p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative group/preview">
          {/* Subtle Top Bar */}
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/60" />
              <span className="size-2 rounded-full bg-yellow-500/60" />
              <span className="size-2 rounded-full bg-green-500/60" />
              <span className="text-[11px] font-mono text-muted-foreground ml-1">
                brofesional.app · WebView
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              5k+ Users
            </span>
          </div>

          {/* Center Simulated UI Fragment */}
          <div className="flex items-center gap-3 my-auto">
            <div className="size-10 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0">
              <Sparkles className="size-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-foreground truncate">
                  AI Chatbot &quot;Brodi&quot;
                </span>
                <span className="size-1.5 rounded-full bg-accent-green animate-pulse" />
              </div>
              <span className="text-[11px] font-mono text-muted-foreground truncate">
                SSE response streaming · Contextual reasoning
              </span>
            </div>
          </div>

          {/* Bottom Chips */}
          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
            <span>TOEFL Prep · Live Quizzes</span>
            <span className="text-accent-blue font-medium">~70% Payload Saved</span>
          </div>
        </div>
      );

    case "sikoku":
      return (
        <div className="w-full h-40 sm:h-48 rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 via-card to-muted/30 p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative group/preview">
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/60" />
              <span className="size-2 rounded-full bg-yellow-500/60" />
              <span className="size-2 rounded-full bg-green-500/60" />
              <span className="text-[11px] font-mono text-muted-foreground ml-1">
                sikoku.portal
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
              HKI / Copyright
            </span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="size-10 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
              <FileCheck className="size-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-semibold text-foreground truncate">
                Psychometric Assessment Engine
              </span>
              <span className="text-[11px] font-mono text-muted-foreground truncate">
                Kemenkumham Certificate Granted (June 2022)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
            <span>Gamified Questions · Token System</span>
            <span className="text-amber-500 font-medium">Verified IP</span>
          </div>
        </div>
      );

    case "terbangin":
      return (
        <div className="w-full h-40 sm:h-48 rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 via-card to-muted/30 p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative group/preview">
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/60" />
              <span className="size-2 rounded-full bg-yellow-500/60" />
              <span className="size-2 rounded-full bg-green-500/60" />
              <span className="text-[11px] font-mono text-muted-foreground ml-1">
                terbang-in.netlify.app
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">
              Live Demo
            </span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="size-10 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0">
              <Plane className="size-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-semibold text-foreground truncate">
                Flight Ticket Booking Architecture
              </span>
              <span className="text-[11px] font-mono text-muted-foreground truncate">
                React + TypeScript + Redux Toolkit + PostgreSQL
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
            <span>Binar Academy Capstone</span>
            <span className="text-accent-blue font-medium">Score 4.9 / 5.0</span>
          </div>
        </div>
      );

    case "melung":
      return (
        <div className="w-full h-40 sm:h-48 rounded-lg border border-border/60 bg-gradient-to-br from-muted/60 via-card to-muted/30 p-3 sm:p-4 flex flex-col justify-between select-none overflow-hidden relative group/preview">
          <div className="flex items-center justify-between border-b border-border/50 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-red-500/60" />
              <span className="size-2 rounded-full bg-yellow-500/60" />
              <span className="size-2 rounded-full bg-green-500/60" />
              <span className="text-[11px] font-mono text-muted-foreground ml-1">
                desa-melung.research
              </span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
              Journal Paper
            </span>
          </div>

          <div className="flex items-center gap-3 my-auto">
            <div className="size-10 rounded-lg bg-accent-blue/15 border border-accent-blue/30 flex items-center justify-center text-accent-blue shrink-0">
              <Building className="size-5" />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-xs font-semibold text-foreground truncate">
                Sistem Informasi Desa Wisata Melung
              </span>
              <span className="text-[11px] font-mono text-muted-foreground truncate">
                Rapid Application Development (RAD) Methodology
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground">
            <span>S1 Computer Science Thesis</span>
            <span className="text-accent-blue font-medium">GPA 3.95 Honors</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

function SpotlightCard({ project }: { project: ProjectItem }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-2xl border border-border/80 bg-card/40 p-5 sm:p-6 transition-all hover:border-border duration-300 overflow-hidden flex flex-col gap-5 group"
    >
      {/* Spotlight highlight overlay */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.08), transparent 80%)`
            : "none",
        }}
        aria-hidden="true"
      />

      {/* Hover Image / Visual Mockup Container with scale-103 animation */}
      <div className="w-full transform transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        <ProjectVisualMockup type={project.visualType} />
      </div>

      {/* Project Meta Information */}
      <div className="flex flex-col gap-3 relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-foreground group-hover:text-foreground">
                {project.title}
              </h3>
              {project.isPrivate && (
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border/70"
                  title="Private enterprise codebase"
                >
                  <Lock className="size-3" />
                  <span>Private</span>
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm font-medium text-foreground/80">
              {project.subtitle}
            </p>
          </div>

          <span className="text-xs font-mono text-muted-foreground sm:text-right shrink-0">
            {project.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Metrics Badge row */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono bg-accent-blue/10 text-accent-blue border border-accent-blue/20 font-medium"
              >
                {m}
              </span>
            ))}
          </div>
        )}

        {/* Bulleted Highlights */}
        <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside pl-1 pt-1">
          {project.highlights.map((h, idx) => (
            <li key={idx}>
              <span className="text-foreground/85">{h}</span>
            </li>
          ))}
        </ul>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono border border-border/70 bg-muted/40 text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons: strictly only valid, safe links */}
        <div className="flex items-center gap-2.5 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-foreground text-background hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-accent-blue"
            >
              <span>Live Demo</span>
              <ExternalLink className="size-3" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          )}

          {project.isPrivate && (
            <span className="text-xs font-mono text-muted-foreground/80 italic">
              Private company repository · Verified via CV & LinkedIn
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-6 scroll-mt-6"
      aria-label="Featured Projects"
    >
      <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Featured Projects
        </h2>
        <p className="text-sm font-mono text-muted-foreground">
          Production platforms, client systems, and capstone engineering
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {FEATURED_PROJECTS.map((project) => (
          <SpotlightCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
