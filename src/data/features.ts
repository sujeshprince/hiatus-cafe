export type Feature = {
  title: string;
  description: string;
  icon: "coffee" | "heart" | "quiet" | "laptop" | "users" | "clock" | "sparkles";
};

export const features: Feature[] = [
  {
    title: "Coffee at the Centre",
    description: "A café built around the cup that brings people together.",
    icon: "coffee",
  },
  {
    title: "Comfort First",
    description: "Warm light, soft corners and a seat that feels like yours.",
    icon: "heart",
  },
  {
    title: "A Quieter Pace",
    description: "A little breathing room from the rush of the day.",
    icon: "quiet",
  },
  {
    title: "Room to Think",
    description: "A corner to write, plan or simply let the afternoon pass.",
    icon: "laptop",
  },
  {
    title: "Space for Everyone",
    description: "Solo mornings, coffee dates and the whole group.",
    icon: "users",
  },
  {
    title: "No Rush",
    description: "Stay for one cup or long enough to forget the time.",
    icon: "clock",
  },
  {
    title: "The Small Things",
    description: "The details that turn a coffee stop into the best part of the day.",
    icon: "sparkles",
  },
];
