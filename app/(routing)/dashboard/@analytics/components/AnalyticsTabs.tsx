'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function AnalyticsTabs() {
  const segment = useSelectedLayoutSegment();

  return (
    <div>
      <nav className="my-4 flex gap-4">
        <Link href="/dashboard/page-views" className="hover:underline hover:text-[#0DA2FF]">
          Page Views
        </Link>

        <Link href="/dashboard/visitors" className="hover:underline hover:text-[#0DA2FF]">
          Visitors
        </Link>
      </nav>

      <p className="text-sm text-gray-500">Active tab: {segment ?? 'Overview'}</p>
    </div>
  );
}
