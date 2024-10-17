import * as React from "react";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

const underlineClasses = "before:inset-x-0 before:bottom-0 before:h-[2px] before:origin-left before:scale-x-0 before:rounded-full before:bg-foreground before:transition-transform before:duration-300 before:ease-out before:content-[''] hover:before:scale-x-100";

const buttonVariants = cva(
  `group relative z-0
  whitespace-nowrap rounded-full px-2 text-sm font-semibold uppercase text-foreground transition-all
  duration-500 before:absolute

  focus-visible:outline-none
  focus-visible:ring-1 focus-visible:ring-ring
  active:scale-95

  disabled:pointer-events-none
  disabled:opacity-50`,
  {
    variants: {
      variant: {
        default: cn("text-background", underlineClasses),
        primary: "bg-primary text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: cn('relative rounded-none bg-transparent !px-2 text-foreground', underlineClasses),
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-9 p-0",
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
  withIcon?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant,
    size,
    asChild = false,
    withIcon = false,
    children,
    ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={buttonVariants({ variant, size, className: cn(className, { 'gap-1 inline-flex items-center': withIcon }) })} ref={ref} {...props}>
        {children}
        {withIcon ? (
          <span className={"inline-flex items-center justify-center rounded-full bg-primary p-1 transition-transform group-hover:translate-x-1"}>
            <ArrowRight size={14} />
          </span>
        ) : null}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
