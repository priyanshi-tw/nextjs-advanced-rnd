import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Loading() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Blog</h1>
      </div>

      <div className="mt-7 space-y-4">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="rounded-xl border border-slate-50 bg-slate-50 h-[54px] text-sm font-medium text-slate-700"
          />
        ))}
      </div>
    </div>
  );
}
