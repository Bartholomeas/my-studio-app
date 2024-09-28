import React from "react";

import { cva, type VariantProps } from "class-variance-authority";

export const titleVariants = cva("", {
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
			primary: "text-primary",
			secondary: "text-secondary",
			white: "text-[#f4f4f4]",
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
	},

	defaultVariants: {
		type: "h2",
		weight: "semibold",
		color: "default",
		align: "left",
	},
});

interface TitleProps extends VariantProps<typeof titleVariants> {
	children: React.ReactNode;
	className?: string;
}

// Size property just changes size visually, heading property is handling semantic heading tag
export const Title = ({ type, weight, color, size, align, className, children }: TitleProps) => {
	const Component = type ?? "h2";
	return (
		<Component className={titleVariants({ type: size ?? type, weight, color, align, className })}>
			{children}
		</Component>
	);
};
