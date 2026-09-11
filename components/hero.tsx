import React from "react";

export function Hero() {
  return (
    <header
      id="hero"
      className="flex flex-col gap-6 pt-4 sm:pt-8"
      aria-label="Hero Section"
    >
      <div className="flex items-center justify-between gap-4">
        {/* Monogram Avatar */}
        <div className="relative size-20 sm:size-24 rounded-full border border-border bg-gradient-to-br from-muted/80 to-muted/20 flex items-center justify-center font-mono text-2xl font-semibold text-foreground select-none shadow-sm ring-1 ring-border/50">
          <span className="tracking-tighter">BA</span>
          <div
            className="absolute -bottom-1 -right-1 size-5 rounded-full bg-background flex items-center justify-center"
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

      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
        Specializing in building scalable, accessible, and production-ready
        web applications with React, TypeScript, Redux Toolkit, and modern
        frontend architectures. Passionate about AI-integrated interfaces and
        measurable performance optimization.
      </p>
    </header>
  );
}
