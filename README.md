# Happy Flame™ — Modern Website Redesign & High-Converting Ad Landing Page

> Premium redesign of [happyflame.com.au](https://www.happyflame.com.au/) — Australia's leading artisan 100% pure organic beeswax candle brand from Murwillumbah, NSW.

---

## 🌟 What Was Built

### 1. **Complete Modern E-Commerce Homepage (`src/pages/HomePage.tsx`)**
* **Artisan Luxury Aesthetics**: Warm beeswax amber (`#D97706`), natural unbleached cotton tones, honeycomb patterns, and editorial typography (*Playfair Display* & *Plus Jakarta Sans*).
* **Hero Section**: Animated flickering candle simulation, origin story badge (*"Handcrafted in Murwillumbah NSW since 2006"*), social proof counter (*4.96★ from 14,000+ Aussie homes*), dual CTAs.
* **Trust & Organic Certification Marquee**: 100% Certified Organic NSW Wax, pure cotton wicks, asthma & allergy safe, zero paraffin, zero synthetic fragrance.
* **Interactive Collection Filter**: Filter instantly across *Pure Tea Lights & Refills*, *Honeycomb & Solid Pillars*, *Hand-Dipped Dinner Tapers*, *Glass Votives & Lotus*, and *Curated Bundles*.
* **Interactive Negative Ion Science Simulator**: Visual demonstration illustrating how burning pure beeswax releases negative ions to neutralize positively-charged dust, pollen, pet dander, and soot.
* **Interactive Candle Match Quiz**: "Find Your Perfect Flame" — guides customers based on intention (Asthma/Clean Air, Deep Sleep, Dinner Hosting, Meditation) to an instant recommendation with 1-click cart addition.
* **"Know What You Breathe" Science Comparison Matrix**: Side-by-side interactive comparison between **Pure Beeswax**, **Petroleum Paraffin**, and **Chemically Hydrogenated Soy**.
* **Founder's Story Section ("From Peter's Family to Yours")**: The 2006 origin story of Peter Meredith crafting candles to relieve his sons' asthma, partnering with regional NSW beekeepers.
* **Wall of Love**: Verified customer reviews from Brisbane, Sydney, Melbourne, and Northern NSW.
* **Clean Burning & Care FAQ Accordion**: Addresses customer concerns around burn time, scent intensity, pet safety, and negative ions.

---

### 2. **Dedicated Ad Campaign Landing Page (`src/pages/LandingPageAds.tsx`)**
* **Engineered for High ROAS (Meta, Google, TikTok Ads)**: Eliminates navigation drop-off and focuses on direct conversion.
* **Punchy Problem Hook**: *"Tired of Toxic Scented Candles Giving You Headaches? Switch to 100% Pure Organic Australian Beeswax."*
* **The "Soot Test" Before/After Card**: Side-by-side contrast of ordinary paraffin/soy (black soot, petroleum carcinogens, migraine triggers) vs. Happy Flame (negative ions, pure honey nectar, 3x longer burn).
* **Interactive 3-Tier Bundle Selector**:
  - **Tier 1**: Bedroom & Study Sanctuary ($49 AUD — Save 21%)
  - **Tier 2 (Most Popular)**: The Complete Family Clean-Air Haven ($89 AUD — Save 31% + Free Solid Brass Wick Trimmer + Free Express Shipping)
  - **Tier 3**: The Ultimate Master Homestead Reserve ($159 AUD — Save 32% + Brass Care Set + VIP Club)
* **30-Day "Clean Air or It's Free" Money-Back Guarantee Seal**: Eliminates purchase hesitation.
* **Direct Objection-Busting FAQs**: Answers specific questions ad-traffic buyers have before checking out.
* **Sticky Bottom Conversion Bar**: Keeps the selected bundle and 1-click purchase button within reach on desktop and mobile.

---

### 3. **Interactive Shopping & Checkout Infrastructure**
* **Sliding Cart Drawer (`src/components/CartDrawer.tsx`)**:
  - Live **Free Australia Shipping Progress Bar** ($90 AUD threshold).
  - Quantity steppers, remove items, itemized burn times.
  - Coupon code system (try `PUREFLAME15` for 15% off or `WELCOME10` for 10% off).
* **Product Quick View Modal (`src/components/ProductQuickViewModal.tsx`)**: High-res gallery, dimensions, wax weight, burn hours, negative ion highlights, and instant add-to-cart.
* **Interactive Checkout Modal (`src/components/CheckoutModal.tsx`)**: Australian address validation (NSW, VIC, QLD, WA, SA, TAS, ACT, NT), simulated Apple Pay / Credit Card payment, and order confirmation receipt with celebration confetti.
* **Global Fast-Switcher Dock**: A floating toggle pill at the bottom allowing instant switching between **"1. Homepage"** and **"2. Landing Page for ADs"**.

---

## 🚀 How to Run Locally

```bash
cd happyflame-frontend

# Install dependencies (if needed)
pnpm install

# Start Vite Development Server
pnpm run dev
```

Visit the local URL shown (typically `http://localhost:5173`).

---

## 🛠️ Tech Stack
* **Vite 8** + **React 19** + **TypeScript**
* **Tailwind CSS v4** (with `@tailwindcss/vite`)
* **Lucide React** (icons)
* **Canvas Confetti** (conversion celebrations)
* **Google Fonts**: *Playfair Display* (Editorial luxury serif) & *Plus Jakarta Sans* (Legible modern sans-serif)
