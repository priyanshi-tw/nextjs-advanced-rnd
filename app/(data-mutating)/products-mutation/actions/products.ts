'use server';

import { products } from '@/app/data/next-js-concepts';
import { Product } from '@/app/types/data-mutating';
import { revalidatePath } from 'next/cache';

export async function addProduct(formData: FormData) {
  const product: Product = {
    id: String(products.length + 1),
    name: String(formData.get('name')),
    price: Number(formData.get('price')),
    category: String(formData.get('category')),
    description: String(formData.get('description')),
  };

  products.push(product);

  revalidatePath('/products-mutation');
}
