import AboutSection from '@/components/about/about-section';
import ContactSection from '@/components/contact/contact-section';
import ExperienceSection from '@/components/experience/experience-section';
import ProjectsSection from '@/components/project/project-section';
import TechStacksSection from '@/components/tech/tech-section';

export default function Home() {
  return (
    <main className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto mb-8">
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStacksSection />
      <ContactSection />
    </main>
  );
}
