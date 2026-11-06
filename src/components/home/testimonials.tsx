"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, MessageCircle, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { PauseMark } from "@/components/ui/brand-mark";

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = usePrefersReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused || reduced) return;
    const timer = window.setInterval(() => emblaApi.scrollNext(), 7000);
    return () => window.clearInterval(timer);
  }, [emblaApi, paused, reduced]);

  return (
    <section className="relative overflow-hidden bg-sand py-24 text-espresso sm:py-32 lg:py-40">
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>06 — Guest notes</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6vw,6.5rem)]">
                The
                <span className="display-italic text-caramel-deep"> afterglow.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md">
              The best thing a café can leave you with is a feeling. These are
              the little notes we hope to hear — sample words for now, real
              guest voices once the tables fill up.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-caramel/35 bg-caramel/10 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-espresso/80">
                <PauseMark className="size-3" strokeWidth={1.8} />
                Sample guest notes
              </span>
              <span className="text-[0.58rem] uppercase tracking-[0.16em] text-espresso/65">
                Placeholder reviews
              </span>
            </div>
          </Reveal>
        </div>

        <div
          ref={wrapperRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Sample guest notes"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12"
        >
          <div className="lg:col-span-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex touch-pan-y">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name + testimonial.detail}
                    className="min-w-0 flex-[0_0_100%] pr-0 sm:pr-8"
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${testimonials.length}`}
                  >
                    <figure className="relative border-t border-espresso/20 pt-8">
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-8 right-0 font-serif text-[9rem] leading-none text-espresso/8 sm:text-[12rem]"
                      >
                        ”
                      </span>
                      <div className="flex items-center gap-1.5 text-caramel-deep">
                        {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="size-3.5 fill-current"
                            strokeWidth={1.5}
                          />
                        ))}
                        <span className="ml-2 text-[0.56rem] uppercase tracking-[0.18em] text-espresso/65">
                          Placeholder rating
                        </span>
                      </div>

                      <blockquote className="relative mt-6">
                        <p className="max-w-4xl font-serif text-[clamp(1.9rem,4vw,3.7rem)] leading-[1.18] tracking-[-0.02em] text-espresso/90">
                          “{testimonial.quote}”
                        </p>
                      </blockquote>

                      <figcaption className="mt-8 flex items-center gap-4">
                        <span className="grid size-11 place-items-center rounded-full border border-espresso/20 bg-ivory/50 text-[0.58rem] font-semibold tracking-[0.12em] text-espresso/70">
                          {testimonial.initials}
                        </span>
                        <span>
                          <span className="block font-serif text-lg text-espresso/85">
                            {testimonial.name}
                          </span>
                          <span className="mt-0.5 block text-[0.6rem] uppercase tracking-[0.16em] text-espresso/65">
                            {testimonial.detail}
                          </span>
                        </span>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-espresso/15 pt-5">
              <div className="flex items-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.detail}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Go to guest note ${index + 1}`}
                    aria-current={selected === index ? "true" : undefined}
                    className="group grid h-6 w-6 place-items-center rounded-full"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        selected === index
                          ? "w-5 bg-caramel-deep"
                          : "w-1.5 bg-espresso/20 group-hover:bg-espresso/40",
                      )}
                    />
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <span className="mr-3 font-serif text-sm italic text-espresso/65">
                  {String(selected + 1).padStart(2, "0")} /{" "}
                  {String(testimonials.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollPrev()}
                  aria-label="Previous guest note"
                  className="grid size-10 place-items-center rounded-full border border-espresso/20 transition hover:border-espresso hover:bg-espresso hover:text-cream"
                >
                  <ArrowLeft className="size-4" strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={() => emblaApi?.scrollNext()}
                  aria-label="Next guest note"
                  className="grid size-10 place-items-center rounded-full border border-espresso/20 transition hover:border-espresso hover:bg-espresso hover:text-cream"
                >
                  <ArrowRight className="size-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          <Reveal delay={0.1} className="lg:col-span-4">
            <aside className="relative overflow-hidden rounded-[1.25rem] border border-espresso/15 bg-ivory/45 p-7 sm:p-8">
              <span
                aria-hidden="true"
                className="absolute -right-8 -top-8 size-32 rounded-full border border-caramel/20"
              />
              <MessageCircle className="size-7 text-caramel-deep" strokeWidth={1.4} />
              <p className="mt-7 font-serif text-[1.65rem] leading-snug text-espresso/90">
                Been to Hiatus?
                <br />
                Leave us a note.
              </p>
              <p className="mt-4 text-[0.82rem] leading-relaxed text-espresso/70">
                Verified Google reviews will be linked here as soon as the café&apos;s
                profile is live. Until then, these notes are clearly labelled
                placeholders.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.18em] text-espresso/65">
                <span className="size-1.5 rounded-full bg-caramel" />
                Google reviews · coming soon
              </div>
            </aside>
          </Reveal>
        </div>

        <p className="mt-10 border-t border-espresso/15 pt-5 text-[0.62rem] leading-relaxed text-espresso/65">
          These are sample guest notes written for layout purposes only. They are
          not real customer reviews and will be replaced with verified feedback.
        </p>
      </div>
    </section>
  );
}
