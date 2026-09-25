import { Post } from '@/app/types/caching';
import { cacheLife, cacheTag } from 'next/cache';

export default async function BlogPosts() {
  'use cache';

  cacheLife('hours');
  cacheTag('posts');

  const response = await fetch('https://api.vercel.app/blog');
  const posts: Post[] = await response.json();

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Latest Posts</h2>

        <p className="mt-1 text-sm text-slate-500">Cached blog content refreshed periodically.</p>
      </div>

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition "
          >
            <h3 className="font-semibold text-slate-900">{post.title}</h3>

            <p className="mt-2 text-sm text-slate-500">
              By {post.author} · {post.date}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}
