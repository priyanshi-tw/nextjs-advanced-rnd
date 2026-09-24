export default function Loading() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Blog</h1>

      <div className="space-y-4">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="h-16 animate-pulse rounded border border-gray-50 bg-gray-100 p-4"
          />
        ))}
      </div>
    </div>
  );
}
