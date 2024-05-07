import ProjectCard from '@/components/project/project-card';

export default function ProjectsPage() {
  return (
    <main className="w-[880px] mx-auto mt-16">
      <div className="border-b border-gray-200 pb-2">
        <h1 className="text-gray-950 text-3xl font-bold">Projects</h1>
        <p className="text-base text-gray-800">
          Implementation of my skills into personal and real projects
        </p>
      </div>
      <div className="mt-8">
        <ProjectCard />
      </div>
    </main>
  );
}
