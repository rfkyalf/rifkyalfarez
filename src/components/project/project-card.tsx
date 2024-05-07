import Image from 'next/image';
import Link from 'next/link';

export default async function ProjectCard() {
  const res = await fetch(`http://localhost:5000/api/projects`, {
    cache: 'force-cache',
  });

  const project = await res.json();

  if (project.length === 0) {
    return <p>No project found.</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      {project.map((item: any) => (
        <Link
          key={item._id}
          href={`/projects/${item._id}`}
          className="flex flex-col shadow-md rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={1000}
            height={1000}
            className="w-full h-[200px] object-cover"
          />
          <div className="px-6 py-4">
            <h1 className="text-gray-950 text-base font-semibold">
              {item.name}
            </h1>
            <p className="text-sm text-gray-800 text-justify">
              {item.desc.substring(0, 80)}...
            </p>
            <div className="flex items-center gap-1 mt-4">
              {item.tech.map((item: any) => (
                <Image
                  key={item._id}
                  src={item.tech_image}
                  alt={item.tech_name}
                  title={item.tech_name}
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
