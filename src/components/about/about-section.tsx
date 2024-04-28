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
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
        doloremque quo odio! Laboriosam, tempore! Nemo, fugiat! Asperiores
        molestiae, consequatur delectus vel sapiente autem, cupiditate inventore
        tempore accusamus reiciendis porro minima iure blanditiis illo. Tempora
        dolore ipsa vero iusto necessitatibus deserunt voluptatem laboriosam,
        repellendus, inventore nesciunt aut, eos officiis qui incidunt?
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
