'use client'
import CartModal from "../CartModal";
import Footer from "../Footer";
import Navbar from "./Navbar/Navbar";
import { HeroSection } from "./Hero/Hero";
import Gallery from "./Gallery/Gallery";
import AllProduct from "./AllProduct";

const Home = () => {
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
            <h2 className="text-5xl py-4 text-center text-[#1A2B5F] font-bold">Featured Toys</h2>
            <p className="text-3xl  text-center text-[#1A2B5F] font-bold">
              Discover our best-selling educational and fun toys for all ages
            </p>
          </div>
          <AllProduct/>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;