import { cn } from "@/lib/utils";

export function SectionKicker({
  children,
  className,
  line = true,
}: {
  children: React.ReactNode;
  className?: string;
  line?: boolean;
}) {
  return (
    <p className={cn("eyebrow inline-flex items-center gap-3", className)}>
      {line ? <span aria-hidden className="h-px w-8 bg-current opacity-45" /> : null}
      <span>{children}</span>
    </p>
  );
}
