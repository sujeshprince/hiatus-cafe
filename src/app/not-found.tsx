import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import { BrandLockup, PauseMark } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-espresso py-32 text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-20 size-[32rem] rounded-full bg-caramel/10 blur-[120px]"
      />
      <div className="container-editorial relative">
        <BrandLockup tone="light" />
        <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-cream/70">404 — A wrong turn</p>
            <h1 className="display mt-5 text-[clamp(4rem,11vw,9rem)]">
              Lost the
              <br />
              <span className="display-italic text-caramel">thread?</span>
            </h1>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-cream/70">
              This page isn&apos;t on the menu. But there&apos;s always a warm cup
              and a seat waiting back at Hiatus.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <ButtonLink href="/" variant="primary" size="lg">
                <ArrowLeft className="size-4" strokeWidth={1.6} />
                Back to the café
              </ButtonLink>
              <Link
                href="/#visit"
                className="link-underline inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/75 hover:text-cream"
              >
                <MapPin className="size-3.5 text-caramel" strokeWidth={1.6} />
                Find us in {siteConfig.address.city}
              </Link>
            </div>
          </div>
          <div className="hidden justify-end lg:col-span-4 lg:flex">
            <PauseMark className="size-52 text-cream/10" strokeWidth={0.8} />
          </div>
        </div>
      </div>
    </section>
  );
}
