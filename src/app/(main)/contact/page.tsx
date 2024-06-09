import ContactForm from '@/components/contact/contact-form';
import LetsConnect from '@/components/contact/social-media';
import { MotionDiv } from '@/lib/framer';

export const metadata = {
  title: 'Contact',
  description: 'Get in touch with me',
  openGraph: {
    description: 'Get in touch with me',
    images: '/contact/opengraph-image.png',
  },
};

export default function ContactPage() {
  return (
    <div className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto mb-8">
      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        className="border-b border-neutral-200 dark:border-neutral-800 pb-2"
      >
        <h1 className="text-neutral-950 dark:text-neutral-50 text-xl md:text-2xl  xl:text-3xl font-bold">
          Contact Me
        </h1>
        <p className="text-sm md:text-base text-neutral-800 dark:text-neutral-300">
          Get in touch with me
        </p>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        className="mt-8"
      >
        <h1 className="text-neutral-950 dark:text-neutral-50 text-base md:text-xl font-bold">
          Lets Connect
        </h1>
        <LetsConnect />
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
        className="mt-8"
      >
        <h1 className="text-neutral-950 dark:text-neutral-50 text-base md:text-xl font-bold mb-4">
          Send Me a Message
        </h1>
        <ContactForm />
      </MotionDiv>
    </div>
  );
}
