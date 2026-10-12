import React from "react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";

interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "Java"],
  },
  {
    id: "frameworks",
    title: "Frameworks",
    skills: ["React", "Next.js", "Redux Toolkit"],
  },
  {
    id: "ui-systems",
    title: "UI systems",
    skills: ["Material UI", "Tailwind CSS", "Reactstrap", "RSuiteJS", "HeadlessUI", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MySQL", "Sequelize"],
  },
];

export function Skills() {
  return (
    <Panel id="skills" aria-label="Skills and Technologies">
      <PanelHeader>
        <div className="flex flex-col gap-1">
          <PanelTitle>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </PanelTitle>
          <PanelDescription>
            Languages, frameworks, UI systems, and backend
          </PanelDescription>
        </div>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-col">
          {SKILL_GROUPS.map((group) => (
            <li
              key={group.id}
              className="grid grid-cols-1 gap-1 border-b border-border/60 py-3 last:border-b-0 last:pb-0 first:pt-0 sm:grid-cols-[9rem_1fr] sm:items-baseline sm:gap-4"
            >
              <h3 className="text-sm font-medium text-foreground">{group.title}</h3>
              <p className="text-sm text-muted-foreground">{group.skills.join(", ")}</p>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
