import { useEffect } from "react";
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import SkillsSection from "@/components/skills-section";
import CertificationsSection from "@/components/certifications-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Portfolio() {
  useEffect(() => {
    // Set page title
    document.title = "Jash Vaghasiya - Data Engineer Portfolio";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Jash Vaghasiya - Data Engineer specializing in building robust data pipelines and transforming raw data into actionable insights for data-driven decision making.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Jash Vaghasiya - Data Engineer specializing in building robust data pipelines and transforming raw data into actionable insights for data-driven decision making.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-slate-50 font-sans">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
