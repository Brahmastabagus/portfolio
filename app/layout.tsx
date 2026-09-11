import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Brahmasta Bagus Aryandra — Frontend Developer",
  description:
    "Frontend Developer specializing in React.js, TypeScript, Redux Toolkit, and performance optimization. Building scalable, accessible, and high-performance digital products.",
  keywords: [
    "Brahmasta Bagus Aryandra",
    "Bagus",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Brahmasta Bagus Aryandra" }],
  openGraph: {
    title: "Brahmasta Bagus Aryandra — Frontend Developer",
    description:
      "Frontend Developer specializing in React.js, TypeScript, Redux Toolkit, and performance optimization.",
    type: "website",
    locale: "en_US",
  },
};

const themeScript = `
  (function() {
    try {
      var key = 'bagus_portfolio_theme';
      var stored = localStorage.getItem(key);
      var isDark = stored === 'dark' || (!stored || stored === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-200">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
