"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, ExternalLink, ArrowUp } from "lucide-react";
import {
  Panel,
  PanelContent,
  PanelDescription,
  PanelHeader,
  PanelTitle,
} from "@/components/panel";

const PUBLIC_EMAIL = "brahmastabagus@gmail.com";
const PUBLIC_WHATSAPP = "+62 831-1365-4031";
const PUBLIC_WHATSAPP_LINK = "https://wa.me/6283113654031";

interface SocialLinkItem {
  name: string;
  handle: string;
  url: string;
  description: string;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: "WhatsApp",
    handle: "+62 831-1365-4031",
    url: "https://wa.me/6283113654031",
    description: "Direct messaging, instant inquiry & chat",
  },
  {
    name: "LinkedIn",
    handle: "brahmasta-bagus",
    url: "https://linkedin.com/in/brahmasta-bagus",
    description: "Professional networking, endorsements & career history",
  },
  {
    name: "GitHub",
    handle: "Brahmastabagus",
    url: "https://github.com/Brahmastabagus",
    description: "Open source contributions, repositories & code activity",
  },
  // {
  //   name: "AWS Credly",
  //   handle: "credly.com/badges/brahmasta-bagus",
  //   url: "https://www.credly.com/badges/bec9d255-1fd6-44ac-a582-63f6dff6ea5f/public_url",
  //   description: "Verified Amazon Web Services Cloud Architecting badge",
  // },
];

function StaggerLetterText({ text, isHovered }: { text: string; isHovered: boolean }) {
  return (
    <span className="inline-flex font-mono text-sm">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{
            duration: 0.18,
            delay: isHovered ? index * 0.022 : 0,
            ease: "easeOut",
          }}
          className="inline-block transition-colors"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

function SocialLinkCard({ link }: { link: SocialLinkItem }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-xl border border-border/70 bg-card/40 p-4 flex items-center justify-between gap-4 transition-all hover:border-border hover:bg-card/70 group focus-visible:outline-2 focus-visible:outline-accent-blue"
      aria-label={`Visit Bagus on ${link.name}`}
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

      <div className="size-8 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-accent-blue/40 shrink-0 transition-colors">
        <ExternalLink className="size-4" />
      </div>
    </a>
  );
}

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PUBLIC_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Panel id="contact" aria-label="Contact and Social Links">
      <PanelHeader>
        <PanelTitle>
          <a href="#contact" className="hover:underline">Contact & Connect</a>
        </PanelTitle>
        <PanelDescription>
          Open for engineering opportunities, collaboration, or technical discussions
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex flex-col gap-6">
        {/* Main Email Action Box */}
        <div className="rounded-xl border border-border/80 bg-card/50 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2 text-foreground font-semibold text-sm sm:text-base">
              <Mail className="size-4 text-accent-blue" />
              <span>Let&apos;s Build Together</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              Have an open role, project inquiry, or want to discuss frontend architecture?
              Feel free to send a direct message.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-0.5 text-xs font-mono">
              <span className="text-foreground font-medium">{PUBLIC_EMAIL}</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-foreground font-medium">{PUBLIC_WHATSAPP}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
              title={`Copy ${PUBLIC_EMAIL} to clipboard`}
            >
              {copied ? (
                <>
                  <Check className="size-3 text-accent-green" />
                  <span className="text-accent-green font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="size-3 text-muted-foreground" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PUBLIC_EMAIL}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium cursor-pointer"
            >
              <span>Email Me</span>
              <ExternalLink className="size-3" />
            </a>

            <a
              href={PUBLIC_WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-colors font-medium cursor-pointer"
            >
              <span>WhatsApp</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-mono font-medium text-foreground uppercase tracking-wider">
            Verified Profiles & Socials
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {SOCIAL_LINKS.map((link) => (
              <SocialLinkCard key={link.name} link={link} />
            ))}
          </div>
        </div>

        {/* Minimalist MVP Footer inside PanelContent */}
        <footer className="pt-6 pb-2 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground">
          <div className="flex flex-wrap gap-1">
            <span>© {new Date().getFullYear()} Brahmasta Bagus Aryandra.
            </span>
            <span>Old Version:
              <a
                href={"https://brahmastabagus.github.io"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-blue hover:underline"
              >
                <span>brahmastabagus.github.io</span>
                <ExternalLink className="size-3 text-muted-foreground" />
              </a>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
