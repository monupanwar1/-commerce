'use client';

import useCartStore from '@/Store/CartStore';
import { Product } from '@/Types/index';

export function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        width={400}
        height={400}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {product.title}
        </h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full px-4 py-2 rounde-md bg-blue-500"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
