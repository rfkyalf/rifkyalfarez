import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'http://localhost:3000';
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/projects', '/about', '/contact'],
      disallow: '/private/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
