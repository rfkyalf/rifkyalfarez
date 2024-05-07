'use client';

import { useRouter } from 'next/navigation';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

export default function BackButton() {
  const router = useRouter();
  return (
    <>
      <button
        onClick={() => router.back()}
        className="flex gap-2 items-center group"
      >
        <IoArrowBackCircleOutline size={25} />
        <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
          Back
        </p>
      </button>
    </>
  );
}
