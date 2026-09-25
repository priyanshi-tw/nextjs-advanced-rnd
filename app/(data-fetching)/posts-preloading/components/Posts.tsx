import { Post } from '@/app/types/data-fetching';

async function getPosts(): Promise<Post[]> {
  const response = await fetch('https://api.vercel.app/blog');

  return response.json();
}

export const preload = () => {
  void getPosts();
};

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm text-slate-500">Posts</p>

      <div className="mt-4 space-y-4">
        {posts.slice(0, 5).map((post) => (
          <div
            key={post.id}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-700"
          >
            <h2 className="text-sm font-medium text-slate-700">{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
