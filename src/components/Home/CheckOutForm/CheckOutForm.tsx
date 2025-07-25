import { SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";

const CheckoutForm = ({ 
  onBack, 
  totalPrice 
}: {
  onBack: () => void,
  totalPrice: number
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={onBack}
          className="text-gray-500 hover:text-gray-700 flex items-center"
        >
          <FaArrowLeft className="h-5 w-5 mr-2 transform " />
          Back to Cart
        </button>
        <SheetClose className="text-gray-500 hover:text-gray-700"/>
      </div>
      <h2 className="text-xl font-bold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit} className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows={3}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit"
                  checked={formData.paymentMethod === 'credit'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={handleChange}
                  className="mr-2"
                />
                PayPal
              </label>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4">
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 rounded hover:bg-secondary"
          >
            Place Order
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm