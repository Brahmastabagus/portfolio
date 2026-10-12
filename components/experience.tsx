"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  location: string;
  isCurrent?: boolean;
  context: string;
  contributions: string[];
  metrics?: string[];
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "brofesional",
    role: "Frontend Developer",
    company: "Brofesional by Youth Educational Centre",
    period: "March 2025 – Present",
    type: "Full-time",
    location: "Yogyakarta, Indonesia · On-site",
    isCurrent: true,
    context:
      "Edutech platform providing TOEFL preparation, learning materials, and AI-powered learning assistance, serving 5,000+ mobile app users via WebView and internal admin dashboard.",
    contributions: [
      "Refactored AI chatbot 'Brodi' with Server-Sent Events (SSE) response streaming, contextual conversation memory, and interactive UI components (carousels, comparison tables).",
      "Redesigned high-traffic API usage through pagination and selective response fields, reducing payload size by ~70% and eliminating browser freezes on lists of 1,000+ records.",
      "Implemented TOEFL tryout flows, live quizzes with review modes, AI-driven question analysis, and an interactive question engine supporting charts, drag-and-drop, and sequential formats.",
      "Developed learning features including e-course onboarding guidelines, assignments per class, tryout certificates, image compression, and push notifications.",
      "Built internal dashboard administration modules for data export (vouchers/schedules/scores), tutor management, and referral/coupon workflows.",
    ],
    metrics: [
      "5,000+ WebView users",
      "~70% API payload reduction",
      "1,000+ records freeze elimination",
    ],
    technologies: [
      "React 17",
      "TypeScript",
      "Material UI v5",
      "Redux Toolkit",
      "Reactstrap",
      "ECharts",
      "@dnd-kit",
      "Axios",
      "REST API",
    ],
  },
  {
    id: "drinktohappy",
    role: "Frontend Developer",
    company: "Drinktohappy",
    period: "April 2024 – September 2024",
    type: "Freelance",
    location: "Remote / Client-based",
    context:
      "Delivered client-facing digital solutions for Enternica, Warung Bibit, and PT Safari Nusantara Bersaudara.",
    contributions: [
      "Built responsive, accessible company profiles and landing pages tailored to business requirements.",
      "Created structured product showcase catalogs and integrated customer inquiry workflows.",
      "Ensured cross-device responsive fidelity and optimized client-side asset loading.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Web Design",
    ],
  },
  {
    id: "binar",
    role: "Fullstack Web Development Independent Study",
    company: "Binar Academy (Kampus Merdeka)",
    period: "February 2023 – July 2023",
    type: "Certified Program",
    location: "Remote",
    context:
      "Intensive 5-month fullstack software engineering program under Kampus Merdeka, graduating with Hard-skill Score 4.9/5 and Chapter Average 97.",
    contributions: [
      "Served as Scrum Master and Fullstack Developer on final project 'TerbangIn' (flight ticket booking platform).",
      "Architected responsive web frontend with React, PrimeReact, and Redux Toolkit with end-to-end API integration.",
      "Collaborated using agile sprints, code reviews, and Git workflow best practices.",
    ],
    metrics: ["Hard-skill: 4.9 / 5.0", "Chapter Average: 97"],
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Vite",
      "PrimeReact",
      "Express.js",
      "PostgreSQL",
    ],
  },
  {
    id: "akselerator",
    role: "Frontend Developer (Internship)",
    company: "Perkumpulan Sosial Ekonomi Akselerator Lab",
    period: "August 2022 – December 2022",
    type: "Internship",
    location: "Semarang, Indonesia",
    context:
      "Built digital web solutions for public and educational institutions including Semarang Technopark, Weddingly, and PAUD Bintang Juara.",
    contributions: [
      "Engineered frontend user interface modules for Semarang Technopark public portal.",
      "Developed interactive features for Weddingly event platform utilizing TypeScript.",
      "Constructed management portal interfaces for PAUD Bintang Juara.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Bootstrap",
      "REST API",
    ],
  },
  {
    id: "freelance-early",
    role: "Freelance Frontend Developer",
    company: "Independent Client Work",
    period: "2020 – 2022",
    type: "Freelance",
    location: "Purbalingga, Indonesia",
    context:
      "Delivered custom client platforms including the SIKOKU psychotest system and PT Tirta Purbalingga Adijaya profile website.",
    contributions: [
      "Engineered SIKOKU online gamified psychometric test platform with token-based candidate access and automated score evaluations.",
      "Built corporate web profile for PT Tirta Purbalingga Adijaya with structured content presentation.",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "REST API"],
  },
];

export function Experience() {
  // Default open the most recent/current position
  const [expandedId, setExpandedId] = useState<string | null>("brofesional");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Panel id="experience" aria-label="Work Experience">
      <PanelHeader>
        <PanelTitle>
          <a href="#experience" className="hover:underline">Work Experience</a>
          <PanelTitleSup>[{EXPERIENCES.length}]</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>
          Production roles, freelance projects & verified achievements
        </PanelDescription>
      </PanelHeader>

      <PanelContent>
        {/* Vertical Timeline Container */}
        <div className="relative border-l border-border/70 ml-2 sm:ml-3 pl-4 sm:pl-6 space-y-4 sm:space-y-6">
        {EXPERIENCES.map((exp) => {
          const isOpen = expandedId === exp.id;

          return (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[21px] sm:-left-[29px] top-4 size-2.5 sm:size-3 rounded-full border-2 border-background transition-colors ${
                  exp.isCurrent
                    ? "bg-accent-blue ring-3 ring-accent-blue/20"
                    : "bg-muted-foreground/50 group-hover:bg-foreground"
                }`}
                aria-hidden="true"
              />

              {/* Accordion Card */}
              <div className="rounded-xl border border-border/70 bg-card/40 transition-all hover:border-border hover:bg-card/70 overflow-hidden">
                {/* Clickable Header */}
                <button
                  type="button"
                  onClick={() => toggleExpand(exp.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      {exp.isCurrent && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono bg-accent-green/10 text-accent-green font-medium">
                          Current
                        </span>
                      )}
                      <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted/60">
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/80 font-medium">
                      {exp.company}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground pt-0.5">
                      <span>{exp.period}</span>
                      <span>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="p-1 rounded-md text-muted-foreground group-hover:text-foreground shrink-0 mt-0.5">
                    <ChevronDown
                      className={`size-4.5 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-foreground" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Collapsible Details */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-border/50 flex flex-col gap-4 text-sm">
                        {/* Context */}
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.context}
                        </p>

                        {/* Metrics Pills (if available) */}
                        {exp.metrics && exp.metrics.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {exp.metrics.map((metric) => (
                              <span
                                key={metric}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono bg-accent-blue/10 text-accent-blue font-medium border border-accent-blue/20"
                              >
                                {metric}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Bulleted Contributions */}
                        <div className="flex flex-col gap-2">
                          <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                            Key Contributions:
                          </span>
                          <ul className="space-y-1.5 list-disc list-inside text-muted-foreground leading-relaxed pl-1">
                            {exp.contributions.map((item, idx) => (
                              <li key={idx} className="text-xs sm:text-sm">
                                <span className="text-foreground/90">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies Used */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-xs font-mono border border-border/70 bg-muted/40 text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
      </PanelContent>
    </Panel>
  );
}
