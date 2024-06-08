import {
  FaDiagramProject,
  FaHouse,
  FaPaperPlane,
  FaUser,
} from 'react-icons/fa6';

export const navLinks = [
  {
    name: 'Home',
    href: '/',
    icon: FaHouse,
  },
  {
    name: 'About',
    href: '/about',
    icon: FaUser,
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: FaDiagramProject,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: FaPaperPlane,
  },
];

export const selfDescription =
  'A third-year student majoring in informatics engineering with an interest in Frontend Development. Mastering several frontend technologies such as Tailwind CSS, React.js, Next.js, and others. Also, have a basic understanding of backend development such as Express.js and MongoDB. A high spirit of learning and a desire to keep growing makes me always ready to face new challenges.';

export const linkedin = 'https://www.linkedin.com/in/rifkyalfarez/';
export const github = 'https://github.com/rfkyalf';
export const email = 'mailto:alfarez2325@gmail.com';
export const whatsapp =
  'https://api.whatsapp.com/send/?phone=6289650104144&text&type=phone_number&app_absent=0';
export const instagram = 'https://www.instagram.com/rfkyalf/';

export const techStack = [
  {
    name: 'Programming Language',
    bgImage: '/images/tech/prog.png',
    bgImageDark: '/images/tech/prog-dark.png',
    stack: [
      {
        name: 'JavaScript',
        icon: '/icons/tech/js.png',
      },
      {
        name: 'TypeScript',
        icon: '/icons/tech/ts.png',
      },
    ],
  },
  {
    name: 'Frontend',
    bgImage: '/images/tech/frontend.png',
    bgImageDark: '/images/tech/frontend-dark.png',
    stack: [
      {
        name: 'React.js',
        icon: '/icons/tech/react.png',
      },
      {
        name: 'Next.js',
        icon: '/icons/tech/nextjs.png',
      },
      {
        name: 'Tailwind CSS',
        icon: '/icons/tech/tailwindcss.png',
      },
      {
        name: 'Bootstrap',
        icon: '/icons/tech/bootstrap.png',
      },
    ],
  },
  {
    name: 'Backend',
    bgImage: '/images/tech/backend.png',
    bgImageDark: '/images/tech/backend-dark.png',
    stack: [
      {
        name: 'Express.js',
        icon: '/icons/tech/expressjs.png',
      },
      {
        name: 'Node.js',
        icon: '/icons/tech/nodejs.png',
      },
      {
        name: 'Prisma',
        icon: '/icons/tech/prisma.png',
      },
    ],
  },
  {
    name: 'Tools',
    bgImage: '/images/tech/tools.png',
    bgImageDark: '/images/tech/tools-dark.png',
    stack: [
      {
        name: 'Git',
        icon: '/icons/tech/git.png',
      },
      {
        name: 'Figma',
        icon: '/icons/tech/figma.png',
      },
    ],
  },
];
