import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Product, CartItem } from '../types';
import confetti from 'canvas-confetti';

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, selectedOption?: string) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  freeShippingThreshold: number;
  amountNeededForFreeShipping: number;
  shippingProgressPercent: number;
  discountCode: string;
  discountAmount: number;
  applyDiscount: (code: string) => { success: boolean; message: string };
  total: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  isCheckoutModalOpen: boolean;
  setIsCheckoutModalOpen: (open: boolean) => void;
  activeToast: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('happyflame_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const freeShippingThreshold = 90.00;

  useEffect(() => {
    try {
      localStorage.setItem('happyflame_cart', JSON.stringify(items));
    } catch {
      // ignore
    }
  }, [items]);

  const showToast = (msg: string) => {
    setActiveToast(msg);
    setTimeout(() => {
      setActiveToast((current) => (current === msg ? null : current));
    }, 3500);
  };

  const addToCart = (product: Product, quantity = 1, selectedOption?: string) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id && item.selectedOption === selectedOption);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedOption === selectedOption
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, selectedOption }];
    });

    try {
      confetti({
        particleCount: 30,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D97706', '#F59E0B', '#FDE68A', '#264436']
      });
    } catch {
      // ignore confetti errors in test env
    }

    showToast(`Added "${product.name}" to your basket!`);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from basket.');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingProgressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const applyDiscount = (code: string) => {
    const clean = code.trim().toUpperCase();
    if (clean === 'PUREFLAME15' || clean === 'SAVE15') {
      setDiscountCode(clean);
      setDiscountRate(0.15);
      showToast('15% discount applied successfully!');
      return { success: true, message: '15% Off Applied!' };
    }
    if (clean === 'FIRST10' || clean === 'WELCOME10') {
      setDiscountCode(clean);
      setDiscountRate(0.10);
      showToast('10% welcome coupon applied!');
      return { success: true, message: '10% Off Applied!' };
    }
    return { success: false, message: 'Invalid coupon code. Try PUREFLAME15' };
  };

  const discountAmount = subtotal * discountRate;
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 9.95;
  const total = Math.max(0, subtotal - discountAmount + shippingCost);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        freeShippingThreshold,
        amountNeededForFreeShipping,
        shippingProgressPercent,
        discountCode,
        discountAmount,
        applyDiscount,
        total,
        isCartOpen,
        setIsCartOpen,
        quickViewProduct,
        setQuickViewProduct,
        isCheckoutModalOpen,
        setIsCheckoutModalOpen,
        activeToast,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
