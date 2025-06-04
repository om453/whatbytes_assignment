"use client";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a3576] text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Filters */}
        <div>
          <div className="font-semibold mb-2">Filters</div>
          <ul className="space-y-1 text-sm">
            <li>All</li>
            <li>Electronics</li>
            <li>Clothing</li>
            <li>Home</li>
          </ul>
        </div>
        {/* About Us */}
        <div>
          <div className="font-semibold mb-2">About Us</div>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* Follow Us */}
        <div>
          <div className="font-semibold mb-2">Follow Us</div>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-2 border-t border-white/10">© 2024 American</div>
    </footer>
  );
} 