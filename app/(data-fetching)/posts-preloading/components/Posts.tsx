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
    <div className="mt-6 space-y-3">
      {posts.slice(0, 5).map((post) => (
        <div key={post.id} className="rounded-lg border p-4">
          <h2 className="font-semibold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
}
