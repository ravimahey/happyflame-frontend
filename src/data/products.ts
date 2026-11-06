import type { Product, Review, BundleTier } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'tealights-pack-12',
    name: 'Pure Beeswax Tea Lights (Pack of 12)',
    subtitle: '100% Certified Organic NSW Beeswax in Reusable Cups',
    category: 'tealights',
    price: 36.00,
    originalPrice: 42.00,
    rating: 4.96,
    reviewCount: 842,
    burnTime: '5.5 - 6 hrs each (66+ hrs total)',
    dimensions: '38mm x 19mm',
    waxWeight: '240g total',
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80',
    badge: 'Bestseller #1',
    bestSeller: true,
    description: 'Our award-winning 100% pure beeswax tea lights emit a soft golden flame and a subtle natural sweet honey scent. Handcrafted with unbleached cotton wicks and clean-burning local beeswax that releases negative air ions to clear airborne allergens.',
    features: [
      '6 hours of continuous, soot-free burn per cup',
      'No paraffin, palm wax, soy, synthetic oils or artificial scents',
      'Natural honey scent that never causes headaches',
      'Naturally clears dust, allergens & pet dander from bedrooms'
    ],
    inStock: true
  },
  {
    id: 'honeycomb-pillar-large',
    name: 'Artisan Hand-Rolled Honeycomb Pillar',
    subtitle: 'Textured Northern Rivers NSW Honeycomb Beeswax',
    category: 'pillars',
    price: 48.00,
    rating: 4.98,
    reviewCount: 620,
    burnTime: '45 - 50 hrs',
    dimensions: '70mm x 150mm',
    waxWeight: '380g',
    image: 'https://images.unsplash.com/photo-1570823635306-250abb06d4b3?auto=format&fit=crop&w=800&q=80',
    badge: 'Artisan Crafted',
    bestSeller: true,
    description: 'Rolled by hand in our Murwillumbah workshop using textured organic comb sheets. Burns down with a majestic golden lantern effect as the outer honeycomb wall subtly glows with warm light.',
    features: [
      'Mesmerizing honeycomb glow effect when burning',
      'Zero synthetic toxins, paraffin or chemical stabilizers',
      'Thick natural cotton wick calibrated for wide melt pool',
      'Ideal for dinner centerpieces, meditation or mantlepieces'
    ],
    inStock: true
  },
  {
    id: 'solid-cylinder-pillar-tall',
    name: 'Solid Cast Beeswax Pillar (Tall)',
    subtitle: 'Dense, slow-burning golden pillar candle',
    category: 'pillars',
    price: 68.00,
    originalPrice: 75.00,
    rating: 4.94,
    reviewCount: 418,
    burnTime: '80 - 90 hrs',
    dimensions: '75mm x 180mm',
    waxWeight: '620g',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=800&q=80',
    badge: 'Extra Long Burn',
    description: 'Hand-poured using dense solid organic beeswax. With an astonishing 85+ hour burn time, this candle provides weeks of warm, non-toxic evening relaxation.',
    features: [
      '80+ hours of air-cleansing golden illumination',
      'Heavy cast base that burns flat without tunneling',
      '100% natural, unbleached square-braid cotton wick',
      'Smokeless, drip-resistant burn in draft-free spaces'
    ],
    inStock: true
  },
  {
    id: 'tapers-pair-dinner',
    name: 'Pure Beeswax Dinner Tapers (Pair)',
    subtitle: 'Classic 25cm hand-dipped dining candles',
    category: 'tapers',
    price: 24.00,
    rating: 4.92,
    reviewCount: 312,
    burnTime: '12 - 14 hrs each',
    dimensions: '22mm x 250mm',
    waxWeight: '190g pair',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    badge: 'Dinner Favorite',
    description: 'Dip-finished for a smooth, warm amber luster. Designed to fit standard candle holders, these elegant tapers burn clean with a bright, tall flame that elevates any dining table without competing with food aromas.',
    features: [
      'Zero petroleum paraffin or toxic fragrance oils',
      'Subtle natural honey aroma that enhances dinner ambiance',
      'Drip-free performance when kept away from heavy drafts',
      'Standard 22mm base fits almost all candelabras and holders'
    ],
    inStock: true
  },
  {
    id: 'votive-glass-fluted-set',
    name: 'Sanctuary Fluted Glass Votive Set',
    subtitle: '3 Pure Votives with Heavy Recycled Ribbed Glass',
    category: 'votives',
    price: 52.00,
    originalPrice: 60.00,
    rating: 4.97,
    reviewCount: 529,
    burnTime: '18 - 20 hrs per votive (60 hrs total)',
    dimensions: '55mm x 65mm glass',
    waxWeight: '320g total',
    image: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b8?auto=format&fit=crop&w=800&q=80',
    badge: 'Popular Gift',
    bestSeller: true,
    description: 'Includes 3 pure organic beeswax votives encased in thick, vintage-inspired fluted glass holders that refract the amber flame into radiant warm prisms across your room.',
    features: [
      'Includes 3 heavy reusable glass holders & 3 votives',
      'Refracts light into beautiful warm geometric patterns',
      'Safe and stable on bedside tables, tubs, or desks',
      'Refillable with our standard votive refill 6-packs'
    ],
    inStock: true
  },
  {
    id: 'clean-air-starter-sanctuary',
    name: 'The "Clean Air Sanctuary" Starter Bundle',
    subtitle: 'The Complete Asthma & Allergy-Safe Home Kit',
    category: 'bundles',
    price: 89.00,
    originalPrice: 119.00,
    rating: 4.99,
    reviewCount: 1120,
    burnTime: '140+ hrs total burn',
    dimensions: 'Curated Gift Box',
    waxWeight: '880g wax',
    image: 'https://images.unsplash.com/photo-1608181114410-db2bb21cd494?auto=format&fit=crop&w=800&q=80',
    badge: 'Save 25% | Most Popular',
    bestSeller: true,
    description: 'Our most celebrated bundle designed for families switching from toxic paraffin candles to clean living. Includes 12x Tea Lights, 1x Textured Honeycomb Pillar, 1x Solid Cast Pillar, and a Solid Brass Wick Trimmer.',
    features: [
      'Over 140 hours of headache-free, air-purifying light',
      'Free Solid Brass Wick Trimmer included ($24 value)',
      'Delivered in sustainable, plastic-free gift packaging',
      'Backed by our 30-Day "Pure Air or Free" Guarantee'
    ],
    inStock: true
  },
  {
    id: 'lotus-meditation-candle',
    name: 'Carved Lotus Flower Meditation Candle',
    subtitle: 'Sculptural organic wax candle for mindfulness',
    category: 'votives',
    price: 34.00,
    rating: 4.89,
    reviewCount: 198,
    burnTime: '24 hrs',
    dimensions: '90mm diameter x 55mm',
    waxWeight: '220g',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=800&q=80',
    badge: 'Meditation Favorite',
    description: 'Sculpted in the shape of an unfolding lotus flower. Cast using Northern Rivers organic beeswax, perfect for yoga spaces, altars, or intentional wind-down evening routines.',
    features: [
      'Sculptural petal geometry that melts organically into a radiant pool',
      'Negative ions reduce static and pollen in breathing spaces',
      'Subtle sweet wildflower honey scent straight from the hive',
      'Wonderful thoughtful gift for mindfulness enthusiasts'
    ],
    inStock: true
  },
  {
    id: 'tea-lights-bulk-refill-48',
    name: 'Family Sanctuary Tea Lights Bulk Pack (48 Refills)',
    subtitle: 'Zero-Waste Naked Beeswax Refills for Daily Burning',
    category: 'tealights',
    price: 98.00,
    originalPrice: 128.00,
    rating: 4.99,
    reviewCount: 785,
    burnTime: '280+ total burn hours',
    dimensions: 'Bulk Carton',
    waxWeight: '960g pure wax',
    image: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Value Refill',
    description: 'For households that light a candle every single evening. Naked cups with zero single-use metal tins. Just drop into your existing glass tea light holders for pure, effortless atmosphere.',
    features: [
      '280+ hours of continuous clean living illumination',
      'Zero-waste plastic-free cardboard packaging',
      'Save over $30 compared to individual packs',
      'Guaranteed 100% pure Australian organic beeswax'
    ],
    inStock: true
  }
];

