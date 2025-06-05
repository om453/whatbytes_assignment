"use client";
import { useState } from "react";

const products = [
  { id: 1, title: "Running Shoes", price: 99, image: "/shoes.png", category: "Clothing", description: "Comfortable running shoes for daily use.", rating: 4.5 },
  { id: 2, title: "Wireless Headphones", price: 199, image: "/headphones.png", category: "Electronics", description: "High-quality wireless headphones.", rating: 4 },
  { id: 3, title: "Backpack", price: 129, image: "/backpack.png", category: "Clothing", description: "Spacious and durable backpack.", rating: 4 },
  { id: 4, title: "Smartwatch", price: 249, image: "/watch.png", category: "Electronics", description: "Feature-rich smartwatch.", rating: 4.5 },
  { id: 5, title: "Sunglasses", price: 149, image: "/sunglasses.png", category: "Clothing", description: "Stylish sunglasses for all seasons.", rating: 4 },
  { id: 6, title: "Digital Camera", price: 499, image: "/camera.png", category: "Electronics", description: "Capture moments in high definition.", rating: 4.5 },
  { id: 7, title: "T-shirt", price: 29, image: "/tshirt.png", category: "Clothing", description: "Soft and comfortable t-shirt.", rating: 4 },
  { id: 8, title: "Smartphone", price: 699, image: "/phone.png", category: "Electronics", description: "Lorem ipsum dolor amet, consectetur eiusagend.", rating: 4.5 },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="flex items-center mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <span key={i} className="text-blue-600 text-xl">★</span>
      ))}
      {halfStar && <span className="text-blue-600 text-xl">☆</span>}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <span key={i} className="text-gray-300 text-xl">★</span>
      ))}
    </div>
  );
}

export default function ProductGrid() {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQuantityChange = (idx, value) => {
    const newQuantities = [...quantities];
    newQuantities[idx] = Math.max(1, value);
    setQuantities(newQuantities);
  };

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-[#0a3576] mb-6 text-center md:text-left">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-6"
          >
            {/* Image Section */}
            <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center mb-4">
              <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
            </div>
            {/* Details Section */}
            <div className="flex-1 flex flex-col items-center">
              <div className="font-bold text-2xl mb-1 text-[#0a3576] text-center">{product.title}</div>
              <div className="text-2xl font-bold mb-2">${product.price}</div>
              <StarRating rating={product.rating} />
              <div className="text-gray-700 mb-2 text-center">{product.description}</div>
              <div className="mb-2 text-center">
                <span className="font-semibold">Category</span>
                <div className="text-gray-700">{product.category}</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">Qty:</span>
                <input
                  type="number"
                  min="1"
                  value={quantities[idx]}
                  onChange={e => handleQuantityChange(idx, parseInt(e.target.value) || 1)}
                  className="w-16 rounded-md border border-gray-300 px-2 py-1 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className=" bg-[#1762c4] text-white rounded-md px-4 py-3 font-bold text-lg hover:bg-blue-800 transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 