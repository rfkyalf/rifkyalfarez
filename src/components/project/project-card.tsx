import Image from 'next/image';
import Link from 'next/link';
import { BiLogoTailwindCss, BiLogoTypescript } from 'react-icons/bi';
import { TbBrandNextjs } from 'react-icons/tb';

export default function ProjectCard() {
  return (
    <Link
      href="/"
      className="flex flex-col shadow-md w-80 rounded-xl overflow-hidden group/card transition-all duration-300 ease-in-out hover:scale-95 hover:shadow-lg"
    >
      <Image
        src="https://i.pinimg.com/564x/fb/5a/88/fb5a884d23f42390361d3d9d2aa61f1c.jpg"
        alt="Project Z"
        width={1000}
        height={1000}
        className="w-full h-[200px] object-cover transition-transform duration-300 ease-in-out group-hover/card:scale-105"
      />
      <div className="px-4 py-2">
        <h1 className="text-gray-950 text-base font-semibold">Project X</h1>
        <p className="text-sm text-gray-800 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex items-center gap-[1px] mt-4">
          <BiLogoTypescript size={25} className="text-blue-800" />
          <BiLogoTailwindCss size={25} className="text-cyan-600" />
          <TbBrandNextjs size={25} className="text-gray-950" />
        </div>
      </div>
    </Link>
  );
}
