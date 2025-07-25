// Define Zod schema for form validation

import { z } from 'zod';

export const checkoutSchema = z.object({
  name: z.string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be less than 50 characters" }),
  email: z.string()
    .email({ message: "Please enter a valid email address" }),
  address: z.string()
    .min(10, { message: "Address must be at least 10 characters" })
    .max(200, { message: "Address must be less than 200 characters" }),
  paymentMethod: z.enum(['credit', 'paypal'])
});

// Infer TypeScript type from Zod schema
export type CheckoutFormData = z.infer<typeof checkoutSchema>;