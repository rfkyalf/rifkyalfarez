import Image from 'next/image';

export default async function TechCard() {
  const res = await fetch(`${process.env.API_URL}api/stacks`, {
    cache: 'force-cache',
  });

  const stack = await res.json();

  if (stack.length === 0) {
    return <p>Stack data not found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {stack.map((item: any) => (
          <div
            key={item._id}
            className="shadow-md dark:shadow-gray-500 md:h-56 p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={item.bg_image}
              alt={item.name}
              width={1000}
              height={1000}
              className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
            />
            <h1 className="mb-4 text-base font-semibold text-gray-950 dark:text-gray-50">
              {item.name}
            </h1>
            <div className="grid grid-cols-2 justify-items-center content-center gap-8">
              {item.tech.map((item: any) => (
                <div key={item._id}>
                  <Image
                    src={item.tech_image}
                    alt={item.tech_name}
                    title={item.tech_name}
                    width={1000}
                    height={1000}
                    className="w-10 h-10 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
