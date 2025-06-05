"use client";
import { useParams } from "next/navigation";
import { products, StarRating } from "../../components/ProductGrid";
import { useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-bold text-[#0a3576] mb-4">Product Not Found</h2>
        <p className="text-gray-600">Sorry, the product you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-10 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto mt-8">
      {/* Image Section */}
      <div className="flex-1 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="object-contain w-80 h-80 rounded-xl bg-gray-100" />
      </div>
      {/* Details Section */}
      <div className="flex-1 flex flex-col justify-center items-start gap-4">
        <div className="font-bold text-3xl text-[#0a3576]">{product.title}</div>
        <div className="text-2xl font-bold mb-2">${product.price}</div>
        <StarRating rating={product.rating} />
        <div className="text-gray-700 mb-2 text-lg">{product.description}</div>
        <div className="mb-2">
          <span className="font-semibold">Category: </span>
          <span className="text-gray-700">{product.category}</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="font-semibold">Qty:</span>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(Math.max(1, Number(e.target.value)))}
            className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-[#1762c4] text-white rounded-md px-6 py-3 font-bold text-lg hover:bg-blue-800 transition hover:cursor-pointer">Add to Cart</button>
      </div>
    </div>
  );
} 