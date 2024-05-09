import { FaCode } from 'react-icons/fa';

import SectionHeader from '../section-header';
import TechCard from './tech-card';
import LoadingTechCard from './loading';
import { Suspense } from 'react';

export default function TechStacksSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 dark:border-gray-800 pb-8">
      <SectionHeader
        name="Tech Stack"
        desc="The tech stack I use"
        Icon={FaCode}
      />
      <Suspense fallback={<LoadingTechCard />}>
        <TechCard />
      </Suspense>
    </section>
  );
}
