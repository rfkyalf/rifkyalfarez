import NotFoundComponents from '@/components/not-found';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    absolute: '404 - Page Not Found',
  },
  description: 'Page Not Found',
};

export default function NotFound() {
  return <NotFoundComponents />;
}
