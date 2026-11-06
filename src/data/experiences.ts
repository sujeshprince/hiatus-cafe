export type Experience = {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  imageAlt: string;
  occasion: string;
  cta: string;
  tone: "caramel" | "olive" | "espresso";
};

export const experiences: Experience[] = [
  {
    id: "coffee-date",
    index: "01",
    eyebrow: "For two",
    title: "The Coffee Date",
    description:
      "Two cups, one corner table, and nowhere else to be. A soft-lit setting for the conversations that deserve a little more time.",
    image: "/images/experiences/coffee-date.jpg",
    imageAlt: "A café table set with desserts, coffee and a small flower vase",
    occasion: "Coffee date",
    cta: "Plan a coffee date",
    tone: "caramel",
  },
  {
    id: "creative-corner",
    index: "02",
    eyebrow: "For focus",
    title: "The Creative Corner",
    description:
      "A peaceful corner for students, freelancers and anyone working on their next big idea. Settle in, order slowly, and let the afternoon unfold.",
    image: "/images/experiences/creative-corner.jpg",
    imageAlt: "A woman working on a laptop in a plant-filled café",
    occasion: "Work session",
    cta: "Claim a quiet corner",
    tone: "olive",
  },
  {
    id: "friends-table",
    index: "03",
    eyebrow: "For everyone",
    title: "The Friends Table",
    description:
      "The long table for louder stories, shared plates and the kind of laughter that makes a place feel like yours.",
    image: "/images/experiences/friends-table.jpg",
    imageAlt: "A group of friends talking and laughing over coffee in a café",
    occasion: "Friends catch-up",
    cta: "Gather the group",
    tone: "espresso",
  },
];
