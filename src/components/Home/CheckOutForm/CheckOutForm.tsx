'use client';

import { SheetClose } from "@/components/ui/sheet";
import { FaArrowLeft } from "react-icons/fa6";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CheckoutFormData, checkoutSchema } from "./CheckOutFormValidation";



const CheckoutForm = ({ 
  onBack, 
  totalPrice 
}: {
  onBack: () => void,
  totalPrice: number
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: 'credit'
    }
  });

  const onSubmit = (data: CheckoutFormData) => {
    console.log('Form submitted:', data);
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
      <form onSubmit={handleSubmit(onSubmit)} className="flex-grow overflow-y-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              {...register('name')}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register('email')}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shipping Address
            </label>
            <textarea
              {...register('address')}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.address ? 'border-red-500' : 'border-gray-300'
              }`}
              rows={3}
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Payment Method
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  value="credit"
                  {...register('paymentMethod')}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="paypal"
                  {...register('paymentMethod')}
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

export default CheckoutForm;