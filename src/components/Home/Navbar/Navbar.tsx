'use client';

import { useState, useCallback, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TfiClose } from "react-icons/tfi";
import { FaBars, FaShoppingCart } from "react-icons/fa";
import { useCart } from '@/context/cartContext';
import Link from "next/link";
import CheckoutForm from "../CheckOutForm/CheckOutForm";
import CartContent from "../CartContent/CartContent";
import Image from "next/image";
import Logo from "../../../assets/icons/logo.png";
const menu = [
  { name: "Home", path: "/" },
];

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 "
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div
        className={`fixed w-screen bg-white left-0 right-0 z-[200] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out text-textColor border-t border-t-primary`}
        style={{ height: "calc(100vh - 6rem)", top: "6rem" }}
      >
        {menu.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              onClick={onClose}
              className="w-full py-4 font-bold border-b border-b-primary hover:bg-accent hover:text-white flex justify-center items-center"
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};





const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const { totalItems, cartItems, removeFromCart, updateQuantity, totalPrice } = useCart();

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleCheckoutClick = () => {
    setShowCheckoutForm(true);
  };

  const handleBackToCart = () => {
    setShowCheckoutForm(false);
  };

  return (
    <div className="">
      {/* Main Navbar */}
      <div className="navbar fixed font-semibold transition duration-300 h-20 lg:h-24 w-full  top-0 z-50 bg-white shadow-md">
        <div className="relative h-full">
          <div className="container mx-auto h-full flex justify-between items-center px-4 md:px-6">
            {/* Left Side - Logo/Brand */}
           <div className="col-span-1 flex justify-start items-center">
            <Link href={'/'}>
              <div className="flex gap-2 items-center">
                <div>
                  <Image src={Logo} className="relative h-12 w-12" alt="logo" />
                </div>
                <p className="text-xl font-bold">
                  <span className="text-[#32BDF2]">Toy</span>
                  <span className="text-[#FF6A98]">Tutors</span>
                </p>
              </div>
            </Link>
            </div>

            {/* Center - Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-secondary">Home</Link>
            </div>

            {/* Right Side - Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Cart Button with ShadCN Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    className="relative p-2 hover:text-secondary"
                    aria-label="Cart"
                  >
                    <FaShoppingCart className="h-6 w-6 cursor-pointer" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                      </span>
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-md bg-white">
                  <div className="p-4 h-full flex flex-col">
                    {showCheckoutForm ? (
                      <CheckoutForm 
                        onBack={handleBackToCart} 
                        totalPrice={totalPrice}
                      />
                    ) : (
                      <CartContent 
                        cartItems={cartItems}
                        updateQuantity={updateQuantity}
                        removeFromCart={removeFromCart}
                        totalPrice={totalPrice}
                        onCheckout={handleCheckoutClick}
                      />
                    )}
                  </div>
                </SheetContent>
              </Sheet>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-700 focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <TfiClose className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
};

export default Navbar;