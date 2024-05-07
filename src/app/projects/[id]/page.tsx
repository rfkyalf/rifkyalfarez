import BackButton from '@/components/back-button';
import Image from 'next/image';

export default async function DetailProjectPage({ params }: any) {
  const res = await fetch(
    `http://localhost:3000/api/projects?id=${params.id}`,
    {
      cache: 'no-store',
    }
  );
  const data = await res.json();
  const project = data.data;

  return (
    <div className="w-[880px] mx-auto mt-16 mb-8">
      <div className="mb-8 text-base font-semibold text-gray-700">
        <BackButton />
      </div>
      <div>
        <Image
          src={project.image}
          alt={project.name}
          width={1000}
          height={1000}
          className="w-full h-[400px] object-cover shadow-md rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center text-sm text-gray-800 mt-4">
        <div className="flex gap-2 items-center">
          <p>Tech stack:</p>
          <div className="flex gap-1">
            {project.tech.map((item: any) => (
              <Image
                key={item.tech_id}
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
        <div className="flex items-center gap-8">
          <p>Source Code</p>
          <p>App Demo</p>
        </div>
      </div>
      <div className="mt-8 space-y-2">
        <h1 className="textgray-950 text-2xl font-bold">{project.name}</h1>
        <p className="text-base to-gray-700 text-justify leading-loose">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
