import { NextRequest, NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    image: '/images/project/project-1.png',
    name: 'Personal Portfolio',
    desc: 'It is a personal portfolio website built using TypeScript, Tailwind CSS, and Next.js. This project showcases my skills, experiences, and past projects in a visually appealing and user-friendly. The website is designed to be responsive and accessible across various devices and screen sizes. The primary goal of this portfolio is to provide potential employers or clients with a comprehensive overview of my expertise and capabilities. It serves as a central hub for them to explore my work samples, read about my background, and gain insights into my problem-solving abilities and technical proficiencies.',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/ts.png',
        tech_name: 'TypeScript',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/tailwindcss.png',
        tech_name: 'Tailwind CSS',
      },
      {
        tech_id: 3,
        tech_image: '/icons/tech/nextjs.png',
        tech_name: 'Next.js',
      },
    ],
  },
  {
    id: 2,
    image: '/images/project/project-2.png',
    name: 'Kanabagi Group',
    desc: 'Kanabagi is a dynamic freelance group specializing in web development solutions. Their website serves as a comprehensive platform showcasing their expertise, portfolio, and services to potential clients. Built on cutting-edge technologies like TypeScript, Tailwind CSS, Next.js, and Shadcn/ui, the website exemplifies their commitment to delivering modern and high-performance web applications.',
    tech: [
      {
        tech_id: 1,
        tech_image: '/icons/tech/ts.png',
        tech_name: 'TypeScript',
      },
      {
        tech_id: 2,
        tech_image: '/icons/tech/tailwindcss.png',
        tech_name: 'Tailwind CSS',
      },
      {
        tech_id: 3,
        tech_image: '/icons/tech/nextjs.png',
        tech_name: 'Next.js',
      },
      {
        tech_id: 4,
        tech_image: '/icons/tech/shadcdn.png',
        tech_name: 'Shadcn/ui',
      },
    ],
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const detailProject = data.find((item) => item.id === Number(id));
    return NextResponse.json({
      status: 200,
      message: 'Success',
      data: detailProject,
    });
  }

  return NextResponse.json({ status: 200, message: 'Success', data });
}
