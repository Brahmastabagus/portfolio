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

const NARRATIVE_TEXT =
  "I am a Frontend Developer working in React and TypeScript. At Brofesional I build the user app and the internal dashboard: learning flows, assessments, and the client state behind them.";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.35"],
  });

  const words = NARRATIVE_TEXT.split(" ");

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
          <p className="text-base sm:text-lg font-normal leading-relaxed text-muted-foreground/40">
            {words.map((word, i) => {
              const start = i / words.length;
              const end = start + 1 / words.length;
              return (
                <Word
                  key={`${word}-${i}`}
                  progress={scrollYProgress}
                  range={[start, end]}
                  reduced={reduced}
                >
                  {word}
                </Word>
              );
            })}
          </p>
        </div>
      </PanelContent>
    </Panel>
  );
}
