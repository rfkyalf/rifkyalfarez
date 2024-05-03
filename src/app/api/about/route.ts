import { NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    image: '/icons/social/linkedin.png',
    href: 'https://www.linkedin.com/in/rifky-alfarez-8b53bb2b6/',
    name: 'Linkedin',
  },
  {
    id: 2,
    image: '/icons/social/github.png',
    href: 'https://github.com/rrifky',
    name: 'GitHub',
  },
  {
    id: 3,
    image: '/icons/social/instagram.png',
    href: 'https://www.instagram.com/rfkyalf/',
    name: 'Instagram',
  },
];

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: 'Success',
    data,
  });
}
