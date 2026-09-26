export const siteConfig = {
  name: "Brahmasta Bagus Aryandra",
  shortName: "Bagus",
  title: "Brahmasta Bagus Aryandra — Frontend Developer",
  description:
    "Portfolio of Brahmasta Bagus Aryandra, a Frontend Developer specializing in React.js, TypeScript, Next.js, Redux Toolkit, and performance optimization. Building scalable, accessible, and high-performance digital products.",
  url: process.env.NEXT_PUBLIC_SITE_URL
    ? (process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
        ? process.env.NEXT_PUBLIC_SITE_URL
        : `https://${process.env.NEXT_PUBLIC_SITE_URL}`)
    : process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://brahmasta-bagus.vercel.app",
  email: "brahmastabagus@gmail.com",
  phone: "+62 831-1365-4031",
  whatsappUrl: "https://wa.me/6283113654031",
  links: {
    github: "https://github.com/Brahmastabagus",
    linkedin: "https://linkedin.com/in/brahmasta-bagus",
    whatsapp: "https://wa.me/6283113654031",
    oldPortfolio: "https://brahmastabagus.github.io",
  },
  keywords: [
    // Primary Name variations
    "Brahmasta Bagus Aryandra",
    "Brahmasta Bagus",
    "Bagus Aryandra",
    "Brahmastabagus",
    "Bagus",
    "Aryandra",

    // Role & Career targeting
    "Frontend Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer Indonesia",
    "Software Engineer Frontend",
    "Portfolio Frontend Developer",

    // Technical Expertise & Stacks
    "React.js",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Performance Optimization",
    "Server-Sent Events",
    "SSE",
    "Material UI",
    "Vite",
    "Framer Motion",
    "Web Accessibility",

    // Companies & Education
    "Brofesional",
    "Youth Educational Centre",
    "IT Telkom Purwokerto",
    "Institut Teknologi Telkom Purwokerto",
    "Binar Academy",
  ],
  author: {
    name: "Brahmasta Bagus Aryandra",
    url: "https://github.com/Brahmastabagus",
  },
  locale: "en_US",
  themeColor: "#09090b",
};
