"use client";

import { type ComponentProps, useRef } from "react";

import { useScroll } from "framer-motion";

import { ScrollProgressContext } from "@/components/animations/context/scroll-progress-context";

type HomeMainWrapperProps = {
	children: React.ReactNode;
	className?: ComponentProps<"main">["className"];
};

export const HomeMainWrapper = ({ children, className }: HomeMainWrapperProps) => {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

	return (
		<main ref={container} className={className}>
			<ScrollProgressContext.Provider value={{ scrollYProgress }}>
				{children}
			</ScrollProgressContext.Provider>
		</main>
	);
};
