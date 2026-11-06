import React, { useState } from 'react';
import { Flame, ShieldCheck, Heart, Sparkles, Send, Award, CheckCircle } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: 'home' | 'ads') => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Feature Pillars with Thin Lines */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-zinc-800/80">
          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white">100% Certified Organic</h4>
              <p className="text-xs text-zinc-400 mt-1">Sourced directly from certified ethical Northern Rivers beekeepers.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white">Negative Ion Cleansing</h4>
              <p className="text-xs text-zinc-400 mt-1">Naturally purifies airborne pollen, pet dander and dust as it burns.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
              <Flame className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white">Pure Cotton Wicks</h4>
              <p className="text-xs text-zinc-400 mt-1">Unbleached, lead-free braided wicks that burn bright without dripping.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-zinc-900 flex items-center justify-center shrink-0 border border-zinc-800">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h4 className="font-serif text-sm font-bold text-white">30-Day Pure Air Guarantee</h4>
              <p className="text-xs text-zinc-400 mt-1">Feel the difference in your home's air quality or receive a 100% refund.</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 py-12">
          {/* Brand Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-sm">
                <Flame className="w-5 h-5 text-white fill-white" />
              </div>
              <span className="font-serif text-2xl font-black text-white tracking-tight">
                HAPPY FLAME
              </span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Born in 2006 in Murwillumbah, Northern NSW. Handcrafted with passion by Peter Meredith and family to bring truly pure, non-toxic, asthma-safe golden candlelight to Australian homes.
            </p>
            <div className="pt-2 text-xs text-amber-400 font-medium flex items-center space-x-2">
              <Heart className="w-4 h-4 fill-amber-400" />
              <span>Proudly 100% Australian Made, Owned & Poured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
              Explore Candles
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Pure Beeswax Tea Lights
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Artisan Honeycomb Pillars
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Traditional Dinner Tapers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Meditation Lotus & Votives
                </a>
              </li>
              <li>
                <button
                  onClick={() => setCurrentPage('ads')}
                  className="text-amber-400 hover:underline font-bold"
                >
                  Starter Sanctuary Bundle (Save 25%)
                </button>
              </li>
            </ul>
          </div>

          {/* Health & Origin */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-4">
              Health & Origin
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a href="#negative-ions" className="hover:text-white transition-colors">
                  Negative Ion Air Cleansing
                </a>
              </li>
              <li>
                <a href="#comparison" className="hover:text-white transition-colors">
                  Beeswax vs Paraffin Science
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Peter's Asthma Family Story
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-white transition-colors">
                  Candle Match Quiz
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Care & Burning FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Honeycomb Club VIP Newsletter */}
          <div>
            <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-white mb-2">
              The Honeycomb Club
            </h4>
            <p className="text-xs text-zinc-400 mb-4">
              Join 18,000+ conscious Aussies. Get 15% off your first order + our Clean Burning Guide.
            </p>

            {subscribed ? (
              <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-800 text-xs text-emerald-300 flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Welcome! Code <strong>PUREFLAME15</strong> is active for you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-zinc-500 block">No spam. Only warm artisan news & tips.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Happy Flame Pty Ltd. Handcrafted in Murwillumbah NSW, Australia. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Shipping & Returns</span>
            <span>Murwillumbah Studio</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
