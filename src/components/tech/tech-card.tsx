import Image from 'next/image';

export default async function TechCard() {
  const res = await fetch('http://localhost:3000/api/tech', {
    cache: 'force-cache',
    // next: {
    //   revalidate: 10,
    // },
  });
  const data = await res.json();
  const tech = data.data;

  if (tech.lenght === 0) {
    return <p>Tech data not found</p>;
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {tech.map((item: any) => (
          <div
            key={item.id}
            className="shadow-md h-56 p-4 rounded-xl relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={item.bg_image}
              alt={item.name}
              width={1000}
              height={1000}
              className="h-40 w-40 absolute -top-5 -left-5 -z-10 opacity-5"
            />
            <h1 className="mb-4 text-base font-semibold text-gray-950">
              {item.name}
            </h1>
            <div className="grid grid-cols-2 justify-items-center content-center gap-8">
              {item.tech.map((item: any) => (
                <div key={item.tech_id}>
                  <Image
                    src={item.tech_image}
                    alt={item.tech_name}
                    title={item.tech_name}
                    width={1000}
                    height={1000}
                    className="h-14 w-14 object-contain"
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
