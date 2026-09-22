"use client";

import React, { useState } from "react";
import { MapPin, Copy, Check, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const PUBLIC_EMAIL = "brahmastabagus@gmail.com";

export function QuickOverview({ className }: { className?: string }) {
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

  return (
    <section
      className={cn(
        "screen-line-bottom relative bg-background px-4 sm:px-6 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs sm:text-sm",
        className
      )}
      aria-label="Quick Overview"
    >

      {/* Location metadata */}
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="size-3.5 sm:size-4 text-muted-foreground/80 shrink-0" />
        <span>Purbalingga, Central Java, Indonesia</span>
      </div>

      {/* Quick actions: Copy Email & Social Links */}
      <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-2 pt-2 md:pt-0 border-t md:border-t-0 border-border/50 min-w-fit">
        <button
          type="button"
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent-blue"
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
              <span>Copy Email</span>
            </>
          )}
        </button>

        <a
          href="https://github.com/Brahmastabagus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
          aria-label="Visit Bagus on GitHub"
        >
          <span>GitHub</span>
          <ExternalLink className="size-3 text-muted-foreground" />
        </a>

        <a
          href="https://linkedin.com/in/brahmasta-bagus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
          aria-label="Visit Bagus on LinkedIn"
        >
          <span>LinkedIn</span>
          <ExternalLink className="size-3 text-muted-foreground" />
        </a>

        <a
          href="https://wa.me/6283113654031"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono border border-border bg-background hover:bg-muted/80 text-foreground transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
          aria-label="Chat with Bagus on WhatsApp"
        >
          <span>WhatsApp</span>
          <ExternalLink className="size-3 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
