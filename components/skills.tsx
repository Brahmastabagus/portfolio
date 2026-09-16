import React from "react";
import { Code2, Layers, Palette, Network } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  skills: Array<{ name: string; level?: string }>;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Core Languages",
    icon: Code2,
    description: "Foundational languages for type-safe and performant client applications",
    skills: [
      { name: "TypeScript", level: "Production" },
      { name: "JavaScript (ES6+)", level: "Production" },
      { name: "HTML5 / Semantics" },
      { name: "CSS3 / Modern CSS" },
    ],
  },
  {
    title: "Frameworks & State",
    icon: Layers,
    description: "Component architecture, scalable state stores, and client routing",
    skills: [
      { name: "React.js", level: "Production" },
      { name: "Redux Toolkit", level: "Production" },
      { name: "React Context API" },
      { name: "React Router v6" },
      { name: "Vite" },
    ],
  },
  {
    title: "UI & Visualization",
    icon: Palette,
    description: "Component libraries, accessible interactions, and data charts",
    skills: [
      { name: "Material UI (MUI v5)" },
      { name: "Tailwind CSS" },
      { name: "@dnd-kit (Drag & Drop)" },
      { name: "ECharts (Data Visualization)" },
      { name: "Reactstrap / Bootstrap" },
    ],
  },
  {
    title: "API & Architecture",
    icon: Network,
    description: "Network communication, real-time streaming, and tooling",
    skills: [
      { name: "Server-Sent Events (SSE)" },
      { name: "RESTful API Integration" },
      { name: "Axios (Payload Optimization)" },
      // { name: "Firebase (Push Notifications)" },
      { name: "Git & GitHub" },
      { name: "Postman" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="flex flex-col gap-6 scroll-mt-6" aria-label="Skills and Technologies">
      <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Skills & Technologies
        </h2>
        <p className="text-sm font-mono text-muted-foreground">
          Evidence-based technical capabilities & tooling
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SKILL_CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.title}
              className="rounded-xl border border-border/70 bg-card/40 p-4 sm:p-5 flex flex-col gap-3 transition-all hover:border-border/90 hover:bg-card/60"
            >
              <div className="flex items-center gap-2.5">
                <div className="size-8 rounded-lg border border-border bg-muted/60 flex items-center justify-center text-foreground shrink-0">
                  <Icon className="size-4 text-accent-blue" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border border-border/70 bg-muted/30 text-foreground/90 transition-colors hover:border-accent-blue/50 hover:text-foreground"
                  >
                    <span>{skill.name}</span>
                    {skill.level && (
                      <span className="text-[10px] px-1 py-0.2 rounded bg-accent-blue/10 text-accent-blue font-sans font-medium">
                        {skill.level}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
