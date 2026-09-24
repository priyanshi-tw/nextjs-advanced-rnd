'use client';

import { useRouter } from 'next/navigation';

export function LoginModal() {
  const router = useRouter();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Login</h2>

          <button onClick={() => router.back()} className="text-gray-500">
            ✕
          </button>
        </div>

        <input type="email" placeholder="Email" className="mb-3 w-full rounded border p-2" />

        <input type="password" placeholder="Password" className="mb-4 w-full rounded border p-2" />

        <button className="w-full rounded bg-black px-4 py-2 text-white">Login</button>
      </div>
    </div>
  );
}
