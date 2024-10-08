"use client";

import React, { useEffect, useRef, useState } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

import { TimelineBox } from "./timeline-box";

interface TimelineEntry {
	title: string;
	content: React.ReactNode;
}

interface TimelineSectionProps {
	data: TimelineEntry[];
}

export const Timeline = ({ data }: TimelineSectionProps) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const itemsContainerRef = useRef<HTMLDivElement | null>(null);

	const [height, setHeight] = useState(0);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start 10%", "end 50%"],
	});

	useEffect(() => {
		if (itemsContainerRef?.current) {
			const rect = itemsContainerRef?.current?.getBoundingClientRect();
			setHeight(rect.height);
		}
	}, [itemsContainerRef]);

	const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
	const opacityTransform = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<div className={"size-full font-sans"} ref={containerRef}>
			<div ref={itemsContainerRef} className={"relative pb-20"}>
				{data?.map((item, index) => (
					<TimelineBox key={`timelineItem-${item.title}-${index}`} {...item} />
				))}
				<div
					style={{ height: height + "px" }}
					className={
						"absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] dark:via-neutral-700 md:left-8"
					}
				>
					<motion.div
						style={{ height: heightTransform, opacity: opacityTransform }}
						className={
							"absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-primary-600 from-0% via-primary-200 via-10% to-transparent"
						}
					/>
				</div>
			</div>
		</div>
	);
};
