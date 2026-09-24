import { products } from '@/app/data/next-js-concepts';

export default function ProductList() {
  return (
    <div className="mt-8 space-y-4">
      {products.map((product) => (
        <div key={product.id} className="rounded border p-4">
          <h2 className="font-semibold">{product.name}</h2>

          <p className="text-sm text-gray-500">
            {product.category} · ${product.price}
          </p>

          <p className="mt-2 text-sm">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
