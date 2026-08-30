# Glowaura-B3 — QR Code Landing Page

A premium, content-only landing page for the Glowaura-B3 skincare brand. It opens instantly when the product's QR code is scanned. **No buttons, no cart, no order flow** — just brand, product imagery, and details.

## Brand & Design
- **Brand:** Glowaura-B3 (logo generated in the same black & gold foil style as the packaging)
- **Design language:** luxury cosmetic — deep black marble/charcoal surfaces, gold foil accents, elegant serif display type paired with a clean sans body
- **Language:** English
- Mobile-first (QR scans come from phones), responsive up to desktop

## Page Structure (single route `/`)
1. **Header / Hero** — Glowaura-B3 logo + brand mark, tagline, and the main product hero shot (uploaded packaging photo as the star)
2. **Main product section** — "Glowaura-B3 Skin Whitening & Serum Body Cream"
   - Multiple angles/gallery of the main product (generated matching shots)
   - Details: what it is, key benefits, how to use, ingredients highlights, "For Men & Women", "All Skin Types", "7 Days Result" positioning
3. **More from Glowaura-B3** — 3 additional brand products I will generate in the same black & gold luxury style:
   - Glowaura-B3 Brightening Face Serum
   - Glowaura-B3 Gentle Foaming Face Wash
   - Glowaura-B3 Radiance Body Lotion
   - Each with its own product shot + short details (benefits, skin type, usage)
4. **Brand story strip** — 2–3 lines about Glowaura-B3 (premium formula, quality promise)
5. **Footer** — brand name, small note, no contact forms or CTAs

## Assets (AI-generated, stored via Lovable Assets CDN)
- Brand logo (gold foil botanical mark, transparent PNG)
- 2–3 extra angles of the main jar/box (matched to uploaded photo style)
- 3 supporting product shots
- Your uploaded packaging photo used as the main hero image

## Technical
- TanStack Start single-page route `src/routes/index.tsx` (replaces placeholder)
- Design tokens in `src/styles.css` (oklch black/gold palette, serif + sans font pairing via Google Fonts link in `__root.tsx`)
- SEO: unique title/description/og meta; OG image = main product shot
- No backend, no forms, no interactive purchase elements

## QR Code
- After publishing, the published URL (e.g. `https://project--<id>.lovable.app`) is what your QR code should point to. Any QR generator can encode that URL — the page will then open on scan.
