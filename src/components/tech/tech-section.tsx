import Image from 'next/image';
import { FaCode } from 'react-icons/fa';
import { FaBootstrap, FaGitAlt, FaNodeJs, FaReact } from 'react-icons/fa6';
import { IoLogoFigma } from 'react-icons/io5';
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import SectionHeader from '../section-header';

export default function TechStacksSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 pb-8">
      <SectionHeader
        name="Tech Stack"
        desc="The tech stack I use"
        Icon={FaCode}
      />
      <div className="grid grid-cols-3 gap-4">
        <div className="w-56 shadow-md p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/images/tech/prog.png"
            alt="Programming Language"
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-gray-950">
            Programming Language
          </h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-2">
            <SiJavascript
              size={50}
              className="text-yellow-500 cursor-pointer hover:text-yellow-400"
              title="JavaScript"
            />
            <SiTypescript
              size={50}
              className="text-blue-500 cursor-pointer hover:text-blue-400"
              title="TypeScript"
            />
          </div>
        </div>
        <div className="w-56 shadow-md p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/images/tech/frontend.png"
            alt="Frontend"
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-gray-950">
            Frontend
          </h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-2">
            <FaBootstrap
              size={50}
              className="text-violet-700 cursor-pointer hover:text-violet-600"
              title="Bootstrap"
            />
            <SiTailwindcss
              size={50}
              className="text-cyan-500 cursor-pointer hover:text-cyan-400"
              title="Tailwind CSS"
            />
            <FaReact
              size={50}
              className="text-sky-400 cursor-pointer hover:text-sky-300"
              title="React.js"
            />
            <TbBrandNextjs
              size={50}
              className="text-gray-950 cursor-pointer hover:text-gray-800"
              title="Next.js"
            />
          </div>
        </div>
        <div className="w-56 shadow-md p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/images/tech/backend.png"
            alt="Backend"
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-gray-950">
            Backend
          </h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-2">
            <FaNodeJs
              size={50}
              className="text-lime-500 cursor-pointer hover:text-lime-400"
              title="Node.js"
            />
            <SiExpress
              size={50}
              className="text-gray-950 cursor-pointer hover:text-gray-800"
              title="Express.js"
            />
          </div>
        </div>
        <div className="w-56 shadow-md p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/images/tech/databases.png"
            alt="Databases"
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-gray-950">
            Databases
          </h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-2">
            <SiMysql
              size={50}
              className="text-blue-600 cursor-pointer hover:text-blue-500"
              title="MySQL"
            />
            <SiMongodb
              size={50}
              className="text-green-600 cursor-pointer hover:text-green-500"
              title="MongoDB"
            />
            <SiSupabase
              size={50}
              className="text-emerald-700 cursor-pointer hover:text-emerald-600"
              title="Supabase"
            />
          </div>
        </div>
        <div className="w-56 shadow-md p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <Image
            src="/images/tech/tools.png"
            alt="Tools"
            width={1000}
            height={1000}
            className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
          />
          <h1 className="mb-4 text-base font-semibold text-gray-950">Tools</h1>
          <div className="grid grid-cols-2 justify-items-center content-center gap-2">
            <FaGitAlt
              size={50}
              className="text-red-600 cursor-pointer hover:text-red-500"
              title="Git"
            />
            <IoLogoFigma
              size={50}
              className="text-blue-600 cursor-pointer hover:text-blue-500"
              title="Figma"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
