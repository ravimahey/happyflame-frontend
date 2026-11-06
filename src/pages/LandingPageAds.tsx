import React, { useState } from 'react';
import { BUNDLE_TIERS, REVIEWS, FAQS } from '../data/products';
import { useCart } from '../context/CartContext';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  Star,
  Gift,
  ChevronDown
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const LandingPageAds: React.FC = () => {
  const { addToCart, setIsCartOpen, setIsCheckoutModalOpen } = useCart();
  const [selectedTier, setSelectedTier] = useState<string>('bundle-sanctuary');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const activeBundle =
    BUNDLE_TIERS.find((b) => b.id === selectedTier) || BUNDLE_TIERS[1];

  const handleClaimOffer = (tier = activeBundle) => {
    const bundleProduct = {
      id: tier.id,
      name: tier.name,
      subtitle: `${tier.burnHoursTotal} of pure organic candlelight`,
      category: 'bundles' as const,
      price: tier.price,
      originalPrice: tier.originalPrice,
      rating: 4.99,
      reviewCount: 1120,
      burnTime: tier.burnHoursTotal,
      dimensions: 'Curated Presentation Box',
      waxWeight: '880g pure wax',
      image: tier.image,
      description: tier.tagline,
      features: tier.itemsIncluded,
      inStock: true
    };

    addToCart(bundleProduct, 1);
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);

    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#F59E0B', '#D97706', '#10B981']
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-white text-zinc-900 pb-36">
      {/* 1. TOP URGENCY AD STRIP: Modern Gradient with Thin Border */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 text-white py-2.5 px-4 text-center text-xs font-semibold tracking-wide border-b border-zinc-800">
        <div className="max-w-5xl mx-auto flex items-center justify-center space-x-2">
          <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
          <span>
            LIMITED NEW HIVE HARVEST OFFER: Save Up to 32% + FREE Solid Brass Wick Trimmer ($24 Value) + Free Express Australia Shipping!
          </span>
        </div>
      </div>

      {/* 2. AD HERO HOOK: Crisp White, Radiant Ambient Glow, Thin Lines */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-14 pb-16 text-center space-y-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-100/40 via-orange-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Rating proof badge */}
        <div className="inline-flex items-center space-x-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-zinc-200/80">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-zinc-900">4.98 / 5 Rating</span>
          <span className="text-xs text-zinc-400">• 14,000+ Australian Homes</span>
        </div>

        {/* Punchy Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-950 leading-[1.08] max-w-4xl mx-auto tracking-tight">
          Tired of Toxic Scented Candles Giving You Headaches?
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          Switch to <strong className="text-zinc-900">100% Certified Organic Australian Beeswax</strong>. Naturally purifies your indoor air with negative ions, burns with a bright soothing honey glow, and leaves your breathing passages clean and calm.
        </p>

        {/* Trust Badges with Thin Lines */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-semibold">
          <span className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Asthma & Allergy Safe</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Petroleum Paraffin or Black Soot</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200/70 px-3.5 py-1.5 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Hand-Poured in Murwillumbah NSW</span>
          </span>
        </div>
      </section>

      {/* 3. THE "SOOT TEST" & COMPARISON SPLIT CARD: Crisp White Cards with Thin Lines */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-white rounded-3xl shadow-xl shadow-zinc-900/5 border border-zinc-200/80 p-6 sm:p-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              The Shocking Truth About Indoor Candles
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-black text-zinc-950 mt-1 tracking-tight">
              What Is Actually Floating in Your Bedroom Air?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Toxic Supermarket Candle */}
            <div className="bg-rose-50/50 p-6 rounded-2xl border border-rose-200/70">
              <div className="flex items-center space-x-2 text-rose-700 font-bold text-sm mb-4">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Ordinary Paraffin & Scented Soy</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-700">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Petroleum Sludge:</strong> Paraffin is made from crude oil refinery waste and emits benzene & toluene.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Black Soot:</strong> Leaves microscopic petro-chemical soot that coats lungs, walls, and AC filters.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Artificial Fragrance:</strong> Synthetic phthalates that trigger sinus pressure, migraines, and coughs.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-500 font-bold shrink-0">✕</span>
                  <span><strong>Rapid Burn & Tunnel:</strong> Melts fast, burns unevenly, and drowns its own wick.</span>
                </li>
              </ul>
            </div>

            {/* Happy Flame Pure Beeswax */}
            <div className="bg-amber-50/40 p-6 rounded-2xl border-2 border-amber-500/80 relative shadow-sm">
              <span className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold uppercase px-3 py-0.5 rounded-full shadow-sm">
                Clean Living Choice
              </span>
              <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Happy Flame 100% Pure Beeswax</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-900">
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>100% Organic Beeswax:</strong> Certified ethical Australian wax from regional NSW apiaries.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Negative Ion Air Purifier:</strong> Naturally pulls pollen, pet dander & dust from your breathing zone.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Pure Sweet Honey Nectar:</strong> Natural subtle hive aroma that calms children & adults alike.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span><strong>Burns 3x Longer:</strong> Highest melting point wax burns slow, clean, and smokeless.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE BUNDLE TIER SELECTOR: Modern Clean White with Gradient Highlights */}
      <section id="bundles-offer" className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/80 mb-2">
            <Gift className="w-4 h-4 text-amber-600" />
            <span>Special Promotional Bundles</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
            Choose Your Clean Air Sanctuary Bundle
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-2">
            All bundles include guaranteed 100% Organic Australian Beeswax, plastic-free gift packaging, and our 30-Day Happiness Guarantee.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {BUNDLE_TIERS.map((tier) => {
            const isSelected = selectedTier === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between relative ${
                  isSelected
                    ? 'bg-white border-2 border-amber-500 shadow-2xl shadow-amber-500/10 scale-[1.02] ring-4 ring-amber-500/10'
                    : 'bg-white border border-zinc-200/80 shadow-sm hover:border-zinc-400'
                }`}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
                    {tier.badge}
                  </div>
                )}

                <div>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-50 mb-4 border border-zinc-100">
                    <img
                      src={tier.image}
                      alt={tier.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-zinc-950 leading-snug">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">{tier.tagline}</p>

                  {/* Price & Savings */}
                  <div className="mt-4 pt-4 border-t border-zinc-100">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-3xl font-black text-zinc-950">
                        ${tier.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-zinc-400 line-through">
                        ${tier.originalPrice.toFixed(2)} AUD
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded">
                        {tier.savings}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-600">
                        🔥 {tier.burnHoursTotal} Burn Time
                      </span>
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="mt-5 space-y-2">
                    <p className="text-[11px] font-bold uppercase text-zinc-700 tracking-wider">
                      Included in this Kit:
                    </p>
                    {tier.itemsIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {tier.bonusGift && (
                    <div className="mt-4 p-3 bg-amber-50/70 rounded-xl border border-amber-200/80 text-xs font-semibold text-amber-900">
                      🎁 <strong>Bonus:</strong> {tier.bonusGift}
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClaimOffer(tier);
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center space-x-2 shadow-sm ${
                      isSelected
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-md active:scale-98'
                        : 'bg-zinc-950 hover:bg-zinc-800 text-white'
                    }`}
                  >
                    <span>Claim This Bundle Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[10px] text-center text-zinc-400 mt-2">
                    🔒 Free Express Shipping • 30-Day Guarantee
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 30-DAY "CLEAN AIR OR IT'S FREE" GUARANTEE SEAL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white rounded-3xl p-8 sm:p-12 border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-zinc-800/80 border border-zinc-700 flex flex-col items-center justify-center shadow-lg">
                <ShieldCheck className="w-10 h-10 text-amber-400" />
                <span className="text-[10px] font-extrabold uppercase text-zinc-300 mt-0.5">30 DAYS</span>
              </div>
            </div>

            <div className="md:col-span-9 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                100% Risk-Free Guarantee
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-tight">
                Our "Pure Air or You Pay Nothing" Promise
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We are so confident in the handcrafted quality and clean burn of our Murwillumbah beeswax candles that we take all the risk. Burn them in your bedroom, study, or living room for 30 nights. If your air doesn't feel cleaner and your home doesn't feel more tranquil, contact Peter directly for a full 100% refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL AUSTRALIAN CUSTOMER FEEDBACK */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Customer Stories
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-zinc-950 mt-1 tracking-tight">
            "We finally found candles that don't make us sick"
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {REVIEWS.slice(0, 2).map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-6 rounded-2xl border border-zinc-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <h4 className="font-serif text-sm font-bold text-zinc-950">
                  "{rev.title}"
                </h4>
                <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                  {rev.comment}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-zinc-100 text-xs text-zinc-400">
                <strong className="text-zinc-800">{rev.author}</strong> — {rev.location}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. AD OBJECTION-BUSTER FAQS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mb-16">
        <div className="text-center mb-8">
          <h3 className="font-serif text-2xl font-black text-zinc-950 tracking-tight">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="space-y-3">
          {FAQS.slice(0, 4).map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-zinc-900 hover:text-amber-600"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    openFaq === idx ? 'rotate-180 text-amber-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. STICKY BOTTOM CONVERSION BAR: Modern Glass with Thin Border */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-zinc-950/90 backdrop-blur-md border-t border-zinc-800 p-3 sm:p-4 shadow-2xl">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-white">{activeBundle.name}</span>
              <span className="text-[11px] text-emerald-400 font-bold bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                {activeBundle.savings}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Includes Free Express Shipping across Australia + 30-Day Guarantee
            </p>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-4">
            <div className="sm:text-right">
              <span className="text-xl font-black text-white">
                ${activeBundle.price.toFixed(2)} AUD
              </span>
              <span className="text-xs text-zinc-500 line-through block">
                ${activeBundle.originalPrice.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => handleClaimOffer(activeBundle)}
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 flex items-center space-x-2 active:scale-95 transition-all"
            >
              <span>Claim Bundle Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
