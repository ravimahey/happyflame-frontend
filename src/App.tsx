import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';
import { HomePage } from './pages/HomePage';
import { LandingPageAds } from './pages/LandingPageAds';
import { LayoutTemplate, Megaphone, Type, Sliders, X } from 'lucide-react';

export const AppContent: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLanding = location.pathname.startsWith('/landing') || location.pathname === '/ads';

  const [headingFont, setHeadingFont] = useState<'outfit' | 'instrument' | 'jakarta' | 'syne'>('outfit');
  const [isDockOpen, setIsDockOpen] = useState(true); // Open by default

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

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
      {/* Floating Control Dock - Collapsible */}
      {isDockOpen ? (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-zinc-950/95 backdrop-blur-xl px-3.5 py-2 rounded-2xl border border-zinc-800 shadow-2xl flex flex-col sm:flex-row items-center gap-2 text-xs animate-in fade-in slide-in-from-bottom-2">
          {/* Page Switcher */}
          <div className="flex items-center space-x-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => navigate('/')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                !isLanding
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LayoutTemplate className="w-3.5 h-3.5" />
              <span>Homepage</span>
            </button>
            <button
              onClick={() => navigate('/landing')}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg font-bold transition-all ${
                isLanding
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5" />
              <span>Ad Landing</span>
            </button>
          </div>

          {/* Font Switcher */}
          <div className="flex items-center space-x-1.5 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
            <div className="flex items-center space-x-1 text-amber-400 pl-1 pr-1 font-semibold text-[11px]">
              <Type className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Heading:</span>
            </div>

            <button
              onClick={() => setHeadingFont('outfit')}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                headingFont === 'outfit'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Outfit
            </button>

            <button
              onClick={() => setHeadingFont('instrument')}
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                headingFont === 'instrument'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Instrument
            </button>

            <button
              onClick={() => setHeadingFont('jakarta')}
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
              className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                headingFont === 'syne'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Syne
            </button>
          </div>

          {/* Close/Minimize Button */}
          <button
            onClick={() => setIsDockOpen(false)}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors ml-1"
            title="Minimize Dock"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        /* Minimized subtle pill in bottom-right corner */
        <button
          onClick={() => setIsDockOpen(true)}
          className="fixed bottom-5 right-5 z-40 bg-zinc-950/90 hover:bg-zinc-900 text-white text-xs font-semibold px-3 py-2 rounded-full border border-zinc-800 shadow-xl flex items-center space-x-1.5 backdrop-blur-md transition-all hover:scale-105"
        >
          <Sliders className="w-3.5 h-3.5 text-amber-400" />
          <span>Page & Style Controls</span>
        </button>
      )}

      {/* Global Header */}
      <Header />

      {/* Main Routed Page View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPageAds />} />
          <Route path="/landing-page" element={<LandingPageAds />} />
          <Route path="/ads" element={<LandingPageAds />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

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
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}
