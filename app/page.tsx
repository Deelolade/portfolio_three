import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { TechStackSection } from "../components/TechStackSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WritingSection } from "../components/WritingSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-emerald-400">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <TechStackSection />
      <TestimonialsSection />
      <WritingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
