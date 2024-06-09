import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';

export const getProjects = async () => {
  try {
    const projects = await prisma.project.findMany({
      include: {
        techStacks: true,
      },
    });

    return projects;
  } catch (error) {
    throw new Error('Failed to fetch projects');
  }
};

export const getProject = async (id: string) => {
  try {
    const project = await prisma.project.findUnique({
      where: {
        id,
      },
      include: {
        techStacks: true,
      },
    });

    return project;
  } catch (error) {
    return notFound();
  }
};

export const getExperiences = async () => {
  try {
    const experiences = await prisma.experience.findMany();
    return experiences;
  } catch (error) {
    throw new Error('Failed to fetch experiences');
  }
};
