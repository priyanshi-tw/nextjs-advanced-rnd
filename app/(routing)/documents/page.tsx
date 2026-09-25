import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documents | Nested Routing',
  description: 'Explore nested routing in Next.js using the Documents example.',
};

export default function Documents() {
  return (
    <>
      <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            aria-label="Back"
          >
            <ArrowLeft size={20} className="transition-transform " />
          </Link>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Documents</h1>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
          Explore nested routes using the Documents example.
        </p>

        <div className="mt-7">
          <Link
            href="/documents/details"
            className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            View Document Details
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
