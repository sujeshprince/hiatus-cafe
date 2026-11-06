import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { PauseMark } from "@/components/ui/brand-mark";

function RotatingStamp() {
  return (
    <div className="relative grid size-36 place-items-center xl:size-44">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 size-full animate-spin-slow text-cream/65"
        aria-hidden="true"
      >
        <defs>
          <path
            id="stamp-circle"
            d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
          />
        </defs>
        <text className="fill-current text-[10.5px] uppercase tracking-[0.34em]">
          <textPath href="#stamp-circle" startOffset="0%">
            TAKE A PAUSE · HIATUS CAFE · DAUDPUR · GORAKHPUR ·
          </textPath>
        </text>
      </svg>
      <div className="grid size-20 place-items-center rounded-full border border-cream/20 xl:size-24">
        <PauseMark className="size-10 text-caramel xl:size-12" />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-espresso text-cream"
    >
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_center] opacity-[0.8] warm-image"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,16,11,0.96)_0%,rgba(26,16,11,0.78)_38%,rgba(26,16,11,0.24)_72%,rgba(26,16,11,0.52)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(0deg,rgba(26,16,11,0.96)_0%,rgba(26,16,11,0.22)_40%,transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[34rem] rounded-full bg-caramel/10 blur-[120px]"
      />

      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 xl:block">
        <div className="flex flex-col items-center gap-4 text-cream/65">
          <span className="h-16 w-px bg-current" />
          <span className="eyebrow [writing-mode:vertical-rl]">Take a pause</span>
          <span className="h-16 w-px bg-current" />
        </div>
      </div>

      <div className="container-editorial relative z-10 flex min-h-[100svh] flex-col justify-end pb-24 pt-32 sm:pb-20 sm:pt-36 lg:pb-14">
        <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8 xl:col-span-7">
            <p className="eyebrow flex flex-wrap items-center gap-x-4 gap-y-2 text-cream/65">
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-3.5 text-caramel" strokeWidth={1.6} />
                Daudpur, Gorakhpur
              </span>
              <span aria-hidden className="h-px w-6 bg-cream/30" />
              <span>A neighbourhood café</span>
            </p>

            <h1 className="mt-6 max-w-[12ch]">
              <span className="display block text-[clamp(3.4rem,8.4vw,8.7rem)]">
                A Little
              </span>
              <span className="display-italic -mt-1 block text-[clamp(4rem,10vw,10rem)] text-caramel">
                Pause
              </span>
              <span className="display -mt-1 block text-[clamp(2.2rem,4.4vw,4.4rem)] leading-[1.02] text-cream/92">
                in a Busy World.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-cream/70 sm:text-[1.05rem]">
              Coffee, conversations, comfort and everything in between.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <ButtonLink href="#menu" variant="primary" size="lg">
                Explore our menu
                <ArrowDown className="size-3.5 transition-transform duration-300 group-hover:translate-y-1" />
              </ButtonLink>
              <Link
                href="#reserve"
                className="group inline-flex items-center gap-2 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream/80 transition hover:text-cream"
              >
                <span className="link-underline">Find your table</span>
                <ArrowUpRight className="arrow-shift size-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="flex items-end justify-between gap-6 lg:col-span-4 lg:justify-end xl:col-span-5">
            <div className="hidden max-w-[13rem] border-l border-cream/20 pl-5 text-cream/75 lg:block">
              <p className="eyebrow text-[0.58rem] text-caramel">The idea</p>
              <p className="mt-3 font-serif text-[1.2rem] leading-snug text-cream/90">
                A pause is not empty.
                <br />
                It is where the good things happen.
              </p>
            </div>
            <div className="hidden shrink-0 lg:block">
              <RotatingStamp />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-cream/15 pt-5 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[0.66rem] uppercase tracking-[0.18em] text-cream/65">
            <span>{siteConfig.priceRange}</span>
            <span className="hidden h-1 w-1 rounded-full bg-cream/30 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5 text-caramel" strokeWidth={1.5} />
              Closes 10:00 PM
            </span>
          </div>

          <Link
            href="#story"
            className="group inline-flex items-center gap-3 self-start text-[0.62rem] uppercase tracking-[0.2em] text-cream/70 transition hover:text-cream sm:self-auto"
          >
            <span className="grid size-9 place-items-center rounded-full border border-cream/20 transition group-hover:border-cream/60">
              <ArrowDown className="size-3.5 animate-float-soft" strokeWidth={1.5} />
            </span>
            Scroll to slow down
          </Link>
        </div>
      </div>
    </section>
  );
}
