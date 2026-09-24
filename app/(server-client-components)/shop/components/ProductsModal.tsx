'use client';

import { useState } from 'react';

export default function ProductModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="rounded bg-black px-4 py-2 text-white">
        View Product
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-md rounded-lg bg-white p-6">
            {children}

            <button onClick={() => setIsOpen(false)} className="mt-6 rounded bg-gray-200 px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
