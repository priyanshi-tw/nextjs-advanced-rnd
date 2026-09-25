import { Metadata } from 'next';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductsList';
import PageHeader from '@/app/components/PageHeader';

export const metadata: Metadata = {
  title: 'Product | Data Mutating and Revalidating',
};
export default function ProductsMutationPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Product Mutation"
        description="Add a product using a Next.js Server Action."
      />

      <AddProductForm />
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <ProductList />
      </div>
    </div>
  );
}
