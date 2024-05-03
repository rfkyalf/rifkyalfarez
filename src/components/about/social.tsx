import { social } from '@/constants/about';
import Link from 'next/link';
import { FaFileLines } from 'react-icons/fa6';

export function SocialMedia() {
  return (
    <div className="flex gap-2">
      {social.map((item: any, index: any) => (
        <Link key={index} href={item.href} target="_blank" title={item.name}>
          <item.icon size={30} className={item.color} />
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
