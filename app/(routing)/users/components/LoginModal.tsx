'use client';

import { useRouter } from 'next/navigation';

export function LoginModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Login</h2>

          <button
            onClick={() => router.back()}
            className="rounded-lg px-3 py-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
            aria-label="Close"
          >
            ✕
          </button>
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
    </div>
  );
}
