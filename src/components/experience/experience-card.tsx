import Link from 'next/link';
import Image from 'next/image';
import { getExperiences } from '@/lib/data';

export default async function ExperienceCard() {
  const experiences = await getExperiences();

  if (experiences.length === 0) {
    return <p>No experience found.</p>;
  }

  return (
    <div className="gap-4">
      {experiences.map((exp) => (
        <Link
          key={exp.id}
          href="/"
          className="relative overflow-hidden flex flex-col gap-2 w-fit px-8 py-4 shadow-md dark:shadow-neutral-500 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            src={exp.image}
            alt={exp.name}
            width={1000}
            height={1000}
            className="absolute h-28 w-28 opacity-20 dark:opacity-80 top-0 -left-10 -z-10"
          />
          <div className="z-10">
            <h1 className="text-neutral-950 dark:text-neutral-50 text-base font-semibold">
              {exp.role}
            </h1>
            <h2 className="text-neutral-900 dark:text-neutral-300 text-sm font-medium">
              {exp.name}
            </h2>
          </div>
          <p className="text-neutral-800 dark:text-neutral-400 text-xs">
            {exp.date}
          </p>
        </Link>
      ))}
    </div>
  );
}
