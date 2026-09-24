import LikeButton from './components/Likebutton';

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = {
    id,
    title: 'Understanding Server and Client Components',
    description: 'Learn how Server and Client Components work together in Next.js.',
    likes: 24,
  };

  return (
    <div className="max-w-2xl p-6">
      <h1 className="mb-3 text-2xl font-bold">{post.title}</h1>

      <p className="mb-6 text-gray-600">{post.description}</p>

      <LikeButton likes={post.likes} />
    </div>
  );
}
