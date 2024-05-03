export default function Alert({
  onClick,
  status,
  message,
  bg,
}: {
  onClick: () => void;
  status: string;
  message: string;
  bg: string;
}) {
  return (
    <div
      className={`fixed bottom-2 left-2 bg-white ${bg} text-gray-950 rounded-xl px-4 py-2 shadow`}
    >
      <div className="flex justify-between items-center gap-10">
        <div className="flex gap-2 text-sm font-semibold">
          <span>{status}</span>
          <p>{message}</p>
        </div>
        <button onClick={onClick}>✖</button>
      </div>
    </div>
  );
}
