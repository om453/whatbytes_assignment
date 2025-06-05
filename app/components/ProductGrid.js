"use client";
import { useState } from "react";
import Link from "next/link";

export const products = [
  { id: 1, title: "Running Shoes", price: 99, image: "/images/runningshoes.png", category: "Clothing", description: "Comfortable running shoes for daily use.", rating: 4.5 },
  { id: 2, title: "Normal Shoes", price: 199, image: "/images/normalshoes.png", category: "Clothing", description: "Noraml shoes for every day life.", rating: 4 },
  { id: 3, title: "Backpack", price: 129, image: "/images/backpack.png", category: "Clothing", description: "Spacious and durable backpack.", rating: 4 },
  { id: 4, title: "Smartwatch", price: 249, image: "/images/watch.png", category: "Electronics", description: "Feature-rich smartwatch.", rating: 4.5 },
  { id: 5, title: "Sunglasses", price: 149, image: "/images/sunglasses.png", category: "Clothing", description: "Stylish sunglasses for all seasons.", rating: 4.5 },
  { id: 6, title: "Digital Camera", price: 499, image: "/images/camera.png", category: "Electronics", description: "Capture moments in high definition.", rating: 4.5 },
  { id: 7, title: "T-shirt", price: 29, image: "/images/tshirt.png", category: "Clothing", description: "Soft and comfortable t-shirt.", rating: 4 },
  { id: 8, title: "Smartphone", price: 699, image: "/images/phone.png", category: "Electronics", description: "Lorem ipsum dolor amet, consectetur eiusagend.", rating: 4.5 },
];

export function StarRating({ rating }) {
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

export default function ProductGrid({ filters = { category: "All", price: 1000 }, search = "" }) {
  const [quantities, setQuantities] = useState(products.map(() => 1));

  const handleQuantityChange = (idx, value) => {
    const newQuantities = [...quantities];
    newQuantities[idx] = Math.max(1, value);
    setQuantities(newQuantities);
  };

  // Filtering logic
  const filteredProducts = products.filter(product => {
    const matchesCategory = filters.category === "All" || product.category.toLowerCase() === filters.category.toLowerCase();
    const matchesPrice = product.price <= filters.price;
    const matchesSearch = search === "" || product.title.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-[#0a3576] mb-6 text-center md:text-left">Product Listing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 text-xl py-12">No products found.</div>
        ) : (
          filteredProducts.map((product, idx) => (
            <Link href={`/product/${product.id}`} key={product.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-6 hover:shadow-lg transition cursor-pointer">
              {/* Image Section */}
              <div className="w-40 h-40 flex-shrink-0 flex items-center justify-center mb-4">
                <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
              </div>
              {/* Details Section */}
              <div className="flex-1 flex flex-col items-center">
                <div className="font-bold text-2xl mb-1 text-[#0a3576] text-center">{product.title}</div>
                <div className="text-2xl font-bold mb-2">${product.price}</div>
                <StarRating rating={product.rating} />
               
                <button className=" bg-[#1762c4] text-white rounded-md px-4 py-3 font-bold text-lg hover:bg-blue-800 transition hover:cursor-pointer">Add to Cart</button>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
} 