import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type Tone = "light" | "dark";

export function PauseMark({
  className,
  strokeWidth = 1.4,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={cn("size-10", className)}
    >
      <circle
        cx="24"
        cy="24"
        r="22"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        opacity="0.55"
      />
      <path
        d="M20 17v14M28 17v14"
        stroke="currentColor"
        strokeWidth={strokeWidth + 0.3}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BrandLockup({
  tone = "light",
  className,
  onClick,
}: {
  tone?: Tone;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="#top"
      onClick={onClick}
      aria-label="Hiatus Cafe — back to top"
      className={cn(
        "group inline-flex items-center gap-3",
        tone === "light" ? "text-ivory" : "text-espresso",
        className,
      )}
    >
      <PauseMark className="size-9 transition-transform duration-500 group-hover:rotate-90 sm:size-10" />
      <span className="flex flex-col leading-none">
        <span className="font-sans text-[0.82rem] font-semibold tracking-[0.28em] sm:text-[0.9rem]">
          HIATUS
        </span>
        <span
          lang="hi"
          className="mt-1 font-hindi text-[0.62rem] tracking-[0.16em] opacity-65"
        >
          {siteConfig.hindiName}
        </span>
      </span>
    </Link>
  );
}
