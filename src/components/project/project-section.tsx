import { FaDiagramProject } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 pb-8">
      <SectionHeader
        name="Projects"
        desc="Implementation of my skills into personal and real projects"
        Icon={FaDiagramProject}
      />
      <ProjectCard />
    </section>
  );
}
