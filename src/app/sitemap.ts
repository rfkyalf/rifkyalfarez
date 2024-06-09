import { getProjects } from '@/lib/data';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getProjects();

  const projectsUrl = projects.map((project) => ({
    url: `${process.env.BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.BASE_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.BASE_URL}/contact`,
      lastModified: new Date(),
    },
    ...projectsUrl,
  ];
}
