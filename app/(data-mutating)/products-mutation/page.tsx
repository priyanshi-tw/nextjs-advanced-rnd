import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductsList';

export default function ProductsMutationPage() {
  return (
    <main className="max-w-2xl p-6">
      <h1 className="text-2xl font-bold">Product Mutation</h1>

      <p className="mt-2 text-gray-600">Add a product using a Next.js Server Action.</p>

      <div className="mt-6">
        <AddProductForm />
      </div>

      <ProductList />
    </main>
  );
}
