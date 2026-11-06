import { PauseMark } from "@/components/ui/brand-mark";

const phrases = [
  "Slow mornings",
  "Good coffee",
  "Long conversations",
  "Something sweet",
  "Warm light",
  "Stay a little longer",
];

export function Marquee() {
  const loop = [...phrases, ...phrases];

  return (
    <div className="marquee border-b border-espresso/10 bg-cream py-4 text-espresso sm:py-5">
      <div className="marquee-track items-center">
        {loop.map((phrase, index) => (
          <span key={`${phrase}-${index}`} className="flex items-center">
            <span className="px-6 font-serif text-[0.95rem] italic tracking-tight sm:px-9 sm:text-[1.1rem]">
              {phrase}
            </span>
            <PauseMark className="size-4 shrink-0 text-caramel" strokeWidth={1.6} />
          </span>
        ))}
      </div>
    </div>
  );
}
