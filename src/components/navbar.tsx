'use client';

import ThemeSwitch from '@/components/darkmode-toggle';
import { navLinks } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollPosition > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-2 left-0 right-0 flex justify-center w-full items-center z-50 mb-8">
      <div
        className={`flex px-8 py-2 gap-4 md:gap-8 rounded-full transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-white/50 dark:bg-black/50 backdrop-blur-lg shadow-md dark:shadow-gray-500'
            : 'bg-transparent'
        }`}
      >
        {navLinks.map((item: any, index) => (
          <Link
            key={index}
            href={item.href}
            title={item.name}
            className={`${
              pathname === item.href ? 'bg-gray-300 dark:bg-gray-700' : ''
            } hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-xl transition-colors duration-300 ease-in-out`}
          >
            <item.icon
              size={22}
              className="text-gray-950 dark:text-gray-50 w-5 h-5 md:w-6 md:h-6"
            />
          </Link>
        ))}
        <ThemeSwitch />
      </div>
    </nav>
  );
}