export const BUNDLE_TIERS: BundleTier[] = [
  {
    id: 'bundle-starter',
    name: 'The Bedroom & Study Sanctuary',
    tagline: 'Ideal for testing clean air living in your primary room',
    price: 49.00,
    originalPrice: 62.00,
    savings: 'Save $13 (21% Off)',
    burnHoursTotal: '60+ Hours',
    itemsIncluded: [
      '12x Pure Organic Beeswax Tea Lights (6 hrs each)',
      '1x Hand-rolled Honeycomb Candle (15 hrs)',
      '1x Organic Cotton Travel Pouch',
      'Digital Guide: "The Lost Art of Clean Burning"'
    ],
    image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bundle-sanctuary',
    name: 'The Complete Family Clean-Air Haven',
    tagline: 'Transform your entire living room & bedrooms into non-toxic sanctuaries',
    badge: 'MOST POPULAR (78% of customers choose this)',
    price: 89.00,
    originalPrice: 129.00,
    savings: 'Save $40 (31% Off)',
    burnHoursTotal: '145+ Hours',
    recommended: true,
    itemsIncluded: [
      '12x Pure Organic Beeswax Tea Lights in Reusable Cups',
      '1x Large Textured Honeycomb Pillar (45 hrs)',
      '1x Solid Cast Slow-Burn Beeswax Pillar (70 hrs)',
      '2x Elegant Fluted Glass Votive Holders',
      'FREE Solid Matte Brass Wick Trimmer ($24 value)'
    ],
    bonusGift: 'FREE Brass Wick Trimmer + Free Express Shipping across Australia',
    image: 'https://images.unsplash.com/photo-1608181114410-db2bb21cd494?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bundle-ultimate',
    name: 'The Ultimate Master Homestead Reserve',
    tagline: 'Year-round non-toxic illumination for the conscious home',
    badge: 'BEST VALUE',
    price: 159.00,
    originalPrice: 235.00,
    savings: 'Save $76 (32% Off)',
    burnHoursTotal: '320+ Hours',
    itemsIncluded: [
      '24x Pure Beeswax Tea Lights',
      '2x Large Textured Honeycomb Pillars',
      '1x Extra-Tall Solid Pillar (90 hrs)',
      '2x Pairs of Hand-dipped Dinner Tapers (4 candles)',
      '2x Sanctuary Fluted Glass Holders',
      'FREE Solid Brass Wick Trimmer & Snuffer Set ($45 value)'
    ],
    bonusGift: 'FREE Brass Care Set + Lifetime 15% VIP Refill Club Access',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=600&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Sarah M.',
    location: 'Brisbane, QLD',
    rating: 5,
    date: '3 days ago',
    title: 'No more sinus headaches or itchy eyes!',
    comment: 'I love candles but had given up on them because every scented soy or paraffin candle gave me a splitting migraine within 20 minutes. Happy Flame has completely changed my home. We burn these tea lights every evening while putting the kids to bed. The honey scent is gentle and calming, and my lungs feel clear!',
    verified: true,
    productName: 'Pure Beeswax Tea Lights (Pack of 12)'
  },
  {
    id: 'rev-2',
    author: 'David & Linda K.',
    location: 'Murwillumbah, NSW',
    rating: 5,
    date: '1 week ago',
    title: 'Incredible burn time and bright steady flame',
    comment: 'We visited their workshop in northern NSW and were blown away by the care Peter puts into selecting raw organic beeswax from ethical beekeepers. These honeycomb pillars burn so much brighter than ordinary candles. It actually feels like a little open fireplace in our room.',
    verified: true,
    productName: 'Artisan Hand-Rolled Honeycomb Pillar'
  },
  {
    id: 'rev-3',
    author: 'Elena T.',
    location: 'Melbourne, VIC',
    rating: 5,
    date: '2 weeks ago',
    title: 'My son with asthma can finally have candles at home',
    comment: 'As an asthmatic household, we strictly avoided candles for 6 years. Read about the negative ion science of pure beeswax and took a leap on the Starter Sanctuary. Zero coughing, zero soot on the ceiling, and the air genuinely feels crisper like after a rainstorm. Outstanding Australian craftsmanship.',
    verified: true,
    productName: 'The "Clean Air Sanctuary" Starter Bundle'
  },
  {
    id: 'rev-4',
    author: 'Marcus P.',
    location: 'Sydney, NSW',
    rating: 5,
    date: '3 weeks ago',
    title: 'The dinner tapers are pure perfection',
    comment: 'Held a dinner party for 8 last Saturday. Everyone remarked on how gorgeous the warm amber flame was and how nice it was not to be choked out by artificial vanilla chemicals while eating gourmet food. 10/10.',
    verified: true,
    productName: 'Pure Beeswax Dinner Tapers (Pair)'
  }
];

