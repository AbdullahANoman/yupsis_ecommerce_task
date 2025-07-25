import {  useCart } from "@/context/cartContext";
import { Product } from "@/types/globalType";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <Image
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        width={200}
        height={200}
      />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-4">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-500  text-white py-2 rounded  transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
