import Image from 'next/image';
import Link from 'next/link';
import { FaFileLines } from 'react-icons/fa6';

export async function SocialMedia() {
  const res = await fetch('http://localhost:3000/api/about', {
    cache: 'force-cache',
  });
  const data = await res.json();
  const social = data?.data;

  return (
    <div className="flex gap-2">
      {social.map((item: any) => (
        <Link
          key={item.id}
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
            placeholder="empty"
            className="h-7 w-7 "
          />
        </Link>
      ))}
    </div>
  );
}

export function Resume() {
  return (
    <Link href="/" className="group flex items-center gap-2" target="_blank">
      <FaFileLines size={25} className="text-gray-800 group-hover:text-black" />
      <span className="text-sm text-gray-800 group-hover:text-black group-hover:underline">
        Download Resume
      </span>
    </Link>
  );
}
