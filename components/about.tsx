"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "motion/react";
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
  reduced: boolean;
}

function Word({ children, progress, range, reduced }: WordProps) {
  const opacity = useTransform(progress, range, reduced ? [1, 1] : [0.25, 1]);

  return (
    <motion.span style={reduced ? undefined : { opacity }} className="text-foreground">
      {`${children} `}
    </motion.span>
  );
}

const POINTS = [
  "I'm Brahmasta Bagus Aryandra (call me Bagus) — a Frontend Developer working in React and TypeScript at Brofesional.",
  "I build the user app and the internal dashboard: learning flows, assessments, and the client state behind them.",
  "That work includes Brodi, an SSE streaming chatbot, and API changes that cut payload size by about 70% on an app with 5,000+ downloads.",
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const pointWords = POINTS.map((point) => point.split(" "));
  const totalWords = pointWords.reduce((count, words) => count + words.length, 0);
  let wordIndex = 0;

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

      <PanelContent>
        <div ref={containerRef} className="py-2">
          <ul className="flex flex-col gap-4 list-disc pl-5 marker:text-foreground">
            {pointWords.map((words, pointIndex) => (
              <li
                key={POINTS[pointIndex]}
                className="text-base sm:text-lg font-normal leading-relaxed text-muted-foreground/40"
              >
                {words.map((word) => {
                  const index = wordIndex++;
                  const start = index / totalWords;
                  const end = start + 1 / totalWords;
                  return (
                    <Word
                      key={`${word}-${index}`}
                      progress={scrollYProgress}
                      range={[start, end]}
                      reduced={reduced}
                    >
                      {word}
                    </Word>
                  );
                })}
              </li>
            ))}
          </ul>
        </div>
      </PanelContent>
    </Panel>
  );
}
