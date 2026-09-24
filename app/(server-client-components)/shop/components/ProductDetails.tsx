export default function ProductDetails() {
  const product = {
    name: 'Wireless Headphones',
    description: 'Premium wireless headphones with noise cancellation and long battery life.',
    price: '$129',
  };

  return (
    <div>
      <h2 className="text-xl font-bold">{product.name}</h2>

      <p className="mt-2 text-gray-600">{product.description}</p>

      <p className="mt-4 font-semibold">{product.price}</p>
    </div>
  );
}
