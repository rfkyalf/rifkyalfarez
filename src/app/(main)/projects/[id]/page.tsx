import BackButton from '@/components/back-button';
import { MotionDiv } from '@/lib/framer';
import { Metadata, ResolvingMetadata } from 'next';
import Image from 'next/image';

const getProject = async (id: string) => {
  try {
    const res = await fetch(`${process.env.API_URL}api/projects/${id}`, {
      cache: 'force-cache',
    });
    return await res.json();
  } catch (error) {
    throw new Error('Failed to fetch project');
  }
};

export async function generateMetadata(
  {
    params,
  }: {
    params: { id: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = await getProject(params.id);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${project?.name}`,
    description: `${project?.desc}`,
    openGraph: {
      images: [`${project?.image}`, ...previousImages],
    },
  };
}

export default async function DetailProjectPage({ params }: any) {
  const project = await getProject(params.id);

  return (
    <MotionDiv
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: 'easeInOut', type: 'spring' }}
      className="w-[350px] sm:w-[620px] md:w-[748px] xl:w-[880px] mx-auto my-8"
    >
      <div className="mb-8 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300">
        <BackButton />
      </div>
      <div>
        <Image
          src={project?.image}
          alt={project?.name}
          width={1000}
          height={1000}
          className="w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover shadow-md rounded-xl"
        />
      </div>
      <div className="flex justify-between items-center text-sm text-gray-800 dark:text-gray-300 mt-4">
        <div className="flex gap-2 items-center">
          <p>Tech stack:</p>
          <div className="flex gap-1">
            {project?.tech?.map((item: any) => (
              <Image
                key={item?._id}
                src={item?.tech_image}
                alt={item?.tech_name}
                title={item?.tech_name}
                width={1000}
                height={1000}
                className="object-contain h-5 w-5"
              />
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 md:gap-8">
          <p>Code</p>
          <p>Demo</p>
        </div>
      </div>
      <div className="mt-8 space-y-2">
        <h1 className="textgray-950 text-xl md:text-2xl font-bold text-gray-950 dark:text-gray-50">
          {project?.name}
        </h1>
        <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify leading-loose">
          {project?.desc}
        </p>
      </div>
    </MotionDiv>
  );
}
