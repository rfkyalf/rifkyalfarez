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
        <Icon size={20} className="text-gray-950" />
        <h1 className="text-2xl font-bold text-gray-950">{name}</h1>
      </div>
      <p className="text-base text-gray-800">{desc}</p>
    </div>
  );
}
