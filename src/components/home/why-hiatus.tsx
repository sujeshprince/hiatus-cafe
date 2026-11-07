import Image from "next/image";
import {
  Clock,
  Coffee,
  Heart,
  Laptop,
  Sparkles,
  Users,
  VolumeX,
} from "lucide-react";
import { features, type Feature } from "@/data/features";
import { assetPath } from "@/lib/asset";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { PauseMark } from "@/components/ui/brand-mark";

const iconMap: Record<Feature["icon"], React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  coffee: Coffee,
  heart: Heart,
  quiet: VolumeX,
  laptop: Laptop,
  users: Users,
  clock: Clock,
  sparkles: Sparkles,
};

export function WhyHiatus() {
  return (
    <section className="relative overflow-hidden bg-olive-deep py-24 text-cream sm:py-32 lg:py-40">
      <svg
        aria-hidden="true"
        viewBox="0 0 700 220"
        fill="none"
        className="pointer-events-none absolute -left-4 top-10 w-[70vw] max-w-[700px] select-none text-cream/5"
      >
        <text
          x="0"
          y="190"
          fill="currentColor"
          fontFamily="var(--font-fraunces)"
          fontSize="220"
          fontWeight="400"
        >
          WHY
        </text>
      </svg>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 size-[28rem] rounded-full bg-caramel/15 blur-[110px]"
      />

      <div className="container-editorial relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <SectionKicker className="text-cream/75">04 - Why Hiatus</SectionKicker>
            <h2 className="display mt-6 max-w-[14ch] text-[clamp(3.1rem,6vw,6.4rem)]">
              Seven reasons to stay a little
              <span className="display-italic text-caramel-light"> longer.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="flex flex-col justify-end lg:col-span-5">
            <p className="body-copy max-w-md text-cream/70">
              Not a checklist. Just the small things that turn a coffee stop into
              the best part of the day. A warm welcome, a good cup, and enough
              room to breathe.
            </p>
            <div className="mt-6 flex items-center gap-3 text-cream/80">
              <PauseMark className="size-6 text-caramel" strokeWidth={1.5} />
              <span className="text-[0.6rem] uppercase tracking-[0.2em]">
                Everything in between
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="image-zoom relative aspect-[4/5] overflow-hidden bg-olive-deep">
                <Image
                  src={assetPath("/images/gallery/gallery-06.jpg")}
                  alt="A quiet café corner with tables beside a large window"
                  fill
                  sizes="(max-width: 1024px) 90vw, 30vw"
                  className="object-cover warm-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-olive-deep/75 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <PauseMark className="size-8 text-cream/55" strokeWidth={1.5} />
                  <p className="mt-4 font-serif text-[1.45rem] italic leading-snug text-cream/90">
                    “The quiet corner is always the one worth finding.”
                  </p>
                  <p className="mt-3 text-[0.58rem] uppercase tracking-[0.2em] text-cream/80">
                    A note from the Hiatus table
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-8">
            <ol className="border-t border-cream/15">
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon];
                return (
                  <li key={feature.title}>
                    <div className="group grid grid-cols-[2.5rem_1fr] gap-4 border-b border-cream/15 py-5 transition-colors duration-300 hover:bg-cream/6 sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-6">
                      <div className="flex flex-col items-center gap-3">
                        <span className="text-[0.56rem] tracking-[0.18em] text-cream/85">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="grid size-9 place-items-center rounded-full border border-cream/20 text-caramel transition-colors group-hover:border-caramel/60 group-hover:bg-caramel group-hover:text-espresso">
                          <Icon className="size-4" strokeWidth={1.5} />
                        </span>
                      </div>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <h3 className="font-serif text-[1.4rem] leading-snug text-cream/95 transition-colors group-hover:text-caramel-light sm:text-[1.6rem]">
                          {feature.title}
                        </h3>
                        <p className="max-w-xs text-[0.82rem] leading-relaxed text-cream/80 sm:text-right">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
