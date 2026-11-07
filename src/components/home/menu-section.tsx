"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Leaf } from "lucide-react";
import {
  menuCategories,
  menuDisclaimer,
  type MenuCategory,
} from "@/data/menu";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset";
import { ButtonLink } from "@/components/ui/button";
import { SectionKicker } from "@/components/ui/section-kicker";
import { Reveal } from "@/components/ui/reveal";
import { PauseMark } from "@/components/ui/brand-mark";

function CategoryTabs({
  activeId,
  onChange,
}: {
  activeId: string;
  onChange: (category: MenuCategory) => void;
}) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const current = menuCategories.findIndex((category) => category.id === activeId);
    let next = current;

    if (event.key === "ArrowRight") next = (current + 1) % menuCategories.length;
    else if (event.key === "ArrowLeft")
      next = (current - 1 + menuCategories.length) % menuCategories.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = menuCategories.length - 1;
    else return;

    event.preventDefault();
    onChange(menuCategories[next]);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      role="tablist"
      aria-label="Menu categories"
      onKeyDown={handleKeyDown}
      className="no-scrollbar -mx-5 flex gap-1 overflow-x-auto border-y border-cream/15 px-5 sm:mx-0 sm:flex-wrap sm:px-0"
    >
      {menuCategories.map((category, index) => {
        const active = category.id === activeId;
        return (
          <button
            key={category.id}
            ref={(node) => {
              tabRefs.current[index] = node;
            }}
            role="tab"
            id={`menu-tab-${category.id}`}
            aria-selected={active}
            aria-controls={`menu-panel-${category.id}`}
            tabIndex={active ? 0 : -1}
            onClick={() => onChange(category)}
            className={cn(
              "shrink-0 border-b-2 px-4 py-4 text-[0.66rem] font-semibold uppercase tracking-[0.16em] transition-colors",
              active
                ? "border-caramel text-caramel"
                : "border-transparent text-cream/65 hover:text-cream",
            )}
          >
            {category.shortLabel}
          </button>
        );
      })}
    </div>
  );
}

export function MenuSection() {
  const [active, setActive] = useState(menuCategories[0]);

  return (
    <section
      id="menu"
      className="relative overflow-hidden bg-espresso py-24 text-cream sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 size-[30rem] rounded-full bg-caramel/10 blur-[120px]"
      />

      <div className="container-editorial relative">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker className="text-cream/70">02 - Signature menu</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6.2vw,6.7rem)]">
                A menu for
                <br />
                <span className="display-italic text-caramel">slow moments.</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md text-cream/70">
              Coffee poured with care, tea for long conversations, and something
              sweet for the moments in between. Take your time — the menu is
              made for exactly that.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-caramel/40 bg-caramel/10 px-3 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-caramel-light">
                <PauseMark className="size-3" strokeWidth={1.8} />
                Sample menu
              </span>
              <span className="text-[0.6rem] uppercase tracking-[0.16em] text-cream/65">
                Final items & prices to be confirmed
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="soft-arch relative aspect-[4/5] overflow-hidden bg-chocolate">
                <div
                  key={active.id}
                  className="image-fade-in absolute inset-0"
                >
                  <Image
                    src={assetPath(active.image)}
                    alt={active.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 38vw"
                    className="object-cover warm-image"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/85 via-chocolate/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="eyebrow text-[0.56rem] text-caramel">
                        {active.kicker} · {active.label}
                      </p>
                      <p className="mt-2 max-w-[16rem] font-serif text-[1.35rem] italic leading-snug text-cream/90">
                        {active.intro}
                      </p>
                    </div>
                    <PauseMark className="size-9 shrink-0 text-cream/40" />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="font-serif text-4xl text-caramel">{active.kicker}</span>
                <p className="pt-1 text-[0.65rem] uppercase leading-relaxed tracking-[0.16em] text-cream/65">
                  A changing selection
                  <br />
                  of café favourites
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <CategoryTabs activeId={active.id} onChange={setActive} />

            <div
              role="tabpanel"
              id={`menu-panel-${active.id}`}
              aria-labelledby={`menu-tab-${active.id}`}
              className="mt-7"
            >
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="eyebrow text-[0.56rem] text-cream/65">Now viewing</p>
                  <h3 className="mt-1 font-serif text-3xl text-cream sm:text-4xl">
                    {active.label}
                  </h3>
                </div>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-cream/65">
                  {active.items.length} items
                </p>
              </div>

              <ul className="mt-4">
                {active.items.map((item, index) => (
                  <li
                    key={item.name}
                    className="group border-b border-cream/12 py-5 transition-colors hover:border-cream/30"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1.5 text-[0.58rem] tracking-[0.15em] text-cream/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <h4 className="font-serif text-[1.25rem] leading-snug text-cream/95 transition-colors group-hover:text-caramel">
                            {item.name}
                          </h4>
                          <span
                            aria-hidden="true"
                            className="hidden flex-1 translate-y-[-0.2rem] border-b border-dotted border-cream/20 sm:block"
                          />
                          <span
                            className="shrink-0 font-serif text-[0.95rem] text-cream/60"
                            title="Price to be confirmed"
                          >
                            ₹—
                          </span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                          <p className="max-w-md text-[0.82rem] leading-relaxed text-cream/65">
                            {item.description}
                          </p>
                          {item.tags?.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-[0.54rem] uppercase tracking-[0.16em] text-[#b7bfa5]"
                            >
                              {tag === "VG" ? (
                                <Leaf className="size-2.5" strokeWidth={1.8} />
                              ) : null}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <ArrowUpRight className="mt-1 size-3.5 shrink-0 text-cream/0 transition-all duration-300 group-hover:text-caramel" />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-5 border-t border-cream/12 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-sm text-[0.65rem] leading-relaxed text-cream/65">
                  {menuDisclaimer}
                </p>
                <ButtonLink href="#reserve" variant="light" size="sm" className="shrink-0">
                  Reserve a table
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
