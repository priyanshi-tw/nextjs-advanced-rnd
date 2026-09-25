import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

type PageHeaderProps = {
  title: string;
  description?: string;
  backUrl?: string;
};

export default function PageHeader({ title, description, backUrl = '/' }: PageHeaderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Link
          href={backUrl}
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <div>
          <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>

          {description && <p className="mt-1 text-sm text-slate-500">{description}</p>}
        </div>
      </div>
    </div>
  );
}
