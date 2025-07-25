import {  useCart } from '@/context/cartContext';
import Link from 'next/link';

const Navbar = () => {
  const { totalItems, setIsCartOpen } = useCart();

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          ShopEase
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
          <Link href="/about" className="hover:text-secondary">
            About
          </Link>
          <Link href="/contact" className="hover:text-secondary">
            Contact
          </Link>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:text-secondary"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;