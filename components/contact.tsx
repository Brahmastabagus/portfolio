"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Mail, ExternalLink, ArrowUp } from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";
import { siteConfig } from "@/lib/site-config";

interface ContactLinkItem {
  name: string;
  handle: string;
  url: string;
  description: string;
  external: boolean;
}

const CONTACT_LINKS: ContactLinkItem[] = [
  {
    name: "Email",
    handle: siteConfig.email,
    url: `mailto:${siteConfig.email}`,
    description: "For a role, a project, or a technical question",
    external: false,
  },
  {
    name: "WhatsApp",
    handle: siteConfig.phone,
    url: siteConfig.links.whatsapp,
    description: "Direct messaging, instant inquiry & chat",
    external: true,
  },
  {
    name: "LinkedIn",
    handle: "brahmasta-bagus",
    url: siteConfig.links.linkedin,
    description: "Professional networking, endorsements & career history",
    external: true,
  },
  {
    name: "GitHub",
    handle: "Brahmastabagus",
    url: siteConfig.links.github,
    description: "Open source contributions, repositories & code activity",
    external: true,
  },
];

function StaggerLetterText({ text, isHovered }: { text: string; isHovered: boolean }) {
  const reduced = useReducedMotion() ?? false;
  const lift = isHovered && !reduced;

  return (
    <span className="inline-flex font-mono text-sm">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          animate={lift ? { y: -2 } : { y: 0 }}
          transition={{
            duration: reduced ? 0 : 0.18,
            delay: lift ? index * 0.022 : 0,
            ease: "easeOut",
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function ContactLink({ link }: { link: ContactLinkItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.url}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-between gap-4 border-t border-border/60 py-3 group focus-visible:outline-2 focus-visible:outline-accent-blue"
      aria-label={link.external ? `Visit Bagus on ${link.name}` : `Email ${siteConfig.email}`}
    >
      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-semibold text-foreground">
            {link.name}
          </span>
          <span className="text-[10px] text-muted-foreground font-mono">
            /
          </span>
          <div className="truncate text-foreground/80 group-hover:text-accent-blue transition-colors">
            <StaggerLetterText text={link.handle} isHovered={isHovered} />
          </div>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-1">
          {link.description}
        </p>
      </div>

      {link.external ? (
        <ExternalLink className="size-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
      ) : (
        <Mail className="size-3.5 shrink-0 text-muted-foreground group-hover:text-foreground" />
      )}
    </a>
  );
}

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Panel id="contact" aria-label="Contact and Social Links">
      <PanelHeader>
        <PanelTitle>
          <a href="#contact" className="hover:underline">Contact</a>
        </PanelTitle>
        <PanelDescription>
          Open to Frontend Developer roles in React and TypeScript
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-6">
        <div className="border-b border-border/60">
          {CONTACT_LINKS.map((link) => (
            <ContactLink key={link.name} link={link} />
          ))}
        </div>

        <footer className="pt-6 pb-2 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap gap-1">
            <span>© {new Date().getFullYear()} Brahmasta Bagus Aryandra.
            </span>
            <span>Old Version:
              <a
                href={siteConfig.links.oldPortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:underline focus-visible:outline-2 focus-visible:outline-accent-blue"
              >
                <span>brahmastabagus.github.io</span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
            aria-label="Scroll to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="size-3.5" />
          </button>
        </footer>
      </PanelContent>
    </Panel>
  );
}
