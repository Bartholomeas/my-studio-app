import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `relative z-0 inline-flex items-center justify-center gap-2 overflow-hidden
  whitespace-nowrap px-4 py-2 text-sm font-semibold
  uppercase text-primary-300 transition-all duration-500
  
  before:absolute before:inset-0 before:-z-10
  before:translate-x-[150%] before:translate-y-[150%]
  before:scale-[2.5] before:rounded-[100%]
  before:bg-primary-300 before:transition-transform
  before:duration-1000 before:content-[""]
  hover:scale-105 hover:text-neutral-900
  hover:before:translate-x-0 hover:before:translate-y-0
  focus-visible:outline-none

  focus-visible:ring-1 focus-visible:ring-ring
  active:scale-95
  disabled:pointer-events-none
  disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: 'bg-foreground text-background',
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
