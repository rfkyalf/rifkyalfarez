import { github, instagram, linkedin } from '@/lib/constants';
import Link from 'next/link';
import {
  FaFileLines,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa6';

export function SocialMedia() {
  return (
    <div className="flex gap-4 items-center text-gray-800 dark:text-gray-300">
      <Link href={linkedin} target="_blank">
        <FaLinkedinIn className="h-5 w-5 md:h-7 md:w-7 transition-all duration-300 ease-in-out hover:text-blue-600 hover:scale-95" />
      </Link>
      <Link href={github} target="_blank">
        <FaGithub className="h-5 w-5 md:h-7 md:w-7 transition-all duration-300 ease-in-out hover:text-gray-600 hover:scale-95" />
      </Link>
      <Link href={instagram} target="_blank">
        <FaInstagram className="h-5 w-5 md:h-7 md:w-7 transition-all duration-300 ease-in-out hover:text-rose-700 hover:scale-95" />
      </Link>
    </div>
  );
}

export function Resume() {
  return (
    <Link href="/" className="group flex items-center gap-2" target="_blank">
      <FaFileLines
        size={25}
        className="text-neutral-800 dark:text-neutral-300 h-5 w-5 md:h-6 md:w-6 group-hover:text-black dark:group-hover:text-white"
      />
      <span className="text-xs md:text-sm text-neutral-800 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white group-hover:underline">
        Download Resume
      </span>
    </Link>
  );
}
