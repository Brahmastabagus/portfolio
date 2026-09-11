"use client";

import React, { useState } from "react";
import { MapPin, Briefcase, Copy, Check, ExternalLink } from "lucide-react";

// Public email can be updated when provided by user
const PUBLIC_EMAIL = "brahmastabagus@gmail.com";

export function QuickOverview() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PUBLIC_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section
      className="rounded-2xl border border-border/70 bg-card/60 backdrop-blur-xs p-4 sm:p-5 shadow-xs"
      aria-label="Quick Overview"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm">
        {/* Metadata info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="size-4 text-muted-foreground/80 shrink-0" />
            <span>Purbalingga, Central Java, Indonesia</span>
          </div>
          {/* <div className="flex items-center gap-2">
            <Briefcase className="size-4 text-muted-foreground/80 shrink-0" />
            <span>On-site / Hybrid (Edutech Platform)</span>
          </div> */}
        </div>

        {/* Quick actions: Copy Email & Social Links */}
        <div className="flex items-center gap-2.5 pt-2 sm:pt-0 border-t sm:border-t-0 border-border/60">
          <button
            type="button"
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
            title={`Copy ${PUBLIC_EMAIL} to clipboard`}
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
            href="https://github.com/Brahmastabagus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
            aria-label="Visit Bagus on GitHub"
          >
            <span>GitHub</span>
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>

          <a
            href="https://linkedin.com/in/brahmasta-bagus"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
            aria-label="Visit Bagus on LinkedIn"
          >
            <span>LinkedIn</span>
            <ExternalLink className="size-3 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
}
