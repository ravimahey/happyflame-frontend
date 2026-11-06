import React, { useState } from 'react';
import { Flame, ShoppingBag, Search, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface HeaderProps {
  currentPage: 'home' | 'ads';
  setCurrentPage: (page: 'home' | 'ads') => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { totalItems, setIsCartOpen, setQuickViewProduct } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = searchQuery.trim()
    ? PRODUCTS.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      {/* Top Banner with Thin Hairline & Modern Gradient */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-300 text-xs font-medium py-2 px-4 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
              100% ORGANIC
            </span>
            <span className="text-zinc-300">
              Free Australia-wide shipping over $90 • Code: <strong className="text-amber-400 font-bold">PUREFLAME15</strong> for 15% off
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* View Switcher Pill */}
            <div className="bg-zinc-800/80 p-0.5 rounded-full border border-zinc-700/80 flex items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-0.5 rounded-full text-[11px] font-semibold transition-all ${
                  currentPage === 'home'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Homepage
              </button>
              <button
                onClick={() => setCurrentPage('ads')}
                className={`px-3 py-0.5 rounded-full text-[11px] font-semibold flex items-center space-x-1 transition-all ${
                  currentPage === 'ads'
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>Ad Landing Page</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar: Clean White with Thin Bottom Border */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-300 p-0.5 shadow-sm group-hover:shadow-md transition-shadow">
                <div className="w-full h-full rounded-[10px] bg-zinc-950 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-flame" />
                </div>
              </div>
              <div>
                <span className="font-serif text-2xl font-black tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors">
                  HAPPY FLAME
                </span>
                <p className="text-[10px] tracking-widest uppercase text-zinc-400 font-semibold -mt-1">
                  100% Organic Beeswax • Murwillumbah
                </p>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-zinc-600">
              <button
                onClick={() => {
                  setCurrentPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`transition-colors hover:text-zinc-950 ${
                  currentPage === 'home' ? 'text-zinc-950 font-bold border-b-2 border-amber-500 pb-1' : ''
                }`}
              >
                Home
              </button>

              <a
                href="#collections"
                onClick={() => currentPage === 'ads' && setCurrentPage('home')}
                className="transition-colors hover:text-zinc-950"
              >
                Collections
              </a>

              <a
                href="#negative-ions"
                onClick={() => currentPage === 'ads' && setCurrentPage('home')}
                className="transition-colors hover:text-zinc-950 flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Negative Ion Science</span>
              </a>

              <a
                href="#story"
                onClick={() => currentPage === 'ads' && setCurrentPage('home')}
                className="transition-colors hover:text-zinc-950"
              >
                Our 2006 Story
              </a>

              <a
                href="#comparison"
                onClick={() => currentPage === 'ads' && setCurrentPage('home')}
                className="transition-colors hover:text-zinc-950"
              >
                Beeswax vs Paraffin
              </a>

              <button
                onClick={() => setCurrentPage('ads')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                  currentPage === 'ads'
                    ? 'bg-zinc-950 text-white'
                    : 'bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-700 border border-amber-500/30 hover:border-amber-500/60'
                }`}
              >
                ★ Special Offer Kit
              </button>
            </nav>

            {/* Right Tools */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2.5 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 rounded-full border border-zinc-200/80 transition-all"
                aria-label="Search candles"
              >
                <Search className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 bg-zinc-950 text-white hover:bg-zinc-800 rounded-full shadow-sm hover:shadow-md transition-all flex items-center space-x-2"
                aria-label="Open basket"
              >
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-600 hover:bg-zinc-100 rounded-lg border border-zinc-200"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-4 text-sm font-semibold text-zinc-800">
              <div className="bg-zinc-50 p-3 rounded-xl border border-zinc-200 mb-2 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-bold uppercase">Select Mode:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setCurrentPage('home');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      currentPage === 'home' ? 'bg-amber-500 text-white' : 'bg-white text-zinc-700 border border-zinc-200'
                    }`}
                  >
                    Home
                  </button>
                  <button
                    onClick={() => {
                      setCurrentPage('ads');
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold ${
                      currentPage === 'ads' ? 'bg-amber-500 text-white' : 'bg-white text-zinc-700 border border-zinc-200'
                    }`}
                  >
                    Ads Landing
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setCurrentPage('home');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left py-2 border-b border-zinc-100"
              >
                Home Redesign
              </button>
              <a
                href="#collections"
                onClick={() => {
                  if (currentPage === 'ads') setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2 border-b border-zinc-100"
              >
                Candle Collections
              </a>
              <a
                href="#negative-ions"
                onClick={() => {
                  if (currentPage === 'ads') setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2 border-b border-zinc-100"
              >
                Negative Ion Air Cleansing
              </a>
              <a
                href="#story"
                onClick={() => {
                  if (currentPage === 'ads') setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2 border-b border-zinc-100"
              >
                Our Murwillumbah Story
              </a>
              <a
                href="#comparison"
                onClick={() => {
                  if (currentPage === 'ads') setCurrentPage('home');
                  setMobileMenuOpen(false);
                }}
                className="py-2 border-b border-zinc-100"
              >
                Beeswax vs Paraffin & Soy
              </a>
              <button
                onClick={() => {
                  setCurrentPage('ads');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-bold shadow-sm"
              >
                🔥 View Ad Campaign Offer (Save 25%)
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden">
            <div className="p-4 border-b border-zinc-200 flex items-center space-x-3">
              <Search className="w-5 h-5 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search pure beeswax tea lights, honeycomb pillars, tapers..."
                className="flex-1 bg-transparent border-none outline-none text-zinc-900 text-base placeholder-zinc-400"
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery('');
                }}
                className="p-1 rounded-full hover:bg-zinc-100 text-zinc-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 divide-y divide-zinc-100">
              {searchQuery && searchResults.length === 0 && (
                <div className="py-8 text-center text-zinc-500 text-sm">
                  <p>No candles match "{searchQuery}"</p>
                  <p className="text-xs mt-1 text-zinc-400">Try searching "tea lights", "honeycomb", or "sanctuary"</p>
                </div>
              )}

              {searchResults.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product);
                    setSearchOpen(false);
                    setSearchQuery('');
                  }}
                  className="py-3 flex items-center space-x-4 cursor-pointer hover:bg-zinc-50 px-2 rounded-xl transition-colors"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded-xl border border-zinc-200"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm text-zinc-900">{product.name}</h4>
                    <p className="text-xs text-zinc-500 line-clamp-1">{product.subtitle}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="font-bold text-xs text-amber-600">${product.price.toFixed(2)} AUD</span>
                      <span className="text-[11px] text-zinc-600 font-medium bg-zinc-100 px-2 py-0.5 rounded">
                        {product.burnTime}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zinc-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
