import NotFoundComponents from '@/components/not-found';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404',
  description: 'Page Not Found',
};

export default function NotFound() {
  return <NotFoundComponents />;
}
