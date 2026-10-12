"use client";

import React, { useState, useMemo } from "react";
import {
  ExternalLink,
  Lock,
  Sparkles,
  Award,
  FolderGit2,
  BookOpen,
} from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";
import { cn } from "@/lib/utils";

interface FeaturedProjectItem {
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
  playStoreUrl?: string;
  appStoreUrl?: string;
  isPrivate?: boolean;
}

const FEATURED_PROJECTS: FeaturedProjectItem[] = [
  {
    id: "brofesional",
    title: "Brofesional User App",
    subtitle: "Production Edutech Platform & AI Assistant",
    category: "Professional / Flagship",
    period: "March 2025 – Present",
    role: "Frontend Developer (Full-time)",
    description:
      "Edutech mobile app platform serving 5,000+ users via WebView. Engineered real-time SSE AI chatbot 'Brodi', interactive assessment engines, and high-volume API consumption optimizations.",
    highlights: [
      "AI Chatbot 'Brodi' with Server-Sent Events (SSE) streaming & contextual memory",
      "Interactive assessment engine: TOEFL tryouts, live quizzes, charts, and drag-and-drop questions",
      "API optimization: pagination & selective response fields reducing payload by ~70% and eliminating browser freezes",
      "E-course guidelines, assignments per class, tryout certificates, image compression, and push notifications",
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
      "React Router v6",
      "Axios",
      "ECharts",
      "@dnd-kit",
      "SSE",
      "Firebase",
      "browser-image-compression",
      "Swiper",
      "video.js",
    ],
    isPrivate: true,
    liveUrl: "https://brofesional.id",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.brofesional.app&hl=id&pli=1",
    appStoreUrl: "https://apps.apple.com/id/app/brofesional/id6747415242",
  },
  {
    id: "enternica",
    title: "Drinktohappy — Enternica",
    subtitle: "Talent Booking Platform & Digital Workflows",
    category: "Professional / Client Project",
    period: "April 2024 – September 2024",
    role: "Frontend Developer (Drinktohappy)",
    description:
      "Entertainment talent-booking platform featuring an end-to-end multi-stage booking pipeline, online contract signing with digital signature canvas, and AI chatbot integration.",
    highlights: [
      "Engineered stepper-based booking flow: talent selection → scheduling → document → approval → payment",
      "Implemented in-browser digital contract signing canvas (react-signature-canvas) and rich text agreement editor",
      "Integrated responsive talent catalogs, date/timezone booking schedules, and AI assistant interface",
    ],
    metrics: [
      "Multi-Stage Booking Pipeline",
      "Digital Contract Canvas",
      "Client Production",
    ],
    technologies: [
      "React.js",
      "RSuiteJS",
      "Redux Toolkit",
      "Framer Motion",
      "react-signature-canvas",
      "react-dnd",
      "DOMPurify",
      "Axios",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/Brahmastabagus/enternica-archive",
    liveUrl: "https://enternica.com",
  },
  {
    id: "terbangin",
    title: "TerbangIn",
    subtitle: "Flight Ticket Booking Platform",
    category: "Bootcamp Capstone / Binar Academy",
    period: "February 2023 – July 2023",
    role: "Scrum Master & Fullstack Developer",
    description:
      "Comprehensive flight ticket booking platform engineered as the final capstone project at Binar Academy Fullstack Web Development (Kampus Merdeka MSIB), achieving a Hard-skill Score of 4.9/5.0 and Chapter Average of 97.",
    highlights: [
      "Led cross-functional team as Scrum Master across multi-repo architecture (Frontend Web, REST API, Android)",
      "Interactive flight search, real-time seat selection, booking workflows, and transaction history tracking",
      "Fullstack integration with Express.js REST API, Sequelize ORM, and PostgreSQL database",
    ],
    metrics: ["Hard-skill Score: 4.9 / 5.0", "Chapter Average: 97", "Kampus Merdeka Capstone"],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "PrimeReact",
      "Vite",
      "Tailwind CSS",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/orgs/TerbangIn",
    liveUrl: "https://terbang-in.netlify.app",
  },
  {
    id: "semarang-technopark",
    title: "Semarang Technopark",
    subtitle: "Coworking Space Booking & Incubation Portal",
    category: "Internship / Akselerator Lab",
    period: "August 2022 – December 2022",
    role: "Frontend Developer (Internship)",
    description:
      "Official public web portal for Semarang Technopark facilitating coworking space reservations, startup incubation program information, and workshop registrations within a 10-person collaborative team.",
    highlights: [
      "Built within an agile 10-person collaborative team (3 frontend engineers) during internship at Akselerator Lab",
      "Integrated interactive coworking reservation flows, startup incubation directories, and workshop schedules",
      "Implemented rich-text content management (@tiptap) and responsive layouts with Tailwind CSS",
    ],
    metrics: [
      "10-Person Agile Team",
      "Live Vercel Production",
      "Coworking Reservation System",
    ],
    technologies: [
      "React 18",
      "Tailwind CSS",
      "React Context",
      "Axios",
      "@tiptap/react",
      "daisyui",
      "universal-cookie",
    ],
    repoUrl: "https://github.com/adhipramanax/Semarang-Technopark",
    liveUrl: "https://semarang-technopark-two.vercel.app/",
  },
];

interface NotableProject {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  categoryGroup: "client" | "research" | "internship" | "academic" | "practice";
  period: string;
  role: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  backendRepoUrl?: string;
  liveUrl?: string;
  universityRepoUrl?: string;
  verifyUrl?: string;
  isPrivate?: boolean;
  isHki?: boolean;
}

const ALL_OTHER_PROJECTS: NotableProject[] = [
  {
    id: "desa-melung",
    title: "Desa Wisata Melung",
    subtitle: "Tourism Information System & Academic Journal",
    category: "S1 Thesis / Scientific Journal",
    categoryGroup: "research",
    period: "2023 – 2024",
    role: "Researcher & Fullstack Developer",
    description:
      "Fullstack web portal and published scientific research paper in journal: 'Perancangan Sistem Informasi Desa Wisata Berbasis Website dengan Metode RAD'. Thesis capstone at IT Telkom Purwokerto with GPA 3.95/4.00 Cum Laude Honors.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "TypeScript",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
      "REST API",
      "Swagger",
      "Midtrans",
    ],
    repoUrl: "https://github.com/Brahmastabagus/desa-melung",
    backendRepoUrl: "https://github.com/Brahmastabagus/desa-melung-be",
    universityRepoUrl: "https://repository.ittelkom-pwt.ac.id/11356/",
  },
  {
    id: "sikoku",
    title: "SIKOKU Psychotest Platform",
    subtitle: "Gamified Psychometric Testing Platform",
    category: "Client Work / Freelance",
    categoryGroup: "client",
    period: "2020 – 2022",
    role: "Freelance Frontend Developer",
    description:
      "Online gamified psychometric testing platform for elementary through high school students. Delivered as an end-to-end client solution with token authentication, timed test sessions, and automated candidate score evaluation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "REST API"],
    repoUrl: "https://github.com/Brahmastabagus/SIKOKU",
  },
  {
    id: "teknoko",
    title: "TEKNOKO Store Management App",
    subtitle: "Desktop Store Inventory & Sales System",
    category: "Registered Hak Cipta / HKI",
    categoryGroup: "academic",
    period: "2022",
    role: "Co-creator & Developer",
    description:
      "Desktop application for retail store inventory, stock tracking, and daily transaction reporting. Officially registered with Hak Cipta / HKI by Kemenkumham RI (No. 000344816, Permohonan EC00202229256).",
    technologies: ["Java", "NetBeans", "MySQL", "Desktop OOP"],
    repoUrl: "https://github.com/Brahmastabagus/Teknoko",
    verifyUrl:
      "https://pdki-indonesia.dgip.go.id/detail/e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    isHki: true,
  },
  {
    id: "baturraden",
    title: "Baturraden Admin & Loket System",
    subtitle: "Tourism Destination Management & On-site Ticketing",
    category: "Client Work / Destination Management",
    categoryGroup: "client",
    period: "2024",
    role: "Frontend Developer",
    description:
      "Management platform for Baturraden tourist destination featuring administrative CRUD for attractions, pricing, vehicle fees, and an offline loket counter for on-site ticket sales and receipt printing.",
    technologies: [
      "React 18",
      "Vite 4",
      "Redux Toolkit",
      "RSuite 5",
      "Tailwind CSS 3",
      "Axios",
      "react-to-print",
    ],
    repoUrl: "https://github.com/Brahmastabagus/baturraden",
    backendRepoUrl: "https://github.com/Brahmastabagus/baturraden-be",
  },
  {
    id: "warung-bibit",
    title: "Warung Bibit",
    subtitle: "Agriculture E-Commerce & Midtrans Payment",
    category: "Professional Client Work",
    categoryGroup: "client",
    period: "April 2024 – September 2024",
    role: "Frontend Developer (Drinktohappy)",
    description:
      "E-commerce platform for agricultural products with shopping cart flows and Midtrans payment gateway integration developed for client at Drinktohappy.",
    technologies: [
      "React.js",
      "RSuiteJS",
      "Redux Toolkit",
      "Midtrans",
      "Framer Motion",
      "Axios",
    ],
    repoUrl: "https://github.com/zodplugin/warung-bibit",
    liveUrl: "https://warung-bibit.vercel.app/",
  },
  {
    id: "weddingly",
    title: "Weddingly",
    subtitle: "Wedding Planning & Vendor Marketplace",
    category: "Internship / Akselerator Lab",
    categoryGroup: "internship",
    period: "August 2022 – December 2022",
    role: "Frontend Developer (Internship)",
    description:
      "Wedding-planning web application connecting couples with vendors, scheduling, and wedding checklists. First Next.js production exposure during Akselerator Lab internship.",
    technologies: [
      "Next.js 12",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "daisyui",
    ],
    repoUrl: "https://github.com/gillyhuga/weddingly",
    liveUrl: "https://weddingly.vercel.app",
  },
  {
    id: "brofesional-dashboard",
    title: "Brofesional Internal Dashboard",
    subtitle: "Edutech Operations & Tutor Management Admin",
    category: "Professional / Internal Tooling",
    categoryGroup: "client",
    period: "March 2025 – Present",
    role: "Frontend Developer",
    description:
      "Internal administrative dashboard for Brofesional platform managing tutor allocations, vouchers, live quiz schedules, score reporting, and administrative data exports.",
    technologies: [
      "React",
      "Reactstrap",
      "JavaScript",
      "browser-image-compression",
      "react-quill",
      "Axios",
    ],
    isPrivate: true,
  },
  {
    id: "bintang-juara",
    title: "PAUD Bintang Juara",
    subtitle: "Early Childhood School Profile Website",
    category: "Internship / Side Project",
    categoryGroup: "internship",
    period: "August 2022 – December 2022",
    role: "Frontend Developer",
    description:
      "Official website for PAUD Bintang Juara to showcase school curriculum, activities, and student admissions during internship period.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Select2"],
    repoUrl: "https://github.com/Brahmastabagus/Bintang-Juara",
    liveUrl: "https://brahmastabagus.github.io/Bintang-Juara/",
  },
  {
    id: "pt-tirta",
    title: "PT Tirta Purbalingga Adijaya",
    subtitle: "Water Enterprise Corporate Profile",
    category: "Freelance Client Work",
    categoryGroup: "client",
    period: "2020 – 2022",
    role: "Freelance Frontend Developer",
    description:
      "Corporate company profile website for PT Tirta Purbalingga Adijaya, regional bottled and drinking water provider in Purbalingga.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    repoUrl: "https://github.com/Brahmastabagus/PT.-Tirta-Purbalingga-Adijaya",
    liveUrl: "https://brahmastabagus.github.io/PT.-Tirta-Purbalingga-Adijaya/",
  },
  {
    id: "user-dashboard",
    title: "User Management Dashboard",
    subtitle: "Modern Admin Architecture Exploration",
    category: "Technical Practice",
    categoryGroup: "practice",
    period: "February 2025",
    role: "Frontend Developer",
    description:
      "Modern administrative management dashboard exploring React 19, Tailwind CSS 4, and Redux Toolkit state stores with responsive data tables.",
    technologies: [
      "React 19",
      "Vite",
      "Tailwind CSS 4",
      "Redux Toolkit",
      "RSuite 5",
      "TypeScript",
    ],
    repoUrl: "https://github.com/Brahmastabagus/user-management-dashboard",
  },
  {
    id: "binar-lms",
    title: "Binar Academy LMS Platform",
    subtitle: "Fullstack Learning Management System",
    category: "Bootcamp Project",
    categoryGroup: "internship",
    period: "February 2023 – July 2023",
    role: "Fullstack Developer",
    description:
      "Fullstack learning management system platform mockup developed during Binar Academy Fullstack curriculum with authentication and course enrollments.",
    technologies: [
      "React",
      "Redux Toolkit",
      "Vite",
      "Express.js",
      "Sequelize",
      "PostgreSQL",
    ],
    repoUrl: "https://github.com/Brahmastabagus/Binar-lms-fe",
    backendRepoUrl: "https://github.com/Brahmastabagus/Binar-lms-be",
  },
  {
    id: "fitnesku",
    title: "Fitnesku / Mengfitness",
    subtitle: "Fitness Directory Coursework Portal",
    category: "Academic Coursework",
    categoryGroup: "academic",
    period: "2022",
    role: "Developer",
    description:
      "University coursework web project featuring responsive fitness routines and health guide directories.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    repoUrl: "https://github.com/Brahmastabagus/Fitnesku",
    liveUrl: "https://brahmastabagus.github.io/Fitnesku/",
  },
  {
    id: "fleetify",
    title: "Fleetify Technical Assessment",
    subtitle: "Coding Challenge Assessment Test",
    category: "Technical Assessment",
    categoryGroup: "practice",
    period: "February 2025",
    role: "Developer",
    description:
      "Technical assessment coding test built with vanilla JavaScript, HTML, and CSS demonstrating client-side state handling and local storage.",
    technologies: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    repoUrl: "https://github.com/Brahmastabagus/challenge-test-fleetify",
  },
  {
    id: "pt-safari",
    title: "PT Safari Nusantara Bersaudara",
    subtitle: "Client Profile Responsive Pages",
    category: "Professional Client Work",
    categoryGroup: "client",
    period: "April 2024 – September 2024",
    role: "Frontend Developer",
    description:
      "Client responsive web pages developed during tenure at Drinktohappy utilizing component-driven styling and accessible layouts.",
    technologies: ["React.js", "RSuiteJS", "Redux", "Tailwind CSS", "Axios"],
    repoUrl:
      "https://github.com/zodplugin/PT-SAFARI-NUSANTARA-BERSAUDARA-FE",
  },
];

