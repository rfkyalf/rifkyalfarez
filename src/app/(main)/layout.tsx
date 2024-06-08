'use client';

import Navbar from '@/components/navbar';
import { usePathname } from 'next/navigation';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProjectDetailPage = pathname.startsWith('/projects/');

  return (
    <div>
      {!isProjectDetailPage && <Navbar />}
      {children}
    </div>
  );
}
