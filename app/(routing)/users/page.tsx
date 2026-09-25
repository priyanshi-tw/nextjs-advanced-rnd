import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Users | Intercepting Routing',
};
export default function UsersPage() {
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
          <h1 className="text-2xl font-semibold text-slate-900">Users</h1>

          <p className="mt-1 text-sm text-slate-500">Welcome to the users page.</p>
        </div>
      </div>

      <div className="mt-7">
        <Link
          href="/users/login"
          className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          Login
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}
