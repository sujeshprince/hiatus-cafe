"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 rounded-full font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-4",
  {
    variants: {
      variant: {
        primary:
          "bg-cream text-espresso hover:bg-caramel-soft shadow-[0_1px_0_rgba(255,255,255,0.15)_inset]",
        dark: "bg-espresso text-cream hover:bg-chocolate",
        caramel: "bg-caramel text-espresso hover:bg-cream",
        outline:
          "border border-current/30 bg-transparent text-current hover:border-current hover:bg-current/10",
        light:
          "border border-ivory/30 bg-transparent text-ivory hover:border-ivory hover:bg-ivory hover:text-espresso",
        ghost: "px-0 text-current underline-offset-4 hover:underline",
      },
      size: {
        sm: "px-4 py-2.5 text-[0.64rem]",
        md: "px-6 py-3.5",
        lg: "px-8 py-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

type LinkProps = React.ComponentPropsWithoutRef<"a"> &
  VariantProps<typeof buttonVariants>;

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
ButtonLink.displayName = "ButtonLink";

export { buttonVariants };
