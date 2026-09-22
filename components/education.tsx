"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, ChevronDown, BookOpen, ExternalLink } from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/panel";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score?: string;
  scoreLabel?: string;
  thesis?: {
    title: string;
    description: string;
    repositoryUrl?: string;
  };
  highlights: string[];
  coursework?: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    id: "ittp",
    degree: "Bachelor of Computer Science (S1 Rekayasa Perangkat Lunak)",
    institution: "Institut Teknologi Telkom Purwokerto",
    period: "2020 – 2024",
    score: "3.95 / 4.00",
    scoreLabel: "GPA",
    thesis: {
      title:
        "Perancangan Sistem Informasi Desa Wisata Berbasis Website dengan Metode RAD, Studi Kasus: Desa Wisata Melung",
      description:
        "Engineered fullstack web portal (React + Vite + Express + TailwindCSS) and published academic research paper in journal.",
      repositoryUrl: "https://repository.ittelkom-pwt.ac.id/11356/",
    },
    highlights: [
      "Graduated with High Honors (GPA 3.95/4.00) in Computer Software Engineering.",
      "1st Place Winner — Amikom Student Scientific Fair Web Design Competition (PRIMA 2019).",
      "2nd Place Winner — Amikom Student Scientific Fair Web Design Competition (PRIMA 2018).",
      "Active research and practical software development in web engineering methodologies.",
    ],
    coursework: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
      "Web Development",
      "Human-Computer Interaction",
      "Software Testing",
    ],
  },
  {
    id: "binar",
    degree: "Fullstack Web Development Independent Study",
    institution: "Binar Academy (Kampus Merdeka)",
    period: "February 2023 – July 2023",
    score: "4.9 / 5.0",
    scoreLabel: "Hard-skill Score",
    highlights: [
      "Completed intensive 5-month fullstack web engineering curriculum under Kemendikbudristek Kampus Merdeka.",
      "Chapter Average: 97 / 100 with Soft-skill Score: 4.7 / 5.0.",
      "Served as Scrum Master & Fullstack Developer on final project 'TerbangIn' flight booking platform.",
    ],
    coursework: [
      "React.js & TypeScript",
      "Redux Toolkit Architecture",
      "Node.js & Express API",
      "PostgreSQL & Sequelize ORM",
      "Agile & Scrum Practices",
    ],
  },
  {
    id: "smk",
    degree: "Vocational High School Diploma — Software Engineering",
    institution: "SMK Negeri 1 Purbalingga",
    period: "2017 – 2020",
    highlights: [
      "Early specialization in Software Engineering (Rekayasa Perangkat Lunak).",
      "Solid foundations in algorithm design, object-oriented programming, and web development fundamentals.",
      "Competed and placed in regional student web design contests.",
    ],
  },
];

export function Education() {
  // Default open the university degree
  const [expandedId, setExpandedId] = useState<string | null>("ittp");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <Panel id="education" aria-label="Education">
      <PanelHeader>
        <PanelTitle>
          <a href="#education" className="hover:underline">Education</a>
          <PanelTitleSup>[GPA 3.95]</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>
          Academic degrees, independent study & foundational schooling
        </PanelDescription>
      </PanelHeader>

      <PanelContent>
        <div className="flex flex-col gap-3.5">
        {EDUCATION_DATA.map((edu) => {
          const isOpen = expandedId === edu.id;

          return (
            <div
              key={edu.id}
              className="rounded-xl border border-border/70 bg-card/40 transition-all hover:border-border hover:bg-card/70 overflow-hidden"
            >
              {/* Clickable Card Header */}
              <button
                type="button"
                onClick={() => toggleExpand(edu.id)}
                className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="size-9 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-accent-blue shrink-0 mt-0.5">
                    <GraduationCap className="size-4.5" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="text-sm sm:text-base font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/80 font-medium">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground pt-0.5">
                      <span>{edu.period}</span>
                      {edu.score && (
                        <>
                          <span>·</span>
                          <span className="text-accent-blue font-medium">
                            {edu.scoreLabel}: {edu.score}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-1 rounded-md text-muted-foreground hover:text-foreground shrink-0 mt-0.5">
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
                      {/* Thesis Section */}
                      {edu.thesis && (
                        <div className="rounded-lg border border-border/60 bg-muted/30 p-3 flex flex-col gap-1">
                          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-foreground">
                            <BookOpen className="size-3.5 text-accent-blue" />
                            <span>Thesis / Final Project:</span>
                          </div>
                          <p className="text-xs sm:text-sm text-foreground/90 font-medium">
                            {edu.thesis.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {edu.thesis.description}
                          </p>
                          {edu.thesis.repositoryUrl && (
                            <div className="pt-1">
                              <a
                                href={edu.thesis.repositoryUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:underline"
                              >
                                <span>University Thesis Repository</span>
                                <ExternalLink className="size-3" />
                              </a>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Highlights */}
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                          Key Highlights:
                        </span>
                        <ul className="space-y-1.5 list-disc list-inside text-muted-foreground leading-relaxed pl-1 text-xs sm:text-sm">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx}>
                              <span className="text-foreground/90">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Coursework Tags */}
                      {edu.coursework && edu.coursework.length > 0 && (
                        <div className="flex flex-col gap-1.5">
                          <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
                            Relevant Coursework:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {edu.coursework.map((course) => (
                              <span
                                key={course}
                                className="px-2 py-0.5 rounded text-xs font-mono border border-border/70 bg-muted/40 text-muted-foreground"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
        </div>
      </PanelContent>
    </Panel>
  );
}
