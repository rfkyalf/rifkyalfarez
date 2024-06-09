import { selfDescription } from '@/lib/constants';
import { MotionSection } from '@/lib/framer';
import { Resume, SocialMedia } from '@/components/about/social';
import { Name } from '@/components/about/name';

export default function AboutSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring' }}
      className="flex flex-col gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-8"
    >
      <Name />
      <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-300 text-justify">
        {selfDescription}
      </p>
      <div className="flex justify-between">
        <SocialMedia />
        <Resume />
      </div>
    </MotionSection>
  );
}
