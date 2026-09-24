import { Suspense } from 'react';
import User from './components/User';
import Albums from './components/Albums';

export default async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  const user = await response.json();

  return (
    <div className="max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Sequential Data Fetching</h1>

      <User user={user} />

      <Suspense
        fallback={
          <div className="mt-6 rounded-lg border p-4">
            <p className="animate-pulse text-gray-500">Loading albums...</p>
          </div>
        }
      >
        <Albums userId={user.id} />
      </Suspense>
    </div>
  );
}
