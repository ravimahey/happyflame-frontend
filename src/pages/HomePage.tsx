import React, { useState } from 'react';
import { PRODUCTS, COMPARISON_DATA, REVIEWS, FAQS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import {
  Flame,
  Sparkles,
  Heart,
  Wind,
  CheckCircle,
  ArrowRight,
  Star,
  ChevronDown,
  ShoppingBag,
  Zap,
  Leaf
} from 'lucide-react';

interface HomePageProps {
  setCurrentPage: (page: 'home' | 'ads') => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [quizAnswer, setQuizAnswer] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isIonSimulating, setIsIonSimulating] = useState(false);

  const filteredProducts =
    selectedCategory === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'tealights', label: 'Pure Tea Lights & Refills' },
    { id: 'pillars', label: 'Honeycomb & Solid Pillars' },
    { id: 'tapers', label: 'Hand-Dipped Dinner Tapers' },
    { id: 'votives', label: 'Glass Votives & Lotus' },
    { id: 'bundles', label: 'Wellness Bundles' }
  ];

  const quizRecommendations: Record<string, typeof PRODUCTS[0]> = {
    asthma: PRODUCTS.find((p) => p.id === 'clean-air-starter-sanctuary') || PRODUCTS[0],
    sleep: PRODUCTS.find((p) => p.id === 'tealights-pack-12') || PRODUCTS[0],
    dinner: PRODUCTS.find((p) => p.id === 'tapers-pair-dinner') || PRODUCTS[0],
    meditation: PRODUCTS.find((p) => p.id === 'lotus-meditation-candle') || PRODUCTS[0],
    decor: PRODUCTS.find((p) => p.id === 'honeycomb-pillar-large') || PRODUCTS[0]
  };

  return (
    <div className="space-y-24 overflow-hidden bg-white">
      {/* 1. HERO SECTION: Clean White, Radiant Gradient Aura, Thin Lines */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20 border-b border-zinc-100 overflow-hidden">
        {/* Subtle Ambient Radial Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -top-40 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none animate-glow" />

        {/* Thin Grid Lines Texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f4f4f5_1px,transparent_1px),linear-gradient(to_bottom,#f4f4f5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            {/* Origin Badge with Hairline Border */}
            <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-md border border-zinc-200/80 px-4 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-700">
                Handcrafted in Murwillumbah, NSW since 2006
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-black text-zinc-950 leading-[1.06] tracking-tight">
              Breathe Pure. <br />
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
                Live in Golden Light.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              100% Certified Organic Australian Beeswax Candles. Free from petroleum paraffin, synthetic fragrances, and toxic soot. Naturally cleanses indoor air with soothing negative ions.
            </p>

            {/* Social Proof Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-1">
              <div className="flex items-center space-x-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-zinc-900">4.96 / 5</span>
              </div>
              <span className="text-xs text-zinc-500 border-l border-zinc-200 pl-4">
                Trusted by <strong className="text-zinc-900">14,000+</strong> Australian Families
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="#collections"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-98"
              >
                <span>Shop Pure Candle Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => setCurrentPage('ads')}
                className="w-full sm:w-auto px-6 py-4 bg-white hover:bg-zinc-50 text-zinc-900 border border-zinc-200/90 font-bold text-sm rounded-xl shadow-sm hover:shadow transition-all flex items-center justify-center space-x-2"
              >
                <Zap className="w-4 h-4 text-amber-500" />
                <span>Special Sanctuary Bundle (Save 25%)</span>
              </button>
            </div>

            {/* Trust Pill Badges with Thin Lines */}
            <div className="grid grid-cols-3 gap-3 pt-3 max-w-lg mx-auto lg:mx-0">
              <div className="bg-white p-3 rounded-xl border border-zinc-200/80 text-center shadow-sm">
                <Wind className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-zinc-900 block">Negative Ions</span>
                <span className="text-[10px] text-zinc-500">Air Cleansing</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200/80 text-center shadow-sm">
                <Leaf className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-zinc-900 block">Zero Paraffin</span>
                <span className="text-[10px] text-zinc-500">Non-Toxic Flame</span>
              </div>
              <div className="bg-white p-3 rounded-xl border border-zinc-200/80 text-center shadow-sm">
                <Heart className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                <span className="text-[11px] font-bold text-zinc-900 block">Asthma Safe</span>
                <span className="text-[10px] text-zinc-500">Doctor Endorsed</span>
              </div>
            </div>
          </div>

          {/* Right Visual Column (Modern Glass Card Frame) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-3 shadow-2xl shadow-zinc-900/10 border border-zinc-200/80">
              {/* Flame Visual Card */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-zinc-950">
                <img
                  src="https://images.unsplash.com/photo-1608181114410-db2bb21cd494?auto=format&fit=crop&w=1000&q=85"
                  alt="Happy Flame Pure Organic Beeswax Candles"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />

                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

                {/* Glass Floating Pill */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-white/40 py-1.5 px-3 rounded-full flex items-center space-x-2 text-xs font-bold text-zinc-900 shadow-md">
                  <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-flame" />
                  <span>3x Longer Burn Time</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/85 backdrop-blur-md p-4 rounded-xl text-white border border-white/10 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">
                        Featured Sanctuary Kit
                      </p>
                      <h4 className="font-serif text-sm font-bold mt-0.5">
                        140+ Hours of Pure Light
                      </h4>
                    </div>
                    <button
                      onClick={() => addToCart(PRODUCTS[5], 1)}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center space-x-1"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>$89 AUD</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION: Thin Borders, Sleek Minimalist Bar */}
      <section className="bg-zinc-950 text-white py-5 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-around gap-6 text-xs uppercase tracking-widest font-semibold text-zinc-300">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>100% Certified Organic NSW Wax</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Pure Unbleached Cotton Wicks</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Zero Soy • Zero Paraffin</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Hypoallergenic & Asthma Safe</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Plastic-Free Recyclable Freight</span>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT COLLECTIONS: Clean White Cards with Thin Lines */}
      <section id="collections" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-2">
            Ethically Sourced & Hand-Poured in NSW
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
            Our Pure Beeswax Collection
          </h2>
          <p className="text-sm text-zinc-500 mt-3">
            Every candle is crafted using certified organic Australian beeswax, calibrated cotton wicks, and pure intention.
          </p>

          {/* Filter Pills with Thin Lines */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-950 text-white shadow-md scale-105'
                    : 'bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. THE NEGATIVE ION SCIENCE: Modern White Card with Thin Lines */}
      <section id="negative-ions" className="bg-zinc-50 py-24 border-y border-zinc-200/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Scientific Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3.5 py-1.5 rounded-full text-xs font-bold">
                <Wind className="w-4 h-4 text-emerald-600" />
                <span>The Atmospheric Science</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-zinc-950 leading-tight tracking-tight">
                How Pure Beeswax Naturally Cleanses Indoor Air
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Most indoor airborne pollutants — such as pollen, pet dander, dust mites, and toxic petroleum soot — carry a <strong>positive electrical charge</strong> that keeps them floating suspended in your breathing space.
              </p>

              <p className="text-sm text-zinc-600 leading-relaxed">
                When you light a 100% pure beeswax Happy Flame candle, the negative ions released bond with these positively charged particles. They become too heavy to remain airborne and naturally fall harmlessly out of your breathing zone.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-zinc-900">Asthma Friendly</h4>
                  <p className="text-xs text-zinc-500 mt-1">Zero coughing fits or chest tightness common with paraffin oils.</p>
                </div>
                <div className="bg-white p-4 rounded-2xl border border-zinc-200/80 shadow-sm">
                  <h4 className="font-serif text-sm font-bold text-zinc-900">Gentle Honey Aroma</h4>
                  <p className="text-xs text-zinc-500 mt-1">Light floral propolis straight from native Australian eucalyptus blossoms.</p>
                </div>
              </div>

              <button
                onClick={() => setIsIonSimulating(!isIonSimulating)}
                className="px-6 py-3 bg-gradient-to-r from-zinc-900 to-zinc-950 hover:from-black hover:to-zinc-900 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center space-x-2"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isIonSimulating ? 'Reset Atmosphere Simulation' : 'Simulate Negative Ion Reaction'}</span>
              </button>
            </div>

            {/* Interactive Simulation Graphic */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-zinc-200/80 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-4">
                  <span className="text-xs font-bold uppercase text-zinc-500 tracking-wider">
                    Indoor Breathing Chamber Simulator
                  </span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                    {isIonSimulating ? 'Negative Ions Active' : 'Stagnant Air'}
                  </span>
                </div>

                {/* Chamber Viewport */}
                <div className="h-64 rounded-2xl bg-zinc-950 p-4 relative flex items-center justify-center overflow-hidden border border-zinc-800">
                  {/* Central Beeswax Candle */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`w-4 h-7 bg-gradient-to-t from-amber-500 via-yellow-400 to-white rounded-full blur-[1px] ${isIonSimulating ? 'animate-flame shadow-[0_0_40px_#F59E0B]' : 'opacity-70'}`} />
                    <div className="w-10 h-24 bg-gradient-to-b from-amber-300 to-amber-500 rounded-t-md shadow-inner mt-1" />
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0">
                    {[...Array(16)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute rounded-full transition-all duration-1000 ${
                          isIonSimulating
                            ? 'translate-y-48 opacity-10 bg-emerald-400 w-1.5 h-1.5'
                            : 'animate-pulse bg-amber-400/60 w-3 h-3'
                        }`}
                        style={{
                          top: `${(i * 19) % 70 + 10}%`,
                          left: `${(i * 23) % 80 + 10}%`,
                          transitionDelay: `${i * 60}ms`
                        }}
                      />
                    ))}
                  </div>

                  {isIonSimulating && (
                    <div className="absolute inset-x-4 top-4 bg-zinc-900/90 backdrop-blur-md p-2.5 rounded-xl text-center text-xs text-white border border-white/10 animate-in fade-in duration-300">
                      ✨ <strong>Negative Ions Active:</strong> Airborne dust & allergens neutralized and drawn downward!
                    </div>
                  )}
                </div>

                <div className="mt-4 text-xs text-zinc-500 flex justify-between items-center">
                  <span>Certified 100% Organic Australian Beeswax</span>
                  <span className="font-bold text-emerald-600">0% Soot Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE CANDLE MATCH QUIZ: Modern White Card */}
      <section id="quiz" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-zinc-200/80 text-center relative">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-2">
            Personalized Atmosphere Guide
          </span>
          <h2 className="font-serif text-3xl font-black text-zinc-950 tracking-tight">
            Find Your Perfect Flame
          </h2>
          <p className="text-sm text-zinc-500 mt-2 max-w-md mx-auto">
            What is your primary intention for lighting a candle today?
          </p>

          {/* Quiz Options */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            {[
              { id: 'asthma', title: 'Asthma / Clean Air', desc: 'Soot-free bedroom sanctuary' },
              { id: 'sleep', title: 'Deep Sleep & Wind-Down', desc: 'Gentle honey evening glow' },
              { id: 'dinner', title: 'Dinner Parties', desc: 'Drip-free elegant tapers' },
              { id: 'meditation', title: 'Meditation & Yoga', desc: 'Sculpted lotus focal point' },
              { id: 'decor', title: 'Artisan Living Room', desc: 'Textured glowing honeycomb' }
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setQuizAnswer(opt.id)}
                className={`p-4 rounded-2xl border text-left transition-all ${
                  quizAnswer === opt.id
                    ? 'border-amber-500 bg-amber-50/50 shadow-md ring-2 ring-amber-500/20'
                    : 'border-zinc-200 bg-white hover:border-zinc-400'
                }`}
              >
                <h4 className="font-serif text-sm font-bold text-zinc-950">{opt.title}</h4>
                <p className="text-xs text-zinc-500 mt-1">{opt.desc}</p>
              </button>
            ))}
          </div>

          {/* Recommended Result */}
          {quizAnswer && (
            <div className="mt-8 pt-8 border-t border-zinc-100 animate-in fade-in duration-300">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Your Custom Recommendation:
              </span>
              <div className="mt-3 bg-white p-4 rounded-2xl border border-zinc-200 max-w-lg mx-auto flex items-center space-x-4 text-left shadow-sm">
                <img
                  src={quizRecommendations[quizAnswer].image}
                  alt={quizRecommendations[quizAnswer].name}
                  className="w-20 h-20 object-cover rounded-xl border border-zinc-200"
                />
                <div className="flex-1">
                  <h4 className="font-serif text-sm font-bold text-zinc-950">
                    {quizRecommendations[quizAnswer].name}
                  </h4>
                  <p className="text-xs text-zinc-500">{quizRecommendations[quizAnswer].burnTime}</p>
                  <p className="text-sm font-black text-amber-600 mt-1">
                    ${quizRecommendations[quizAnswer].price.toFixed(2)} AUD
                  </p>
                </div>
                <button
                  onClick={() => addToCart(quizRecommendations[quizAnswer], 1)}
                  className="bg-zinc-950 hover:bg-amber-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 6. SCIENCE COMPARISON TABLE: Modern Crisp White with Thin Lines */}
      <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-2">
            Know What You Breathe
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-black text-zinc-950 tracking-tight">
            How Happy Flame Compares
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Most supermarket candles contain petroleum paraffin or chemically processed soy wax.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-zinc-200/80 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 bg-zinc-50">
                  <th className="p-5 font-serif text-sm font-bold text-zinc-900 w-1/4">Feature</th>
                  <th className="p-5 font-serif text-sm font-black text-amber-700 bg-amber-50/60 w-1/3 border-x border-amber-200/70">
                    Happy Flame (100% Organic Beeswax)
                  </th>
                  <th className="p-5 font-serif text-sm font-medium text-zinc-500 w-1/5">Paraffin Candles</th>
                  <th className="p-5 font-serif text-sm font-medium text-zinc-500 w-1/5">Soy Candles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 text-xs">
                {COMPARISON_DATA.map((row, i) => (
                  <tr key={i} className="hover:bg-zinc-50/50 transition-colors">
                    <td className="p-5 font-bold text-zinc-900">{row.feature}</td>
                    <td className="p-5 font-medium text-zinc-900 bg-amber-50/30 border-x border-amber-200/50">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{row.beeswax}</span>
                      </div>
                    </td>
                    <td className="p-5 text-zinc-500">{row.paraffin}</td>
                    <td className="p-5 text-zinc-500">{row.soy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. FOUNDER'S STORY: Modern High-Contrast Dark Card with Thin Border */}
      <section id="story" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-14 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Story Photos */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80"
                  alt="Murwillumbah Beeswax Crafting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Murwillumbah, Northern NSW
                  </p>
                  <p className="font-serif text-lg font-bold mt-1">
                    "We wanted a bright flame that doesn't wimp along."
                  </p>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-zinc-800 border border-zinc-700 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-semibold">
                <span>The Story of Peter & His Sons (Est. 2006)</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                Crafted Out of a Father's Need for Clean Air
              </h2>

              <p className="text-sm leading-relaxed text-zinc-300">
                In 2006, Peter Meredith's young sons suffered from severe childhood asthma. Standard supermarket candles — loaded with petroleum paraffin and synthetic fragrances — repeatedly triggered coughing fits.
              </p>

              <p className="text-sm leading-relaxed text-zinc-300">
                Discovering pure beeswax, Peter was stunned by the difference: it burned with an invigorating warm amber flame, emitted a soothing natural honey scent, and helped his boys breathe clearly.
              </p>

              <div className="pt-4 border-t border-zinc-800 flex items-center space-x-6">
                <div>
                  <h4 className="font-serif text-xl font-bold text-white">18+ Years</h4>
                  <p className="text-xs text-zinc-400">Family Craftsmanship</p>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <h4 className="font-serif text-xl font-bold text-white">100% NSW</h4>
                  <p className="text-xs text-zinc-400">Local Beekeepers</p>
                </div>
                <div className="border-l border-zinc-800 pl-6">
                  <h4 className="font-serif text-xl font-bold text-white">0% Paraffin</h4>
                  <p className="text-xs text-zinc-400">Strict Clean Air Pledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. VERIFIED CUSTOMER REVIEWS: Crisp White Cards with Thin Lines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center space-x-1 text-amber-400 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Loved by 14,000+ Conscious Australian Homes
          </h2>
          <p className="text-sm text-zinc-500 mt-2">
            Verified Judge.me & ProductReview.com.au feedback from across Australia:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-zinc-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full font-bold">
                    Verified Buyer
                  </span>
                </div>

                <h4 className="font-serif text-sm font-bold text-zinc-900">
                  "{rev.title}"
                </h4>

                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100">
                <p className="text-xs font-bold text-zinc-900">{rev.author}</p>
                <p className="text-[10px] text-zinc-400">{rev.location} • {rev.productName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FAQ ACCORDION: Clean White with Thin Lines */}
      <section id="faq" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-amber-600 block mb-2">
            Clear Answers
          </span>
          <h2 className="font-serif text-3xl font-black text-zinc-950 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-serif text-sm font-bold text-zinc-900 hover:text-amber-600"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 10. CALL TO ACTION: Modern Gradient Accent Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-2xl border border-zinc-800">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Experience The Difference</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Breathe Pure Australian Air?
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Order your pure beeswax candles today with our 30-Day "Clean Air" Guarantee. Free express shipping across Australia on orders over $90.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#collections"
                className="px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs rounded-xl shadow-lg shadow-amber-500/20 transition-all"
              >
                Explore Candle Collections
              </a>
              <button
                onClick={() => setCurrentPage('ads')}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs rounded-xl transition-all"
              >
                View Ad Campaign Kit (Save 25%)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
