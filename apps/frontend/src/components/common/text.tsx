import React, { forwardRef } from "react";

import { cva, type VariantProps } from "class-variance-authority";

export const textVariants = cva("", {
  variants: {
    size: {
      lg: "text-lg leading-normal",
      md: "text-md leading-[1.6]",
      sm: "text-sm leading-[1.7]",
      xs: "text-xs leading-[1.8]",
      xxs: "text-xxs leading-[1.8]",
      xxxs: "text-xxxs leading-[1.8]",
      // Other
      overline: "text-sm leading-[12px]",
      // Heading sizes
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
    },
    color: {
      default: "text-foreground",
      muted: "text-foreground-muted",
      light: "text-foreground-light",
      background: "text-background",
      primary: "text-primary",
      secondary: "text-secondary",
      white: "text-[#f4f4f4]",
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
    family: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
    decorations: {
      default: "",
      underline: "underline",
    },
  },

  defaultVariants: {
    size: "md",
    weight: "normal",
    color: "default",
    align: "left",
    family: 'sans',
    decorations: "default",
  },
});

type TextVariantProps = VariantProps<typeof textVariants>;

export interface TextProps
  extends TextVariantProps,
  Omit<React.HTMLAttributes<HTMLSpanElement>, keyof TextVariantProps> {
  children?: React.ReactNode;
  className?: string;
  as?: "span" | "p";
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(({
  size,
  weight,
  color,
  decorations,
  align,
  as = "p",
  className,
  children,
  ...props
}, ref) => {
  const Component = as;
  return (
    <Component
      {...props}
      ref={ref as React.LegacyRef<HTMLParagraphElement>}
      className={textVariants({ size, weight, align, color, decorations, className })}
    >
      {children}
    </Component>
  );
});

Text.displayName = "Text";