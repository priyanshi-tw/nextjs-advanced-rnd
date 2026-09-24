'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-[20px] font-semibold">Something went wrong!</h2>

          <button onClick={() => retry()} className="mt-4 rounded bg-black px-4 py-2 text-white">
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
