import ProductDetails from './components/ProductDetails';
import ProductModal from './components/ProductsModal';

export default function ProductsPage() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Products</h1>

      <ProductModal>
        <ProductDetails />
      </ProductModal>
    </div>
  );
}
