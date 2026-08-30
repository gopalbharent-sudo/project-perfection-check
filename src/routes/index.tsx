import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "../components/Reveal";
import { SiteHeader } from "../components/SiteHeader";
import { ScrollProgress } from "../components/ScrollProgress";
import { SmartImage } from "../components/SmartImage";
import heroImg from "../assets/glowaura-b3-hero.jpg";
import logoImg from "../assets/glowaura-b3-logo.png";
import nightCreamImg from "../assets/glowaura-b3-night-cream.jpg";
import nightCreamOpenImg from "../assets/glowaura-night-cream-open.jpg";
import { collection } from "../data/products";
import { ProductCard } from "../components/ProductCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Glowaura-B3 — Skin Whitening & Serum Night Cream" },
      {
        name: "description",
        content:
          "Glowaura-B3 Skin Whitening & Serum Night Cream — an advanced formula for acne & dark spot care, visible results in 7 days. For men & women, all skin types.",
      },
      { property: "og:title", content: "Glowaura-B3 — Skin Whitening & Serum Night Cream" },
      {
        property: "og:description",
        content:
          "Advanced night formula for acne & dark spot care. Visible results in 7 days. For men & women, all skin types.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Glowaura-B3 Skin Whitening & Serum Night Cream",
          brand: { "@type": "Brand", name: "Glowaura-B3" },
          description:
            "Advanced night cream formula for acne & dark spot care. For men & women, all skin types.",
          countryOfOrigin: "IN",
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: "899",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const highlights = [
  { value: "7", label: "Days visible result" },
  { value: "B3", label: "Niacinamide powered" },
  { value: "2-in-1", label: "Cream & serum" },
  { value: "All", label: "Skin types" },
];

const benefits = [
  "Advanced night formula for acne and dark spot care",
  "Brightens and evens out skin tone while you sleep",
  "Visible results in as little as 7 days of nightly use",
  "Non-greasy, fast-absorbing serum-cream texture",
  "Formulated for men & women, all skin types",
];

const ingredients = [
  {
    name: "Niacinamide (Vitamin B3)",
    note: "The hero brightener — evens tone and supports the skin barrier.",
  },
  { name: "Hyaluronic Acid", note: "Draws in moisture for a plump, dewy feel all day." },
  { name: "Botanical Extracts", note: "Soothe and condition skin with every application." },
  { name: "Vitamin E", note: "Antioxidant care that keeps skin soft and supple." },
];

const ritual = [
  { step: "01", title: "Cleanse", note: "Cleanse and pat the face dry before bed." },
  { step: "02", title: "Apply", note: "Massage a small amount over face and neck in upward circles." },
  { step: "03", title: "Absorb", note: "Let the serum-cream sink in overnight — no greasy residue." },
  { step: "04", title: "Repeat", note: "Every night for seven days to see the glow settle in." },
];

const nightSpecs = [
  { label: "Net Weight", value: "30 g" },
  { label: "Net Qty", value: "1 N" },
  { label: "Unit Price", value: "₹29.96 / gram" },
  { label: "Skin Types", value: "All skin types" },
  { label: "For", value: "Men & Women" },
  { label: "Origin", value: "Made in India" },
];

const bodyCream = {
  name: "Skin Whitening & Serum Body Cream",
  image: heroImg,
  alt: "Glowaura-B3 Skin Whitening & Serum Body Cream jar beside its black and gold gift box on black marble",
  tag: "Body · Signature",
  price: "₹1,049",
  description:
    "Skin Whitening & Serum Body Cream — an advanced formula for skin lightening & brightening, crafted for men & women and every skin type, with visible results in 7 days.",
  specs: [
    { label: "Net Weight", value: "250 g" },
    { label: "Net Qty", value: "1 N" },
    { label: "Skin Types", value: "All skin types" },
    { label: "For", value: "Men & Women" },
    { label: "Origin", value: "Made in India" },
  ],
  benefits: [
    "Visibly lightens and brightens skin tone",
    "Deeply hydrates with a silky serum-cream texture",
    "Helps fade the look of dark spots and uneven patches",
    "Lightweight, fast-absorbing, non-greasy finish",
    "Gentle enough for daily use on the whole body",
  ],
  usage:
    "Apply a generous amount to clean, dry skin and massage in gentle circular motions until fully absorbed. Use twice daily — morning and evening — for best results. Suitable for the whole body, including hands, elbows, knees, and areas prone to dullness.",
};

function GoldDivider() {
  return (
    <div className="mx-auto flex w-full max-w-xs items-center gap-3" aria-hidden="true">
      <span className="hairline-gold flex-1" />
      <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <span className="hairline-gold flex-1" />
    </div>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gold sm:text-xs sm:tracking-luxe">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance font-display text-[1.9rem] font-semibold leading-[1.15] text-ivory sm:mt-4 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mt-5 sm:mt-6">
        <GoldDivider />
      </div>
    </div>
  );
}

function LandingPage() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(60% 50% at 50% 0%, oklch(0.62 0.13 85 / 14%), transparent 70%)",
            }}
          />
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 relative grid items-center gap-10 py-12 sm:gap-12 sm:py-20 lg:grid-cols-2 lg:py-28">
            <div className="text-center lg:text-left">
              <p className="animate-rise text-[0.6rem] font-medium uppercase tracking-[0.28em] text-gold sm:text-xs sm:tracking-luxe">
                Premium Skincare Collection
              </p>
              <h1 className="animate-rise-late mt-4 font-display text-[2.9rem] font-semibold leading-[1.05] text-ivory sm:mt-6 sm:text-6xl lg:text-7xl">
                Glowaura<span className="text-gold-gradient">-B3</span>
              </h1>
              <p className="animate-rise-late mx-auto mt-4 max-w-xl text-pretty text-base font-light leading-relaxed text-muted-foreground sm:mt-6 sm:text-xl lg:mx-0">
                Skin Whitening &amp; Serum Night Cream — an advanced formula for acne &amp; dark
                spot care, crafted for men &amp; women and every skin type.
              </p>

              <div className="animate-rise-latest mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[0.6rem] uppercase tracking-[0.2em] text-gold-soft sm:mt-9 sm:text-sm lg:justify-start">
                <span>For Men &amp; Women</span>
                <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden="true" />
                <span>All Skin Types</span>
                <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden="true" />
                <span>7 Days Result</span>
              </div>

              {/* Price */}
              <div className="animate-rise-latest glass-card ring-gold mt-7 w-full rounded-2xl border border-gold/40 px-5 py-5 text-center sm:mt-10 sm:inline-block sm:w-auto sm:px-7 lg:text-left">
                <p className="text-[0.58rem] uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
                  M.R.P. (Incl. of all taxes)
                </p>
                <p className="mt-2 font-display text-4xl font-semibold text-gold-gradient sm:text-5xl">
                  ₹899
                </p>
                <p className="mt-1 text-[0.7rem] font-light text-muted-foreground sm:text-xs">
                  Rupees Eight Hundred Ninety Nine Only · Net Weight: 30 g · Net Qty: 1 N
                </p>
              </div>

              <div className="animate-rise-latest mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <a
                  href="#collection"
                  className="tap-target inline-flex items-center justify-center rounded-full bg-gold-bar px-7 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-background shadow-luxe transition-all duration-500 hover:brightness-110 active:scale-[0.97]"
                >
                  Explore the collection
                </a>
                <a
                  href="#signature"
                  className="tap-target inline-flex items-center justify-center rounded-full border border-gold/45 px-7 py-3 text-[0.65rem] uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold/10 active:scale-[0.97]"
                >
                  The signature cream
                </a>
              </div>
            </div>

            <figure className="animate-rise-late">
              <SmartImage
                src={nightCreamImg}
                alt="Glowaura-B3 Skin Whitening & Serum Night Cream crystal jar beside its maroon and gold gift box"
                wrapperClassName="shadow-luxe aspect-square w-full overflow-hidden rounded-2xl border border-border"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
                width={1024}
                height={1024}
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
              <figcaption className="mt-3 text-center text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground sm:mt-4 sm:text-xs sm:tracking-[0.25em]">
                The crystal jar &amp; maroon gift box
              </figcaption>
            </figure>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="border-y border-border/60 bg-obsidian">
          <dl className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 grid grid-cols-2 gap-px sm:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal
                key={h.label}
                delay={i * 100}
                className="px-2 py-7 text-center sm:px-4 sm:py-10"
              >
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-3xl font-semibold text-gold-gradient sm:text-4xl lg:text-5xl">
                  {h.value}
                </dd>
                <dd className="mt-2 text-[0.58rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.2em]">
                  {h.label}
                </dd>
              </Reveal>
            ))}
          </dl>
        </section>

        {/* Main product details */}
        <section id="night" className="scroll-mt-28 mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 py-14 sm:py-20 lg:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="The Signature Product"
              title="Skin Whitening & Serum Night Cream"
            />
          </Reveal>

          <div className="mt-10 grid items-start gap-9 sm:mt-14 sm:gap-12 lg:grid-cols-2">
            <Reveal as="figure">
              <SmartImage
                src={nightCreamOpenImg}
                alt="Open Glowaura-B3 Night Cream crystal jar with its lid beside it, showing the rich pearly cream inside"
                wrapperClassName="shadow-luxe aspect-square w-full overflow-hidden rounded-2xl border border-border"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.05]"
                width={1024}
                height={1024}
                sizes="(max-width: 1024px) 92vw, 46vw"
              />
              <figcaption className="mt-3 text-center text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground sm:mt-4 sm:text-xs sm:tracking-[0.25em]">
                Serum-rich night cream, velvet texture
              </figcaption>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
                Night · Signature
              </p>
              <h3 className="mt-3 text-balance font-display text-2xl font-semibold text-ivory sm:text-3xl lg:text-4xl">
                What it does for your skin
              </h3>
              <p className="mt-4 text-[0.92rem] font-light leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                The signature 2-in-1 cream and serum that brightens, evens out skin tone and deeply
                nourishes overnight with Niacinamide (Vitamin B3).
              </p>

              <ul className="mt-6 space-y-3 sm:mt-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 sm:gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                      aria-hidden="true"
                    />
                    <span className="text-[0.92rem] font-light leading-relaxed text-foreground/90 sm:text-base">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border/60 pt-6 sm:mt-10 sm:gap-x-8">
                {nightSpecs.map((s) => (
                  <div key={s.label} className="underline-gold min-w-0">
                    <dt className="text-[0.55rem] uppercase tracking-[0.2em] text-gold sm:text-[0.6rem] sm:tracking-[0.25em]">
                      {s.label}
                    </dt>
                    <dd className="mt-1 text-[0.8rem] font-light text-foreground/90 sm:text-sm">
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="card-luxe glass-card ring-gold mt-8 w-full rounded-2xl border border-gold/40 px-5 py-5 text-center sm:mt-10 sm:inline-block sm:w-auto sm:px-7 sm:text-left">
                <p className="mt-2 font-display text-4xl font-semibold text-gold-gradient">₹899</p>
                <p className="mt-1 text-[0.7rem] font-light text-muted-foreground sm:text-xs">
                  Net Weight 30 g · Net Qty: 1 N
                </p>
              </div>

              <h4 className="mt-10 font-display text-xl font-semibold text-ivory sm:mt-12 sm:text-2xl">
                How to use
              </h4>
              <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-muted-foreground sm:text-base">
                Cleanse and pat the face dry at night. Take a small amount and massage gently over
                the face and neck in upward circular motions until absorbed. Leave on overnight and
                rinse in the morning. Patch test behind the ear before first use; for external use
                only.
              </p>
            </Reveal>
          </div>

          {/* Ingredients */}
          <div className="mt-14 sm:mt-20">
            <Reveal>
              <h3 className="text-center font-display text-2xl font-semibold text-ivory sm:text-3xl">
                Inside the formula
              </h3>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6">
              {ingredients.map((ing, i) => (
                <Reveal key={ing.name} delay={i * 100}>
                  <article className="card-luxe ring-gold h-full rounded-2xl border border-border bg-card p-5 sm:p-6">
                    <h4 className="font-display text-lg font-semibold text-gold-soft sm:text-xl">
                      {ing.name}
                    </h4>
                    <p className="mt-2 text-[0.85rem] font-light leading-relaxed text-muted-foreground sm:text-sm">
                      {ing.note}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ritual steps */}
        <section className="border-y border-border/60 bg-obsidian">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 py-14 sm:py-20">
            <Reveal>
              <SectionHeading eyebrow="The Daily Ritual" title="Four steps to the glow" />
            </Reveal>
            <ol className="mt-9 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {ritual.map((r, i) => (
                <Reveal key={r.step} delay={i * 90}>
                  <li className="card-luxe glass-card ring-gold h-full list-none rounded-2xl border border-border p-5 sm:p-6">
                    <span className="font-display text-3xl font-semibold text-gold-gradient sm:text-4xl">
                      {r.step}
                    </span>
                    <h3 className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-gold">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[0.85rem] font-light leading-relaxed text-muted-foreground sm:text-sm">
                      {r.note}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Signature spotlight — Body Cream */}
        <section id="signature" className="scroll-mt-28 relative overflow-hidden border-t border-border/60">
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(55% 45% at 80% 10%, oklch(0.62 0.13 85 / 14%), transparent 70%)",
            }}
          />
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 relative py-14 sm:py-20 lg:py-28">
            <Reveal>
              <SectionHeading eyebrow="The Signature Cream" title="Body Cream — Skin Whitening & Serum" />
            </Reveal>

            <div className="mt-10 grid items-center gap-9 sm:mt-14 sm:gap-12 lg:grid-cols-2">
              <Reveal as="figure" className="animate-gold-pulse rounded-2xl">
                <SmartImage
                  src={bodyCream.image}
                  alt={bodyCream.alt}
                  wrapperClassName="shadow-luxe animate-float w-full overflow-hidden rounded-2xl border border-border"
                  className="w-full object-cover"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 1024px) 92vw, 46vw"
                />
                <figcaption className="mt-3 text-center text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground sm:mt-4 sm:text-xs sm:tracking-[0.25em]">
                  The signature jar &amp; gift box · 250 g
                </figcaption>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-[0.58rem] font-medium uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
                  {bodyCream.tag}
                </p>
                <h3 className="mt-3 text-balance font-display text-2xl font-semibold text-ivory sm:text-3xl lg:text-4xl">
                  Advanced Formula for Skin Lightening &amp; Brightening
                </h3>
                <p className="mt-4 text-[0.92rem] font-light leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                  {bodyCream.description}
                </p>

                <ul className="mt-6 space-y-3 sm:mt-8">
                  {bodyCream.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 sm:gap-4">
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                        aria-hidden="true"
                      />
                      <span className="text-[0.92rem] font-light leading-relaxed text-foreground/90 sm:text-base">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-4 border-t border-border/60 pt-6 sm:mt-10 sm:gap-x-8">
                  {bodyCream.specs.map((s) => (
                    <div key={s.label} className="underline-gold min-w-0">
                      <dt className="text-[0.55rem] uppercase tracking-[0.2em] text-gold sm:text-[0.6rem] sm:tracking-[0.25em]">
                        {s.label}
                      </dt>
                      <dd className="mt-1 text-[0.8rem] font-light text-foreground/90 sm:text-sm">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="card-luxe glass-card ring-gold mt-8 w-full rounded-2xl border border-gold/40 px-5 py-5 text-center sm:mt-10 sm:inline-block sm:w-auto sm:px-7 sm:text-left">
                  <p className="mt-2 font-display text-4xl font-semibold text-gold-gradient">
                    {bodyCream.price}
                  </p>
                  <p className="mt-1 text-[0.7rem] font-light text-muted-foreground sm:text-xs">
                    Net Weight 250 g · Net Qty: 1 N
                  </p>
                </div>

                <h4 className="mt-10 font-display text-xl font-semibold text-ivory sm:mt-12 sm:text-2xl">
                  How to use
                </h4>
                <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-muted-foreground sm:text-base">
                  {bodyCream.usage}
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Collection */}
        <section id="collection" className="scroll-mt-28 border-t border-border/60">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 py-14 sm:py-20 lg:py-28">
            <Reveal>
              <SectionHeading eyebrow="Complete the Ritual" title="More from Glowaura-B3" />
            </Reveal>

            <div className="mt-9 grid grid-cols-2 gap-3.5 sm:mt-14 sm:gap-7 lg:grid-cols-4 lg:gap-8">
              {collection.map((product, i) => (
                <Reveal key={product.name} delay={(i % 4) * 90}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Brand story */}
        <section id="story" className="scroll-mt-28 mx-auto w-full max-w-3xl px-5 sm:px-7 lg:px-8 py-14 text-center sm:py-20 lg:py-28">
          <Reveal>
            <GoldDivider />
            <blockquote className="mt-8 text-balance font-display text-2xl font-medium italic leading-snug text-ivory sm:mt-10 sm:text-3xl lg:text-4xl">
              “Every jar of Glowaura-B3 is a promise — honest ingredients, refined formulas, and
              skin that tells its own luminous story.”
            </blockquote>
            <p className="mt-6 text-[0.6rem] uppercase tracking-[0.28em] text-gold sm:mt-8 sm:text-xs sm:tracking-luxe">
              The Glowaura-B3 Promise
            </p>
          </Reveal>

          <div className="mt-8 sm:mt-10">
            <GoldDivider />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-footer-foreground">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-7 lg:px-8 flex flex-col items-center gap-4 py-10 text-center sm:gap-5 sm:py-12">
          <img
            src={logoImg}
            alt="Glowaura-B3 logo"
            className="h-11 w-auto sm:h-12"
            loading="lazy"
            width={787}
            height={296}
          />
          <p className="text-[0.6rem] font-light uppercase tracking-[0.22em] text-footer-foreground/85 sm:text-xs sm:tracking-[0.25em]">
            Advanced formulas for skin lightening &amp; brightening
          </p>
          <div className="mt-1 grid gap-1 text-[0.68rem] font-light leading-relaxed text-footer-foreground/75 sm:text-[0.7rem]">
            <p>
              Marketed by: Glowaura Cosmetics India Pvt. Ltd., Mumbai, Maharashtra — 400001, India
            </p>
            <p>Country of Origin: India</p>
            <p>For external use only. Keep out of reach of children. Store in a cool, dry place.</p>
          </div>
          <p className="text-[0.6rem] uppercase tracking-[0.18em] text-footer-foreground/60 sm:text-[0.65rem] sm:tracking-[0.2em]">
            © {new Date().getFullYear()} Glowaura-B3 · All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
