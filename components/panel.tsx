import React from "react";
import { cn } from "@/lib/utils";

/**
 * Panel — A section container that integrates into the chanhdai-style
 * unified border rail system.
 *
 * Architecture:
 * - Panel:        <section> wrapper, no border-x (parent container owns vertical rails)
 * - PanelHeader:  <header> with screen-line-bottom for full-width horizontal divider
 * - PanelTitle:   <h2> heading
 * - PanelTitleSup: superscript badge (count, accolade)
 * - PanelDescription: mono metadata text
 * - PanelContent: padded content area
 */

export interface PanelProps extends React.ComponentProps<"section"> {
  children?: React.ReactNode;
}

export function Panel({ className, ...props }: PanelProps) {
  return (
    <section
      data-slot="panel"
      className={cn("relative bg-background", className)}
      {...props}
    />
  );
}

export interface PanelHeaderProps extends React.ComponentProps<"header"> {
  children?: React.ReactNode;
}

export function PanelHeader({ className, ...props }: PanelHeaderProps) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4 sm:px-6 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4",
        className
      )}
      {...props}
    />
  );
}

export interface PanelTitleProps extends React.ComponentProps<"h2"> {
  children?: React.ReactNode;
}

export function PanelTitle({ className, ...props }: PanelTitleProps) {
  return (
    <h2
      data-slot="panel-title"
      className={cn(
        "group/panel-title font-heading text-xl sm:text-2xl font-semibold tracking-tight text-foreground flex items-center gap-2",
        className
      )}
      {...props}
    />
  );
}

export interface PanelTitleSupProps extends React.ComponentProps<"sup"> {
  children?: React.ReactNode;
}

export function PanelTitleSup({ className, ...props }: PanelTitleSupProps) {
  return (
    <sup
      className={cn(
        "top-[-0.6em] ml-1 text-xs font-mono font-medium tracking-normal text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export interface PanelDescriptionProps extends React.ComponentProps<"p"> {
  children?: React.ReactNode;
}

export function PanelDescription({ className, ...props }: PanelDescriptionProps) {
  return (
    <p
      data-slot="panel-description"
      className={cn("text-xs sm:text-sm font-mono text-muted-foreground", className)}
      {...props}
    />
  );
}

export interface PanelContentProps extends React.ComponentProps<"div"> {
  children?: React.ReactNode;
}

export function PanelContent({ className, ...props }: PanelContentProps) {
  return (
    <div
      data-slot="panel-body"
      className={cn("p-4 sm:p-6", className)}
      {...props}
    />
  );
}
