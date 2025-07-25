// types.ts


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  ageRange: string;
  rating: number;
  stock: number;
}

export interface ProductResponse {
  data:{
    meta:{
    page:number,
  },
  result: Product[],
  message: string,
  success: boolean
  }
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, newQuantity: number) => void;
  totalItems: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
}
