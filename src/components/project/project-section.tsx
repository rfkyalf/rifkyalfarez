import { FaDiagramProject } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ProjectCard from './project-card';
import LoadingCardProject from './loading';
import { Suspense } from 'react';
import { MotionSection } from '@/lib/framer';

export default function ProjectsSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, x: 95 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        type: 'spring',
        delay: 0.4,
      }}
      className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-800 pb-8"
    >
      <SectionHeader
        name="Projects"
        desc="Implementation of my skills into personal and real projects"
        Icon={FaDiagramProject}
      />
      <Suspense fallback={<LoadingCardProject />}>
        <ProjectCard />
      </Suspense>
    </MotionSection>
  );
}
