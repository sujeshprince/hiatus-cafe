export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  ratio: "portrait" | "square" | "landscape" | "tall";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/gallery-01.jpg",
    alt: "Warmly lit café seating with wooden furniture and soft ambient light",
    caption: "Warm light, wooden tables.",
    ratio: "portrait",
  },
  {
    src: "/images/gallery/gallery-02.jpg",
    alt: "A barista pouring steamed milk into a coffee cup",
    caption: "The pour, paused.",
    ratio: "landscape",
  },
  {
    src: "/images/gallery/gallery-03.jpg",
    alt: "A cappuccino with heart-shaped latte art on a café table",
    caption: "A little heart in every cup.",
    ratio: "tall",
  },
  {
    src: "/images/gallery/gallery-04.jpg",
    alt: "A cappuccino with intricate latte art on a rustic wooden table",
    caption: "A moment worth slowing for.",
    ratio: "square",
  },
  {
    src: "/images/gallery/gallery-05.jpg",
    alt: "Two women enjoying a conversation over coffee in a colourful café",
    caption: "Conversations that linger.",
    ratio: "landscape",
  },
  {
    src: "/images/gallery/gallery-06.jpg",
    alt: "A quiet industrial-style café with tables by a large window",
    caption: "The quiet corner.",
    ratio: "portrait",
  },
  {
    src: "/images/gallery/gallery-07.jpg",
    alt: "Three glasses of chai tea on an elegant tray in warm afternoon light",
    caption: "Chai, for the table.",
    ratio: "tall",
  },
  {
    src: "/images/gallery/gallery-08.jpg",
    alt: "A cup of coffee and a slice of berry cheesecake on a wooden table",
    caption: "Coffee and something sweet.",
    ratio: "portrait",
  },
  {
    src: "/images/gallery/gallery-09.jpg",
    alt: "A serene café scene with chairs and tables in warm sunlight",
    caption: "Sunlight, on the house.",
    ratio: "landscape",
  },
  {
    src: "/images/gallery/gallery-10.jpg",
    alt: "Two friends laughing over coffee in a cosy coffee shop",
    caption: "The friends table.",
    ratio: "landscape",
  },
];
