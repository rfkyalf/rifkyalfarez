import { techStack } from '@/lib/constants';
import Image from 'next/image';

export default function TechCard() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
      {techStack.map((tech, index) => (
        <div
          key={index}
          className="shadow-md dark:shadow-neutral-500 md:h-56 p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <Image
            src={tech.bgImage}
            alt={tech.name}
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5 dark:hidden"
          />
          <Image
            src={tech.bgImageDark}
            alt={tech.name}
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-neutral-950 dark:text-neutral-50">
            {tech.name}
          </h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-8">
            {tech.stack.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  title={item.name}
                  width={1000}
                  height={1000}
                  className="w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
