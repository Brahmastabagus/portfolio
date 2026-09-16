"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Copy, Check, ExternalLink, ArrowUp } from "lucide-react";

const PUBLIC_EMAIL = "brahmastabagus@gmail.com";

interface SocialLinkItem {
  name: string;
  handle: string;
  url: string;
  description: string;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
  {
    name: "LinkedIn",
    handle: "linkedin.com/in/brahmasta-bagus",
    url: "https://linkedin.com/in/brahmasta-bagus",
    description: "Professional networking, endorsements & career history",
  },
  {
    name: "GitHub",
    handle: "github.com/Brahmastabagus",
    url: "https://github.com/Brahmastabagus",
    description: "Open source contributions, repositories & code activity",
  },
  {
    name: "AWS Credly",
    handle: "credly.com/badges/brahmasta-bagus",
    url: "https://www.credly.com/badges/bec9d255-1fd6-44ac-a582-63f6dff6ea5f/public_url",
    description: "Verified Amazon Web Services Cloud Architecting badge",
  },
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
    <section
      id="contact"
      className="flex flex-col gap-8 scroll-mt-6 pt-4"
      aria-label="Contact and Social Links"
    >
      <div className="flex flex-col gap-1 border-b border-border/60 pb-3">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
          Contact & Connect
        </h2>
        <p className="text-sm font-mono text-muted-foreground">
          Open for engineering opportunities, collaboration, or technical discussions
        </p>
      </div>

      {/* Main Email Action Box */}
      <div className="rounded-2xl border border-border/80 bg-card/60 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-5 shadow-xs">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 text-foreground font-semibold text-base sm:text-lg">
            <Mail className="size-5 text-accent-blue" />
            <span>Let&apos;s Build Together</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
            Have an open role, project inquiry, or want to discuss frontend architecture?
            Feel free to send a direct message.
          </p>
          <span className="text-xs font-mono text-foreground font-medium pt-1">
            {PUBLIC_EMAIL}
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono border border-border bg-background hover:bg-muted text-foreground transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-accent-green" />
                <span className="text-accent-green font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-muted-foreground" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${PUBLIC_EMAIL}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono border border-border bg-foreground text-background hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-accent-blue"
          >
            <span>Send Email</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      </div>

      {/* Social Links with Stagger Text Effect */}
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Direct Professional Channels:
        </span>
        <div className="flex flex-col gap-2.5">
          {SOCIAL_LINKS.map((link) => (
            <SocialLinkCard key={link.name} link={link} />
          ))}
        </div>
      </div>

      {/* Minimalist MVP Footer */}
      <footer className="pt-10 pb-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
        <div>
          <span>© {new Date().getFullYear()} Brahmasta Bagus Aryandra. Crafted with Next.js & Tailwind CSS.</span>
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
    </section>
  );
}
