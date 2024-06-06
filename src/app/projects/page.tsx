import LoadingCardProject from '@/components/project/loading';
import ProjectCard from '@/components/project/project-card';
import { MotionDiv } from '@/framer';
import { Suspense } from 'react';

export const metadata = {
  title: 'Projects',
  description: 'Implementation of my skills into personal and real projects',
  openGraph: {
    description: 'Implementation of my skills into personal and real projects',
    images: '/projects/opengraph-image.png',
  },
};

export default function ProjectsPage() {
  return (
    <div className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto mb-[200px]">
      <MotionDiv
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          type: 'spring',
        }}
        className="border-b border-gray-200 dark:border-gray-800 pb-2"
      >
        <h1 className="text-gray-950 dark:text-gray-50 text-xl md:text-2xl  xl:text-3xl font-bold">
          Projects
        </h1>
        <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
          Implementation of my skills into personal and real projects
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        className="mt-8"
      >
        <Suspense fallback={<LoadingCardProject />}>
          <ProjectCard />
        </Suspense>
      </MotionDiv>
    </div>
  );
}
