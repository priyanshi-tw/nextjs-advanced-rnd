import { Metadata } from 'next';
import Albums from './components/Albums';
import User from './components/User';
import PageHeader from '@/app/components/PageHeader';
export const metadata: Metadata = {
  title: 'Users | Parallel Data Fetching',
  description:
    'A practical example demonstrating sequential data fetching in Next.js using dependent data requests.',
};
async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  return response.json();
}

async function getAlbums() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1/albums');

  return response.json();
}

export default async function ParallelPage() {
  const [userResult, albumsResult] = await Promise.allSettled([getUser(), getAlbums()]);

  const user = userResult.status === 'fulfilled' ? userResult.value : null;

  const albums = albumsResult.status === 'fulfilled' ? albumsResult.value : [];
  return (
    <div>
      <PageHeader
        title="Parallel Data Fetching"
        description="User and albums are fetched at the same time."
      />

      <div className="mt-6 space-y-6">
        <User user={user} />
        <Albums albums={albums} />
      </div>
    </div>
  );
}
