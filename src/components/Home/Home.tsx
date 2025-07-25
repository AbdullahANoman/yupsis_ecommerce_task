'use client'
import { Product } from "@/types/globalType";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../Navbar";
import CartModal from "../CartModal";
import Hero from "../Hero";
import ProductCard from "../ProductCard";
import Footer from "../Footer";


const Home: NextPage = () => {
  // Sample product data
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      description: "Feature-rich smartwatch with health monitoring",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      description: "Portable speaker with 20-hour battery life",
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 49.99,
      description: "Durable backpack with USB charging port",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 5,
      name: "Wireless Earbuds",
      price: 129.99,
      description: "True wireless earbuds with premium sound",
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 6,
      name: "Portable Charger",
      price: 29.99,
      description: "10000mAh power bank with fast charging",
      image:
        "https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ]);
  

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>ShopEase - Your Favorite Online Store</title>
        <meta name="description" content="Shop the best products online" />
      </Head>

      <Navbar />
      <CartModal />

      <main className="flex-grow">
        <Hero />
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
