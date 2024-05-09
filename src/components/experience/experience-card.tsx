import Link from 'next/link';
import Image from 'next/image';

export default async function ExperienceCard() {
  const res = await fetch(`${process.env.API_URL}api/experiences`, {
    cache: 'force-cache',
  });
  const experience = await res.json();

  if (experience.length === 0) {
    return <p>No experience found.</p>;
  }

  return (
    <div className="gap-4">
      {experience.map((item: any) => (
        <Link
          key={item._id}
          href="/"
          className="relative overflow-hidden flex flex-col gap-2 w-fit px-8 py-4 shadow-md dark:shadow-gray-500 rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={1000}
            height={1000}
            className="absolute h-28 w-28 opacity-20 dark:opacity-80 top-0 -left-10 -z-10"
          />
          <div className="z-10">
            <h1 className="text-gray-950 dark:text-gray-50 text-base font-semibold">
              {item.role}
            </h1>
            <h2 className="text-gray-900 dark:text-gray-300  text-sm font-medium">
              {item.name}
            </h2>
          </div>
          <p className="text-gray-800 dark:text-gray-400 text-xs">
            {item.date}
          </p>
        </Link>
      ))}
    </div>
  );
}
