import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Technologiesused from "./components/Technologiesused";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-6 sm:px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <Technologiesused />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
