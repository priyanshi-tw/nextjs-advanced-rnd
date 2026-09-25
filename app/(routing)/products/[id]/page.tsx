import { products } from '@/app/data/next-js-concepts';
import { ProductDetailsProps } from '@/app/types/routing';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: ProductDetailsProps): Promise<Metadata> {
  const { id } = await params;

  const product = products.find((product) => product.id === id);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: product.name,
    description: product.description,
  };
}
export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = await params;

  const product = products.find((product) => product.id === id);
  if (!product) {
    notFound();
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <Link
          href="/products"
          className="group inline-flex rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
          aria-label="Back"
        >
          <ArrowLeft size={20} className="transition-transform" />
        </Link>

        <h1 className="text-2xl font-semibold text-slate-900">{product.name}</h1>
      </div>

      <p className="mt-4 text-sm text-slate-500">{product.category}</p>

      <p className="mt-4 text-xl font-semibold text-slate-900">${product.price}</p>

      <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">{product.description}</p>
    </div>
  );
}
