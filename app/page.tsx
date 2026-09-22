import { Hero } from "@/components/hero";
import { QuickOverview } from "@/components/quick-overview";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { SectionDivider } from "@/components/section-divider";

export default function HomePage() {
  return (
    <main className="max-w-screen overflow-x-clip">
      {/* Chanhdai-style layout: container → border-x container → sections */}
      <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12 pb-32">
        <div className="mx-auto md:max-w-3xl border-x border-line">
          {/* Hero area */}
          <Hero />

          {/* Quick overview strip (directly below hero, no divider) */}
          <QuickOverview />

          <SectionDivider />

          <About />

          <SectionDivider />

          <Skills />

          <SectionDivider />

          <Experience />

          <SectionDivider />

          <Education />

          <SectionDivider />

          <Projects />

          <SectionDivider />

          <Certifications />

          <SectionDivider />

          <Contact />
        </div>
      </div>
    </main>
  );
}
