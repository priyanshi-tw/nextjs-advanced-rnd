import { Metadata } from 'next';
import Posts, { preload } from './components/Posts';
import PageHeader from '@/app/components/PageHeader';

export const metadata: Metadata = {
  title: 'Posts | Preloading',
  description:
    'A practical example demonstrating data preloading in Next.js to start fetching data before it is needed.',
};
async function checkAvailability() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return true;
}

export default async function PostsPreloadingPage() {
  preload();

  const isAvailable = await checkAvailability();

  return (
    <div className="space-y-4">
      <PageHeader
        title="Posts Preloading"
        description="Posts start loading while the availability check is running."
      />

      {isAvailable && <Posts />}
    </div>
  );
}
