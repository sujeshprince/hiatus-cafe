import { siteConfig } from "@/config/site";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Hiatus Cafe! I'd like to know more about visiting.";

export function telHref() {
  return `tel:${siteConfig.phoneE164}`;
}

export function whatsappHref(message = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function directionsHref() {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    siteConfig.mapQuery,
  )}`;
}

export function mapEmbedSrc() {
  return `https://www.google.com/maps?q=${encodeURIComponent(
    siteConfig.mapQuery,
  )}&z=15&output=embed`;
}

export function instagramHref() {
  return siteConfig.socials.instagram.trim() || null;
}

export type ReservationSummary = {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion?: string;
  requests?: string;
};

export function reservationWhatsAppHref(data: ReservationSummary) {
  const lines = [
    "Hello Hiatus Cafe! I'd like to request a table.",
    "",
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    `Date: ${data.date}`,
    `Time: ${data.time}`,
    `Guests: ${data.guests}`,
    data.occasion ? `Occasion: ${data.occasion}` : "",
    data.requests ? `Special requests: ${data.requests}` : "",
    "",
    "This is a reservation request, not a confirmed booking. Please confirm availability.",
  ].filter((line) => line !== "");

  return whatsappHref(lines.join("\n"));
}