export const COMPARISON_DATA = [
  {
    feature: 'Wax Source',
    beeswax: '100% Certified Organic Australian Beeswax from Northern Rivers NSW',
    paraffin: 'Crude petroleum / crude oil industrial refinery sludge',
    soy: 'Genetically modified chemically hydrogenated soybeans bleached with hexane'
  },
  {
    feature: 'Air Quality Effect',
    beeswax: 'Produces negative ions that naturally neutralize airborne dust, mold & allergens',
    paraffin: 'Emits carcinogenic toluene, benzene & petro-chemical soot into your lungs',
    soy: 'Often mixed with paraffin or toxic synthetic fragrance stabilizers'
  },
  {
    feature: 'Burn Time',
    beeswax: 'Burns 2x to 3x longer than paraffin due to higher melting point (63°C)',
    paraffin: 'Burns quickly and unevenly, creates messy tunneling and hot drips',
    soy: 'Burns quickly, often softens and loses shape in warm Australian weather'
  },
  {
    feature: 'Natural Aroma',
    beeswax: 'Mild, sweet, grounding nectar and honey aroma straight from the hive',
    paraffin: 'Unpleasant chemical kerosene odor masked with artificial phthalate perfume',
    soy: 'Burnt oil smell masked with chemical fragrance boosters'
  },
  {
    feature: 'Asthma & Pet Friendly',
    beeswax: '100% hypoallergenic, doctor and naturopath endorsed for sensitive lungs',
    paraffin: 'Triggers coughing, headaches, allergic rhinitis & pet respiratory irritation',
    soy: 'Fragrance chemicals frequently trigger pet distress & headaches'
  },
  {
    feature: 'Environmental Impact',
    beeswax: 'Carbon-neutral, supporting local Australian beekeepers and bee colonies',
    paraffin: 'Non-renewable fossil fuel extracted through intensive petrochemical mining',
    soy: 'Linked to large-scale monoculture pesticide use and deforestation'
  }
];

