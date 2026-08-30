import { useId, useState } from "react";

import type { Product } from "../data/products";
import { SmartImage } from "./SmartImage";

export function ProductCard({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <article className="card-luxe group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card ring-gold">
      <div className="sheen relative overflow-hidden">
        <SmartImage
          src={product.image}
          alt={product.alt}
          wrapperClassName="aspect-square w-full"
          className="aspect-square w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          width={1024}
          height={1024}
          sizes="(max-width: 640px) 46vw, (max-width: 1024px) 45vw, 24vw"
        />
        <span className="pointer-events-none absolute left-2 top-2 rounded-full border border-gold/40 bg-background/80 px-2 py-1 text-[0.5rem] uppercase tracking-[0.18em] text-gold backdrop-blur-sm sm:left-3 sm:top-3 sm:px-3 sm:text-[0.6rem]">
          {product.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-3.5 sm:p-5 lg:p-6">
        <h3 className="font-display text-base font-semibold leading-snug text-ivory sm:text-xl lg:text-2xl">
          {product.name}
        </h3>

        <div className="mt-2 flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
          <span className="font-display text-lg font-semibold text-gold-gradient sm:text-xl lg:text-2xl">
            {product.price}
          </span>
          <span className="text-[0.55rem] uppercase tracking-[0.18em] text-muted-foreground sm:text-[0.7rem] sm:tracking-[0.2em]">
            {product.size}
          </span>
        </div>

        <p className="mt-2.5 line-clamp-3 text-[0.78rem] font-light leading-relaxed text-muted-foreground sm:line-clamp-none sm:text-sm">
          {product.description}
        </p>

        <ul className="mt-4 space-y-1.5 border-t border-border/60 pt-3 sm:mt-5 sm:space-y-2 sm:pt-4">
          {product.details.map((d) => (
            <li
              key={d}
              className="flex items-start gap-2 text-[0.58rem] uppercase tracking-[0.1em] text-foreground/80 sm:gap-3 sm:text-xs sm:tracking-[0.15em]"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
              <span className="min-w-0 break-words">{d}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="tap-target mt-5 inline-flex w-full items-center justify-center gap-2 self-start rounded-full border border-gold/40 px-3 py-2.5 pt-2.5 text-[0.55rem] uppercase tracking-[0.2em] text-gold transition-all duration-500 hover:border-gold hover:bg-gold/10 active:scale-[0.97] sm:mt-6 sm:w-auto sm:px-5 sm:py-2 sm:text-[0.65rem] sm:tracking-[0.25em]"
        >
          {open ? "Hide details" : "Full details"}
          <span
            className={`inline-block transition-transform duration-500 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          >
            ↓
          </span>
        </button>

        <div
          id={panelId}
          className={`grid transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "mt-5 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <h4 className="text-[0.58rem] uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
              Key benefits
            </h4>
            <ul className="mt-3 space-y-2">
              {product.benefits.map((b) => (
                <li
                  key={b}
                  className="flex gap-2.5 text-[0.78rem] font-light leading-relaxed text-muted-foreground sm:gap-3 sm:text-sm"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-[0.58rem] uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
              Specifications
            </h4>
            <dl className="mt-3 space-y-2">
              {product.specs.map((s) => (
                <div
                  key={s.label}
                  className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border/50 pb-2 text-[0.68rem] sm:text-xs"
                >
                  <dt className="min-w-0 uppercase tracking-[0.12em] text-muted-foreground">
                    {s.label}
                  </dt>
                  <dd className="text-right font-light text-foreground/90">{s.value}</dd>
                </div>
              ))}
            </dl>

            <h4 className="mt-6 text-[0.58rem] uppercase tracking-[0.22em] text-gold sm:text-[0.65rem] sm:tracking-[0.25em]">
              How to use
            </h4>
            <p className="mt-3 text-[0.78rem] font-light leading-relaxed text-muted-foreground sm:text-sm">
              {product.usage}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
