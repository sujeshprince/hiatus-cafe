"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import { InstagramIcon } from "@/components/ui/social-icons";
import { galleryImages } from "@/data/gallery";
import { instagramHref } from "@/lib/links";
import { assetPath } from "@/lib/asset";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SectionKicker } from "@/components/ui/section-kicker";
import { Reveal } from "@/components/ui/reveal";
import { PauseMark } from "@/components/ui/brand-mark";

const ratioClasses = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  tall: "aspect-[4/5]",
} as const;

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const instagram = instagramHref();
  const image = index === null ? null : galleryImages[index];

  const go = (direction: number) => {
    setIndex((current) => {
      if (current === null) return 0;
      return (current + direction + galleryImages.length) % galleryImages.length;
    });
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-cream py-24 text-espresso sm:py-32 lg:py-40"
    >
      <div className="container-editorial">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionKicker>03 — The ambience</SectionKicker>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-6 text-[clamp(3.1rem,6vw,6.4rem)]">
                A glimpse of
                <br />
                the <span className="display-italic text-caramel-deep">Hiatus mood.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.14} className="lg:col-span-5 lg:pb-3">
            <p className="body-copy max-w-md">
              Warm corners, slow coffee, sunlight on a table, and the quiet
              pleasure of nowhere else to be. This is the kind of afternoon we
              built Hiatus for.
            </p>
            <p className="mt-5 text-[0.62rem] uppercase tracking-[0.18em] text-espresso/65">
              Preview photography · replace with your own café moments
            </p>
          </Reveal>
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:mt-16 lg:columns-3 lg:gap-5">
          {galleryImages.map((item, itemIndex) => (
            <Reveal
              key={item.src}
              delay={(itemIndex % 3) * 0.05}
              className="mb-4 break-inside-avoid lg:mb-5"
            >
              <button
                type="button"
                onClick={() => setIndex(itemIndex)}
                aria-haspopup="dialog"
                aria-label={`View image ${itemIndex + 1}: ${item.caption}`}
                className="group relative block w-full overflow-hidden bg-sand text-left"
              >
                <div className={cn("relative w-full", ratioClasses[item.ratio])}>
                  <Image
                    src={assetPath(item.src)}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 31vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045] warm-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/75 via-chocolate/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                    <p className="font-serif text-lg italic text-cream">
                      {item.caption}
                    </p>
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-cream/30 text-cream">
                      <Expand className="size-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-espresso/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-espresso/65">
            <PauseMark className="size-5 text-caramel" strokeWidth={1.6} />
            <p className="text-[0.64rem] uppercase tracking-[0.18em]">
              Ten small pauses · photographed slowly
            </p>
          </div>
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-espresso/70 transition hover:text-espresso"
            >
              <InstagramIcon className="size-4" strokeWidth={1.5} />
              <span className="link-underline">Follow on Instagram</span>
              <ArrowRight className="arrow-shift size-4" strokeWidth={1.4} />
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 text-[0.64rem] uppercase tracking-[0.16em] text-espresso/70">
              <InstagramIcon className="size-4" strokeWidth={1.5} />
              Instagram profile coming soon
            </span>
          )}
        </div>
      </div>

      <Dialog open={index !== null} onOpenChange={(open) => !open && setIndex(null)}>
        <DialogContent
          hideClose
          aria-describedby={undefined}
          className="inset-0 flex h-[100svh] w-full flex-col bg-chocolate/97 p-0 text-cream backdrop-blur-xl"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") go(1);
            if (event.key === "ArrowLeft") go(-1);
          }}
        >
          <DialogTitle className="sr-only">Hiatus Cafe ambience gallery</DialogTitle>

          <div className="flex items-center justify-between border-b border-cream/12 px-5 py-4 sm:px-8">
            <div className="flex items-center gap-3">
              <PauseMark className="size-6 text-caramel" strokeWidth={1.6} />
              <p className="text-[0.62rem] uppercase tracking-[0.2em] text-cream/70">
                The Hiatus mood · {index === null ? "01" : String(index + 1).padStart(2, "0")} /{" "}
                {String(galleryImages.length).padStart(2, "0")}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIndex(null)}
              aria-label="Close gallery"
              className="grid size-10 place-items-center rounded-full border border-cream/20 transition hover:border-cream hover:bg-cream hover:text-espresso"
            >
              <X className="size-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 py-5 sm:px-20">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-chocolate/45 text-cream transition hover:border-cream hover:bg-cream hover:text-espresso sm:left-6 sm:size-12"
            >
              <ArrowLeft className="size-4" strokeWidth={1.5} />
            </button>

            {image ? (
              <div
                key={image.src}
                className="image-fade-in relative h-full w-full"
              >
                <Image
                  src={assetPath(image.src)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 85vw"
                  className="object-contain"
                  priority
                />
              </div>
            ) : null}

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-cream/20 bg-chocolate/45 text-cream transition hover:border-cream hover:bg-cream hover:text-espresso sm:right-6 sm:size-12"
            >
              <ArrowRight className="size-4" strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-cream/12 px-5 py-5 sm:px-8">
            <p className="font-serif text-lg italic text-cream/85">
              {image?.caption}
            </p>
            <p className="hidden text-[0.58rem] uppercase tracking-[0.18em] text-cream/65 sm:block">
              Use ← → to move · Esc to close
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
