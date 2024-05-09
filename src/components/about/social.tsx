import Image from 'next/image';
import Link from 'next/link';
import { FaFileLines } from 'react-icons/fa6';

export async function SocialMedia() {
  const res = await fetch(`${process.env.API_URL}api/abouts`, {
    cache: 'force-cache',
  });
  const social = await res.json();

  return (
    <div className="flex gap-2">
      {social.map((item: any) => (
        <Link
          key={item._id}
          href={item.href}
          target="_blank"
          title={item.name}
          className="transition-opacity duration-300 ease-in-out hover:opacity-80"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={100}
            priority
            className="h-6 w-6 md:h-7 md:w-7"
          />
        </Link>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <Link href="/" className="group flex items-center gap-2" target="_blank">
      <FaFileLines
        size={25}
        className="text-gray-800 dark:text-gray-300 h-5 w-5 md:h-7 md:w-7 group-hover:text-black dark:group-hover:text-white"
      />
      <span className="text-xs md:text-sm text-gray-800 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white group-hover:underline">
        Download Resume
      </span>
    </Link>
  );
}
