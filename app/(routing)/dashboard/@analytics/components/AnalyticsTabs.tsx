'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function AnalyticsTabs() {
  const segment = useSelectedLayoutSegment();

  return (
    <div className="mt-4">
      <nav className="flex gap-2">
        <Link
          href="/dashboard/page-views"
          className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            segment === 'page-views'
              ? 'bg-blue-50 text-blue-600'
              : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          Page Views
        </Link>

        <Link
          href="/dashboard/visitors"
          className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
            segment === 'visitors'
              ? 'bg-blue-50 text-blue-600'
              : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          Visitors
        </Link>
      </nav>

      <p className="mt-3 text-sm text-slate-500">Active tab: {segment ?? 'Overview'}</p>
    </div>
  );
}
