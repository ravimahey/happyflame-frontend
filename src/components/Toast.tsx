import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const Toast: React.FC = () => {
  const { activeToast } = useCart();

  if (!activeToast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce duration-300">
      <div className="bg-[#1F1710] text-[#FEF3C7] px-5 py-3.5 rounded-full shadow-2xl border border-[#D97706]/40 flex items-center space-x-3">
        <Sparkles className="w-5 h-5 text-[#F59E0B] animate-spin" />
        <span className="text-sm font-medium tracking-wide">{activeToast}</span>
      </div>
    </div>
  );
};
