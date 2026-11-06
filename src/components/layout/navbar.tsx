"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { navLinks, siteConfig } from "@/config/site";
import { telHref } from "@/lib/links";
import { cn } from "@/lib/utils";
import { BrandLockup } from "@/components/ui/brand-mark";
import { ButtonLink } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-38% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-espresso/10 bg-ivory/92 text-espresso shadow-[0_12px_40px_rgba(42,27,20,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent text-ivory",
      )}
    >
      <div className="container-editorial flex h-[4.6rem] items-center justify-between gap-6 sm:h-[5.2rem]">
        <BrandLockup tone={scrolled ? "dark" : "light"} />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active === link.href ? "location" : undefined}
                  className={cn(
                    "link-underline relative py-2 text-[0.67rem] font-semibold uppercase tracking-[0.2em] transition-colors",
                    active === link.href
                      ? scrolled
                        ? "text-caramel-deep"
                        : "text-caramel"
                      : "opacity-80 hover:opacity-100",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={telHref()}
            aria-label={`Call Hiatus Cafe on ${siteConfig.phoneDisplay}`}
            className={cn(
              "hidden size-10 place-items-center rounded-full border transition-colors md:grid",
              scrolled
                ? "border-espresso/15 hover:border-espresso hover:bg-espresso hover:text-ivory"
                : "border-ivory/25 hover:border-ivory hover:bg-ivory hover:text-espresso",
            )}
          >
            <Phone className="size-[0.95rem]" strokeWidth={1.5} />
          </a>

          <ButtonLink
            href="#reserve"
            variant="caramel"
            size="sm"
            className="hidden sm:inline-flex"
          >
            Reserve a table
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className={cn(
              "grid size-10 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-espresso/15 hover:border-espresso hover:bg-espresso hover:text-ivory"
                : "border-ivory/25 hover:border-ivory hover:bg-ivory hover:text-espresso",
            )}
          >
            <Menu className="size-5" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          hideClose
          aria-describedby={undefined}
          className="inset-0 flex h-[100svh] w-full flex-col overflow-y-auto bg-espresso px-6 py-6 text-cream"
        >
          <DialogTitle className="sr-only">Hiatus Cafe navigation</DialogTitle>

          <div className="flex items-center justify-between">
            <BrandLockup tone="light" onClick={() => setOpen(false)} />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-cream/20 transition hover:border-cream hover:bg-cream hover:text-espresso"
            >
              <X className="size-5" strokeWidth={1.3} />
            </button>
          </div>

          <nav aria-label="Mobile" className="mt-16 flex-1">
            <ul className="space-y-1">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline gap-4 border-b border-cream/10 py-4"
                  >
                    <span className="text-[0.6rem] tracking-[0.2em] text-caramel">
                      0{index + 1}
                    </span>
                    <span className="display text-[2.6rem] leading-none transition-colors group-hover:text-caramel sm:text-5xl">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-10 space-y-6">
            <ButtonLink
              href="#reserve"
              variant="primary"
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Reserve a table
            </ButtonLink>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-cream/75">
              <div>
                <p>{siteConfig.address.line1}, {siteConfig.address.city}</p>
                <p className="mt-1">{siteConfig.phoneDisplay}</p>
              </div>
              <a
                href={telHref()}
                className="link-underline font-semibold uppercase tracking-[0.18em] text-cream"
              >
                Call now
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
