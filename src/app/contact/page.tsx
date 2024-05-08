import ContactForm from '@/components/contact/contact-form';
import LetsConnect from '@/components/contact/social-media';

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
    <div className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto mt-20 mb-8">
      <div className="border-b border-gray-200 pb-2">
        <h1 className="text-gray-950 text-xl md:text-2xl  xl:text-3xl font-bold">
          Contact Me
        </h1>
        <p className="text-sm md:text-base text-gray-800">
          Get in touch with me
        </p>
      </div>
      <div className="mt-8">
        <h1 className="text-gray-950 text-base md:text-xl font-bold">
          Lets Connect
        </h1>
        <LetsConnect />
      </div>
      <div className="mt-8">
        <h1 className="text-gray-950 text-base md:text-xl font-bold mb-4">
          Send Me a Message
        </h1>
        <ContactForm />
      </div>
    </div>
  );
}
