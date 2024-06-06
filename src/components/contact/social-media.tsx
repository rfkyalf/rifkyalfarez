import { email, github, instagram, linkedin, whatsapp } from '@/constants';
import Link from 'next/link';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa6';

export default function LetsConnect() {
  return (
    <div className="mt-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <SocialMedia
        href={linkedin}
        color="bg-blue-700 hover:bg-blue-500"
        Icon={FaLinkedin}
        name="Linkedin"
      />
      <SocialMedia
        href={github}
        color="bg-gray-700 hover:bg-gray-500"
        Icon={FaGithub}
        name="Github"
      />
      <SocialMedia
        href={email}
        color="bg-red-700 hover:bg-red-500"
        Icon={FaEnvelope}
        name="Email"
      />
      <SocialMedia
        href={whatsapp}
        color="bg-green-700 hover:bg-green-500"
        Icon={FaWhatsapp}
        name="Whatsapp"
      />
      <SocialMedia
        href={instagram}
        color="bg-rose-700 hover:bg-rose-500"
        Icon={FaInstagram}
        name="Instagram"
      />
    </div>
  );
}

export function SocialMedia({
  href,
  color,
  Icon,
  name,
}: {
  href: string;
  color: string;
  Icon: React.ElementType;
  name: string;
}) {
  return (
    <>
      <Link
        href={href}
        target="_blank"
        className={`px-4 py-2 rounded-md text-white flex items-center justify-center shadow dark:shadow-gray-500 gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out ${color}`}
      >
        <Icon size={20} />
        {name}
      </Link>
    </>
  );
}
