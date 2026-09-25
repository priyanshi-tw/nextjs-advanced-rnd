import { Metadata } from 'next';
import ErrorTrigger from './components/ErrorTrigger';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Error Boundary',
};
export default function ErrorBoundaryPage() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">Error Boundary</h1>

          <p className="mt-1 text-sm text-slate-500">
            This example demonstrates how Next.js handles unexpected errors using error.tsx.
          </p>
        </div>
      </div>

      <ErrorTrigger />
    </div>
  );
}
