import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Streaming',
  description: 'A practical example demonstrating streaming of blog content in Next.js.',
};
export default async function BlogPage() {
  const response = await fetch('https://api.vercel.app/blog');

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts = await response.json();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-8">
      <div className="flex items-center gap-3">
        <Link
          href="/"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900">Blog</h1>
      </div>

      <ul className="mt-7 space-y-4">
        {posts.map((post: { id: string; title: string }) => (
          <li
            key={post.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
          >
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
