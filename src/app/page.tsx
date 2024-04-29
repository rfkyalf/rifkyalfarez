import AboutSection from '@/components/about/about-section';
import ContactSection from '@/components/contact/contact-section';
import ExperienceSection from '@/components/experience/experience-section';
import ProjectsSection from '@/components/project/project-section';
import TechStacksSection from '@/components/tech/tech-section';

export default function Home() {
  return (
    <main className="w-[880px] mx-auto mt-16">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStacksSection />
      <ContactSection />
    </main>
  );
}
