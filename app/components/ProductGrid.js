"use client";

const products = [
  { id: 1, title: "Running Shoes", price: 99, image: "/shoes.png" },
  { id: 2, title: "Wireless Headphones", price: 199, image: "/headphones.png" },
  { id: 3, title: "Backpack", price: 129, image: "/backpack.png" },
  { id: 4, title: "Smartwatch", price: 249, image: "/watch.png" },
  { id: 5, title: "Sunglasses", price: 149, image: "/sunglasses.png" },
  { id: 6, title: "Digital Camera", price: 499, image: "/camera.png" },
  { id: 7, title: "T-shirt", price: 29, image: "/tshirt.png" },
  { id: 8, title: "Smartphone", price: 699, image: "/phone.png", featured: true },
];

export default function ProductGrid() {
  return (
    <section className="w-full">
      <h2 className="text-2xl font-bold text-[#0a3576] mb-6 text-center md:text-left">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center ${product.featured ? "row-span-2 col-span-1 lg:col-span-1 lg:row-span-2" : ""}`}
          >
            <div className="w-28 h-28 mb-4 flex items-center justify-center">
              <img src={product.image} alt={product.title} className="object-contain w-full h-full" />
            </div>
            <div className="font-semibold text-lg text-center mb-1">{product.title}</div>
            <div className="text-[#0a3576] font-bold text-md mb-4">${product.price}</div>
            <button className="bg-[#0a3576] text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-800 transition">Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
} 