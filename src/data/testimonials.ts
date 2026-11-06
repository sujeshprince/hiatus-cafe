export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  initials: string;
  rating: number;
};

/**
 * PLACEHOLDER TESTIMONIALS
 * These are sample notes written for layout only — not real customer
 * reviews. Replace them with verified Google / guest reviews when available.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The kind of place where one coffee quietly turns into an entire afternoon.",
    name: "Sample guest note",
    detail: "Placeholder review · 01",
    initials: "01",
    rating: 5,
  },
  {
    quote:
      "Warm light, good coffee, and a corner table I didn't want to leave.",
    name: "Sample guest note",
    detail: "Placeholder review · 02",
    initials: "02",
    rating: 5,
  },
  {
    quote:
      "A little pocket of calm in the middle of Gorakhpur. Exactly what a pause should feel like.",
    name: "Sample guest note",
    detail: "Placeholder review · 03",
    initials: "03",
    rating: 5,
  },
  {
    quote:
      "We came for a catch-up and stayed for the desserts. The table felt like it was ours.",
    name: "Sample guest note",
    detail: "Placeholder review · 04",
    initials: "04",
    rating: 5,
  },
];
