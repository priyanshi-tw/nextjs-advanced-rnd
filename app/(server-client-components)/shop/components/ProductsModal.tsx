'use client';

import { X } from 'lucide-react';
import { useState } from 'react';

export default function ProductModal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
      >
        View Product
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>{children}</div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-2 text-slate-500 transition-colors hover:bg-blue-50 hover:text-blue-600"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
