import { SheetClose } from "@/components/ui/sheet";
import { CartItem } from "@/types/globalType";
import Image from "next/image";
import { AiFillDelete } from "react-icons/ai";

const CartContent = ({ 
  cartItems, 
  updateQuantity, 
  removeFromCart, 
  totalPrice,
  onCheckout 
}: {
  cartItems:CartItem[],
  updateQuantity: (id: number, quantity: number) => void,
  removeFromCart: (id: number) => void,
  totalPrice: number,
  onCheckout: () => void
}) => {

  console.log(cartItems)
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <SheetClose className="text-gray-500 hover:text-gray-700"/>
      
      </div>
      
      {cartItems.length === 0 ? (
        <p className="text-black">Your cart is empty</p>
      ) : (
        <>
          <div className="flex-grow overflow-y-auto space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex border-b pb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                  width={200}
                  height={200}
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="cursor-pointer px-2 py-1 bg-gray-200 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 cursor-pointer py-1 bg-gray-200 rounded-r"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 cursor-pointer"
                    >
                      <AiFillDelete  size={20}/>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="mt-4 w-full bg-black text-white font-semibold py-2 rounded hover:bg-secondary"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default CartContent