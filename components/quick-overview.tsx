import React from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function QuickOverview({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "screen-line-bottom relative bg-background px-4 sm:px-6 py-3.5 flex items-center text-xs sm:text-sm",
        className
      )}
      aria-label="Quick Overview"
    >
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="size-3.5 sm:size-4 text-muted-foreground/80 shrink-0" />
        <span>Purbalingga, Central Java, Indonesia</span>
      </div>
    </section>
  );
}
