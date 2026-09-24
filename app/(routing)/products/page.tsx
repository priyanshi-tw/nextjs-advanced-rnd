import { products } from '@/app/data/next-js-concepts';
import Link from 'next/link';

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-black">Products</h1>

      <p className="mt-1 text-gray-500">Explore our products.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold text-black">{product.name}</h2>

            <p className="mt-1 text-sm text-gray-500">{product.category}</p>

            <p className="mt-3 text-lg font-semibold text-black">${product.price}</p>

            <Link
              href={`/products/${product.id}`}
              className="mt-4 inline-block text-blue-600 hover:underline"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
