import { Hero } from "@/components/hero";
import { QuickOverview } from "@/components/quick-overview";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 md:py-16 pb-32 flex flex-col gap-12 sm:gap-14">
      <Hero />
      <QuickOverview />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
