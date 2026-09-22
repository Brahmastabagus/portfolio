import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Hero({ className }: { className?: string }) {
  return (
    <header
      id="hero"
      className={cn(
        "screen-line-top screen-line-bottom relative bg-background p-4 sm:p-6 flex flex-col gap-6",
        className
      )}
      aria-label="Hero Section"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Photo Avatar with Availability Indicator */}
        <div className="relative size-20 sm:size-24 select-none shrink-0">
          <div className="size-full rounded-full overflow-hidden border border-border/80 shadow-xs ring-1 ring-border/50 relative bg-muted/40">
            <Image
              src="/avatar.jpg"
              alt="Brahmasta Bagus Aryandra"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 80px, 96px"
            />
          </div>
          <div
            className="absolute -bottom-0.5 -right-0.5 size-5 rounded-full bg-background flex items-center justify-center shadow-xs ring-1 ring-border/60"
            title="Available for opportunities"
          >
            <span className="size-3 rounded-full bg-accent-green" />
          </div>
        </div>

        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono border border-border/80 bg-muted/40 text-muted-foreground hover:text-foreground transition-colors">
          <span className="size-2 rounded-full bg-accent-green animate-pulse" />
          <span>Available for opportunities</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Brahmasta Bagus Aryandra
        </h1>
        <p className="text-lg sm:text-xl font-medium text-foreground/90">
          Frontend Developer{" "}
          <span className="text-muted-foreground font-normal">
            at Brofesional by Youth Educational Centre
          </span>
        </p>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
        Specializing in building scalable, accessible, and production-ready
        web applications with React, TypeScript, Redux Toolkit, and modern
        frontend architectures. Passionate about AI-integrated interfaces and
        measurable performance optimization.
      </p>
    </header>
  );
}
