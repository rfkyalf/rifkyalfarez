import BackButton from '@/components/back-button';
import { getProject } from '@/lib/data';
import { MotionDiv } from '@/lib/framer';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const project = await getProject(params?.slug);

  if (!project) {
    return {
      title: {
        absolute: '404 - Project not found',
      },
      description: 'Project not found',
    };
  }

  return {
    title: project.name,
    description: project.desc,
    openGraph: {
      title: project.name,
      description: project.metaDesc || project.desc,
      type: 'website',
      locale: 'id_ID',
      url: `${process.env.BASE_URL}/projects/${project.slug}`,
      siteName: 'Rifky Alfarez',
      images: [
        {
          url: project.image,
        },
      ],
    },
  };
}

export default async function DetailProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await getProject(params.slug);

  if (!project) return notFound();

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
      className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto my-8"
    >
      <div className="mb-8 text-sm md:text-base font-semibold text-neutral-700 dark:text-neutral-300">
        <BackButton />
      </div>
      <div>
        <Image
          src={project?.image || '/no-image.png'}
          alt={project?.name || 'No image'}
          width={1000}
          height={1000}
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover shadow-md rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center text-sm text-neutral-800 dark:text-neutral-300 mt-4">
        <div className="flex gap-2 items-center">
          <p>Tech stack:</p>
          <div className="flex gap-1">
            {project?.techStacks?.map((tech) => (
              <Image
                key={tech.id}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                width={1000}
                height={1000}
                className="object-contain h-5 w-5"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <Link href={project?.demoUrl || '#'} target="_blank">
            Demo
          </Link>
          <Link href={project?.repoUrl || '#'} target="_blank">
            Code
          </Link>
        </div>
      </div>
      <div className="mt-8 space-y-2">
        <h1 className="text-xl md:text-2xl font-bold text-neutral-950 dark:text-neutral-50">
          {project?.name}
        </h1>
        <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 text-justify leading-loose">
          {project?.desc}
        </p>
      </div>
    </MotionDiv>
  );
}
