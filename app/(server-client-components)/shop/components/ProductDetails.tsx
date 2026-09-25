export default function ProductDetails() {
  const product = {
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation and long battery life.',
    price: '$129',
  };

  return (
    <div>
      <h2 className="text-xl font-semibold text-slate-900">{product.name}</h2>

      <p className="mt-3 text-sm leading-6 text-slate-600">{product.description}</p>

      <p className="mt-4 text-lg font-semibold text-slate-900">{product.price}</p>
    </div>
  );
}
