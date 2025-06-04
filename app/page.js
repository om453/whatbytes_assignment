import Image from "next/image";
import Sidebar from "./components/Sidebar";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f9fc]">
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto">
        <div className="py-4 lg:py-0">
          <Sidebar />
        </div>
        <div className="flex-1">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}
