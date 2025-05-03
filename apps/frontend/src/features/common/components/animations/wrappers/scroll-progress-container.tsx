"use client";

import { type ComponentProps, useRef } from "react";

import { useScroll, type UseScrollOptions } from "framer-motion";

import { ScrollProgressContext } from "@/features/common/components/animations/context/scroll-progress-context";

type ScrollProgressContainerProps = {
	children: React.ReactNode;
	className?: ComponentProps<"main">["className"];
	scrollOpts?: UseScrollOptions;
};

export const ScrollProgressContainer = ({
	children,
	className,
	scrollOpts = {
		offset: ["start start", "end end"],
	},
}: ScrollProgressContainerProps) => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: container, ...scrollOpts });

	return (
		<ScrollProgressContext.Provider value={{ scrollYProgress }}>
			<div ref={container} className={className}>
				{children}
			</div>
		</ScrollProgressContext.Provider>
	);
};
