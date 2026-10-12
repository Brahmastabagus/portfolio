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
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Brahmasta Bagus Aryandra
        </h1>
        <p className="text-lg sm:text-xl font-medium text-foreground/90">
          {"Frontend Developer at "}
          <span className="text-muted-foreground font-normal">
            Brofesional by Youth Educational Centre
          </span>
        </p>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
        I build production web applications with React, TypeScript, and Redux Toolkit.
      </p>
    </header>
  );
}
