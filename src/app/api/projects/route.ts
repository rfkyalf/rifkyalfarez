import { NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    image: '/images/project/project-1.png',
    name: 'Personal Portfolio',
    desc: 'It is a personal portfolio website built using TypeScript, Tailwind CSS, and Next.js',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/ts.png',
        tech_name: 'TypeScript',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tailwindcss.png',
        tech_name: 'Tailwind CSS',
      },
      {
        tech_id: 3,
        tech_image: '/icons/nextjs.png',
        tech_name: 'Next.js',
      },
    ],
  },
  {
    id: 1,
    image: '/images/project/project-2.png',
    name: 'Kanabagi Group',
    desc: 'It is a personal portfolio website built using TypeScript, Tailwind CSS, and Next.js',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/ts.png',
        tech_name: 'TypeScript',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tailwindcss.png',
        tech_name: 'Tailwind CSS',
      },
      {
        tech_id: 3,
        tech_image: '/icons/nextjs.png',
        tech_name: 'Next.js',
      },
      {
        tech_id: 4,
        tech_image: '/icons/shadcdn.png',
        tech_name: 'Shadcn/ui',
      },
    ],
  },
];

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: 'Success',
    data,
  });
}
