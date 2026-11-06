"use client";

import { ArrowUpRight } from "lucide-react";
import { useReservation } from "@/components/reservation/reservation-provider";
import { cn } from "@/lib/utils";

export function ExperienceCta({
  occasion,
  label,
  light = false,
}: {
  occasion: string;
  label: string;
  light?: boolean;
}) {
  const { requestReservation } = useReservation();

  return (
    <button
      type="button"
      onClick={() => requestReservation(occasion)}
      className={cn(
        "group inline-flex items-center gap-3 border-b pb-2 text-[0.66rem] font-semibold uppercase tracking-[0.18em] transition-colors",
        light
          ? "border-cream/30 text-cream/80 hover:border-cream hover:text-cream"
          : "border-espresso/25 text-espresso/75 hover:border-espresso hover:text-espresso",
      )}
    >
      <span>{label}</span>
      <ArrowUpRight className="arrow-shift size-4" strokeWidth={1.5} />
    </button>
  );
}
