export default function LoadingCard() {
  return (
    <div className="flex gap-4 animate-pulse">
      <div className="w-[268px] h-[110px] shadow-md px-8 py-4 rounded-xl flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded-md" />
          <div className="h-4 w-[90%] bg-gray-300 rounded-md" />
        </div>
        <div className="h-4 w-full bg-gray-300 rounded-md" />
      </div>
      <div className="w-[268px] h-[110px] shadow-md px-8 py-4 rounded-xl flex flex-col justify-between">
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-300 rounded-md" />
          <div className="h-4 w-[90%] bg-gray-300 rounded-md" />
        </div>
        <div className="h-4 w-full bg-gray-300 rounded-md" />
      </div>
    </div>
  );
}
