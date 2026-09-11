import { Hero } from "@/components/hero";
import { QuickOverview } from "@/components/quick-overview";

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 sm:px-6 py-12 md:py-16 pb-32 flex flex-col gap-10 sm:gap-12">
      <Hero />
      <QuickOverview />
      {/* Subsequent sections: About, Skills, Experience, Education, Projects, Certifications, Contact */}
    </main>
  );
}
