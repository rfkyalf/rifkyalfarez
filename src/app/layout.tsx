import Navbar from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://rifky-portfolio.vercel.app/'),
  keywords: [
    'rifky',
    'rifky alfarez',
    'rifkyalfarez',
    'rifky website',
    'rifky portfolio',
    'rifky alfarez website',
    'rifky alfarez portfolio',
  ],
  title: {
    default: 'Rifky Alfarez | Frontend Developer',
    template: '%s - Rifky Alfarez',
  },
  openGraph: {
    description:
      'A third-year student majoring in informatics engineering with an interest in Frontend Development. Mastering several frontend technologies such as Tailwind CSS, React.js, Next.js, and others. Also, have a basic understanding of backend development such as Express.js and MongoDB. A high spirit of learning and a desire to keep growing makes me always ready to face new challenges.',
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
