import Link from 'next/link';
import {
  FaFileLines,
  FaLinkedin,
  FaSquareGithub,
  FaSquareInstagram,
} from 'react-icons/fa6';

export default function AboutSection() {
  return (
    <section className="flex flex-col gap-4 border-b border-gray-200 pb-8">
      <h1 className="text-4xl font-bold text-gray-950">
        Hi, I&apos;m Rifky Alfarez
      </h1>
      <p className="text-base text-gray-800 text-justify">
        A third-year student majoring in informatics engineering with an
        interest in Frontend Development. Mastering several frontend
        technologies such as Tailwind CSS, React.js, Next.js, and others. Also,
        have a basic understanding of backend development such as Express.js and
        MongoDB. A high spirit of learning and a desire to keep growing makes me
        always ready to face new challenges.
      </p>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Link
            href="https://www.linkedin.com/in/rifky-alfarez-8b53bb2b6/"
            target="_blank"
          >
            <FaLinkedin
              size={30}
              className="text-blue-700 hover:text-blue-500"
            />
          </Link>
          <Link href="https://github.com/rrifky" target="_blank">
            <FaSquareGithub
              size={30}
              className="text-gray-800 hover:text-gray-500"
            />
          </Link>
          <Link href="https://www.instagram.com/rfkyalf/" target="_blank">
            <FaSquareInstagram
              size={30}
              className="text-rose-700 hover:text-rose-500"
            />
          </Link>
        </div>
        <Link
          href="/"
          className="group flex items-center gap-2"
          target="_blank"
        >
          <FaFileLines
            size={25}
            className="text-gray-800 group-hover:text-black"
          />
          <span className="text-sm text-gray-800 group-hover:text-black group-hover:underline">
            Download Resume
          </span>
        </Link>
      </div>
    </section>
  );
}
