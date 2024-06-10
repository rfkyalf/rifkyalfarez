import { Providers } from '@/components/theme-providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.BASE_URL}`),
  verification: {
    google: 'b0J4NqD2m6Y_-S1QAAOFGeQ_vZ2IEQl3PUt9tDfUUK8',
  },
  keywords: [
    'rifky',
    'rifky alfarez',
    'rifkyalfarez',
    'rifky website',
    'rifky portfolio',
    'rifky alfarez website',
    'rifky alfarez portfolio',
    'rifky tasikmalaya',
  ],
  title: {
    default: 'Rifky Alfarez | Frontend Developer',
    template: '%s - Rifky Alfarez',
  },
  description:
    'Hi! I am Rifky Alfarez, an 8th semester student majoring in Informatics. I have a big interest in frontend development and currently focusing on React.js and Next.js. Besides that, I also have a basic understanding of Node.js, Express.js, and Prisma.',
  openGraph: {
    title: 'Rifky Alfarez | Frontend Developer',
    description:
      'Hi! I am Rifky Alfarez, an 8th semester student majoring in Informatics. I have a big interest in frontend development and currently focusing on React.js and Next.js. Besides that, I also have a basic understanding of Node.js, Express.js, and Prisma.',
    images: '/opengraph-image.png',
    type: 'website',
    siteName: 'Rifky Alfarez',
    locale: 'id_ID',
    url: `${process.env.BASE_URL}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-neutral-50 dark:bg-neutral-950`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
