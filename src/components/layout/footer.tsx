import Link from "next/link";
import { ArrowUp, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-icons";
import { fullAddress, navLinks, siteConfig } from "@/config/site";
import { directionsHref, instagramHref, telHref, whatsappHref } from "@/lib/links";
import { BrandLockup } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button";

export function Footer() {
  const instagram = instagramHref();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-chocolate text-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 top-0 size-[30rem] rounded-full bg-caramel/10 blur-[100px]"
      />
      <div className="container-editorial relative pb-28 pt-16 sm:pt-20 lg:pb-12 lg:pt-24">
        <div className="grid gap-14 border-b border-cream/12 pb-14 lg:grid-cols-12 lg:gap-8 lg:pb-20">
          <div className="lg:col-span-6">
            <BrandLockup tone="light" />
            <p className="display mt-8 max-w-lg text-[clamp(2.8rem,5.8vw,5.6rem)]">
              Stay a little
              <br />
              <span className="display-italic text-caramel">longer.</span>
            </p>
            <p className="body-copy mt-6 max-w-md text-cream/65">
              Coffee, conversations, comfort and everything in between. Find us
              in Daudpur, Gorakhpur.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href="#reserve" variant="primary" size="md">
                Reserve a table
              </ButtonLink>
              <a
                href={whatsappHref()}
                target="_blank"
                rel="noreferrer"
                className="link-underline py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cream/70 transition hover:text-cream"
              >
                Say hello on WhatsApp
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-6 lg:pl-10">
            <div>
              <p className="eyebrow text-caramel">Explore</p>
              <ul className="mt-5 space-y-3 text-sm text-cream/65">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline transition hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="#reserve" className="link-underline hover:text-cream">
                    Reserve
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-caramel">Visit</p>
              <ul className="mt-5 space-y-4 text-sm text-cream/65">
                <li className="flex gap-2.5">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-caramel" strokeWidth={1.5} />
                  <span>{fullAddress}</span>
                </li>
                <li>
                  <a
                    href={directionsHref()}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline inline-flex items-center gap-2 text-cream/80 hover:text-cream"
                  >
                    Get directions
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow text-caramel">Contact</p>
              <ul className="mt-5 space-y-4 text-sm text-cream/65">
                <li>
                  <a
                    href={telHref()}
                    className="inline-flex items-center gap-2.5 text-cream/80 hover:text-cream"
                  >
                    <Phone className="size-4 text-caramel" strokeWidth={1.5} />
                    {siteConfig.phoneDisplay}
                  </a>
                </li>
                <li>
                  <p>{siteConfig.hours.summary}</p>
                  <p className="mt-1 text-cream/65">{siteConfig.hours.note}</p>
                </li>
                <li>
                  {instagram ? (
                    <a
                      href={instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 text-cream/80 hover:text-cream"
                    >
                      <InstagramIcon className="size-4 text-caramel" strokeWidth={1.5} />
                      Instagram
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2.5 text-cream/65">
                      <InstagramIcon className="size-4" strokeWidth={1.5} />
                      Instagram · coming soon
                    </span>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              lang="hi"
              className="font-hindi text-3xl text-cream/55 sm:text-4xl"
            >
              {siteConfig.hindiName}
            </p>
            <p className="mt-2 text-[0.65rem] uppercase tracking-[0.2em] text-cream/65">
              © {year} {siteConfig.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-[0.62rem] uppercase tracking-[0.18em] text-cream/65">
            <span>Daudpur · Gorakhpur</span>
            <Link
              href="#top"
              className="inline-flex items-center gap-2 border border-cream/15 px-4 py-2.5 text-cream/70 transition hover:border-cream/50 hover:text-cream"
            >
              Back to top
              <ArrowUp className="size-3.5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
