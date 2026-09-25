import PageHeader from '@/app/components/PageHeader';
import { products } from '@/app/data/next-js-concepts';
import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Products | Dynamic Routing',
};
export default function Products() {
  return (
    <div>
      <PageHeader title="Products" description="Explore our products." />
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>

            <p className="mt-1 text-sm text-slate-500">{product.category}</p>

            <p className="mt-4 text-lg font-semibold text-slate-900">${product.price}</p>

            <Link
              href={`/products/${product.id}`}
              className="group mt-7 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-medium text-slate-700 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              View Details
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
