import { Sidebar } from "../components/Sidebar";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CapabilitiesSection } from "../components/CapabilitiesSection";
import { TechStackSection } from "../components/TechStackSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { WritingSection } from "../components/WritingSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 selection:bg-zinc-800 selection:text-emerald-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Fixed / Sticky Sidebar on desktop */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>

          {/* Right Column: Continuous Scrollable Content */}
          <div className="lg:col-span-8">
            <AboutSection />
            <ExperienceSection />
            <ProjectsSection />
            <CapabilitiesSection />
            <TechStackSection />
            <TestimonialsSection />
            {/*<WritingSection />*/}
            <ContactSection />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
