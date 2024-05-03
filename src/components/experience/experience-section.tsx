import { FaSuitcase } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ExperienceCard from './experience-card';
import { Suspense } from 'react';
import LoadingCard from './loading';

export default function ExperienceSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 pb-8">
      <SectionHeader name="Experience" desc="My experience" Icon={FaSuitcase} />
      <Suspense fallback={<LoadingCard />}>
        <ExperienceCard />
      </Suspense>
    </section>
  );
}
