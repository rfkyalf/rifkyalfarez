'use client';

import { navLinks } from '@/constants/nav';
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-2 flex justify-center w-full items-center z-50">
      <div
        className={`flex px-8 py-2 gap-8 rounded-full transition-all duration-700 ease-in-out ${
          isScrolled
            ? 'bg-white/50 backdrop-blur-lg shadow-md'
            : 'bg-transparent'
        }`}
      >
        {navLinks.map((item: any, index) => (
          <Link
            key={index}
            href={item.href}
            className={`${
              pathname === item.href ? 'bg-gray-300' : ''
            } hover:bg-gray-300 p-2 rounded-xl transition-colors duration-300 ease-in-out`}
          >
            <item.icon size={22} className="text-gray-950" />
          </Link>
        ))}
      </div>
    </nav>
  );
}
