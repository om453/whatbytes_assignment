"use client";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a3576] text-white mt-8">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col items-center">
        <div className="w-full flex flex-col md:flex-row justify-center items-start md:items-center gap-12 md:gap-32">
          {/* Filters */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="font-semibold mb-2 text-lg">Filters</div>
            <ul className="space-y-1 text-sm">
              <li>All</li>
              <li>Electronics</li>
              <li>Clothing</li>
              <li>Home</li>
            </ul>
          </div>
          {/* About Us */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="font-semibold mb-2 text-lg">About Us</div>
            <ul className="space-y-1 text-sm">
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* Follow Us */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <div className="font-semibold mb-2 text-lg">Follow Us</div>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Facebook" className="bg-blue-600 rounded-full p-3 flex items-center justify-center hover:bg-blue-700 transition"><Facebook className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Twitter" className="bg-blue-600 rounded-full p-3 flex items-center justify-center hover:bg-blue-700 transition"><Twitter className="w-5 h-5 text-white" /></a>
              <a href="#" aria-label="Instagram" className="bg-blue-600 rounded-full p-3 flex items-center justify-center hover:bg-blue-700 transition"><Instagram className="w-5 h-5 text-white" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-xs py-2 border-t border-white/10">© 2024 American</div>
    </footer>
  );
} 