'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/users"
            className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            aria-label="Back"
          >
            <ArrowLeft size={20} className="transition-transform" />
          </Link>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">Login</h2>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <button className="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700">
          Login
        </button>
      </div>
    </div>
  );
}
