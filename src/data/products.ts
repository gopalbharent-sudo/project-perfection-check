import nightCreamImg from "../assets/glowaura-b3-night-cream.jpg";
import heroImg from "../assets/glowaura-b3-hero.jpg";
import serumImg from "../assets/glowaura-serum.jpg";
import faceWashImg from "../assets/glowaura-facewash.jpg";
import lotionImg from "../assets/glowaura-lotion.jpg";
import eyeGelImg from "../assets/p-eye-gel.jpg";
import scrubImg from "../assets/p-scrub.jpg";
import hairSerumImg from "../assets/p-hair-serum.jpg";
import lipBalmImg from "../assets/p-lip-balm.jpg";
import soapImg from "../assets/p-soap.jpg";
import glofineAdvanceImg from "../assets/glofine-advance-face-cream.jpg";
import glutafineSoapImg from "../assets/glutafine-soap.jpg";
import glofineForteImg from "../assets/glofine-forte-tablet.jpg";
import glofineCreamImg from "../assets/glofine-cream-50g.jpg";
import glowfineBImg from "../assets/glowfine-b-lightening-cream.jpg";
import glofineKitImg from "../assets/glofine-kit.jpg";

export type Spec = { label: string; value: string };

export type Product = {
  name: string;
  image: string;
  alt: string;
  tag: string;
  price: string;
  size: string;
  description: string;
  details: string[];
  benefits: string[];
  specs: Spec[];
  usage: string;
};

const madeIn: Spec = { label: "Origin", value: "Made in India" };
const forAll: Spec = { label: "For", value: "Men & Women · All skin types" };

