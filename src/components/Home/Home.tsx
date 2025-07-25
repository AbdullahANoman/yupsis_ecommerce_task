'use client';

import { Product } from "@/types/globalType";
import { useState } from "react";
import CartModal from "../CartModal";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
import Navbar from "./Navbar/Navbar";
import { HeroSection } from "./Hero/Hero";
import Gallery from "./Gallery/Gallery";

const Home = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Educational Robot Kit",
      price: 59.99,
      description: "STEM learning toy for kids ages 8+ with coding capabilities",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/2_24f99434-0d6c-402f-9a3d-ddff14984c83_1024x1024.jpg?v=1663393887",
      category: "Educational",
      ageRange: "8-12 years",
      rating: 4.8,
      stock: 15
    },
    {
      id: 2,
      name: "Wooden Building Blocks",
      price: 34.99,
      description: "100-piece eco-friendly wooden block set for creative play",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/9_34325ff2-593d-4918-86a5-ac89d269d523_1024x1024.jpg?v=1663393891",
      category: "Building",
      ageRange: "3-8 years",
      rating: 4.9,
      stock: 22
    },
    {
      id: 3,
      name: "Interactive Dinosaur Set",
      price: 49.99,
      description: "Realistic roaring dinosaurs with educational facts",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/15_508c2c79-a028-4aa2-af95-b869d839af87_1024x1024.jpg?v=1663393738",
      category: "Pretend Play",
      ageRange: "4-10 years",
      rating: 4.7,
      stock: 8
    },
    {
      id: 4,
      name: "Art Supplies Kit",
      price: 29.99,
      description: "Complete art set with 64 vibrant colors and tools",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/16_1024x1024.jpg?v=1663393738",
      category: "Arts & Crafts",
      ageRange: "5-12 years",
      rating: 4.6,
      stock: 30
    },
    {
      id: 5,
      name: "Remote Control Car",
      price: 45.99,
      description: "2.4GHz RC car with 360° flips and LED lights",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/17_9d4b67cc-bafa-4c66-afff-be6acce8c5bf_1024x1024.jpg?v=1663393738",
      category: "Electronic",
      ageRange: "6-14 years",
      rating: 4.5,
      stock: 12
    },
    {
      id: 6,
      name: "Plush Animal Collection",
      price: 19.99,
      description: "Super  animals with safety-certified materials",
      image: "https://devita-toy.myshopify.com/cdn/shop/products/18_d3763991-fb77-4192-8fa1-331d089cac30_1024x1024.jpg?v=1663393738",
      category: "Soft Toys",
      ageRange: "0-5 years",
      rating: 4.9,
      stock: 25
    },
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <CartModal />

      <main className="flex-grow">
        <HeroSection />
        <Gallery />
        
        {/* Featured Products */}
        <section className="container mx-auto px-4 sm:px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Toys</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our best-selling educational and fun toys for all ages
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* <Testimonials />
        <Newsletter /> */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;