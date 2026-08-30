import { useEffect, useState } from "react";

import logoImg from "../assets/glowaura-b3-logo.png";

const navLinks = [
  { href: "#signature", label: "Signature" },
  { href: "#night", label: "Night Cream" },
  { href: "#collection", label: "Collection" },
  { href: "#story", label: "Our Promise" },
];

const ticker = ["Made in India", "Dermatologically Tested", "100% Genuine Product", "Free Shipping Pan-India"];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Announcement ticker */}
      <div className="overflow-hidden bg-header text-header-foreground">
        <div className="marquee py-1.5 text-[0.55rem] uppercase tracking-[0.25em] text-header-foreground/85 sm:text-[0.65rem]">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div className="marquee-group" key={dup} aria-hidden={dup === 1}>
                {ticker.map((t) => (
                  <span className="marquee-item" key={t}>
                    <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden="true" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bar */}
      <div
        className={`border-b transition-all duration-500 ${
          scrolled
            ? "border-gold/25 bg-header/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_oklch(0.2_0.03_60/60%)]"
            : "border-transparent bg-header"
        }`}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:px-8">
          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-ml-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/30 text-gold transition-colors duration-300 hover:bg-gold/10 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-300 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>

          <a href="#top" className="mx-auto flex min-w-0 items-center justify-center py-3 lg:mx-0 lg:justify-start">
            <img
              src={logoImg}
              alt="Glowaura-B3 logo — gold botanical branch wordmark"
              className={`w-auto object-contain transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04] ${
                scrolled ? "h-10 sm:h-12" : "h-14 sm:h-20"
              }`}
              width={787}
              height={296}
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="underline-gold text-[0.7rem] uppercase tracking-[0.22em] text-header-foreground/80 transition-colors duration-300 hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <span className="w-10 lg:hidden" aria-hidden="true" />
        </div>

        {/* Mobile drawer */}
        <div
          className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-1 border-t border-gold/20 px-4 py-3 sm:px-6">
              {navLinks.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: `${open ? i * 60 : 0}ms` }}
                  className={`flex items-center gap-3 rounded-lg px-3 py-3 text-[0.72rem] uppercase tracking-[0.24em] text-header-foreground/85 transition-all duration-500 active:bg-gold/10 ${
                    open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                  }`}
                >
                  <span className="h-1 w-1 rotate-45 bg-gold" aria-hidden="true" />
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
