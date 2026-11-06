import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ShieldCheck, ArrowRight, Tag } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
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
    setIsCheckoutModalOpen
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [codeMessage, setCodeMessage] = useState<{ text: string; isError: boolean } | null>(null);

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyDiscount(inputCode);
    setCodeMessage({ text: res.message, isError: !res.success });
    if (res.success) setInputCode('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-zinc-200/80 shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-zinc-100 bg-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-amber-500" />
                <h2 className="font-serif text-xl font-black text-zinc-950">
                  Your Basket ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:bg-zinc-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="mt-4 bg-zinc-50 p-3.5 rounded-xl border border-zinc-200/70">
              <div className="flex items-center justify-between text-xs font-semibold text-zinc-800 mb-1.5">
                <div className="flex items-center space-x-1.5">
                  <Truck className="w-4 h-4 text-emerald-600" />
                  <span>
                    {amountNeededForFreeShipping > 0
                      ? `Add $${amountNeededForFreeShipping.toFixed(2)} for FREE Australia Shipping`
                      : '🎉 You have unlocked FREE Express Shipping!'}
                  </span>
                </div>
                <span className="text-zinc-400">{shippingProgressPercent}%</span>
              </div>
              <div className="w-full bg-zinc-200 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${shippingProgressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-zinc-100">
            {items.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-zinc-50 flex items-center justify-center mx-auto mb-4 text-zinc-400 border border-zinc-100">
                  <ShoppingBag className="w-8 h-8 opacity-40" />
                </div>
                <p className="font-serif text-lg font-bold text-zinc-900">Your basket is empty</p>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                  Bring the soothing warmth of pure organic beeswax into your home today.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 px-6 py-2.5 bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
                >
                  Start Exploring Candles
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.product.id} className="py-4 flex space-x-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-xl border border-zinc-200 bg-zinc-50"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-sm font-bold text-zinc-900 leading-tight">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-zinc-400 hover:text-rose-600 p-1 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-[11px] text-zinc-500 font-medium mt-0.5">
                        {item.product.burnTime.split('(')[0]}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Stepper */}
                      <div className="flex items-center border border-zinc-200 rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-1 text-zinc-400 hover:bg-zinc-50 rounded-l"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold text-zinc-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-1 text-zinc-400 hover:bg-zinc-50 rounded-r"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-sm font-black text-zinc-950">
                          ${(item.product.price * item.quantity).toFixed(2)} AUD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-zinc-100 space-y-4">
              {/* Discount Code Input */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    placeholder="Coupon code (e.g. PUREFLAME15)"
                    className="w-full bg-zinc-50 border border-zinc-200 rounded-xl pl-9 pr-3 py-2 text-xs uppercase tracking-wider text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs px-4 rounded-xl transition-colors"
                >
                  Apply
                </button>
              </form>

              {codeMessage && (
                <p className={`text-[11px] ${codeMessage.isError ? 'text-rose-600' : 'text-emerald-700'} font-medium`}>
                  {codeMessage.text}
                </p>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900">${subtotal.toFixed(2)} AUD</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({discountCode})</span>
                    <span>-${discountAmount.toFixed(2)} AUD</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Australia Shipping</span>
                  <span className="font-semibold">
                    {subtotal >= freeShippingThreshold ? (
                      <span className="text-emerald-700 font-bold">FREE</span>
                    ) : (
                      '$9.95 AUD'
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-black text-zinc-950 pt-2 border-t border-zinc-100">
                  <span>Estimated Total</span>
                  <span className="text-amber-600">${total.toFixed(2)} AUD</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutModalOpen(true);
                }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all duration-200 active:scale-98"
              >
                <span>Proceed to Secure Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center space-x-4 text-[10px] text-zinc-400 font-medium pt-1">
                <span className="flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>30-Day Money Back</span>
                </span>
                <span>•</span>
                <span>100% Certified Organic NSW Wax</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
