import Posts, { preload } from './components/Posts';

async function checkAvailability() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return true;
}

export default async function PostsPreloadingPage() {
  preload();

  const isAvailable = await checkAvailability();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Posts Preloading</h1>

      <p className="mt-2 text-gray-600">
        Posts start loading while the availability check is running.
      </p>

      {isAvailable && <Posts />}
    </div>
  );
}
