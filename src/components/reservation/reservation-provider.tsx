"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type ReservationContextValue = {
  occasion: string;
  setOccasion: (occasion: string) => void;
  requestReservation: (occasion?: string) => void;
};

const ReservationContext = createContext<ReservationContextValue | null>(null);

export function ReservationProvider({ children }: { children: React.ReactNode }) {
  const [occasion, setOccasion] = useState("");

  const requestReservation = useCallback((nextOccasion?: string) => {
    if (nextOccasion) setOccasion(nextOccasion);

    window.requestAnimationFrame(() => {
      document.getElementById("reserve")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }, []);

  const value = useMemo(
    () => ({ occasion, setOccasion, requestReservation }),
    [occasion, requestReservation],
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservation must be used inside ReservationProvider");
  }
  return context;
}