export const FAQS = [
  {
    question: 'How do beeswax candles actually purify the air with negative ions?',
    answer: 'Pure beeswax is the only wax known to naturally emit negative ions when burned. Airborne pollutants, dust particles, pollen, pet dander, and odors carry a positive electrical charge that keeps them floating in your breathing space. The negative ions released by our pure beeswax bond with these positive particles, weighting them down so they harmlessly drop out of the air you breathe — working just like a natural rainstorm clears the atmosphere.'
  },
  {
    question: 'Why does Happy Flame never add synthetic essential oils or perfumes?',
    answer: 'Pure Australian beeswax already contains natural propolis, honey nectar, and pollen from native eucalyptus and wildflower blooms. Heating delicate synthetic perfumes or even high concentrations of essential oils damages their structure and produces VOCs that irritate sensitive bronchial airways. Our candles offer a delicate, natural honey-spun warmth that calms the senses without ever triggering migraines.'
  },
  {
    question: 'How does Happy Flame support Australian beekeepers?',
    answer: 'We only partner with ethical Australian beekeepers in the Northern Rivers and regional New South Wales who prioritize bee health over honey yield. Beeswax is an organic byproduct of honeycomb maintenance. By purchasing our candles, you directly inject vital financial support into regional apiaries and help maintain thriving bee populations across Australia.'
  },
  {
    question: 'How long do your beeswax candles really burn compared to standard candles?',
    answer: 'Beeswax has the highest melting point of any known wax (approximately 63°C / 145°F). Because of this high density, our candles burn noticeably slower, cooler, and longer — typically 2.5 to 3 times longer than standard paraffin candles of the same size. A single Happy Flame tea light burns for 5.5 to 6 hours, while our tall pillars can burn for over 85 hours.'
  },
  {
    question: 'What is your 30-Day "Clean Air" Guarantee?',
    answer: 'We want every Australian family to experience genuine clean-air living risk-free. If you burn Happy Flame candles in your home and do not immediately feel the difference in air quality, burn brightness, and calm ambiance within 30 days, simply contact Peter and the team for a full 100% refund — no hassles and no tricky fine print.'
  }
];
