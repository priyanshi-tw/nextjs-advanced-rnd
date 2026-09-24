import { products } from '@/app/data/next-js-concepts';
import { notFound } from 'next/navigation';

export default async function ProductDetails({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);
  if (!product) {
    notFound();
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-black">{product.name}</h1>

      <p className="mt-2 text-gray-500">{product.category}</p>

      <p className="mt-4 text-xl font-semibold text-black">${product.price}</p>

      <p className="mt-4 max-w-xl text-gray-600">{product.description}</p>
    </div>
  );
}
