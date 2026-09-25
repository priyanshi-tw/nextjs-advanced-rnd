import { Metadata } from 'next';
import LikeButton from './components/Likebutton';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Post Details | Client Component inside Server Component',
};

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = {
    id,
    title: 'Understanding Server and Client Components',
    description: 'Learn how Server and Client Components work together in Next.js.',
    likes: 24,
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform " />
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900">{post.title}</h1>
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">{post.description}</p>

      <div className="mt-7">
        <LikeButton likes={post.likes} />
      </div>
    </div>
  );
}
