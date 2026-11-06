/**
 * ─────────────────────────────────────────────────────────────
 *  HIATUS CAFE — SITE CONFIGURATION
 *  Edit this file to update contact details, hours and socials.
 *
 *  Verified from the brief:
 *   • Address: Daudpur, Gorakhpur, Uttar Pradesh 273001
 *   • Phone: 082992 35280
 *   • Price range: ₹200–₹400 per person
 *   • Closing time: 10:00 PM
 *
 *  The opening time is intentionally left unset — only the closing
 *  time has been verified. Add `opensAt` when the café confirms it.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Hiatus Cafe",
  displayName: "HIATUS",
  hindiName: "हिट्स कैफे",
  tagline: "Take a pause. Find your moment.",
  description:
    "A little pause in a busy world. Hiatus Cafe is a warm, contemporary café in Daudpur, Gorakhpur — coffee, conversations, comfort and everything in between.",

  address: {
    line1: "Daudpur",
    city: "Gorakhpur",
    state: "Uttar Pradesh",
    pincode: "273001",
    country: "India",
  },

  /** Display exactly as supplied; call/WhatsApp links use the international format. */
  phoneDisplay: "082992 35280",
  phoneE164: "+918299235280",
  whatsappNumber: "918299235280",

  priceRange: "₹200–₹400 per person",

  hours: {
    /** 24-hour time. Only the closing time has been verified. */
    opensAt: null as string | null,
    closesAt: "22:00",
    closesDisplay: "10:00 PM",
    note: "Opening time: call to confirm",
    summary: "Open daily · Closes 10:00 PM",
  },

  mapQuery: "Hiatus Cafe, Daudpur, Gorakhpur, Uttar Pradesh 273001",

  socials: {
    /** Add a full Instagram URL when the café's profile is live. */
    instagram: "",
  },

  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"),
} as const;

export const fullAddress = [
  siteConfig.address.line1,
  siteConfig.address.city,
  siteConfig.address.state,
  siteConfig.address.pincode,
  siteConfig.address.country,
]
  .filter(Boolean)
  .join(", ");

export const navLinks = [
  { label: "Our story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Ambience", href: "#gallery" },
  { label: "Experiences", href: "#experiences" },
  { label: "Visit", href: "#visit" },
] as const;
