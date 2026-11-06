export type MenuTag = "V" | "VG";

export type MenuItem = {
  name: string;
  description: string;
  /** Intentionally null until the café supplies verified prices. */
  price: number | null;
  tags?: MenuTag[];
};

export type MenuCategory = {
  id: string;
  label: string;
  shortLabel: string;
  kicker: string;
  image: string;
  imageAlt: string;
  intro: string;
  items: MenuItem[];
};

/**
 * SAMPLE MENU CONTENT
 * ─────────────────────────────────────────────────────────────
 * These are generic, clearly-labelled placeholder items used to
 * demonstrate the layout. They are not verified menu items, and
 * all prices are intentionally unset. Replace this file with the
 * café's real menu when it is available.
 */
export const menuCategories: MenuCategory[] = [
  {
    id: "coffee",
    label: "Coffee",
    shortLabel: "Coffee",
    kicker: "01",
    image: "/images/menu/coffee.jpg",
    imageAlt: "A flat white coffee with delicate latte art on a wooden café table",
    intro: "Slow-brewed, warmly poured. The heart of the Hiatus ritual.",
    items: [
      {
        name: "House Espresso",
        description: "A short, rich shot with a soft caramel finish.",
        price: null,
      },
      {
        name: "Cappuccino",
        description: "Velvety milk, a dusting of cocoa, and a little quiet.",
        price: null,
      },
      {
        name: "Flat White",
        description: "Silky microfoam over a concentrated double shot.",
        price: null,
      },
      {
        name: "Cold Coffee",
        description: "Chilled, creamy and made for long afternoons.",
        price: null,
      },
    ],
  },
  {
    id: "tea",
    label: "Tea & Beverages",
    shortLabel: "Tea",
    kicker: "02",
    image: "/images/menu/tea.jpg",
    imageAlt: "A warm glass of masala chai on a rustic wooden table",
    intro: "A proper cup for the chai-and-conversation kind of day.",
    items: [
      {
        name: "Masala Chai",
        description: "Warm spice, strong tea and a generous pour of milk.",
        price: null,
      },
      {
        name: "Green Tea",
        description: "Clean, light and quietly refreshing.",
        price: null,
      },
      {
        name: "Iced Lemon Tea",
        description: "Bright citrus over ice — a pause in a glass.",
        price: null,
      },
      {
        name: "Hot Chocolate",
        description: "Deep cocoa, steamed milk and something sweet.",
        price: null,
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    shortLabel: "Desserts",
    kicker: "03",
    image: "/images/menu/desserts.jpg",
    imageAlt: "A slice of chocolate cake beside a cup of coffee",
    intro: "Something sweet for the moments in between.",
    items: [
      {
        name: "Chocolate Brownie",
        description: "Fudgy centre, crackled top, served warm.",
        price: null,
        tags: ["V"],
      },
      {
        name: "New York Cheesecake",
        description: "Creamy vanilla cheesecake with a buttery base.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Tiramisu",
        description: "Coffee-soaked layers and a cloud of mascarpone.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Pastry of the Day",
        description: "Ask us what came out of the kitchen this morning.",
        price: null,
        tags: ["V"],
      },
    ],
  },
  {
    id: "quick-bites",
    label: "Quick Bites",
    shortLabel: "Quick bites",
    kicker: "04",
    image: "/images/menu/quick-bites.jpg",
    imageAlt: "A toasted croissant sandwich with salad and iced tea",
    intro: "Small plates for the gap between coffee and the rest of the day.",
    items: [
      {
        name: "Veg Sandwich",
        description: "Grilled vegetables, soft bread and a bright chutney.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Garlic Bread",
        description: "Crisp edges, warm garlic butter, herbs.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Peri-Peri Fries",
        description: "Golden fries with a warm, smoky kick.",
        price: null,
        tags: ["VG"],
      },
      {
        name: "Masala Maggi",
        description: "A familiar bowl, made a little more comforting.",
        price: null,
        tags: ["V"],
      },
    ],
  },
  {
    id: "small-plates",
    label: "Small Plates",
    shortLabel: "Small plates",
    kicker: "05",
    image: "/images/menu/small-plates.jpg",
    imageAlt: "An Indian sharing platter with samosas, fritters and chutneys",
    intro: "Made for the middle of the table and the middle of a story.",
    items: [
      {
        name: "Paneer Tikka",
        description: "Charred paneer, peppers and a smoky marinade.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Penne Alfredo",
        description: "Silky white sauce, Parmesan and cracked pepper.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Margherita Pizza",
        description: "Tomato, mozzarella and a little basil.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Loaded Nachos",
        description: "Crisp tortillas, cheese, salsa and fresh herbs.",
        price: null,
        tags: ["V"],
      },
    ],
  },
  {
    id: "vegetarian",
    label: "Vegetarian Specials",
    shortLabel: "Vegetarian",
    kicker: "06",
    image: "/images/menu/vegetarian.jpg",
    imageAlt: "A colourful Mediterranean vegetarian plate with fresh vegetables",
    intro: "Generous, colourful plates with vegetables at the centre.",
    items: [
      {
        name: "Veg Burger",
        description: "A soft bun, a hearty patty and all the good bits.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Paneer Wrap",
        description: "Spiced paneer, crunchy salad and a warm wrap.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Veg Pasta",
        description: "Seasonal vegetables folded through a slow sauce.",
        price: null,
        tags: ["V"],
      },
      {
        name: "Hummus & Pita",
        description: "Creamy hummus, warm pita and a little olive oil.",
        price: null,
        tags: ["VG"],
      },
    ],
  },
  {
    id: "vegan",
    label: "Vegan Options",
    shortLabel: "Vegan",
    kicker: "07",
    image: "/images/menu/vegan.jpg",
    imageAlt: "A vibrant vegan brunch plate with avocado, falafel and roasted vegetables",
    intro: "Plant-forward choices, thoughtfully made.",
    items: [
      {
        name: "Oat Milk Latte",
        description: "Your coffee ritual, made a little lighter.",
        price: null,
        tags: ["VG"],
      },
      {
        name: "Coconut Cold Brew",
        description: "Slow-steeped coffee with a soft coconut finish.",
        price: null,
        tags: ["VG"],
      },
      {
        name: "Vegan Brownie",
        description: "Deep chocolate, no dairy, all comfort.",
        price: null,
        tags: ["VG"],
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado, lemon, chilli and good bread.",
        price: null,
        tags: ["VG"],
      },
    ],
  },
];

export const menuDisclaimer =
  "Sample menu for layout purposes. Final items, prices and availability will be confirmed by Hiatus Cafe.";
