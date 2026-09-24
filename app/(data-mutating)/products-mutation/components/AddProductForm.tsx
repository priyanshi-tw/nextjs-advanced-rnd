import { addProduct } from '../actions/products';

export default function AddProductForm() {
  return (
    <form action={addProduct} className="space-y-4">
      <input name="name" placeholder="Product name" className="w-full rounded border p-2" />

      <input name="price" type="number" placeholder="Price" className="w-full rounded border p-2" />

      <input name="category" placeholder="Category" className="w-full rounded border p-2" />

      <textarea
        name="description"
        placeholder="Description"
        className="w-full rounded border p-2"
      />

      <button type="submit" className="rounded bg-black px-4 py-2 text-white">
        Add Product
      </button>
    </form>
  );
}
