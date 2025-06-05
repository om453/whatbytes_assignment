"use client";
import { useState } from "react";

export default function Sidebar({ filters, setFilters }) {
  const [selectedCategory, setSelectedCategory] = useState(filters.category || "All");
  const [selectedPrice, setSelectedPrice] = useState(filters.price || 1000);

  const handleSelect = () => {
    setFilters({ category: selectedCategory, price: selectedPrice });
  };

  return (
    <aside className="w-full max-w-[260px] flex flex-col gap-6">
      {/* Filters Card */}
      <div className="bg-[#1651a6] text-white rounded-2xl p-7 shadow-lg flex flex-col gap-6">
        <div className="font-bold text-xl mb-2">Filters</div>
        <div className="mb-2">
          <div className="font-bold text-base mb-2">Category</div>
          <div className="flex flex-col gap-3 pl-1">
            {['All', 'Electronics', 'Clothing', 'Home'].map((cat) => (
              <label key={cat} className="flex items-center gap-3 text-base font-normal">
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat}
                  onChange={() => setSelectedCategory(cat)}
                  className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all"
                />
                {cat}
              </label>
            ))}
          </div>
        </div>
        <div className="mb-1">
          <div className="font-bold text-base mb-2">Price</div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">0</span>
            <input
              type="range"
              min="0"
              max="1000"
              value={selectedPrice}
              onChange={e => setSelectedPrice(Number(e.target.value))}
              className="w-full accent-blue-500 h-2 rounded-lg appearance-none bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md focus:outline-none"
            />
            <span className="text-xs font-semibold">{selectedPrice}</span>
          </div>
        </div>
        <button onClick={handleSelect} className="mt-4 bg-white text-[#1651a6] font-bold rounded-lg py-2 px-4 hover:bg-blue-100 transition hover:cursor-pointer ">Select</button>
      </div>
    </aside>
  );
} 