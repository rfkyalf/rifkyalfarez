import { FaCode } from 'react-icons/fa';

import { MotionSection } from '@/lib/framer';
import SectionHeader from '../section-header';
import TechCard from './tech-card';

export default function TechStacksSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
      viewport={{ once: true }}
      className="flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-8"
    >
      <SectionHeader
        name="Tech Stack"
        desc="The tech stack I use"
        Icon={FaCode}
      />
      <TechCard />
    </MotionSection>
  );
}
