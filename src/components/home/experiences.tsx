import Image from "next/image";
import { experiences } from "@/data/experiences";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ExperienceCta } from "@/components/home/experience-cta";
import { PauseMark } from "@/components/ui/brand-mark";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset";

const toneClasses = {
  caramel: {
    shell: "bg-caramel-soft text-espresso",
    eyebrow: "text-espresso/70",
    body: "text-espresso/80",
    number: "text-espresso/15",
    rule: "border-espresso/25",
    chip: "border-espresso/20 bg-espresso/5 text-espresso/75",
  },
  olive: {
    shell: "bg-olive-deep text-cream",
    eyebrow: "text-cream/75",
    body: "text-cream/80",
    number: "text-cream/15",
    rule: "border-cream/25",
    chip: "border-cream/25 bg-cream/5 text-cream/90",
  },
  espresso: {
    shell: "bg-espresso text-cream",
    eyebrow: "text-cream/70",
    body: "text-cream/70",
    number: "text-cream/15",
    rule: "border-cream/25",
    chip: "border-cream/25 bg-cream/5 text-cream/70",
  },
} as const;

export function Experiences() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-ivory py-24 text-espresso sm:py-32 lg:py-40"
    >
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>05 — Three ways to pause</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6vw,6.5rem)]">
                Make the moment
                <br />
                <span className="display-italic text-caramel-deep">yours.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md">
              A first date, a quiet work afternoon, or the whole group in one
              place. Choose the kind of pause you need — we&apos;ll save you a
              seat.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.18em] text-espresso/65">
              <PauseMark className="size-4 text-caramel" strokeWidth={1.6} />
              Seating is subject to availability
            </p>
          </Reveal>
        </div>

        <div className="mt-14 space-y-5 lg:mt-20 lg:space-y-7">
          {experiences.map((experience, index) => {
            const tone = toneClasses[experience.tone];
            const reversed = index % 2 === 1;

            return (
              <Reveal key={experience.id} y={36}>
                <article
                  className={cn(
                    "grid overflow-hidden rounded-[1.5rem] lg:grid-cols-12",
                    tone.shell,
                  )}
                >
                  <div
                    className={cn(
                      "relative min-h-[20rem] lg:col-span-7 lg:min-h-[30rem]",
                      reversed ? "lg:order-2" : "lg:order-1",
                    )}
                  >
                    <Image
                      src={assetPath(experience.image)}
                      alt={experience.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover warm-image"
                    />
                    <div
                      className={cn(
                        "absolute inset-0",
                        experience.tone === "caramel"
                          ? "bg-gradient-to-t from-espresso/55 via-transparent to-transparent"
                          : "bg-gradient-to-t from-chocolate/45 via-transparent to-transparent",
                      )}
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute bottom-5 font-serif text-[5.5rem] leading-none lg:bottom-7",
                        reversed ? "right-6 lg:right-9" : "left-6 lg:left-9",
                        "text-cream/80",
                      )}
                    >
                      {experience.index}
                    </span>
                    <span className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-chocolate/60 px-3 py-1.5 text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-cream backdrop-blur-sm lg:left-9 lg:top-8">
                      <PauseMark className="size-3" strokeWidth={1.8} />
                      {experience.eyebrow}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "flex flex-col justify-between gap-10 p-7 sm:p-9 lg:col-span-5 lg:p-11",
                      reversed ? "lg:order-1" : "lg:order-2",
                    )}
                  >
                    <div>
                      <p className={cn("eyebrow text-[0.56rem]", tone.eyebrow)}>
                        Experience {experience.index}
                      </p>
                      <h3 className="display mt-4 text-[clamp(2.2rem,3.6vw,3.8rem)]">
                        {experience.title}
                      </h3>
                      <p className={cn("mt-5 max-w-sm text-[0.9rem] leading-relaxed", tone.body)}>
                        {experience.description}
                      </p>
                    </div>

                    <div>
                      <div className={cn("mb-6 flex flex-wrap gap-2 border-t pt-5", tone.rule)}>
                        <span
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.16em]",
                            tone.chip,
                          )}
                        >
                          Dine in
                        </span>
                        <span
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.16em]",
                            tone.chip,
                          )}
                        >
                          Table request
                        </span>
                        <span
                          className={cn(
                            "rounded-full border px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.16em]",
                            tone.chip,
                          )}
                        >
                          Call to confirm
                        </span>
                      </div>
                      <ExperienceCta
                        occasion={experience.occasion}
                        label={experience.cta}
                        light={experience.tone !== "caramel"}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
