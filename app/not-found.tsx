import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-[24px] text-black font-bold">Not Found</h2>
      <p className="text-[14px] text-gray-600">Could not find requested resource</p>
      <Link href="/" className="text-[14px] text-gray-600 hover:text-[#0DA2FF] hover:underline">
        Return Home
      </Link>
    </div>
  );
}
