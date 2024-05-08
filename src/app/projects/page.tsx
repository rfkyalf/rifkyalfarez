import LoadingCardProject from '@/components/project/loading';
import ProjectCard from '@/components/project/project-card';
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
    <div className="w-[880px] mx-auto mt-16 mb-[200px]">
      <div className="border-b border-gray-200 pb-2">
        <h1 className="text-gray-950 text-3xl font-bold">Projects</h1>
        <p className="text-base text-gray-800">
          Implementation of my skills into personal and real projects
        </p>
      </div>
      <div className="mt-8">
        <Suspense fallback={<LoadingCardProject />}>
          <ProjectCard />
        </Suspense>
      </div>
    </div>
  );
}
