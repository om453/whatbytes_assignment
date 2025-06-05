"use client";
import { ShoppingCart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#1762c4] text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-8">
        {/* Logo */}
        <div className="font-bold text-4xl tracking-tight flex items-center">Logo</div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center">
          <div className="flex items-center w-full max-w-xl h-14 bg-transparent border border-white rounded-xl px-6">
            <Search className="w-6 h-6 text-[#b3c6e0] mr-3" />
            <input
              type="text"
              placeholder="Search for products..."
              className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-[#b3c6e0]"
            />
          </div>
        </div>
        {/* Cart Button */}
        <div className="flex items-center ml-8">
          <button className="flex items-center gap-3 bg-gradient-to-b from-[#0a3576] to-[#143e7c] rounded-xl px-7 py-3 font-semibold text-lg shadow-md relative  hover:bg-blue-800 transition hover:cursor-pointer">
            <ShoppingCart className="w-6 h-6 text-white" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
} 