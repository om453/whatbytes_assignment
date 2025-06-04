"use client";
import { ShoppingCart, User } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#0a3576] text-white w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="font-bold text-2xl">Logo</div>
        {/* Search Bar */}
        <div className="flex-1 flex justify-center px-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 rounded-md"
          />
        </div>
        {/* Cart and Avatar */}
        <div className="flex items-center gap-4">
          <button className="relative">
            <ShoppingCart className="w-6 h-6" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1.5">0</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User className="w-5 h-5 text-[#0a3576]" />
          </div>
        </div>
      </div>
    </header>
  );
} 