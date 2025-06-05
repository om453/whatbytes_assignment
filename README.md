# WhatBytes Assignment

A modern, responsive e-commerce product listing web app built with Next.js and Tailwind CSS.

## 🚀 Live Demo

Check out the deployed app here:  
👉 [https://whatbytes-assignment-omega.vercel.app/](https://whatbytes-assignment-omega.vercel.app/)

---

## 📦 Project Description

This project is a fully functional product listing and filtering web application, designed as part of the WhatBytes assignment. It features:

- **Product Grid:** Responsive grid layout for product cards with images, price, category, rating, and add-to-cart button.
- **Sidebar Filters:** Filter products by category and price using an interactive sidebar.
- **Extra Filter Card:** An additional "Category" card in the sidebar for UI completeness.
- **Product Detail Page:** Click any product to view its details on a dedicated page.
- **Footer:** Clean, consistent footer with navigation and social links.
- **Image Management:** All product images are managed in the `public/images` folder for easy updates.
- **Deployed on Vercel:** Easily accessible and shareable online.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## 📁 Folder Structure

```
/public/images         # All product images go here
/app/components        # All React components (Sidebar, ProductGrid, Footer, etc.)
/app/product/[id]      # Dynamic product detail pages
/app/page.js           # Main page with sidebar and product grid
```

---

## 🖼️ Adding/Updating Images

1. Place your product images in the `public/images` folder.
2. Make sure the filenames match the `image` property in your product data (e.g., `/images/shoes.png`).

---

## 📝 How to Run Locally

1. Clone the repo:
   ```sh
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

This project is deployed on Vercel:  
[https://whatbytes-assignment-omega.vercel.app/](https://whatbytes-assignment-omega.vercel.app/)

---

## 📄 License

This project is for educational and assignment purposes.
