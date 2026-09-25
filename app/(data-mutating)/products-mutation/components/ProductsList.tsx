import { products } from '@/app/data/next-js-concepts';

export default function ProductList() {
  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <h2 className="text-sm font-medium text-slate-700">{product.name}</h2>

          <p className="mt-1 text-sm text-slate-500">
            {product.category} · ${product.price}
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
}
