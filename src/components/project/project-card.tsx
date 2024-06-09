import { getProjects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectCard() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return <p>No project found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.slug}`}
          className="flex flex-col shadow-md dark:shadow-gray-500 rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.name}
            width={1000}
            height={1000}
            className="w-full h-[150px] md:h-[200px] object-cover"
          />
          <div className="px-6 py-4">
            <h1 className="text-gray-950 dark:text-gray-50 text-base font-semibold">
              {project.name}
            </h1>
            <p className="text-sm text-gray-800 dark:text-gray-300 text-justify">
              {project.desc.substring(0, 80)}...
            </p>
            <div className="flex items-center gap-1 mt-4">
              {project.techStacks.map((tech) => (
                <Image
                  key={tech.id}
                  src={tech.icon}
                  alt={tech.name}
                  title={tech.name}
                  width={1000}
                  height={1000}
                  className="object-contain h-5 w-5"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
