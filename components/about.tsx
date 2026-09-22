"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { Sparkles, Gauge, GraduationCap } from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.25, 1]);

  return (
    <span className="relative inline-block mr-1.5">
      <motion.span style={{ opacity }} className="text-foreground">
        {children}
      </motion.span>
    </span>
  );
}

const NARRATIVE_TEXT =
  "I am a Frontend Developer focused on building scalable, accessible, and high-performance web applications. Currently engineering the edutech platform at Brofesional, delivering features to over 5,000 mobile app users via WebView. My work spans AI-integrated interfaces with Server-Sent Events, deep API performance optimization, and robust state management with React and TypeScript.";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = NARRATIVE_TEXT.split(" ");

  const highlights = [
    {
      icon: Sparkles,
      title: "AI-Integrated Frontend",
      description:
        "Refactored chatbot 'Brodi' with SSE streaming, contextual conversation memory, and interactive UI carousels and tables.",
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description:
        "Redesigned high-traffic API usage patterns to achieve ~70% payload reduction and eliminate browser freezes on 1,000+ records.",
    },
    {
      icon: GraduationCap,
      title: "Academic & Bootcamp Excellence",
      description:
        "S1 Computer Software Engineering from IT Telkom Purwokerto (GPA 3.95/4.00) and Binar Academy Fullstack Web Development (Hard-skill 4.9/5).",
    },
  ];

  return (
    <Panel id="about" aria-label="About Me">
      <PanelHeader>
        <PanelTitle>
          <a href="#about" className="hover:underline">About</a>
        </PanelTitle>
        <PanelDescription>
          Engineering background & core technical focus
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-6">
        {/* Editorial Scroll Reveal Paragraph */}
        <div ref={containerRef} className="py-2">
          <p className="text-base sm:text-lg font-normal leading-relaxed text-muted-foreground/40">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word key={`${word}-${i}`} progress={scrollYProgress} range={[start, end]}>
                  {word}
                </Word>
              );
            })}
          </p>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-lg border border-border/70 bg-card/40 p-3.5 sm:p-4 flex flex-col gap-2 transition-colors hover:border-border hover:bg-card/70"
              >
                <div className="size-7 rounded-md border border-border bg-muted/60 flex items-center justify-center text-foreground">
                  <Icon className="size-3.5 text-accent-blue" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </PanelContent>
    </Panel>
  );
}
