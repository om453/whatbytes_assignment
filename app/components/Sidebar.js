"use client";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-[260px] flex flex-col gap-6">
      {/* Filters Card */}
      <div className="bg-[#0a3576] text-white rounded-xl p-6 shadow-md">
        <div className="font-bold text-lg mb-4">Filters</div>
        <div className="mb-4">
          <div className="font-semibold text-sm mb-2">Category</div>
          <div className="flex flex-col gap-2 pl-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="category" defaultChecked className="accent-blue-500" /> All
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="category" className="accent-blue-500" /> Electronics
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="category" className="accent-blue-500" /> Clothing
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="category" className="accent-blue-500" /> Home
            </label>
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm mb-2">Price</div>
          <input type="range" min="0" max="1000" className="w-full accent-blue-500" />
        </div>
      </div>
      {/* Brand Card */}
      <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
        <div className="font-bold text-lg mb-4 text-[#0a3576]">Categories</div>
        <div className="mb-4">
          <div className="flex flex-col gap-2 pl-2">
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="brand" defaultChecked className="accent-blue-500" /> All
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="brand" className="accent-blue-500" /> Electronics
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="brand" className="accent-blue-500" /> Clothing
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input type="radio" name="brand" className="accent-blue-500" /> Home
            </label>
          </div>
        </div>
        <div>
          <div className="font-semibold text-sm mb-2">Price</div>
          <input type="number" min="0" max="5000" defaultValue="5000" className="w-full rounded-md px-2 py-1 border border-gray-200 text-black" />
        </div>
      </div>
    </aside>
  );
} 