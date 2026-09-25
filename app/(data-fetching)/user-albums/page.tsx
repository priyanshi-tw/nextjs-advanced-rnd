import { Suspense } from 'react';
import User from './components/User';
import Albums from './components/Albums';
import { Metadata } from 'next';
import PageHeader from '@/app/components/PageHeader';
export const metadata: Metadata = {
  title: 'Users | Sequential Data Fetching',
  description:
    'A practical example demonstrating sequential data fetching in Next.js using dependent data requests.',
};
export default async function UsersPage() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  const user = await response.json();

  return (
    <div className="space-y-4">
      <PageHeader title="Sequential Data Fetching" />
      <User user={user} />

      <Suspense
        fallback={
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Albums for this user</p>

            <div className="mt-4 h-10 animate-pulse rounded-xl bg-slate-100" />
          </div>
        }
      >
        <Albums userId={user.id} />
      </Suspense>
    </div>
  );
}
