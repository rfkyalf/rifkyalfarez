import { NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    bg_image: '/images/tech/prog.png',
    name: 'Programming Language',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/js.png',
        tech_name: 'JavaScript',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/ts.png',
        tech_name: 'TypeScript',
      },
    ],
  },
  {
    id: 2,
    bg_image: '/images/tech/frontend.png',
    name: 'Frontend',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/bootstrap.png',
        tech_name: 'Bootstrap',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/tailwindcss.png',
        tech_name: 'Tailwind CSS',
      },
      {
        tech_id: 3,
        tech_image: '/icons/tech/react.png',
        tech_name: 'React.js',
      },
      {
        tech_id: 4,
        tech_image: '/icons/tech/nextjs.png',
        tech_name: 'Next.js',
      },
    ],
  },
  {
    id: 3,
    bg_image: '/images/tech/backend.png',
    name: 'Backend',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/nodejs.png',
        tech_name: 'Node.js',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/expressjs.png',
        tech_name: 'Express.js',
      },
    ],
  },
  {
    id: 4,
    bg_image: '/images/tech/databases.png',
    name: 'Databases',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/mysql.png',
        tech_name: 'MySQL',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/mongodb.png',
        tech_name: 'MongoDB',
      },
    ],
  },
  {
    id: 5,
    bg_image: '/images/tech/tools.png',
    name: 'Tools',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/git.png',
        tech_name: 'Git',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/figma.png',
        tech_name: 'Figma',
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
