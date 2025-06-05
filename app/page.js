"use client";
import { useState } from "react";
import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  const [filters, setFilters] = useState({ category: "All", price: 1000 });
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#f6f9fc]">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        <div className="py-4 lg:py-0">
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1">
          <ProductGrid filters={filters} search={search} />
        </div>
      </div>
    </div>
  );
}
