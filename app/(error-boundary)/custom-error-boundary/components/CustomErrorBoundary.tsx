'use client';

import { catchError, type ErrorInfo } from 'next/error';

function ErrorFallback(props: { title: string }, { error, retry }: ErrorInfo) {
  const errorMessage = error instanceof Error ? error.message : 'An unexpected error occurred.';
  return (
    <div className="rounded-lg border border-red-300 bg-red-50 p-6">
      <h2 className="text-xl font-semibold text-red-700">{props.title}</h2>

      <p className="mt-2 text-sm text-red-600">{errorMessage}</p>

      <button
        type="button"
        onClick={() => retry()}
        className="mt-7 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
      >
        Try Again
      </button>
    </div>
  );
}

export default catchError(ErrorFallback);
