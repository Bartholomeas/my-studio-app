"use client";

import { useRef } from "react";

import dynamic from "next/dynamic";

import { RollingTextPath } from "@/components/common/animations/rolling-text-path";

const ParagraphReveal = dynamic(() =>
	import("@/components/common/animations/paragraph-reveal").then((res) => res.ParagraphReveal),
);

export const HomeSentenceSection = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);

	return (
		<section
			ref={containerRef}
			className={"flex min-h-screen flex-col items-center justify-center bg-white"}
		>
			<ParagraphReveal
				className={"container"}
				text={
					"In time, or so I'm told I'm just another soul for sale, oh well The page is out of print We are not permanent, we're temporary, temporary Same old story"
				}
			/>
			<RollingTextPath ref={containerRef} text={"Rozwiązujemy problemy dla Ciebie!"} />
		</section>
	);
};
