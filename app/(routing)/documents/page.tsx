import Link from 'next/link';

export default function Documents() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Documents</h1>

      <Link href="/documents/details" className="mt-4 inline-block text-blue-600 hover:underline">
        View Document Details
      </Link>
    </div>
  );
}
