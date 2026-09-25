import { addProduct } from '../actions/products';

export default function AddProductForm() {
  return (
    <form
      action={addProduct}
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Product name"
          className=" rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          className=" rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <input
          name="category"
          placeholder="Category"
          className=" rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <textarea
          name="description"
          placeholder="Description"
          className=" rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
        />

        <button
          type="submit"
          className="w-[120px] rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>
    </form>
  );
}
