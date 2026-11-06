import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Star, Clock, Check, Shield, Flame, ShoppingBag, Wind } from 'lucide-react';

export const ProductQuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart } = useCart();
  const [qty, setQty] = useState(1);

  if (!quickViewProduct) return null;

  const handleAddToCart = () => {
    addToCart(quickViewProduct, qty);
    setQuickViewProduct(null);
    setQty(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={() => setQuickViewProduct(null)}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-zinc-200/80 overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-white text-zinc-900 border border-zinc-200 p-2 rounded-full shadow-sm transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Gallery */}
          <div className="relative bg-zinc-50 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-zinc-100">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-sm border border-zinc-200"
            />
            {quickViewProduct.badge && (
              <span className="absolute top-9 left-9 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                {quickViewProduct.badge}
              </span>
            )}
            <div className="absolute bottom-9 left-9 right-9 bg-zinc-950/85 backdrop-blur-md rounded-xl p-3 text-white text-xs flex items-center justify-between border border-white/10">
              <span className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-semibold">{quickViewProduct.burnTime}</span>
              </span>
              <span className="text-amber-300 font-medium">{quickViewProduct.waxWeight}</span>
            </div>
          </div>

          {/* Product Details */}
          <div className="p-6 md:p-8 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
            <div>
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-900">
                  {quickViewProduct.rating.toFixed(2)}
                </span>
                <span className="text-xs text-zinc-400">
                  ({quickViewProduct.reviewCount} verified reviews)
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="font-serif text-2xl font-black text-zinc-950 leading-tight">
                {quickViewProduct.name}
              </h2>
              <p className="text-xs text-zinc-500 font-medium mt-1">
                {quickViewProduct.subtitle}
              </p>

              {/* Price */}
              <div className="mt-4 flex items-baseline space-x-3">
                <span className="text-2xl font-black text-zinc-950">
                  ${quickViewProduct.price.toFixed(2)} AUD
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-zinc-400 line-through">
                    ${quickViewProduct.originalPrice.toFixed(2)} AUD
                  </span>
                )}
                <span className="text-xs text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full font-bold">
                  In Stock & Ready
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs text-zinc-600 leading-relaxed">
                {quickViewProduct.description}
              </p>

              {/* Clean Air Feature List */}
              <div className="mt-4 space-y-2">
                {quickViewProduct.features.map((feature, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-zinc-700">
                    <Check className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Negative Ion Callout */}
              <div className="mt-4 p-3 bg-amber-50/60 border border-amber-200/80 rounded-xl flex items-center space-x-3 text-xs text-amber-900">
                <Wind className="w-5 h-5 text-amber-600 shrink-0" />
                <span>
                  <strong>Air Purifying Flame:</strong> Emits natural negative ions that help neutralize airborne dust, pollen & synthetic candle soot.
                </span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="mt-6 pt-5 border-t border-zinc-100">
              <div className="flex items-center space-x-3">
                {/* Quantity */}
                <div className="flex items-center border border-zinc-200 rounded-xl bg-white px-2 py-1.5">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="px-2 text-sm font-bold text-zinc-400 hover:text-zinc-700"
                  >
                    -
                  </button>
                  <span className="px-3 text-sm font-bold text-zinc-900">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="px-2 text-sm font-bold text-zinc-400 hover:text-zinc-700"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3 px-6 rounded-xl font-bold text-sm shadow-md shadow-amber-500/20 transition-all flex items-center justify-center space-x-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Basket • ${(quickViewProduct.price * qty).toFixed(2)} AUD</span>
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center space-x-4 text-[11px] text-zinc-400">
                <span className="flex items-center space-x-1">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Handmade in Murwillumbah</span>
                </span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-600" />
                  <span>30-Day Guarantee</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
