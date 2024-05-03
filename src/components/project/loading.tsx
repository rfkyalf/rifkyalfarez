export default function LoadingCardProject() {
  return (
    <div className="grid grid-cols-2 gap-8 animate-pulse">
      <div className="flex flex-col shadow-md rounded-xl overflow-hidden">
        <div className="bg-gray-300 h-[200px]" />
        <div className="px-6 py-4 space-y-2">
          <div className="h-5 w-48 bg-gray-300 rounded-md" />
          <div className="h-10 w-full bg-gray-300 rounded-md" />
          <div className="h-5 w-20 bg-gray-300 rounded-md" />
        </div>
      </div>
      <div className="flex flex-col shadow-md rounded-xl overflow-hidden">
        <div className="bg-gray-300 h-[200px]" />
        <div className="px-6 py-4 space-y-2">
          <div className="h-5 w-48 bg-gray-300 rounded-md" />
          <div className="h-10 w-full bg-gray-300 rounded-md" />
          <div className="h-5 w-20 bg-gray-300 rounded-md" />
        </div>
      </div>
    </div>
  );
}
