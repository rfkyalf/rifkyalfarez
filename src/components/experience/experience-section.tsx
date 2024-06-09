import { FaSuitcase } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ExperienceCard from './experience-card';
import { Suspense } from 'react';
import LoadingCard from './loading';
import { MotionSection } from '@/lib/framer';

export default function ExperienceSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, x: 95 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeInOut',
        type: 'spring',
        delay: 0.2,
      }}
      className="flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-8"
    >
      <SectionHeader name="Experience" desc="My experience" Icon={FaSuitcase} />
      <Suspense fallback={<LoadingCard />}>
        <ExperienceCard />
      </Suspense>
    </MotionSection>
  );
}
