---
name: portfolio-craft
description: Keeps the Bagus portfolio from looking like generic AI-generated UI. Use when editing pages, components, layout, color, type, motion, or on-page copy in bagus-portfolio, or when the user mentions AI slop, visual taste, or design polish.
---

# Portfolio craft

Keep the existing site. The owner rejected a full restyle. Panel rails, screen lines, the photo hero, the floating dock, and the current type and color stay.

## What to change

Only the parts that read as a template:

- Three equal cards in a row, and the same pattern in two columns when every card is an icon tile plus a short blurb
- Icon-in-a-square on those cards
- Fake browser chrome (red, yellow, and green dots) in place of a real screenshot
- A radial blue spotlight that follows the cursor
- A pulsing green "Available for opportunities" pill
- Slogan lines such as "Let's build together"

Replace those with a list or a sentence inside the same panel. Do not invent a new palette, font, or layout system.

## Keep these interactions

Floating dock with magnification, scroll-reveal about paragraph, expandable experience and education, project links, stagger on social handles, system theme plus manual toggle, English, facts from `docs/content-sources/`.

Respect `prefers-reduced-motion`: no magnification, no stagger, no opacity scrub.

## Copy

Specific and short. Name the product, the number, and the tool. Do not invent metrics. Do not add a Source Code link for a private repo.
