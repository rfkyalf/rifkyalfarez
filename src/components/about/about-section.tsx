import { selfDescription } from '@/constants';
import { Resume, SocialMedia } from './social';

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
      <h1 className="text-xl md:text-2xl  xl:text-4xl font-bold text-gray-950 dark:text-gray-50">
        Hi, I&apos;m Rifky Alfarez
      </h1>
      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300 text-justify">
        {selfDescription}
      </p>
      <div className="flex justify-between ">
        <SocialMedia />
        <Resume />
      </div>
    </section>
  );
}
