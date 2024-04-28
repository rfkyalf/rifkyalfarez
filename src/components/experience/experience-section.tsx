import Image from 'next/image';
import { FaSuitcase } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import Link from 'next/link';

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 pb-8">
      <SectionHeader name="Experience" desc="My experience" Icon={FaSuitcase} />
      <Link
        href="/"
        className="relative overflow-hidden flex flex-col gap-2 w-fit px-8 py-4 shadow-md rounded-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
      >
        <Image
          src="/images/experience/quadra.png"
          alt="PT. Quadra Karya Santosa"
          width={1000}
          height={1000}
          className="absolute h-28 w-28 opacity-20 top-0 -left-10"
        />
        <div className="z-10">
          <h1 className="text-gray-950 text-base font-semibold">
            Frontend Developer (Intern)
          </h1>
          <h2 className="text-gray-900 text-sm font-medium">
            PT. Quadra Karya Santosa
          </h2>
        </div>
        <p className="text-gray-800 text-xs">September 2023 - November 2023</p>
      </Link>
    </section>
  );
}
