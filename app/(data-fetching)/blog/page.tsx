export default async function BlogPage() {
  const response = await fetch('https://api.vercel.app/blog');

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }

  const posts = await response.json();

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Blog</h1>

      <ul className="space-y-4">
        {posts.map((post: { id: string; title: string }) => (
          <li key={post.id} className="rounded border p-4">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
