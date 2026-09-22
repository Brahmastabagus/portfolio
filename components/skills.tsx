"use client";

import React, { useState, useMemo } from "react";
import {
  Code2,
  Layers,
  Palette,
  Sparkles,
  ShieldCheck,
  Database,
  Cpu,
  Search,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";
import { cn } from "@/lib/utils";

type SkillDepth = "Production" | "Project" | "Academic" | "Bootcamp";

interface SkillItem {
  name: string;
  depth?: SkillDepth;
  detail?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  isCore: boolean;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  // --- CORE CATEGORIES (Shown by default) ---
  {
    id: "languages",
    title: "Languages & Foundations",
    icon: Code2,
    description: "Type-safe standards, scripting, and desktop OOP foundations",
    isCore: true,
    skills: [
      { name: "TypeScript", depth: "Production", detail: "Type-safe React & Node architecture" },
      { name: "JavaScript (ES6+)", depth: "Production", detail: "Daily production work for 1+ years" },
      { name: "Java", depth: "Academic", detail: "Desktop app development (NetBeans, OOP coursework)" },
      { name: "HTML5 / Semantics", depth: "Production", detail: "Accessible semantic structure & SEO" },
      { name: "CSS3 / Modern Layouts", depth: "Production", detail: "Flexbox, Grid, custom animations" },
    ],
  },
  {
    id: "frameworks",
    title: "Frameworks & State",
    icon: Layers,
    description: "Component architecture, scalable state stores, and client routing",
    isCore: true,
    skills: [
      { name: "React.js", depth: "Production", detail: "React 17/18, hooks, context, custom UI" },
      { name: "Redux Toolkit", depth: "Production", detail: "createSlice, state normalization, RTK Query" },
      { name: "React Router v6", depth: "Production", detail: "Declarative routing, nested & protected routes" },
      { name: "React Context API", depth: "Production", detail: "Lightweight distributed state" },
      { name: "Next.js", depth: "Project", detail: "Weddingly wedding-planning web application" },
      { name: "Vite", depth: "Project", detail: "Modern build tooling & bundle optimization" },
    ],
  },
  {
    id: "ui-systems",
    title: "UI Systems & Visualization",
    icon: Palette,
    description: "Design systems, data charts, and accessible interaction tooling",
    isCore: true,
    skills: [
      { name: "Material UI (MUI v5)", depth: "Production", detail: "Primary UI system at Brofesional" },
      { name: "Tailwind CSS", depth: "Production", detail: "Utility styling, custom tokens, dark mode" },
      { name: "Reactstrap / Bootstrap", depth: "Production", detail: "Production dashboards & client apps" },
      { name: "RSuiteJS", depth: "Production", detail: "Enterprise table & client management UI" },
      { name: "ECharts", depth: "Project", detail: "Interactive assessment chart visualizations" },
      { name: "@dnd-kit", depth: "Project", detail: "Drag-and-drop interactive question engine" },
    ],
  },
  {
    id: "engineering-tools",
    title: "Engineering & Performance",
    icon: Cpu,
    description: "Production performance tuning, real-time streaming, and workflow",
    isCore: true,
    skills: [
      { name: "API Payload Optimization (~70%)", depth: "Production", detail: "Pagination & selective response fields" },
      { name: "Zero-Freeze Virtualization", depth: "Production", detail: "Eliminated browser freeze on 1,000+ items" },
      { name: "Server-Sent Events (SSE)", depth: "Production", detail: "Real-time AI chatbot response streaming" },
      { name: "REST API & Interceptors", depth: "Production", detail: "Axios transforms, token refresh & errors" },
      { name: "Git & GitHub Workflow", depth: "Production", detail: "Conventional commits & PR branching strategy" },
      { name: "Postman", depth: "Production", detail: "API testing, collections & mock endpoints" },
    ],
  },

  // --- EXTENDED CATEGORIES (Revealed on Expand or Search/Tab) ---
  {
    id: "interactive-ui",
    title: "Frontend & Interactive UI",
    icon: Sparkles,
    description: "Rich client-side interaction, media streaming, and motion mechanics",
    isCore: false,
    skills: [
      { name: "Image Compression", depth: "Production", detail: "browser-image-compression before upload" },
      { name: "Rich Text Editing", depth: "Production", detail: "React Quill with emoji & image resizing" },
      { name: "Drag & Drop UI", depth: "Production", detail: "@dnd-kit & react-dnd (touch + desktop)" },
      { name: "File & Dropzone Upload", depth: "Production", detail: "react-dropzone-uploader with validation" },
      { name: "Audio Streaming", depth: "Production", detail: "react-audio-player in production courses" },
      { name: "Video / YouTube Player", depth: "Production", detail: "video.js & videojs-youtube integration" },
      { name: "Carousels & Sliders", depth: "Production", detail: "Swiper & react-slick responsive carousels" },
      { name: "Motion UI & Confetti", depth: "Production", detail: "framer-motion & react-confetti celebrations" },
      { name: "Lazy Image Loading", depth: "Production", detail: "IntersectionObserver & blur-up placeholders" },
      { name: "Digital Signature Canvas", depth: "Production", detail: "react-signature-canvas for approvals" },
      { name: "Avatar & Image Cropping", depth: "Production", detail: "react-avatar-editor client manipulation" },
      { name: "Advanced PIN & Form Inputs", depth: "Production", detail: "react-pin-input & headless form components" },
      { name: "Date & Timezone Handling", depth: "Production", detail: "moment-timezone & dayjs manipulations" },
    ],
  },
  {
    id: "security-integration",
    title: "Security & App Integration",
    icon: ShieldCheck,
    description: "Client sanitization, bot defense, token decoding, and cloud APIs",
    isCore: false,
    skills: [
      { name: "XSS Sanitization (DOMPurify)", depth: "Production", detail: "Sanitizing user HTML before rendering" },
      { name: "Google reCAPTCHA", depth: "Production", detail: "v2/v3 bot defense on authentication & forms" },
      { name: "JWT Decoding (jwt-decode)", depth: "Production", detail: "Client-side token inspection & auth state" },
      { name: "Cookie & Session Handling", depth: "Production", detail: "universal-cookie session persistence" },
      { name: "Google APIs (gapi / Picker)", depth: "Production", detail: "Google Drive Picker & OAuth flows" },
    ],
  },
  {
    id: "backend-db",
    title: "Backend & Full-Stack (Project)",
    icon: Database,
    description: "Server-side REST APIs, relational schemas, and cloud services",
    isCore: false,
    skills: [
      { name: "Node.js & Express.js", depth: "Project", detail: "REST APIs with auth, middleware & MVC" },
      { name: "PostgreSQL & Sequelize", depth: "Project", detail: "Migrations, associations & models" },
      { name: "Auth & Hashing (bcrypt / JWT)", depth: "Project", detail: "Token authentication & secure hashing" },
      { name: "Schema Validation (Joi)", depth: "Project", detail: "Request body, query & param validation" },
      { name: "File & Image CDN (ImageKit)", depth: "Project", detail: "Multer upload & ImageKit transformation" },
      { name: "Transactional Email (Nodemailer)", depth: "Project", detail: "SMTP email verification & notifications" },
      { name: "Payment Gateway (Midtrans)", depth: "Project", detail: "Snap/Callback handling & transaction status" },
      { name: "Swagger / OpenAPI Docs", depth: "Project", detail: "Interactive Swagger-UI API explorer" },
      { name: "MySQL", depth: "Academic", detail: "Relational database design & raw queries" },
    ],
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Overview" },
  { id: "languages", label: "Languages" },
  { id: "frameworks", label: "Frameworks" },
  { id: "ui-systems", label: "UI Systems" },
  { id: "engineering-tools", label: "Engineering" },
  { id: "interactive-ui", label: "Interactive UI" },
  { id: "security-integration", label: "Security" },
  { id: "backend-db", label: "Backend & DB" },
];

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const totalSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, []);

  const extendedSkillsCount = useMemo(() => {
    return SKILL_CATEGORIES.filter((c) => !c.isCore).reduce(
      (acc, cat) => acc + cat.skills.length,
      0
    );
  }, []);

  // Filter categories and skills based on active tab, search, and expand state
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const isSearching = Boolean(query);

    return SKILL_CATEGORIES.map((category) => {
      // If a specific tab is selected, only show that category
      if (activeTab !== "all") {
        if (category.id !== activeTab) return null;
      } else if (!isSearching && !isExpanded && !category.isCore) {
        // On "all" tab, hide extended categories unless expanded or searching
        return null;
      }

      // If no query, return as is
      if (!query) {
        return category;
      }

      // Search matching logic
      const categoryMatches =
        category.title.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query);

      const matchingSkills = category.skills.filter(
        (skill) =>
          skill.name.toLowerCase().includes(query) ||
          (skill.detail && skill.detail.toLowerCase().includes(query)) ||
          (skill.depth && skill.depth.toLowerCase().includes(query))
      );

      if (categoryMatches || matchingSkills.length > 0) {
        return {
          ...category,
          skills: categoryMatches && matchingSkills.length === 0 ? category.skills : matchingSkills,
        };
      }

      return null;
    }).filter(Boolean) as SkillCategory[];
  }, [activeTab, searchQuery, isExpanded]);

  const isSearching = Boolean(searchQuery.trim());
  const isShowingAllTab = activeTab === "all";

  return (
    <Panel id="skills" aria-label="Skills and Technologies">
      <PanelHeader>
        <div className="flex flex-col gap-1">
          <PanelTitle>
            <a href="#skills" className="hover:underline">Skills & Technologies</a>
            <PanelTitleSup>{totalSkillsCount}+</PanelTitleSup>
          </PanelTitle>
          <PanelDescription>
            Core production stack, performance engineering & full-stack integrations
          </PanelDescription>
        </div>
      </PanelHeader>

      <PanelContent className="space-y-4">
        {/* Controls: Quick Search & Filter Tabs */}
        <div className="flex flex-col gap-2.5">
          {/* Quick Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search all 50+ technologies (e.g., Java, React, DOMPurify, Midtrans)..."
              className="w-full h-9 pl-9 pr-8 text-xs font-mono rounded-md border border-border/70 bg-card/40 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent-blue/60 focus:ring-1 focus:ring-accent-blue/30 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                aria-label="Clear search"
              >
                <X className="size-3.5" />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {FILTER_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              const categoryObj = SKILL_CATEGORIES.find((c) => c.id === tab.id);
              const count = tab.id === "all" ? totalSkillsCount : categoryObj?.skills.length ?? 0;

              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (tab.id !== "all") {
                      setIsExpanded(true);
                    }
                  }}
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
        </div>

        {/* Legend for transparency & clarity */}
        <div className="flex flex-wrap items-center gap-3 pt-0.5 text-[11px] text-muted-foreground border-b border-border/40 pb-2.5">
          <span className="font-mono text-[10px] uppercase tracking-wider text-foreground/70">Depth:</span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-accent-blue" />
            <span className="font-mono text-accent-blue">Production</span>
            <span className="text-[10px] text-muted-foreground/70">(Daily active)</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-muted-foreground/60" />
            <span className="font-mono text-muted-foreground">Project</span>
            <span className="text-[10px] text-muted-foreground/70">(Client / thesis)</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="size-1.5 rounded-full bg-amber-500" />
            <span className="font-mono text-amber-600 dark:text-amber-400">Academic</span>
            <span className="text-[10px] text-muted-foreground/70">(Desktop OOP)</span>
          </span>
        </div>

        {/* Empty Search State */}
        {filteredCategories.length === 0 && (
          <div className="rounded-lg border border-dashed border-border/80 p-8 text-center flex flex-col items-center justify-center gap-2">
            <p className="text-xs font-mono text-muted-foreground">
              No technologies match &ldquo;{searchQuery}&rdquo;
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveTab("all");
              }}
              className="text-xs font-mono text-accent-blue hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="rounded-lg border border-border/70 bg-card/40 p-3.5 sm:p-4 flex flex-col gap-3 transition-colors hover:border-border hover:bg-card/70"
              >
                {/* Category Header */}
                <div className="flex items-center gap-2.5">
                  <div className="size-7 rounded-md border border-border bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                    <Icon className="size-3.5 text-accent-blue" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="text-xs sm:text-sm font-semibold text-foreground truncate">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-muted-foreground">
                        ({category.skills.length})
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      title={skill.detail || skill.name}
                      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-mono border border-border/70 bg-muted/30 text-foreground/90 transition-colors hover:border-accent-blue/50 hover:text-foreground"
                    >
                      <span>{skill.name}</span>
                      {skill.depth && (
                        <span
                          className={cn(
                            "text-[9px] px-1 py-0.2 rounded font-sans font-medium uppercase tracking-tight",
                            skill.depth === "Production" &&
                            "bg-accent-blue/15 text-accent-blue border border-accent-blue/20",
                            skill.depth === "Project" &&
                            "bg-muted/70 text-muted-foreground border border-border/60",
                            skill.depth === "Academic" &&
                            "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20",
                            skill.depth === "Bootcamp" &&
                            "bg-muted/50 text-muted-foreground border border-border/50"
                          )}
                        >
                          {skill.depth}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Toggle Expand Button for Extended Skills (Only on 'all' tab when not searching) */}
        {isShowingAllTab && !isSearching && (
          <div className="pt-2 flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-mono border border-border bg-card/60 hover:bg-muted/80 text-foreground transition-all cursor-pointer shadow-2xs hover:border-border/80 focus-visible:outline-2 focus-visible:outline-accent-blue"
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="size-3.5 text-muted-foreground" />
                  <span>Collapse extended modules</span>
                </>
              ) : (
                <>
                  <ChevronDown className="size-3.5 text-accent-blue" />
                  <span>
                    Show extended modules & full-stack integrations (+{extendedSkillsCount})
                  </span>
                </>
              )}
            </button>
            {!isExpanded && (
              <p className="text-[11px] font-mono text-muted-foreground/70">
                Reveals interactive UI mechanics, security modules & backend services
              </p>
            )}
          </div>
        )}
      </PanelContent>
    </Panel>
  );
}
