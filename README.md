# Hiatus Cafe — frontend

A cinematic single-page website for **Hiatus Cafe (हिट्स कैफे)** in Daudpur, Gorakhpur.

The site is intentionally **frontend-only**. There is no booking backend, database, authentication or payment flow. Reservations are validated in the browser and handed off to a real conversation on WhatsApp or a phone call.

## Stack

- Next.js 16.4 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- CSS-driven entrance motion with native IntersectionObserver
- Embla Carousel for guest notes
- React Hook Form + Zod for reservation validation
- Radix Dialog for the mobile menu and gallery lightbox
- Lucide icons
- Local, optimised placeholder photography

## Run locally

Requires **Node.js 20.9 or newer**.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## Verified details

These are the only business facts treated as verified:

- Address: Daudpur, Gorakhpur, Uttar Pradesh 273001
- Phone: 082992 35280 (`tel:+918299235280`, `wa.me/918299235280`)
- Average spend: ₹200–₹400 per person
- The café closes at 10:00 PM
- The café is open daily

### Deliberately unresolved

- **Opening time:** not listed. `siteConfig.hours.opensAt` is `null`, and the UI says “Opening time: call to confirm.” Do not invent a time.
- **Instagram:** no profile URL was supplied. The UI renders a “coming soon” placeholder until `siteConfig.socials.instagram` is filled in.
- **Menu:** sample items only, with prices intentionally unset. The page labels this clearly.
- **Reviews:** sample guest notes written for layout only. The page labels them as placeholders.
- **Photography:** all images are Pexels placeholders. Replace them with owned or licensed photographs before launch. See [PHOTO_GUIDE.md](./PHOTO_GUIDE.md).

## Where to edit content

| What | File |
| --- | --- |
| Address, phone, hours, socials, site URL | `src/config/site.ts` |
| Menu categories and sample items | `src/data/menu.ts` |
| Gallery images and captions | `src/data/gallery.ts` |
| Experience panels | `src/data/experiences.ts` |
| “Why Hiatus?” reasons | `src/data/features.ts` |
| Guest-note placeholders | `src/data/testimonials.ts` |
| Global colours, typography, textures, form styles | `src/app/globals.css` |
| Metadata and JSON-LD | `src/app/layout.tsx`, `src/components/seo/json-ld.tsx` |

## Reservation flow

1. The form validates name, Indian mobile number, future date, time before 10:00 PM, and guest count.
2. A request summary is shown with a clear **“not confirmed yet”** status.
3. The guest sends the details to the café on WhatsApp or calls the phone number.
4. The café confirms availability personally.

No request is stored, sent or confirmed by the website itself.

## Environment

Copy `.env.example` to `.env.local` for a deployment:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, Open Graph metadata, `robots.txt` and the sitemap. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` / `VERCEL_URL` are used as fallbacks.

## Accessibility and performance notes

- Semantic landmarks, one `<h1>`, labelled sections and form fields.
- Keyboard-operable menu tabs, gallery lightbox and carousel controls.
- Visible focus states, skip link, reduced-motion handling and AA-targeted text contrast.
- Next/Image with local assets, responsive sizes and AVIF/WebP output.
- The mobile action bar is a labelled navigation landmark.
- The Google Map is lazy-loaded and does not require an API key.

## Project structure

```text
src/
  app/            layout, page, metadata routes, global styles
  components/
    home/         page sections
    layout/       navbar, footer, scroll progress, mobile action bar
    reservation/  provider and validated reservation form
    seo/          JSON-LD
    ui/           buttons, reveal, brand marks, dialog, icons
  config/         verified business configuration
  data/           clearly-labelled placeholder content
  lib/            link builders, date/time helpers, class helper
public/images/    local placeholder photography
scripts/          Open Graph image generator
```

## Before launch

- Replace placeholder photography and update captions.
- Add the real Instagram URL.
- Replace sample menu items and prices with verified content.
- Replace placeholder guest notes with verified reviews (or remove them).
- Add the confirmed opening time, if the café wants it published.
- Set `NEXT_PUBLIC_SITE_URL`.
- Re-test the WhatsApp and phone links on a real phone.
- Confirm the Google Maps pin against the café’s actual listing.
