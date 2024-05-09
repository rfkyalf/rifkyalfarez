export default function SectionHeader({
  name,
  desc,
  Icon,
}: {
  name: string;
  desc: string;
  Icon: React.ElementType;
}) {
  return (
    <div className="pt-8">
      <div className="flex items-center gap-3">
        <Icon
          size={20}
          className="text-gray-950 dark:text-gray-50 h-4 w-4 md:h-5 md:w-5"
        />
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-950 dark:text-gray-50">
          {name}
        </h1>
      </div>
      <p className="text-sm md:text-base text-gray-800 dark:text-gray-300">
        {desc}
      </p>
    </div>
  );
}
