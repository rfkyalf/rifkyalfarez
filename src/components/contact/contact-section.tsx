import { FaPaperPlane } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ContactForm from './contact-form';
import { MotionSection } from '@/framer';

export default function ContactSection() {
  return (
    <MotionSection
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 2, ease: 'easeInOut', type: 'spring' }}
      viewport={{ once: true }}
      className="flex flex-col gap-4"
    >
      <SectionHeader
        name="Contact"
        desc="Get in touch with me"
        Icon={FaPaperPlane}
      />
      <ContactForm />
    </MotionSection>
  );
}
