import { FaPaperPlane } from 'react-icons/fa6';
import SectionHeader from '../section-header';
import ContactForm from './contact-form';

export default function ContactSection() {
  return (
    <section className="flex flex-col gap-4 pb-8">
      <SectionHeader
        name="Contact"
        desc="Get in touch with me"
        Icon={FaPaperPlane}
      />
      <ContactForm />
    </section>
  );
}
