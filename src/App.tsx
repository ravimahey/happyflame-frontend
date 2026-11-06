import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { LandingPageAds } from './pages/LandingPageAds';
import { LayoutTemplate, Megaphone, Type } from 'lucide-react';

export const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'ads'>('home');
  const [headingFont, setHeadingFont] = useState<'outfit' | 'instrument' | 'jakarta' | 'syne'>('outfit');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Apply font class to document.body
  useEffect(() => {
    document.body.classList.remove(
      'font-heading-outfit',
      'font-heading-instrument',
      'font-heading-jakarta',
      'font-heading-syne'
    );
    document.body.classList.add(`font-heading-${headingFont}`);
  }, [headingFont]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-zinc-900 selection:bg-amber-100 selection:text-amber-900">
      {/* Floating Control Dock (Page Switcher + Live Font Picker) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-zinc-950/90 backdrop-blur-xl px-3.5 py-2 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col sm:flex-row items-center gap-2 text-xs">
        {/* Page Switcher */}
        <div className="flex items-center space-x-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <button
            onClick={() => setCurrentPage('home')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
              currentPage === 'home'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <LayoutTemplate className="w-3.5 h-3.5" />
            <span>1. Homepage</span>
          </button>
          <button
            onClick={() => setCurrentPage('ads')}
            className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
              currentPage === 'ads'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>2. Ad Landing</span>
          </button>
        </div>

        {/* Font Switcher */}
        <div className="flex items-center space-x-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
          <div className="flex items-center space-x-1 text-amber-400 pl-1 pr-1 font-semibold text-[11px]">
            <Type className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Heading Style:</span>
          </div>

          <button
            onClick={() => setHeadingFont('outfit')}
            title="Outfit: Ultra clean, modern luxury sans (Recommended)"
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
              headingFont === 'outfit'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Outfit (Clean)
          </button>

          <button
            onClick={() => setHeadingFont('instrument')}
            title="Instrument Serif: Sleek contemporary high-fashion editorial"
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
              headingFont === 'instrument'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Instrument (Serif)
          </button>

          <button
            onClick={() => setHeadingFont('jakarta')}
            title="Plus Jakarta Sans: Crisp modern geometric"
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
              headingFont === 'jakarta'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Jakarta
          </button>

          <button
            onClick={() => setHeadingFont('syne')}
            title="Syne: High-fashion architectural display"
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
              headingFont === 'syne'
                ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Syne
          </button>
        </div>
      </div>

      {/* Global Header */}
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Main Page View */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <HomePage setCurrentPage={setCurrentPage} />
        ) : (
          <LandingPageAds />
        )}
      </main>

      {/* Global Footer */}
      <Footer setCurrentPage={setCurrentPage} />

      {/* Overlays, Drawers & Modals */}
      <CartDrawer />
      <ProductQuickViewModal />
      <CheckoutModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
