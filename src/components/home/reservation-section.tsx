import Image from "next/image";
import { Clock, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { telHref } from "@/lib/links";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { PauseMark } from "@/components/ui/brand-mark";
import { ReservationForm } from "@/components/reservation/reservation-form";

export function ReservationSection() {
  return (
    <section
      id="reserve"
      className="relative overflow-hidden bg-cream py-24 text-espresso sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[28rem] rounded-full bg-caramel/10 blur-[110px]"
      />
      <div className="container-editorial relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>08 — Reservations</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6vw,6.5rem)]">
                Your table
                <br />
                is <span className="display-italic text-caramel-deep">waiting.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md">
              Tell us when you&apos;re coming and what the moment is for. We&apos;ll
              check the table and confirm personally — no automated promises,
              no prepayment.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-7">
          <Reveal className="lg:col-span-5" y={36}>
            <div className="lg:sticky lg:top-28">
              <div className="arch-frame relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src="/images/reserve/reserve-table.jpg"
                  alt="A cosy café interior with wooden tables, plants and large windows"
                  fill
                  sizes="(max-width: 1024px) 92vw, 38vw"
                  className="object-cover warm-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/80 via-chocolate/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <PauseMark className="size-8 text-cream/60" strokeWidth={1.5} />
                  <p className="mt-4 max-w-sm font-serif text-[1.6rem] italic leading-snug text-cream/95 sm:text-[1.8rem]">
                    “The best tables are the ones where time forgets to hurry.”
                  </p>
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.2em] text-cream/75">
                    A note from the Hiatus table
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-espresso/12 bg-ivory/55 p-4">
                  <Phone className="size-4 text-caramel-deep" strokeWidth={1.5} />
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.16em] text-espresso/65">
                    Prefer to talk?
                  </p>
                  <a
                    href={telHref()}
                    className="link-underline mt-1 inline-block font-serif text-[1.05rem] text-espresso/80"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
                <div className="rounded-xl border border-espresso/12 bg-ivory/55 p-4">
                  <Clock className="size-4 text-caramel-deep" strokeWidth={1.5} />
                  <p className="mt-3 text-[0.56rem] uppercase tracking-[0.16em] text-espresso/65">
                    Closing time
                  </p>
                  <p className="mt-1 font-serif text-[1.05rem] text-espresso/80">
                    {siteConfig.hours.closesDisplay} daily
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[0.64rem] leading-relaxed text-espresso/65">
                Opening time is not listed until confirmed by the café. Please
                call ahead, especially for early visits or larger groups.
              </p>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1} y={36}>
            <ReservationForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
