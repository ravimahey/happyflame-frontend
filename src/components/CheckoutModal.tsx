import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, CheckCircle, ShieldCheck, Lock, CreditCard, ArrowRight, Truck } from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const {
    isCheckoutModalOpen,
    setIsCheckoutModalOpen,
    items,
    discountAmount,
    discountCode,
    total,
    clearCart
  } = useCart();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Sarah Mitchell',
    email: 'sarah.m@example.com.au',
    phone: '0412 345 678',
    address: '42 River Street',
    suburb: 'Murwillumbah',
    state: 'NSW',
    postcode: '2484',
    cardNumber: '•••• •••• •••• 4242',
    notes: 'Please leave safe by front porch'
  });

  if (!isCheckoutModalOpen) return null;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#D97706', '#10B981']
      });
    } catch {
      // ignore
    }
  };

  const handleDone = () => {
    clearCart();
    setStep('form');
    setIsCheckoutModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-zinc-200/80 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 bg-white border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            <div>
              <h2 className="font-serif text-lg font-black text-zinc-950">
                {step === 'form' ? 'Secure Express Checkout' : 'Order Placed Successfully!'}
              </h2>
              <p className="text-xs text-zinc-500">
                {step === 'form' ? '256-Bit Encrypted Australian Payment Gateway' : 'Order #HF-94829'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsCheckoutModalOpen(false)}
            className="text-zinc-400 hover:bg-zinc-100 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'form' ? (
          <form onSubmit={handlePlaceOrder} className="p-6 md:p-8 space-y-6">
            {/* Quick Order Summary */}
            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200/80">
              <div className="flex items-center justify-between text-xs font-bold text-zinc-800 mb-2 pb-2 border-b border-zinc-200/60">
                <span>Items in Order ({items.length})</span>
                <span className="text-amber-600 font-black">${total.toFixed(2)} AUD Total</span>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2 pr-1">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center text-xs">
                    <span className="text-zinc-900 font-medium truncate max-w-xs">
                      {item.quantity}x {item.product.name}
                    </span>
                    <span className="font-bold text-zinc-800">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              {discountAmount > 0 && (
                <div className="mt-2 pt-2 border-t border-zinc-200/60 flex justify-between text-xs text-emerald-700 font-bold">
                  <span>Discount Applied ({discountCode})</span>
                  <span>-${discountAmount.toFixed(2)} AUD</span>
                </div>
              )}
            </div>

            {/* Delivery Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-sm font-bold text-zinc-900 flex items-center space-x-2">
                <Truck className="w-4 h-4 text-amber-500" />
                <span>Shipping Destination (Australia)</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="md:col-span-2">
                  <label className="block text-zinc-600 font-semibold mb-1">Street Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">Suburb / City</label>
                  <input
                    type="text"
                    required
                    value={formData.suburb}
                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">State</label>
                  <select
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="NSW">NSW</option>
                    <option value="VIC">VIC</option>
                    <option value="QLD">QLD</option>
                    <option value="WA">WA</option>
                    <option value="SA">SA</option>
                    <option value="TAS">TAS</option>
                    <option value="ACT">ACT</option>
                    <option value="NT">NT</option>
                  </select>
                </div>
                <div>
                  <label className="block text-zinc-600 font-semibold mb-1">Postcode</label>
                  <input
                    type="text"
                    required
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full bg-white border border-zinc-200 rounded-xl px-3 py-2 text-zinc-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <h3 className="font-serif text-sm font-bold text-zinc-900 flex items-center space-x-2">
                <CreditCard className="w-4 h-4 text-amber-500" />
                <span>Payment Method (Demo Mode Active)</span>
              </h3>

              <div className="p-3 bg-white border border-zinc-200 rounded-2xl flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded bg-zinc-950 text-white flex items-center justify-center font-bold text-[10px]">
                    PAY
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900">Apple Pay / Visa / Mastercard</p>
                    <p className="text-[11px] text-zinc-400">No real charge will occur in demo</p>
                  </div>
                </div>
                <span className="text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200/60 px-2.5 py-1 rounded-full">
                  Verified
                </span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-amber-500/20 flex items-center justify-center space-x-2 transition-all active:scale-98"
            >
              <span>Authorize & Place Order • ${total.toFixed(2)} AUD</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="flex items-center justify-center space-x-3 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>30-Day Happiness Guarantee • Plastic-Free Recyclable Packaging</span>
            </div>
          </form>
        ) : (
          /* Order Confirmed Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200/80">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Thank you, {formData.name}!
              </span>
              <h3 className="font-serif text-3xl font-black text-zinc-950 mt-1 tracking-tight">
                Your Pure Beeswax Order is Confirmed
              </h3>
              <p className="text-sm text-zinc-600 mt-2 max-w-md mx-auto">
                We are carefully hand-packing your organic candles at our Murwillumbah workshop. A tracking notification will be sent to <strong>{formData.email}</strong> shortly.
              </p>
            </div>

            <div className="bg-zinc-50 p-5 rounded-2xl border border-zinc-200 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-zinc-500">Order Number:</span>
                <span className="font-bold text-zinc-900">#HF-94829</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Shipping To:</span>
                <span className="font-bold text-zinc-900">{formData.address}, {formData.suburb} {formData.state}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Estimated Arrival:</span>
                <span className="font-bold text-emerald-700">2-4 Business Days (Express NSW/QLD)</span>
              </div>
            </div>

            <button
              onClick={handleDone}
              className="px-8 py-3.5 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl font-bold text-sm shadow-md transition-all"
            >
              Back to Happy Flame Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
