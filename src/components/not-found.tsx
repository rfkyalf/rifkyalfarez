'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFoundComponents() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center p-8 rounded-xl gap-x-4 ">
        <div>
          <Image
            src="/gif/not-found.gif"
            alt="404"
            width={1000}
            height={1000}
            className="w-full h-32 md:w-full md:h-64"
            priority
          />
        </div>
        <div>
          <h1 className="text-2xl md:text-5xl font-bold mb-8 text-neutral-950 dark:text-neutral-50">
            Oops...
          </h1>
          <h2 className="text-xl md:text-4xl font-bold text-neutral-950 dark:text-neutral-50">
            Page Not Found
          </h2>
          <p className="text-sm md:text-xl mb-8 text-neutral-700 dark:text-neutral-300">
            <span className="text-red-500 font-semibold">{pathname}</span> page
            is doesn&apos;t exist
          </p>
          <Link
            href="/"
            className="underline text-xs md:text-base text-neutral-800 dark:text-neutral-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
