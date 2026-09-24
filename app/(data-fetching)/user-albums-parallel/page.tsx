import Albums from './components/Albums';
import User from './components/User';

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
    <div className="max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Parallel Data Fetching</h1>

      <p className="mt-2 text-gray-600">User and albums are fetched at the same time.</p>

      <div className="mt-6 space-y-6">
        <User user={user} />
        <Albums albums={albums} />
      </div>
    </div>
  );
}
