"use client";

import React, { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "motion/react";
import {
  Home,
  User,
  Briefcase,
  FolderGit2,
  Award,
  Mail,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

interface DockItemProps {
  mouseX: ReturnType<typeof useMotionValue<number>>;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  onClick?: () => void;
  isTouch: boolean;
}

function DockItem({
  mouseX,
  icon: Icon,
  label,
  href,
  onClick,
  isTouch,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Distance calculation from mouse to icon center
  const distance = useTransform(mouseX, (val) => {
    if (isTouch || !ref.current) return 0;
    const bounds = ref.current.getBoundingClientRect();
    return val - bounds.x - bounds.width / 2;
  });

  // Scale dimensions based on distance
  const widthTransform = useTransform(distance, [-120, 0, 120], [40, 56, 40]);
  const heightTransform = useTransform(distance, [-120, 0, 120], [40, 56, 40]);

  // Spring physics for smooth macOS dock feel
  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 180,
    damping: 14,
  });

  const content = (
    <motion.div
      ref={ref}
      style={isTouch ? { width: 40, height: 40 } : { width, height }}
      className="relative flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors focus-visible:outline-2 focus-visible:outline-accent-blue"
      onMouseEnter={() => !isTouch && setIsHovered(true)}
      onMouseLeave={() => !isTouch && setIsHovered(false)}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
    >
      <Icon className="size-4.5 sm:size-5" />

      {/* Tooltip on hover (desktop only) */}
      <AnimatePresence>
        {isHovered && !isTouch && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap pointer-events-none bg-popover text-popover-foreground border border-border/80 shadow-md"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            } else if (href === "#hero") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
          if (onClick) onClick();
        }}
        className="rounded-full focus-visible:outline-none"
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full focus-visible:outline-none"
    >
      {content}
    </button>
  );
}

function subscribeTouch(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const query = window.matchMedia("(pointer: coarse)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getTouchSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

function getServerTouchSnapshot() {
  return false;
}

export function FloatingBottomDock() {
  const mouseX = useMotionValue(Infinity);
  const { resolvedTheme, toggleTheme } = useTheme();
  const isTouch = useSyncExternalStore(
    subscribeTouch,
    getTouchSnapshot,
    getServerTouchSnapshot
  );

  const navItems = [
    { label: "Home", icon: Home, href: "#hero" },
    { label: "About", icon: User, href: "#about" },
    { label: "Experience", icon: Briefcase, href: "#experience" },
    { label: "Projects", icon: FolderGit2, href: "#projects" },
    { label: "Certifications", icon: Award, href: "#certifications" },
    { label: "Contact", icon: Mail, href: "#contact" },
  ];

  return (
    <nav
      aria-label="Bottom Dock Navigation"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 select-none"
    >
      <div
        onMouseMove={(e) => !isTouch && mouseX.set(e.pageX)}
        onMouseLeave={() => !isTouch && mouseX.set(Infinity)}
        className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full border border-border/70 bg-background/85 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/30"
      >
        {navItems.map((item) => (
          <DockItem
            key={item.label}
            mouseX={mouseX}
            icon={item.icon}
            label={item.label}
            href={item.href}
            isTouch={isTouch}
          />
        ))}

        {/* Subtle vertical divider */}
        <div
          className="w-px h-5 bg-border/70 mx-1"
          aria-hidden="true"
        />

        {/* Theme switcher toggle */}
        <DockItem
          mouseX={mouseX}
          icon={resolvedTheme === "dark" ? Sun : Moon}
          label={
            resolvedTheme === "dark"
              ? "Switch to Light Mode"
              : "Switch to Dark Mode"
          }
          onClick={toggleTheme}
          isTouch={isTouch}
        />
      </div>
    </nav>
  );
}
