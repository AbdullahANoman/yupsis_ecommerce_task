import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-10 text-white font-semibold font-sans">
      <div className="">
        <div className="   bg-[#00C4CC]">
          <div className='container mx-auto flex flex-wrap p-8'>
            {/* About Us Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-medium mb-5">About Us</h3>
            <p className="text-sm leading-relaxed">
              We are a team of designers and developers that create high quality workpieces, Shopify, Opencast
            </p>
          </div>
          
          {/* Contact Us Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-medium mb-5">Contact Us</h3>
            <address className="not-italic text-sm leading-relaxed">
              Your address goes here<br />
              example@example.com<br />
              <br />
              123 123 456 789
            </address>
          </div>
          
          {/* Information Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-medium mb-5">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Payment Method</a></li>
              <li><a href="#" className="hover:underline">Product Warranty</a></li>
              <li><a href="#" className="hover:underline">Return Products</a></li>
              <li><a href="#" className="hover:underline">Payment Security</a></li>
            </ul>
          </div>
          
          {/* Newsletter Section */}
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="text-lg font-medium mb-5">Signup for newsletter</h3>
            <form className="flex mb-4">
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="px-3 py-2 border border-gray-300 flex-grow focus:outline-none focus:ring-1 focus:ring-gray-400" 
              />
              <button 
                type="submit" 
                className="bg-gray-800 text-white px-4 py-2 hover:bg-gray-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs leading-snug">
              Join over 1,000 people who get free and fresh content delivered automatically each time we publish.
            </p>
          </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="bg-[#FF99CC] p-7  text-center text-xs">
          <p>Copyright © {new Date().getFullYear()} HotThemes | Built with Tryps by HotThemes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;