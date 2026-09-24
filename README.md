# Brahmasta Bagus Aryandra — Portfolio

Personal portfolio website for **Brahmasta Bagus Aryandra**, a Frontend Developer specializing in React, TypeScript, and modern web technologies. Built as a single-page application with smooth scroll-reveal animations, dark/light theming, and a macOS-style floating dock navigation.

## ✨ Features

- **Single-Page Layout** — Hero, About, Skills, Experience, Education, Projects, Certifications, and Contact sections arranged in a clean editorial format
- **Dark / Light Theme** — System-aware theme with manual toggle, persisted in `localStorage`, and flash-free via inline `<script>` hydration
- **Floating Dock Navigation** — macOS-inspired bottom dock with spring physics hover magnification (powered by Motion)
- **Scroll-Reveal Text** — Word-by-word opacity animation on the About section using scroll-linked Motion values
- **Responsive Design** — Mobile-first approach with Tailwind CSS v4, optimized from 320px to wide desktop
- **Custom Design System** — Semantic color tokens (`background`, `foreground`, `muted`, `accent-blue`, `accent-green`) with full-viewport hairline dividers (chanhdai pattern)
- **Accessibility** — Semantic HTML, ARIA labels, focus-visible outlines, and keyboard-navigable dock

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | [TypeScript 5](https://www.typescriptlang.org) |
| UI Library | [React 19](https://react.dev) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Animations | [Motion (Framer Motion) 13](https://motion.dev) |
| Icons | [Lucide React](https://lucide.dev) |
| Font | [Geist Sans & Geist Mono](https://vercel.com/font) via `next/font` |

## 📁 Project Structure

```
bagus-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, theme script
│   ├── page.tsx            # Home page composing all sections
│   ├── globals.css         # Tailwind config, CSS variables, custom utilities
│   ├── favicon.ico
│   ├── icon.svg
│   └── apple-icon.png
├── components/
│   ├── hero.tsx            # Hero section with avatar & availability badge
│   ├── about.tsx           # Scroll-reveal narrative + highlight cards
│   ├── quick-overview.tsx  # Stats strip below hero
│   ├── skills.tsx          # Technical skills showcase
│   ├── experience.tsx      # Work experience timeline
│   ├── education.tsx       # Academic background
│   ├── projects.tsx        # Featured & other projects gallery
│   ├── certifications.tsx  # Professional certifications
│   ├── contact.tsx         # Contact form / info
│   ├── floating-dock.tsx   # macOS-style bottom navigation dock
│   ├── panel.tsx           # Reusable section panel compound component
│   ├── section-divider.tsx # Full-width hairline divider
│   └── theme-provider.tsx  # Theme context with useSyncExternalStore
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   └── avatar.jpg          # Profile photo
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.18 (tested on v24.14)
- **npm** ≥ 9

### Installation

```bash
# Clone the repository
git clone https://github.com/<your-username>/bagus-portfolio.git
cd bagus-portfolio

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 🎨 Theming

The app uses CSS custom properties for theming, defined in [`globals.css`](app/globals.css):

| Token | Light | Dark |
|---|---|---|
| `--background` | `#ffffff` | `#09090b` |
| `--foreground` | `#0a0a0a` | `#fafafa` |
| `--muted` | `#f4f4f5` | `#27272a` |
| `--muted-foreground` | `#71717a` | `#a1a1aa` |
| `--accent-blue` | `#3b82f6` | `#3b82f6` |
| `--accent-green` | `#10b981` | `#10b981` |

Theme preference is stored under the `bagus_portfolio_theme` key in `localStorage` and applied before React hydration to prevent flash-of-wrong-theme (FOWT).

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint across the project |

## 📄 License

This project is personal portfolio source code. All rights reserved.

---

Built with ☕ and 💻 by **Brahmasta Bagus Aryandra**
