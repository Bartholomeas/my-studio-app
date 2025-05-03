import React, { forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

export const titleVariants = cva("tracking-tighter", {
  variants: {
    type: {
      // Heading sizes
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    size: {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    color: {
      default: "text-foreground",
      background: "text-background",
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-foreground-white",
      muted: "text-foreground-muted",
      light: "text-foreground-light",
      success: "text-success-600",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
      justify: "text-justify",
    },

    typeface: {
      sans: "text-sans",
      serif: "text-serif",
    },
  },

  defaultVariants: {
    type: "h2",
    weight: "semibold",
    color: "default",
    align: "left",
    typeface: "serif",
  },
});

interface TitleProps extends VariantProps<typeof titleVariants> {
  children: React.ReactNode;
  className?: string;
}

// Size property just changes size visually, heading property is handling semantic heading tag
export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ type, weight, color, size, align, className, children }, ref) => {
    const Component = type ?? "h2";
    return (
      <Component
        ref={ref}
        className={titleVariants({ type: size ?? type, weight, color, align, className })}
      >
        {children}
      </Component>
    );
  },
);

Title.displayName = "Title";
