"use client";


import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

function Agreements() {
  const router = useRouter();
  return (
        <div className="flex flex-col min-h-screen items-center justify-center bg-white px-6 py-10 rounded-3xl">
      {/* Logo + Title */}
      <div className="flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-black">
            <PencilSquareIcon className="w-6 h-6 text-black" />
          </div>
          <h1 className="text-3xl font-bold text-black">Jotter</h1>
        </div>

        {/* Subtitle */}
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold text-black">
            Your Notes, Organized. <br /> Automatically
          </h2>
          <p className="text-sm text-gray-500 max-w-xs">
            Save your screenshots, PDFs, and notes in one place. Search effortlessly and find what you need in seconds.
          </p>
        </div>

        {/* Get Started Button */}
        <button onClick={()=> router.push('/signup')} className="bg-black cursor-pointer text-white px-6 py-3 rounded-full text-sm font-medium">
          Get Started for free
        </button>

        {/* Watch How It Works */}
        <button className="underline cursor-pointer text-sm font-medium text-black">
          Watch How It Works
        </button>
      </div>
    </div>
  )
}

export default Agreements