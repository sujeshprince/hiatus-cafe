import {
  ArrowUpRight,
  Clock,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Wallet,
} from "lucide-react";
import { fullAddress, siteConfig } from "@/config/site";
import {
  directionsHref,
  mapEmbedSrc,
  telHref,
  whatsappHref,
} from "@/lib/links";
import { Reveal } from "@/components/ui/reveal";
import { SectionKicker } from "@/components/ui/section-kicker";
import { ButtonLink } from "@/components/ui/button";
import { PauseMark } from "@/components/ui/brand-mark";

export function Location() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-ivory py-24 text-espresso sm:py-32 lg:py-40"
    >
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>07 — Find us</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6vw,6.5rem)]">
                Come find
                <br />
                your <span className="display-italic text-caramel-deep">corner.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md">
              Tucked into Daudpur, Gorakhpur. Easy to find, hard to leave. Drop
              in for a coffee, call ahead for a table, or ask us for directions
              — we&apos;ll point you the right way.
            </p>
            <p className="mt-5 flex items-center gap-2 text-[0.6rem] uppercase tracking-[0.18em] text-espresso/65">
              <PauseMark className="size-4 text-caramel" strokeWidth={1.6} />
              A little off the usual route
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:mt-20 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-7">
            <div className="relative h-[24rem] overflow-hidden rounded-[1.25rem] border border-espresso/10 bg-sand sm:h-[32rem] lg:h-full lg:min-h-[38rem]">
              <iframe
                title="Map showing Hiatus Cafe in Daudpur, Gorakhpur"
                src={mapEmbedSrc()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.18] sepia-[0.12]"
              />
              <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                <div className="pointer-events-auto flex flex-col gap-4 rounded-2xl border border-espresso/10 bg-ivory/92 p-5 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-espresso text-cream">
                      <MapPin className="size-4" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="eyebrow text-[0.54rem] text-espresso/65">
                        You&apos;ll find us here
                      </p>
                      <p className="mt-1 font-serif text-xl text-espresso">
                        Daudpur, Gorakhpur
                      </p>
                      <p className="mt-1 text-xs text-espresso/70">
                        Uttar Pradesh 273001
                      </p>
                    </div>
                  </div>
                  <ButtonLink
                    href={directionsHref()}
                    target="_blank"
                    rel="noreferrer"
                    variant="dark"
                    size="sm"
                    className="shrink-0"
                  >
                    Directions
                    <Navigation className="size-3.5" strokeWidth={1.5} />
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col rounded-[1.25rem] border border-espresso/10 bg-cream p-7 sm:p-9 lg:p-10">
              <div className="flex items-start justify-between gap-4 border-b border-espresso/15 pb-6">
                <div>
                  <p className="eyebrow text-[0.56rem] text-caramel-deep">
                    Hiatus Cafe
                  </p>
                  <p lang="hi" className="mt-2 font-hindi text-xl text-espresso/65">
                    {siteConfig.hindiName}
                  </p>
                </div>
                <PauseMark className="size-8 text-caramel-deep" strokeWidth={1.4} />
              </div>

              <div className="divide-y divide-espresso/10">
                <div className="flex gap-4 py-5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-caramel-deep" strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.18em] text-espresso/65">
                      Address
                    </p>
                    <address className="mt-1.5 text-[0.9rem] not-italic leading-relaxed text-espresso/75">
                      {fullAddress}
                    </address>
                  </div>
                </div>

                <div className="flex gap-4 py-5">
                  <Phone className="mt-0.5 size-4 shrink-0 text-caramel-deep" strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.18em] text-espresso/65">
                      Phone
                    </p>
                    <a
                      href={telHref()}
                      className="link-underline mt-1.5 inline-block text-[0.95rem] text-espresso/80 hover:text-espresso"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 py-5">
                  <Clock className="mt-0.5 size-4 shrink-0 text-caramel-deep" strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.18em] text-espresso/65">
                      Hours
                    </p>
                    <p className="mt-1.5 text-[0.9rem] text-espresso/75">
                      Open daily · Closes {siteConfig.hours.closesDisplay}
                    </p>
                    <p className="mt-1 text-xs text-espresso/65">
                      {siteConfig.hours.note}. Hours may vary on holidays.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 py-5">
                  <Wallet className="mt-0.5 size-4 shrink-0 text-caramel-deep" strokeWidth={1.5} />
                  <div className="flex-1">
                    <p className="text-[0.58rem] uppercase tracking-[0.18em] text-espresso/65">
                      Average spend
                    </p>
                    <p className="mt-1.5 text-[0.9rem] text-espresso/75">
                      {siteConfig.priceRange}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-auto grid gap-2 pt-6 sm:grid-cols-2">
                <ButtonLink href={telHref()} variant="dark" size="md">
                  <Phone className="size-3.5" strokeWidth={1.6} />
                  Call us
                </ButtonLink>
                <ButtonLink
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  variant="outline"
                  size="md"
                >
                  <MessageCircle className="size-3.5" strokeWidth={1.6} />
                  WhatsApp
                </ButtonLink>
              </div>

              <a
                href={directionsHref()}
                target="_blank"
                rel="noreferrer"
                className="group mt-5 inline-flex items-center justify-between gap-3 border-t border-espresso/15 pt-5 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-espresso/70 transition hover:text-espresso"
              >
                Open in Google Maps
                <ArrowUpRight className="arrow-shift size-4" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