export const collection: Product[] = [
  {
    name: "Skin Whitening & Serum Body Cream",
    image: heroImg,
    alt: "Glowaura-B3 Skin Whitening & Serum Body Cream jar beside its black and gold gift box",
    tag: "Body · Bestseller",
    price: "₹1,049",
    size: "250 g",
    description:
      "The signature 2-in-1 cream and serum that lightens, brightens and deeply hydrates the whole body with Niacinamide (Vitamin B3).",
    details: ["Net Weight: 250 g", "₹1,049 (Incl. of all taxes)", "7 Days Result"],
    benefits: [
      "Visibly lightens and brightens overall skin tone",
      "Deep hydration with a silky serum-cream texture",
      "Fades the look of dark spots and uneven patches",
      "Lightweight, non-greasy, daily-use formula",
    ],
    specs: [
      { label: "Net Weight", value: "250 g" },
      { label: "Key Actives", value: "Niacinamide, Hyaluronic Acid, Vitamin E" },
      forAll,
      madeIn,
    ],
    usage:
      "Apply generously over clean, dry skin twice daily and massage until fully absorbed. Best used morning and night.",
  },
  {
    name: "Glofine Advance Glutathione Face Cream",
    image: glofineAdvanceImg,
    alt: "Glofine Advance glutathione face cream pink pump bottle beside its pink carton",
    tag: "Face · Advance",
    price: "₹949",
    size: "30 g",
    description:
      "A rejuvenating glutathione face cream with Clair Blanche-ii and Hymagic 4D that brightens dull skin and restores bounce — free from paraben, sulfates, phthalate and silicones.",
    details: ["Net Qty: 30 g (1.01 oz)", "Glutathione 2% + Clair Blanche-ii 2%", "₹949"],
    benefits: [
      "Rejuvenating and skin-brightening daily cream",
      "Glutathione 2% with Hymagic 4D for deep hydration",
      "Free from paraben, sulfates, phthalate and silicones",
      "Airless pump keeps the actives fresh",
    ],
    specs: [
      { label: "Net Qty", value: "30 g (1.01 OZ)" },
      { label: "M.R.P.", value: "₹949 (incl. of all taxes)" },
      { label: "Key Actives", value: "Glutathione 2%, Clair Blanche-ii 2%, Hymagic 4D 2%" },
      forAll,
      madeIn,
    ],
    usage: "Pump a pea-sized amount onto cleansed skin and massage gently over face and neck, morning and night.",
  },
  {
    name: "Skin Whitening & Serum Night Cream",
    image: nightCreamImg,
    alt: "Glowaura-B3 Skin Whitening & Serum Night Cream crystal jar beside its maroon and gold box",
    tag: "Night · New Arrival",
    price: "₹899",
    size: "30 g",
    description:
      "An overnight treatment cream that works while you sleep — an advanced formula for acne and dark spot care, with visible results in 7 days.",
    details: ["Net Weight: 30 g", "₹899 (Incl. of all taxes)", "7 Days Result"],
    benefits: [
      "Advanced night formula for acne and dark spot care",
      "Brightens and evens out skin tone overnight",
      "Visible results in as little as 7 days",
      "Non-greasy, fast-absorbing serum-cream texture",
    ],
    specs: [
      { label: "Net Weight", value: "30 g" },
      { label: "M.R.P.", value: "₹899 (incl. of all taxes)" },
      { label: "Unit Price", value: "₹29.96 per gram" },
      forAll,
      madeIn,
    ],
    usage:
      "Cleanse and pat dry at night. Massage a small amount over face and neck in upward circular motions. Leave on overnight and rinse in the morning.",
  },
  {
    name: "Glutafine Rich Creamy Soap",
    image: glutafineSoapImg,
    alt: "Glutafine rich creamy soap 75 g in a deep maroon carton",
    tag: "Bath · Lightening",
    price: "₹249",
    size: "75 g",
    description:
      "A rich, creamy cleansing bar with Glutathione, Kojic Acid and Vitamin C that lightens and brightens skin with every wash.",
    details: ["Net Weight: 75 g", "Glutathione + Kojic Acid + Vitamin C", "₹249"],
    benefits: [
      "Lightening and brightening with daily use",
      "Rich creamy lather that never dries skin",
      "Kojic acid helps fade tan and dark patches",
      "Gentle enough for face and body",
    ],
    specs: [
      { label: "Net Weight", value: "75 g" },
      { label: "M.R.P.", value: "₹249 (incl. of all taxes)" },
      { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
      forAll,
      madeIn,
    ],
    usage: "Lather over damp skin, leave for 30 seconds, then rinse. Use twice daily.",
  },
  {
    name: "Brightening Face Serum",
    image: serumImg,
    alt: "Glowaura-B3 Brightening Face Serum in a black glass dropper bottle with gold accents",
    tag: "Face · Concentrate",
    price: "₹749",
    size: "30 ml",
    description:
      "A featherlight concentrate that targets dullness and uneven tone. Two to three drops leave skin luminous and refined.",
    details: ["Niacinamide + Vitamin C", "30 ml · Dropper bottle", "₹749"],
    benefits: [
      "Targets dullness, pigmentation and uneven tone",
      "10% Niacinamide with stabilised Vitamin C",
      "Absorbs instantly with zero stickiness",
      "Layers beautifully under cream or sunscreen",
    ],
    specs: [
      { label: "Volume", value: "30 ml" },
      { label: "M.R.P.", value: "₹749 (incl. of all taxes)" },
      { label: "Key Actives", value: "Niacinamide 10%, Vitamin C" },
      forAll,
      madeIn,
    ],
    usage: "Apply 2–3 drops on cleansed skin morning and night, then follow with moisturiser.",
  },
  {
    name: "Glofine Forte L-Glutathione Tablet",
    image: glofineForteImg,
    alt: "Glofine Forte L-Glutathione tablet pink carton with a silver blister strip",
    tag: "Supplement · Inner Glow",
    price: "₹1,299",
    size: "3 x 10 Tablets",
    description:
      "A nutraceutical L-Glutathione tablet with Vitamin C, NAC, Alpha Lipoic Acid, Saberry Astaxanthin and Vitamin E that works on pigmentation from within.",
    details: ["Nutraceutical · 3 x 10 Tablets", "L-Glutathione + Vitamin C + ALA", "₹1,299"],
    benefits: [
      "Regulates melanin synthesis and reduces pigmentation",
      "Saberry protects against wrinkling and elasticity loss",
      "Helps fasten collagen production",
      "Antioxidant support with Vitamin C and E",
    ],
    specs: [
      { label: "Pack", value: "3 x 10 tablets" },
      { label: "M.R.P.", value: "₹1,299 (incl. of all taxes)" },
      { label: "Key Actives", value: "L-Glutathione, Vitamin C, NAC, Alpha Lipoic Acid, Astaxanthin" },
      { label: "Type", value: "Nutraceutical · Vegetarian" },
      madeIn,
    ],
    usage: "Take one tablet daily after a meal, or as directed by a physician.",
  },
  {
    name: "Gentle Foaming Face Wash",
    image: faceWashImg,
    alt: "Glowaura-B3 Gentle Foaming Face Wash in a matte black pump bottle with gold accents",
    tag: "Cleanse · Daily",
    price: "₹499",
    size: "150 ml",
    description:
      "A soft, cloud-like foam that lifts away impurities without stripping. Skin feels clean, calm and comfortable — never tight.",
    details: ["pH-balanced formula", "150 ml · Pump bottle", "₹499"],
    benefits: [
      "Removes oil, dirt and pollution in one wash",
      "pH-balanced, sulphate-free lather",
      "Keeps the moisture barrier intact",
      "Suitable for twice-daily use",
    ],
    specs: [
      { label: "Volume", value: "150 ml" },
      { label: "M.R.P.", value: "₹499 (incl. of all taxes)" },
      { label: "Formula", value: "Sulphate-free · pH 5.5" },
      forAll,
      madeIn,
    ],
    usage: "Pump onto damp skin, massage into a lather for 30 seconds, rinse with lukewarm water.",
  },
  {
    name: "Glofine Rejuvenating Cream",
    image: glofineCreamImg,
    alt: "Glofine rejuvenating and skin brightening cream 50 g in a teal and black carton",
    tag: "Face · Rejuvenate",
    price: "₹799",
    size: "50 g",
    description:
      "A rejuvenating and skin-brightening cream with Glutathione, Kojic Acid and Vitamin C for a clearer, more even complexion.",
    details: ["Net Weight: 50 g", "Glutathione, Kojic Acid & Vitamin C", "₹799"],
    benefits: [
      "Brightens dull, tired-looking skin",
      "Kojic acid targets stubborn dark spots",
      "Vitamin C adds antioxidant protection",
      "Smooth, non-greasy everyday texture",
    ],
    specs: [
      { label: "Net Weight", value: "50 g" },
      { label: "M.R.P.", value: "₹799 (incl. of all taxes)" },
      { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
      forAll,
      madeIn,
    ],
    usage: "Apply a thin layer over cleansed face and neck twice daily and massage until absorbed.",
  },
  {
    name: "Radiance Body Lotion",
    image: lotionImg,
    alt: "Glowaura-B3 Radiance Body Lotion in a tall matte black bottle with gold cap",
    tag: "Body · Hydration",
    price: "₹599",
    size: "200 ml",
    description:
      "A silky daily lotion that wraps skin in lasting moisture and a subtle, healthy sheen — the perfect companion to the Body Cream.",
    details: ["48-hour hydration", "200 ml · Disc cap", "₹599"],
    benefits: [
      "48-hour continuous hydration",
      "Adds a soft, natural luminosity",
      "Absorbs in seconds, no sticky film",
      "Softens rough elbows, knees and ankles",
    ],
    specs: [
      { label: "Volume", value: "200 ml" },
      { label: "M.R.P.", value: "₹599 (incl. of all taxes)" },
      { label: "Key Actives", value: "Shea Butter, Niacinamide" },
      forAll,
      madeIn,
    ],
    usage: "Smooth over the whole body after a shower while skin is still slightly damp.",
  },
  {
    name: "Glowfine-B Skin Lightening Cream",
    image: glowfineBImg,
    alt: "Glowfine-B skin lightening cream tube beside its white and teal carton",
    tag: "Face · Lightening",
    price: "₹699",
    size: "30 g",
    description:
      "An advanced skin lightening and brightening cream with Glutathione, Vitamin C, Alpha Arbutin, Licorice and Kojic Acid Dipalmitate.",
    details: ["Net Weight: 30 g", "Alpha Arbutin + Licorice", "₹699"],
    benefits: [
      "Advanced formula for lightening and brightening",
      "Alpha Arbutin and Licorice calm pigmentation",
      "Kojic Acid Dipalmitate for a gentler fade",
      "Light tube cream, ideal for daily use",
    ],
    specs: [
      { label: "Net Weight", value: "30 g" },
      { label: "M.R.P.", value: "₹699 (incl. of all taxes)" },
      { label: "Key Actives", value: "Glutathione, Vitamin C, Alpha Arbutin, Licorice, Kojic Acid Dipalmitate" },
      forAll,
      madeIn,
    ],
    usage: "Massage a small quantity over clean skin twice daily, ideally morning and bedtime.",
  },
  {
    name: "Under Eye Gel Cream",
    image: eyeGelImg,
    alt: "Glowaura-B3 Under Eye Gel Cream in a small black jar with a gold band",
    tag: "Eyes · Targeted",
    price: "₹649",
    size: "15 g",
    description:
      "A cooling caffeine and peptide gel that de-puffs tired eyes and gradually softens the look of dark circles.",
    details: ["Net Weight: 15 g", "Caffeine + Peptides", "₹649"],
    benefits: [
      "Reduces puffiness from the first use",
      "Softens dark circles over 4–6 weeks",
      "Hydrates fine lines around the eye",
      "Fragrance-free, ophthalmologically safe",
    ],
    specs: [
      { label: "Net Weight", value: "15 g" },
      { label: "M.R.P.", value: "₹649 (incl. of all taxes)" },
      { label: "Key Actives", value: "Caffeine, Peptides, Vitamin K" },
      forAll,
      madeIn,
    ],
    usage: "Tap a rice-grain amount around each eye with the ring finger, morning and night.",
  },
  {
    name: "Glofine Forte Skin Whitening Kit",
    image: glofineKitImg,
    alt: "Glofine Forte skin whitening kit with tablets, cream jar and soap bar in teal packaging",
    tag: "Kit · Complete Routine",
    price: "₹2,199",
    size: "Tablets + Cream 50 g + Soap 75 g",
    description:
      "The complete Glofine whitening routine — Forte tablets, the 50 g cream and the 75 g soap in one value kit that works inside and out.",
    details: ["Tablets + Cream 50 g + Soap 75 g", "Complete 30-day routine", "₹2,199"],
    benefits: [
      "Inside-out approach to pigmentation",
      "Cream, cleanser and supplement in one kit",
      "Better value than buying each separately",
      "Simple morning and night routine",
    ],
    specs: [
      { label: "Contents", value: "Forte tablets, Cream 50 g, Soap 75 g" },
      { label: "M.R.P.", value: "₹2,199 (incl. of all taxes)" },
      { label: "Key Actives", value: "Glutathione, Kojic Acid, Vitamin C" },
      forAll,
      madeIn,
    ],
    usage: "Wash with the soap, apply the cream morning and night, and take one tablet daily after a meal.",
  },
  {
    name: "Gold Radiance Face Scrub",
    image: scrubImg,
    alt: "Glowaura-B3 Gold Radiance Face Scrub in a black jar with gold lid and a scrub swatch",
    tag: "Exfoliate · Weekly",
    price: "₹549",
    size: "100 g",
    description:
      "A gold-flecked polishing scrub with walnut micro-beads and fruit AHAs that reveals fresh, glowing skin in one use.",
    details: ["Net Weight: 100 g", "AHA + Walnut beads", "₹549"],
    benefits: [
      "Sweeps away dead cells and blackheads",
      "Instant post-scrub glow",
      "Helps creams absorb far better",
      "Gentle enough for weekly use",
    ],
    specs: [
      { label: "Net Weight", value: "100 g" },
      { label: "M.R.P.", value: "₹549 (incl. of all taxes)" },
      { label: "Key Actives", value: "Fruit AHA, 24K gold flakes" },
      forAll,
      madeIn,
    ],
    usage: "Massage over damp skin in circles for one minute, twice a week. Rinse well.",
  },
  {
    name: "Silk Repair Hair Serum",
    image: hairSerumImg,
    alt: "Glowaura-B3 Silk Repair Hair Serum in a black bottle with gold pump",
    tag: "Hair · Shine",
    price: "₹599",
    size: "100 ml",
    description:
      "A non-sticky argan and keratin serum that seals split ends, tames frizz and leaves hair mirror-glossy.",
    details: ["Argan + Keratin", "100 ml · Pump bottle", "₹599"],
    benefits: [
      "Controls frizz for up to 24 hours",
      "Adds salon-level shine instantly",
      "Heat protection up to 200°C",
      "Lightweight — never weighs hair down",
    ],
    specs: [
      { label: "Volume", value: "100 ml" },
      { label: "M.R.P.", value: "₹599 (incl. of all taxes)" },
      { label: "Key Actives", value: "Argan oil, Hydrolysed Keratin" },
      { label: "For", value: "All hair types" },
      madeIn,
    ],
    usage: "Rub 2–3 pumps between palms and glide through damp or dry mid-lengths and ends.",
  },
  {
    name: "Tinted Lip Care Balm",
    image: lipBalmImg,
    alt: "Glowaura-B3 tinted lip balm in a black and gold twist-up case",
    tag: "Lips · Care",
    price: "₹299",
    size: "4.5 g",
    description:
      "A buttery tinted balm with shea and Vitamin E that lightens pigmented lips while adding a natural rose flush.",
    details: ["Net Weight: 4.5 g", "Shea + Vitamin E", "₹299"],
    benefits: [
      "Heals dry, chapped lips overnight",
      "Gradually lightens smoker's pigmentation",
      "Sheer rose tint suits every complexion",
      "SPF 15 daylight protection",
    ],
    specs: [
      { label: "Net Weight", value: "4.5 g" },
      { label: "M.R.P.", value: "₹299 (incl. of all taxes)" },
      { label: "Protection", value: "SPF 15" },
      forAll,
      madeIn,
    ],
    usage: "Glide over lips whenever needed, and generously before bed.",
  },
  {
    name: "Charcoal Detox Soap Bar",
    image: soapImg,
    alt: "Glowaura-B3 charcoal detox soap bar with gold flecks on a dark stone slab",
    tag: "Bath · Detox",
    price: "₹199",
    size: "100 g",
    description:
      "A cold-processed activated charcoal bar with tea tree that draws out oil and grime — ideal for acne-prone body skin.",
    details: ["Net Weight: 100 g", "Charcoal + Tea tree", "₹199"],
    benefits: [
      "Deep-cleans clogged pores",
      "Controls body acne and back breakouts",
      "Balances excess oil without dryness",
      "Handmade, cold-processed bar",
    ],
    specs: [
      { label: "Net Weight", value: "100 g" },
      { label: "M.R.P.", value: "₹199 (incl. of all taxes)" },
      { label: "Key Actives", value: "Activated charcoal, Tea tree oil" },
      forAll,
      madeIn,
    ],
    usage: "Lather and massage over face or body, leave for 30 seconds, then rinse thoroughly.",
  },
];
