"use client";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex items-center justify-around p-1 text-sm w-20 shadow-md cursor-pointer bg-secondary md:w-24 md:p-2 hover:shadow-xl"
      onClick={() => router.back()}
    >
      <FaArrowLeft className="md:text-xl" />
      <span className="flex items-center justify-center md:text-lg">Back</span>
    </button>
  );
}

export default BackButton;
