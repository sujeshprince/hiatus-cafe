import Image from "next/image";
import { siteConfig } from "@/config/site";
import { assetPath } from "@/lib/asset";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { PauseMark } from "@/components/ui/brand-mark";

export function Story() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-ivory py-24 text-espresso sm:py-32 lg:py-40"
    >
      <span
        aria-hidden="true"
        className="outline-number pointer-events-none absolute -right-4 top-8 select-none font-serif text-[24vw] leading-none text-espresso sm:top-12"
      >
        01
      </span>

      <div className="container-editorial relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10 lg:gap-y-0">
          <div className="lg:col-span-5 lg:pt-8">
            <Reveal>
              <SectionKicker>01 — Our story</SectionKicker>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.2rem,5.6vw,5.9rem)]">
                More than
                <br />
                just{" "}
                <span className="display-italic text-caramel-deep">coffee.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="body-copy mt-8 max-w-md">
                Hiatus is the space between the rush and the rest of your day.
                A corner in Daudpur where the coffee is slow, the light is warm,
                and there is always time for one more conversation.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="body-copy mt-5 max-w-md">
                Come for a first date, a quiet hour with a book, or a table full
                of friends. We have made room for you. Come for the coffee. Stay
                for the pause.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <blockquote className="mt-9 border-l border-caramel/60 pl-5">
                <p className="font-serif text-[1.55rem] italic leading-snug text-espresso/90 sm:text-[1.75rem]">
                  “A café is a pause button for the day.”
                </p>
                <footer className="eyebrow mt-3 text-[0.56rem] text-espresso/65">
                  The Hiatus way of thinking
                </footer>
              </blockquote>
            </Reveal>

            <Reveal delay={0.34}>
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-espresso/15 pt-6">
                <div>
                  <dt className="eyebrow text-[0.54rem] text-espresso/65">Find us</dt>
                  <dd className="mt-2 font-serif text-lg leading-tight">Daudpur</dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.54rem] text-espresso/65">Per person</dt>
                  <dd className="mt-2 font-serif text-lg leading-tight">
                    {siteConfig.priceRange.replace(" per person", "")}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.54rem] text-espresso/65">Daily</dt>
                  <dd className="mt-2 font-serif text-lg leading-tight">
                    Till 10 PM
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7 lg:pl-8">
            <div className="grid grid-cols-12 items-end gap-3 sm:gap-4">
              <Reveal className="col-span-8" y={36}>
                <div className="arch-frame image-zoom relative aspect-[4/5] overflow-hidden bg-sand">
                  <Image
                    src={assetPath("/images/story/story-main.jpg")}
                    alt="A warm, rustic café interior with wooden tables and soft lighting"
                    fill
                    sizes="(max-width: 1024px) 70vw, 42vw"
                    className="object-cover warm-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/25 via-transparent to-transparent" />
                </div>
              </Reveal>

              <Reveal className="col-span-4 pb-8 sm:pb-12" delay={0.12} y={36}>
                <div className="image-zoom relative aspect-[3/4] overflow-hidden bg-sand">
                  <Image
                    src={assetPath("/images/story/story-barista.jpg")}
                    alt="A barista pouring steamed milk into a cup to create latte art"
                    fill
                    sizes="(max-width: 1024px) 30vw, 18vw"
                    className="object-cover warm-image"
                  />
                </div>
                <p className="mt-3 text-[0.62rem] uppercase tracking-[0.16em] text-espresso/65">
                  The pour,
                  <br />
                  paused.
                </p>
              </Reveal>
            </div>

            <div className="mt-5 flex items-center justify-between gap-4 border-t border-espresso/12 pt-4">
              <p className="flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.2em] text-espresso/65">
                <PauseMark className="size-4 text-caramel" strokeWidth={1.6} />
                Warm light · slow coffee
              </p>
              <p className="font-serif text-sm italic text-espresso/65">Daudpur, Gorakhpur</p>
            </div>

            <div className="pointer-events-none absolute -right-2 top-1/3 hidden -translate-y-1/2 lg:block">
              <p
                aria-hidden="true"
                lang="hi"
                className="font-hindi text-[1.35rem] text-espresso/30 [writing-mode:vertical-rl]"
              >
                {siteConfig.hindiName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
