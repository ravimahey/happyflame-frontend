import React from 'react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Star, Clock, ShoppingBag, Eye, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setQuickViewProduct } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-amber-500/50 shadow-sm hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between">
      {/* Product Image & Badges */}
      <div className="relative aspect-square overflow-hidden bg-zinc-50 border-b border-zinc-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Burn Time Floating Badge (Glass style) */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-zinc-900 border border-zinc-200/70 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center space-x-1.5 shadow-sm">
          <Clock className="w-3 h-3 text-amber-500" />
          <span>{product.burnTime.split('(')[0]}</span>
        </div>

        {/* Gradient Highlight Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center space-x-1">
            <Sparkles className="w-3 h-3" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Quick View Hover Action */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={() => setQuickViewProduct(product)}
            className="bg-white text-zinc-900 hover:bg-zinc-50 text-xs font-bold py-2 px-4 rounded-full shadow-lg border border-zinc-200 flex items-center space-x-1.5 transform translate-y-2 group-hover:translate-y-0 transition-all duration-200"
          >
            <Eye className="w-4 h-4 text-amber-600" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating */}
          <div className="flex items-center space-x-1.5 mb-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-zinc-800">{product.rating.toFixed(2)}</span>
            <span className="text-xs text-zinc-400">({product.reviewCount})</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-bold text-zinc-900 group-hover:text-amber-600 transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="text-xs text-zinc-500 mt-1 line-clamp-2">
            {product.subtitle}
          </p>
        </div>

        {/* Price & Action */}
        <div className="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-xl font-black text-zinc-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-zinc-400 font-semibold block uppercase tracking-wider">AUD • 100% Organic</span>
          </div>

          <button
            onClick={() => addToCart(product, 1)}
            className="bg-zinc-950 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all flex items-center space-x-1.5 active:scale-95"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
};