const CATEGORY_TABS = [
  { id: "all", label: "All Projects" },
  { id: "client", label: "Client & Professional" },
  { id: "research", label: "Research & Thesis" },
  { id: "internship", label: "Internship & Bootcamp" },
  { id: "academic", label: "Intellectual Property & Academic" },
  { id: "practice", label: "Practice & Tools" },
];

function SpotlightCard({ project }: { project: FeaturedProjectItem }) {
  return (
    <div className="relative rounded-2xl border border-border/80 bg-card/40 p-5 sm:p-6 transition-colors hover:border-border flex flex-col gap-5">
      <div className="flex flex-col gap-3">
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

          <div className="flex flex-col sm:items-end gap-0.5">
            <span className="text-xs font-mono text-muted-foreground sm:text-right shrink-0">
              {project.period}
            </span>
            <span className="text-[11px] font-mono text-accent-blue sm:text-right">
              {project.role}
            </span>
          </div>
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

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-foreground text-background hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-accent-blue cursor-pointer"
            >
              <span>{project.id === "brofesional" ? "Website" : "Live Demo"}</span>
              <ExternalLink className="size-3" />
            </a>
          )}

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue cursor-pointer"
            >
              <span>Google Play</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          )}

          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue cursor-pointer"
            >
              <span>App Store</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          )}

          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue cursor-pointer"
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const totalProjectsCount = FEATURED_PROJECTS.length + ALL_OTHER_PROJECTS.length;

  const filteredOtherProjects = useMemo(() => {
    if (selectedCategory === "all") return ALL_OTHER_PROJECTS;
    return ALL_OTHER_PROJECTS.filter((p) => p.categoryGroup === selectedCategory);
  }, [selectedCategory]);

  return (
    <Panel id="projects" aria-label="Projects">
      <PanelHeader>
        <div className="flex flex-col gap-1">
          <PanelTitle>
            <a href="#projects" className="hover:underline">Projects & Case Studies</a>
            <PanelTitleSup>[{FEATURED_PROJECTS.length} Featured · {totalProjectsCount} Total]</PanelTitleSup>
          </PanelTitle>
          <PanelDescription>
            Production platforms, client systems, research publications & open source engineering
          </PanelDescription>
        </div>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-8">
        {/* Section 1: 4 Featured Spotlight Projects */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            <Sparkles className="size-3.5 text-accent-blue" />
            <span>Featured Production & Capstone Highlights</span>
          </div>

          <div className="flex flex-col gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <SpotlightCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Section 2: All Other Verified Projects (Cleanly Displayed with Filter Pills) */}
        <div className="flex flex-col gap-4 pt-4 border-t border-border/60">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-foreground uppercase tracking-wider">
              <FolderGit2 className="size-3.5 text-accent-blue" />
              <span>All Projects & Technical Works ({ALL_OTHER_PROJECTS.length})</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              Filter by category
            </span>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {CATEGORY_TABS.map((tab) => {
              const isActive = selectedCategory === tab.id;
              const count =
                tab.id === "all"
                  ? ALL_OTHER_PROJECTS.length
                  : ALL_OTHER_PROJECTS.filter((p) => p.categoryGroup === tab.id).length;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedCategory(tab.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono whitespace-nowrap transition-all border shrink-0 cursor-pointer",
                    isActive
                      ? "border-foreground/30 bg-foreground text-background font-medium shadow-xs"
                      : "border-border/60 bg-muted/30 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/60"
                  )}
                >
                  <span>{tab.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1 py-0.2 rounded-full",
                      isActive
                        ? "bg-background/20 text-background"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* 2-Column Responsive Grid of All Other Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
            {filteredOtherProjects.map((item) => (
              <div
                key={item.id}
                className={cn(
                  "rounded-xl border bg-card/40 p-4 flex flex-col justify-between gap-3 transition-colors hover:bg-card/70",
                  item.isHki
                    ? "border-amber-500/40 hover:border-amber-500/70"
                    : "border-border/70 hover:border-border"
                )}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0">
                      <h4 className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-mono text-muted-foreground shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                    <span className="text-accent-blue/90 font-medium">{item.role}</span>
                    <span className="text-muted-foreground/60">·</span>
                    <span
                      className={cn(
                        "px-1.5 py-0.2 rounded text-[10px]",
                        item.isHki
                          ? "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
                          : "text-muted-foreground bg-muted/40"
                      )}
                    >
                      {item.category}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-col gap-2.5 pt-2 border-t border-border/50">
                  <div className="flex flex-wrap gap-1">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-1.5 py-0.2 rounded text-[10px] font-mono border border-border/60 bg-muted/30 text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-0.5">
                    {item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono bg-foreground text-background hover:opacity-90 transition-opacity"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="size-2.5" />
                      </a>
                    )}

                    {item.repoUrl && (
                      <a
                        href={item.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors"
                      >
                        <span>{item.backendRepoUrl ? "Frontend Repo" : "GitHub"}</span>
                        <ExternalLink className="size-2.5 text-muted-foreground" />
                      </a>
                    )}

                    {item.backendRepoUrl && (
                      <a
                        href={item.backendRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors"
                      >
                        <span>Backend Repo</span>
                        <ExternalLink className="size-2.5 text-muted-foreground" />
                      </a>
                    )}

                    {item.universityRepoUrl && (
                      <a
                        href={item.universityRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border border-accent-blue/30 bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors"
                      >
                        <BookOpen className="size-2.5" />
                        <span>University Repository</span>
                      </a>
                    )}

                    {item.verifyUrl && (
                      <a
                        href={item.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-mono border border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400 hover:bg-amber-500/20 transition-colors"
                      >
                        <Award className="size-2.5" />
                        <span>Verify HKI (PDKI)</span>
                      </a>
                    )}

                    {item.isPrivate && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-muted-foreground/80 italic">
                        <Lock className="size-2.5" />
                        <span>Private Codebase</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PanelContent>
    </Panel>
  );
}
