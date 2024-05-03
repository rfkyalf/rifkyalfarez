import { NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    image: '/images/experience/quadra.png',
    name: 'PT. Quadra Karya Santosa',
    role: 'Frontend Developer Intern',
    date: 'September 2023 - November 2023',
  },
];

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: 'Success',
    data,
  });
}
