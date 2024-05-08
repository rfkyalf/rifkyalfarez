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
        <IoArrowBackCircleOutline size={25} className="w-5 h-5 md:h-6 md:w-6" />
        <p className="transition-transform duration-300 ease-in-out group-hover:translate-x-2">
          Back
        </p>
      </button>
    </>
  );
}
