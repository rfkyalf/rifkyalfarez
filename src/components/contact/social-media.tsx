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
      <Link
        href="/"
        target="_blank"
        className="px-4 py-2 rounded-md bg-blue-700 text-white flex items-center justify-center shadow dark:shadow-gray-500 gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out hover:bg-blue-500"
      >
        <FaLinkedin size={20} />
        Linkedin
      </Link>
      <Link
        href="/"
        target="_blank"
        className="px-4 py-2 rounded-md bg-gray-700 text-white flex items-center justify-center shadow dark:shadow-gray-500  gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out hover:bg-gray-500"
      >
        <FaGithub size={20} />
        Github
      </Link>
      <Link
        href="/"
        target="_blank"
        className="px-4 py-2 rounded-md bg-red-700 text-white flex items-center justify-center shadow dark:shadow-gray-500  gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out hover:bg-red-500"
      >
        <FaEnvelope size={20} />
        Email
      </Link>
      <Link
        href="/"
        target="_blank"
        className="px-4 py-2 rounded-md bg-green-700 text-white flex items-center justify-center shadow dark:shadow-gray-500  gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out hover:bg-green-500"
      >
        <FaWhatsapp size={20} />
        WhatsApp
      </Link>
      <Link
        href="/"
        target="_blank"
        className="px-4 py-2 rounded-md bg-rose-700 text-white flex items-center justify-center shadow dark:shadow-gray-500  gap-2 text-sm md:text-base font-semibold trasition-color duration-300 ease-in-out hover:bg-rose-500"
      >
        <FaInstagram size={20} />
        Instagram
      </Link>
    </div>
  );
}
