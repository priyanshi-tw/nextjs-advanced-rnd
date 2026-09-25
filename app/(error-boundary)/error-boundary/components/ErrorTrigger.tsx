'use client';

export default function ErrorTrigger() {
  const handleError = () => {
    throw new Error('Something went wrong!');
  };

  return (
    <button
      type="button"
      onClick={handleError}
      className="mt-7 ml-10 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
    >
      Trigger Error
    </button>
  );
}
