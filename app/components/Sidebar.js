"use client";

export default function Sidebar() {
  return (
    <aside className="w-full max-w-[260px] flex flex-col gap-6">
      {/* Filters Card */}
      <div className="bg-[#1651a6] text-white rounded-2xl p-7 shadow-lg flex flex-col gap-6">
        <div className="font-bold text-xl mb-2">Filters</div>
        <div className="mb-2">
          <div className="font-bold text-base mb-2">Category</div>
          <div className="flex flex-col gap-3 pl-1">
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="category" defaultChecked className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              All
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="category" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Electronics
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="category" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Clothing
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="category" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Home
            </label>
          </div>
        </div>
        <div className="mb-1">
          <div className="font-bold text-base mb-2">Price</div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold">0</span>
            <input type="range" min="0" max="1000" defaultValue="1000" className="w-full accent-blue-500 h-2 rounded-lg appearance-none bg-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md focus:outline-none" />
            <span className="text-xs font-semibold">1000</span>
          </div>
        </div>
      </div>
      {/* Brand Card */}
      <div className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 flex flex-col gap-6">
        <div className="mb-2">
          <div className="font-bold text-xl mb-2">Category</div>
          <div className="flex flex-col gap-3 pl-1">
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="brand" defaultChecked className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              All
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="brand" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Electronics
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="brand" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Clothing
            </label>
            <label className="flex items-center gap-3 text-base font-normal">
              <input type="radio" name="brand" className="appearance-none w-5 h-5 border-2 border-blue-400 rounded-full checked:bg-white checked:border-blue-500 checked:ring-2 checked:ring-blue-500 focus:outline-none transition-all" />
              Home
            </label>
          </div>
        </div>
        <div className="mb-1">
          <div className="font-bold text-base mb-2">Price</div>
          <input type="number" min="0" max="5000" defaultValue="5000" className="w-full rounded-lg px-3 py-2 border border-gray-200 text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>
    </aside>
  );
} 