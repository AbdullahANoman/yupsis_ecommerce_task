"use client";

import { useCart } from "@/context/cartContext";
import { Product } from "@/types/globalType";
import Image from "next/image";
import { Star } from "lucide-react";
import { IoCartSharp } from "react-icons/io5";


interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div
      data-aos={product.id % 2 === 0 ? "fade-left" : "fade-right"}
      data-aos-duration="800"
      className="bg-white  rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {product.stock < 10 && (
            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              Almost Gone!
            </span>
          )}
          {product.category && (
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {product.category}
            </span>
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-lg font-semibold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm ml-1">
            ({product.rating.toFixed(1)})
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
          <span>Age: {product.ageRange}</span>
          <span>{product.stock} in stock</span>
        </div>

        <button
          onClick={() => addToCart(product)}
          className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          <IoCartSharp size={20}/>

          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
