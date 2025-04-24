"use client";

import { type ComponentProps, useRef } from "react";

import { RefSectionWrapperContext } from "./ref-section-wrapper.context";

interface RefSectionWrapperProps {
	children: React.ReactNode;
	className?: ComponentProps<"section">["className"];
}

export const RefSectionWrapper = ({ children, className }: RefSectionWrapperProps) => {
	const sectionRef = useRef<HTMLDivElement>(null);
	return (
		<RefSectionWrapperContext.Provider value={{ ref: sectionRef }}>
			<section ref={sectionRef} className={className}>
				{children}
			</section>
		</RefSectionWrapperContext.Provider>
	);
};
